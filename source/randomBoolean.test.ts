import { randomBoolean } from './index';

describe('randomBoolean', () => {
  it('result typeof should be boolean', () => {
    expect(() => typeof randomBoolean() === 'boolean').toBeTruthy();
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
