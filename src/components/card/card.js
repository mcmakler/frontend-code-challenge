import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from './card-header/card-header';
import CardTitle from './card-title/card-title';
import CardText from './card-text/card-text';
import CardFooter from './card-footer/card-footer';

const Card = ({header, footer, title, text}) => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-4 card'>
      <div className='box card__box'>
        <CardHeader {...header}/>
        <CardTitle {...title}/>
        <CardText {...text}/>
        {footer && footer.items.length && <CardFooter {...footer}/>}
      </div>
    </div>
  );
};

Card.propTypes = {
  header: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  footer: PropTypes.object,
  text: PropTypes.object
};

Card.defaultProps = {
  footer: {items: []},
  text: ''
};

export default Card;
