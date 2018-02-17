import expect from 'expect';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Header from './header';

describe('Header specs', () => {
  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(<Header />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
