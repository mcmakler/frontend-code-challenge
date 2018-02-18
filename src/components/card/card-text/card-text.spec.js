import React from 'react';
import CardText from './card-text';
import ReactTestRenderer from 'react-test-renderer';

describe('CardTitle specs', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(<CardText text='card text'/>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
