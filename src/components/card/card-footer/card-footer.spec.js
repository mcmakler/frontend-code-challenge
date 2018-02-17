import React from 'react';
import CardFooter from './card-footer';
import ReactTestRenderer from 'react-test-renderer';
import advertisementObj from '../../../../fixtures/advertisement-fixture';
import { mapper, carder } from '../../../utils';

describe('CardFooter specs', () => {
  it('should match snapshot', () => {
    const props = {
      items: []
    };
    const component = ReactTestRenderer.create(<CardFooter {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with data', () => {
    const formatted = mapper.itemMapper(advertisementObj);
    const props = carder(formatted);

    const component = ReactTestRenderer.create(<CardFooter items={props.footer.items} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
