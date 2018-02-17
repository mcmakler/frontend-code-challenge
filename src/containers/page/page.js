import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';

class PageContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className='full-height page'>
        <Header/>
        <div className='container auto-margin full-height'>
          <div className='row center-xs full-height'>
            <div className='col-xs-12 relative'>
              <Loader loaded={this.props.loaded} children={this.props.children} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageContainer.propTypes = {
  children: PropTypes.object.isRequired,
  loaded: PropTypes.bool
};

export default PageContainer;
