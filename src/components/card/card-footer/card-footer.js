import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({children}) => {
  let right;
  let left;

  if (Array.isArray(children)) {
    right = children.filter(child => child.props && child.props.right);
    left = children.filter(child => !child.props || !child.props.right);
  } else {
    right = children.props.right ? children : null;
    left = typeof children.props.right === 'undefined' ? children : null;
  }

  return (
    <div className='cardFooter'>
      {left && <div className='cardFooter__item--left auto-right-margin'>{left}</div>}
      {right && <div className='cardFooter__item--right'>{right}</div>}
    </div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

export default CardFooter;
