import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Page from '../page/page';
import CardList from '../../components/card-list/card-list';
import { loadAdvertisments } from '../../actions/advertisements-actions/advertisements-actions';

export class AdvertisementsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    const loaded = false;
    this.state = { loaded };
  }

  componentDidMount() {
    this.fetch();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ advertisements: nextProps.advertisements, loaded: true });
  }

  fetch() {
    this.props.loadAdvertisments();
  }

  render() {
    return (
      <Page loaded={this.state.loaded}>
        <CardList
          items={this.props.advertisements}
        />
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
