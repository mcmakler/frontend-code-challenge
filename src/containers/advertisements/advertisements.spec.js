import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AdvertisementsContainer } from './advertisements';

describe('test advertisements', () => {
  it('should render advertisements container', () => {
    const props = {
      loadAdvertisments: () => {},
      advertisements: [{}]
    };
    const component = shallow(<AdvertisementsContainer {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
