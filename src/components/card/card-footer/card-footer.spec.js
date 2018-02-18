import React from 'react';
import CardFooter from './card-footer';
import CardFooterItem from './card-footer-item/card-footer-item';
import ReactTestRenderer from 'react-test-renderer';
import advertisementObj from '../../../../fixtures/advertisement-fixture';
import {mapper} from '../../../utils';
import constants from '../../../constants';

describe('CardFooter specs', () => {
  it('should match snapshot with data', () => {
    const formatted = mapper.itemMapper(advertisementObj);

    const component = ReactTestRenderer.create(
      <CardFooter>
        <CardFooterItem value={formatted.price} prelabel='price' postlabel={constants.currencyLabe}/>
      </CardFooter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
