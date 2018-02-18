import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as advertisementActions from './advertisements-actions';
import {advertisementTypes} from '../../constants/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('advertisements actions', () => {
  it('creates loadAdvertismentsSucess when loading advertisements has been done', () => {
    const body = {
      data: []
    };

    nock(API_URL)
      .get('/advertisements/')
      .reply(200, body);
    const expectedActions = [
      {type: advertisementTypes.LOAD_ADVERTISMENTS, advertisements: body.data}
    ];
    const store = mockStore({advertisements: []});

    return store.dispatch(advertisementActions.loadAdvertisments()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
