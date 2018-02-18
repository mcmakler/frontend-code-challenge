import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';

class PageContainer extends React.Component {
  render() {
    return (
      <div className='full-height page'>
        <Header/>
        <div className='container auto-margin full-height'>
          <div className='row center-xs full-height'>
            <div className='col-xs-12 relative'>
              <Loader loaded={this.props.loaded}>
                {this.props.children}
              </Loader>
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

PageContainer.defaultProps = {
  loaded: false
};

export default PageContainer;
