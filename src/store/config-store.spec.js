import { createStore } from 'redux';
import rootReducer from '../reducers';

import { mapper }  from '../utils';
import initialState from '../reducers/initial-state';
import advertisementObj from '../../fixtures/advertisement-fixture';
import { loadAdvertismentsSucess } from '../actions/advertisements-actions/advertisements-actions';

describe('Store', () => {
  it('should handle loading advertisements', done => {
    const store = createStore(rootReducer, initialState);
    const advertisements = { data: [advertisementObj] };
    const action = loadAdvertismentsSucess(advertisements);
    store.dispatch(action);

    const actual = store.getState().advertisements;
    const expected = advertisements.data.map(mapper.itemMapper);

    expect(actual).toEqual(expected);
    done();
  });
});
