import React from 'react';
import CardFooterItem from './card-footer-item';
import ReactTestRenderer from 'react-test-renderer';
import constants from '../../../../constants';

describe('CardFooterItem specs', () => {
  it('should match snapshot with data', () => {
    const component = ReactTestRenderer.create(
      <CardFooterItem value={111} prelabel='price' postlabel={constants.currencyLabe}/>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
