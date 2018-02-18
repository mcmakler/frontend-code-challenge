import React from 'react';
import { shallow, mount } from 'enzyme';
import {{ pascalCase name }} from './{{ dashCase name }}';

function setup(props={}) {
  return shallow(<{{ pascalCase name }} {...props} />);
}

describe('{{ pascalCase name }} specs', () => {
  it('renders a div ', () => {
    const wrapper = setup(false);

    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').text()).toBe('{{ titleCase name }}');
  });
});
