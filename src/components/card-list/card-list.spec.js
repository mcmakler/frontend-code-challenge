import expect from 'expect';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import CardList from './card-list';
import { mapper }  from '../../utils';
import advertisementObj from '../../../fixtures/advertisement-fixture';

describe('CardList specs', () => {
  it('should match snapshot', () => {
    const withFormatted = mapper.itemMapper(advertisementObj);
    const props = {
      items: [withFormatted]
    };
    const component = ReactTestRenderer.create(<CardList {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
