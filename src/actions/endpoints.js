const baseUrl = API_URL;
const backslash = '/';
const concatUrl = url => baseUrl + url + backslash;

const endpointsObj = {
  advertisements: 'advertisements'
};

const getFormattedUrl = key => {
  const point = endpointsObj[key];
  const url = concatUrl(point);
  return {[key]: url};
};

const endpointKeys = Object.keys(endpointsObj);
const endpoints = endpointKeys.map(getFormattedUrl)[0];

export default endpoints;
