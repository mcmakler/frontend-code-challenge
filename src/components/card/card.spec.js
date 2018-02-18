import React from 'react';
import Card, {CardHeader, CardText, CardTitle} from './card';
import {mapper} from '../../utils';
import ReactTestRenderer from 'react-test-renderer';
import advertisementObj from '../../../fixtures/advertisement-fixture';

describe('Card specs', () => {
  it('should match snapshot', () => {
    const formatted = mapper.itemMapper(advertisementObj);
    const component = ReactTestRenderer.create(
      <Card>
        <CardHeader thumb={formatted.thumb} tag={formatted.tag} alt={formatted.title}/>
        <CardTitle title={formatted.title}/>
        <CardText text={formatted.address}/>
      </Card>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
