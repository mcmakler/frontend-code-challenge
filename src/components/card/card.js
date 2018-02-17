import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from './card-header/card-header';
import CardTitle from './card-title/card-title';
import CardText from './card-text/card-text';
import CardFooter from './card-footer/card-footer';

const Card = ({ item }) => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-4 card'>
      <div className='box card__box'>
        <CardHeader thumb={item.thumb} tag={item.tag} alt={item.title} />
        <CardTitle title={item.title} />
        <CardText text={item.address} />
        <CardFooter price={item.price} rooms={item.rooms} space={item.space} />
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired
};

export default Card;
