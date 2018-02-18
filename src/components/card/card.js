import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from './card-header/card-header';
import CardTitle from './card-title/card-title';
import CardText from './card-text/card-text';
import CardFooter from './card-footer/card-footer';
import CardFooterItem from './card-footer/card-footer-item/card-footer-item';

const Card = ({children}) => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-4 card'>
      <div className='box card__box'>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.array.isRequired
};

export {Card as default, CardHeader, CardTitle, CardText, CardFooter, CardFooterItem};
