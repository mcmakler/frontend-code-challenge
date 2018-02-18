import React from 'react';
import CardTitle from './card-title';
import ReactTestRenderer from 'react-test-renderer';

describe('CardTitle specs', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(<CardTitle title='card title'/>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
