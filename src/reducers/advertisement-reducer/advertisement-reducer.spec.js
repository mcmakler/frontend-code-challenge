import { mapper }  from '../../utils';
import initialState from '../initial-state';
import advertisementsReducer from './advertisement-reducer';
import { advertisementTypes } from '../../constants/actions/';
import advertisementObj from '../../../fixtures/advertisement-fixture';

describe('advertisements reducer', () => {
  it('should return the initial state', () => {
    expect(advertisementsReducer(undefined, {})).toEqual(initialState.advertisements);
  });

  it('should handle LOAD_ADVERTISMENTS', () => {
    const advertisements = [];
    const action = { type: advertisementTypes.LOAD_ADVERTISMENTS, advertisements };

    expect(advertisementsReducer(undefined, action)).toEqual(advertisements);
  });

  it('should handle LOAD_ADVERTISMENTS and map data', () => {
    const advertisements = [advertisementObj];
    const action = { type: advertisementTypes.LOAD_ADVERTISMENTS, advertisements };
    const expected = advertisements.map(mapper.itemMapper);

    expect(advertisementsReducer(undefined, action)).toEqual(expected);
  });
});
