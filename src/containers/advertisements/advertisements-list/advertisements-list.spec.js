import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import AdvertisementsList from './advertisements-list';
import {mapper} from '../../../utils';
import advertisementObj from '../../../../fixtures/advertisement-fixture';

describe('test advertisements', () => {
  it('should render advertisements container', () => {
    const formatted = mapper.itemMapper(advertisementObj);
    const props = {
      items: [formatted]
    };
    const component = shallow(<AdvertisementsList {...props}/>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
