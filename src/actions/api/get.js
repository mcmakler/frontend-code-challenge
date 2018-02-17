import axios from 'axios';

export default function get(endpoint, params) {
  return axios.get(endpoint, { params });
}
