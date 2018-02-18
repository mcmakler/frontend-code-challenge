import round from './round';

describe('round utility', () => {
  it('should round the number to nearest integer', () => {
    const number = 100.9;
    const actual = round(number);
    const expected = 101;

    expect(actual).toEqual(expected);
  });

  it('should round the number to nearest integer', () => {
    const number = 100.3;
    const actual = round(number);
    const expected = 100;

    expect(actual).toEqual(expected);
  });
});
