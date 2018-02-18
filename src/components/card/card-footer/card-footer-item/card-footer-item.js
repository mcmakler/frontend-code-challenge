import React from 'react';
import PropTypes from 'prop-types';

const CardFooterItem = ({value, seperated, bold, prelabel, postlabel}) => {
  const seperatedClassName = seperated ? ' cardFooter__item__text--separated' : '';
  const boldClassName = bold ? ' cardFooter__item__text--bold' : '';

  return (
    <span className={'cardFooter__item__text ' + seperatedClassName + boldClassName}>
      {prelabel} {value} {postlabel}
    </span>
  );
};

CardFooterItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  postlabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  prelabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  bold: PropTypes.bool,
  seperated: PropTypes.bool
};

CardFooterItem.defaultProps = {
  seperated: false,
  bold: false,
  prelabel: '',
  postlabel: ''
};

export default CardFooterItem;
