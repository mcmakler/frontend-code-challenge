import constants from '../../constants';

export function replace(text, placeholder = '') {
  return text.replace(constants.specialCharRegex, placeholder);
}
