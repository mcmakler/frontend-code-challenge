import trim from './trim';
import constants from '../../constants';

describe('trim utility', () => {

  const text = 'FLATSCREEN ZUM EINZUG Moderne, frisch sanierte 3 Zi-Wohnung mit herrlichem Ausblick';

  it('should trim text without words count based on default count', () => {
    const actual = trim(text);
    const actualCount = actual.split(' ').length;
    const expected = 'FLATSCREEN ZUM EINZUG Moderne, frisch sanierte 3 Zi-Wohnung mit herrlichem';

    expect(actual).toEqual(expected);
    expect(actualCount).toEqual(constants.defaultWordCount);
  });

  it('should trim text with count', () => {
    const count = 3;
    const actual = trim(text, count);
    const actualCount = actual.split(' ').length;
    const expected = 'FLATSCREEN ZUM EINZUG';

    expect(actual).toEqual(expected);
    expect(actualCount).toEqual(count);
  });

  it('should return empty string when trying to trim empty string', () => {
    const actual = trim('');
    const expected = '';

    expect(actual).toEqual(expected);
  });

  it('should return empty string when trying to trim undefined', () => {
    const actual = trim();
    const expected = '';

    expect(actual).toEqual(expected);
  });
});
