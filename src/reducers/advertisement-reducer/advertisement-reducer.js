import initialState from '../initial-state';
import { advertisementTypes } from '../../constants/actions';
import { mapper } from '../../utils';

function advertisementReducer(state = initialState.advertisements, action) {
  switch (action.type) {
    case advertisementTypes.LOAD_ADVERTISMENTS: {
      const tenAdvertisments = action.advertisements.slice(0, 10);
      const formattedAdvertisments = tenAdvertisments.map(mapper.itemMapper);

      return formattedAdvertisments;
    }
    default:
      return state;
  }
}

export default advertisementReducer;
