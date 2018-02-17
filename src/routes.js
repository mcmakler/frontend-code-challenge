import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const component = () => {};
const Routes = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={component} />
      </BrowserRouter>
    </Provider>
  );
};

Routes.propTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;
