import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ title }) => {
  return (
    <div className='cardTitle'>{ title }</div>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default CardTitle;
