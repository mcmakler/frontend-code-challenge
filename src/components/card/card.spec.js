import React from 'react';
import Card from './card';
import { mapper }  from '../../utils';
import ReactTestRenderer from 'react-test-renderer';
import advertisementObj from '../../../fixtures/advertisement-fixture';

describe('Card specs', () => {
  it('should match snapshot', () => {
    const item = mapper.itemMapper(advertisementObj);
    const component = ReactTestRenderer.create(<Card item={item.formatted} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
