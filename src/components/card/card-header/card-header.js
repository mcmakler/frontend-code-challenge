import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({thumb, tag, alt}) => {
  return (
    <div className='cardHeader'>
      <img className='cardHeader__img' src={thumb} alt={alt}/>
      {tag && <span className='cardHeader__tag'>{tag}</span>}
    </div>
  );
};

CardHeader.propTypes = {
  thumb: PropTypes.string.isRequired,
  tag: PropTypes.string,
  alt: PropTypes.string
};

CardHeader.defaultProps = {
  tag: '',
  alt: ''
};

export default CardHeader;
