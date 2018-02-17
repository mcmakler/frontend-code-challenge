import React from 'react';
import Card from './card';
import { mapper, carder }  from '../../utils';
import ReactTestRenderer from 'react-test-renderer';
import advertisementObj from '../../../fixtures/advertisement-fixture';

describe('Card specs', () => {
  it('should match snapshot', () => {
    const item = mapper.itemMapper(advertisementObj);
    const props = carder(item);
    const component = ReactTestRenderer.create(<Card {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
