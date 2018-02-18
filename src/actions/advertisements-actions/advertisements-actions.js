import endpoints from '../endpoints';
import {get} from '../api/';
import {advertisementTypes} from '../../constants/actions/';

export function loadAdvertismentsSucess(advertisements) {
  return {type: advertisementTypes.LOAD_ADVERTISMENTS, advertisements: advertisements.data};
}

function loadAdvertismentsFailure(error) {
  return {type: advertisementTypes.ADVERTISEMENT_ERROR, error};
}

export function loadAdvertisments() {
  return function (dispatch) {
    return get(endpoints.advertisements)
      .then(response => {
        dispatch(loadAdvertismentsSucess(response.data));
      })
      .catch(error => {
        loadAdvertismentsFailure(error);
      });
  };
}
