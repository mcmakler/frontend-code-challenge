import React from 'react';
import CardFooter from './card-footer';
import ReactTestRenderer from 'react-test-renderer';

describe('CardFooter specs', () => {
  it('should match snapshot', () => {
    const props = {
      price: {
        value: '',
        label: ''
      },
      rooms: {
        value: '',
        label: ''
      },
      space: {
        value: '',
        label: ''
      }
    };
    const component = ReactTestRenderer.create(<CardFooter {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
