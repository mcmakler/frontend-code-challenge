import React from 'react';
import PropTypes from 'prop-types';

const CardText = ({text}) => {
  return (
    <div className='cardText'>{text}</div>
  );
};

CardText.propTypes = {
  text: PropTypes.string
};

CardText.defaultProps = {
  text: ''
};

export default CardText;
