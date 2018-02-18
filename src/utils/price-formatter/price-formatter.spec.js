import priceFormatter from './price-formatter';

describe('price formatter utility', () => {
  it('should format price greater than 1000', () => {
    const actual = priceFormatter(1100);
    const expected = '1.100';

    expect(actual).toEqual(expected);
  });
});
