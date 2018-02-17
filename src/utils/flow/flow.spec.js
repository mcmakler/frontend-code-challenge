import flow from './flow';

describe('flow utility', () => {
  it('should apply multiple methods and return final result', () => {
    const add10 = x => x + 10;
    const add20 = x => x + 20;
    const actual = flow([add10, add20])(0);
    const expected = 30;

    expect(actual).toEqual(expected);
  });
});
