import { randomBoolean } from '../index';

describe('randomBoolean', () => {
  it('result should be true or false', () => {
    expect(randomBoolean()).toBe(true || false);
  });

  it('result with true chance set to 0 should always false', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(randomBoolean(0)).toBeFalsy();
  });

  it('result with true chance set to 1 should always true', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(randomBoolean(1)).toBeTruthy();
  });
});
