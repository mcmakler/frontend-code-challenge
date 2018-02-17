import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const middlewares = [
  thunk,
  reduxImmutableStateInvariant(),
  logger
];

export default function configStore(initialState) {
  return createStore(
    rootReducer,
    initialState,

    applyMiddleware(...middlewares)
  );
}
