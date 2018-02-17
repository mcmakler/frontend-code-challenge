import React from 'react';
import CardHeader from './card-header';
import ReactTestRenderer from 'react-test-renderer';

describe('CardHeader specs', () => {
  it('should match snapshot', () => {
    const props = {
      thumb: '',
      tag: '',
      alt: ''
    };
    const component = ReactTestRenderer.create(<CardHeader {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
