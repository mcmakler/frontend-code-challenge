import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageContainer from './page';

describe('test page container', () => {
  it('should render page container', () => {
    const component = shallow(<PageContainer><div>page container</div></PageContainer>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
