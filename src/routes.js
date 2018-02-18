import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Advertisements from './containers/advertisements/advertisements';

const Routes = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' component={Advertisements}/>
      </BrowserRouter>
    </Provider>
  );
};

Routes.propTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;
