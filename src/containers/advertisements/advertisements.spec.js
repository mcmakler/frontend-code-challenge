import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {AdvertisementsContainer} from './advertisements';
import {mapper} from '../../utils';
import advertisementObj from '../../../fixtures/advertisement-fixture';

describe('test advertisements', () => {
  it('should render advertisements container', () => {
    const formatted = mapper.itemMapper(advertisementObj);
    const props = {
      loadAdvertisments: () => {},
      advertisements: [formatted]
    };
    const component = shallow(<AdvertisementsContainer {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
