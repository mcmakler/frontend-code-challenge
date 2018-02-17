import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CardList = ({ items }) => {
  return (
    <div className='row center-xs between-md cardList'>
      { items.map(item => <Card key={item.additionalId} item={item.formatted} />) }
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.array.isRequired
};

export default CardList;
