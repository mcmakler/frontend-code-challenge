import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadAdvertisments} from '../../actions/advertisements-actions/advertisements-actions';

import Page from '../page/page';
import AdvertisementsList from './advertisements-list/advertisements-list';

export class AdvertisementsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    const loaded = false;
    this.state = {loaded};
  }

  componentDidMount() {
    this._fetch();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({advertisements: nextProps.advertisements, loaded: true});
  }

  _fetch() {
    this.props.loadAdvertisments();
  }

  render() {
    return (
      <Page loaded={this.state.loaded}>
        <div className='row center-xs between-md'>
          <AdvertisementsList items={this.props.advertisements}/>
        </div>
      </Page>
    );
  }
}

AdvertisementsContainer.propTypes = {
  loadAdvertisments: PropTypes.func.isRequired,
  advertisements: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    loadAdvertisments: () => {
      dispatch(loadAdvertisments());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisementsContainer);
