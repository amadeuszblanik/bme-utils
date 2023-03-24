import util from './randomBoolean';

describe('util', () => {
  it('result typeof should be boolean', () => {
    expect(() => typeof util() === 'boolean').toBeTruthy();
  });

  it('result with true chance set to 0 should always false', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(util(0)).toBeFalsy();
  });

  it('result with true chance set to 1 should always true', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(util(1)).toBeTruthy();
  });
});
