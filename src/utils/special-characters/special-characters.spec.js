import { replace } from './special-characters';

describe('special character replace utility', () => {

  const text = '++++++FLATSCREEN ZUM EINZUG######';

  it('should trim text without words count based on default count', () => {
    const actual = replace(text);
    const expected = 'FLATSCREEN ZUM EINZUG';

    expect(actual).toEqual(expected);
  });
});
