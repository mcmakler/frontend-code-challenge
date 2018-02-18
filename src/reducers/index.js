import {combineReducers} from 'redux';

import advertisementReducer from './advertisement-reducer/advertisement-reducer';

const rootReducer = combineReducers({
  advertisements: advertisementReducer
});

export default rootReducer;
