import React from 'react';
import constants from '../../constants';

/**
 * Card utility for (advertisements) container
 */
export default function carder(item) {
  const header = {thumb: item.thumb, tag: item.tag, alt: item.title};
  const title = {title: item.title};
  const text = item.showAddress ? {text: item.address} : {};
  const footer = {
    items: [
      {
        name: 'price',
        options: {
          bold: true
        },
        postLabel: constants.currencyLabel,
        value: item.price
      },
      {
        name: 'rooms',
        options: {
          seperated: true,
          right: true
        },
        postLabel: constants.roomLabel,
        value: item.rooms
      },
      {
        name: 'space',
        options: {
          seperated: true,
          right: true
        },
        preLabel: constants.spaceLabel,
        postLabel: (<span>m<span className='align-super font-10'>2</span></span>),
        value: item.space
      }
    ]
  };

  return {header, footer, text, title};
}
