import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../../constants';

import Card, {CardHeader, CardTitle, CardText, CardFooter, CardFooterItem} from '../../../components/card/card';

const AdvertisementsList = ({items}) => {
  const spaceUnit = (<span>m<span className='align-super font-10'>2</span></span>);

  return (
    <div className='row center-xs between-md'>
      {
        items.map(item => {
          return (
            <Card key={item.id}>
              <CardHeader thumb={item.thumb} tag={item.tag} alt={item.title}/>
              <CardTitle title={item.title}/>
              <CardText text={item.address}/>
              <CardFooter>
                <CardFooterItem bold value={item.price} postlabel={constants.currencyLabel}/>
                <CardFooterItem seperated right value={item.rooms} postlabel={constants.roomLabel}/>
                <CardFooterItem seperated right value={item.space} prelabel='ab' postlabel={spaceUnit}/>
              </CardFooter>
            </Card>
          );
        })
      }
    </div>
  );
};

AdvertisementsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default AdvertisementsList;
