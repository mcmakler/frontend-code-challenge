import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({loaded, children}) => {
  const returned = loaded ? children : <div className='loader'/>;

  return (returned);
};

Loader.propTypes = {
  loaded: PropTypes.bool,
  children: PropTypes.object.isRequired
};

export default Loader;
