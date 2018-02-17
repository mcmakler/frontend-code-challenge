import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ price, rooms, space }) => {
  return (
    <div className='cardFooter'>
      <div className='cardFooter__item cardFooter__item--bold'>
        { price.value } {price.label}
      </div>
      <div className='cardFooter__item cardFooter__item--separated cardFooter__item--light'>
        <span>{ rooms.value } {rooms.label}</span>
        <span>{ space.value } { space.label }</span>
      </div>
    </div>
  );
};

CardFooter.propTypes = {
  price: PropTypes.object.isRequired,
  rooms: PropTypes.object.isRequired,
  space: PropTypes.object.isRequired
};

export default CardFooter;
