import {{ camelCase name }}Reducer from './{{ dashCase name }}-reducer';
import { {{ camelCase name }}Types } from '../../constants/actions/';
import initialState from '../initial-state';

describe('{{ camelCase name }} reducer', () => {
  it('should return the initial state', () => {
    expect({{ camelCase name }}Reducer(undefined, {})).toEqual(initialState.{{ camelCase name }});
  });
});
