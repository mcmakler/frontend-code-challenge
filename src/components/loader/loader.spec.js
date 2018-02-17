import expect from 'expect';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Loader from './loader';

describe('Loader specs', () => {
  it('should match snapshot', () => {

    const component = ReactTestRenderer.create(
      <Loader loaded={false}>
        <div>inside loader</div>
      </Loader>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
