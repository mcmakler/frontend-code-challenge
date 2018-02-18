import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({items}) => {
  const right = items.filter(item => item.options && item.options.right);
  const left = items.filter(item => !item.options || !item.options.right);

  const getItemAttrs = item => {
    const isBold = item.options && item.options.bold ? 'cardFooter__item__text--bold' : '';
    const isSeperated = item.options && item.options.seperated ? 'cardFooter__item__text--separated' : '';
    const footerTextClassNames = `cardFooter__item__text ${isBold} ${isSeperated}`;

    return {footerTextClassNames};
  };
  const getItemElement = (item, itemAttrs) => (
    <span key={item.name} className={itemAttrs.footerTextClassNames}>
      {item.preLabel} {item.value} {item.postLabel}
    </span>
  );

  return (
    <div className='cardFooter'>
      {
        left.length &&
        <div className='cardFooter__item--left auto-right-margin'>
          {left.map(item => getItemElement(item, getItemAttrs(item)))}
        </div>
      }
      {
        right.length &&
        <div className='cardFooter__item--right'>
          {right.map(item => getItemElement(item, getItemAttrs(item)))}
        </div>
      }
    </div>
  );
};

CardFooter.propTypes = {
  items: PropTypes.array.isRequired
};

export default CardFooter;
