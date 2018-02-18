import constants from '../../constants';

const isString = text => typeof text === 'string';

export default function trim(text, count = constants.defaultWordCount) {
  return isString(text) && text.length ? text.split(' ').splice(0, count).join(' ') : '';
}
