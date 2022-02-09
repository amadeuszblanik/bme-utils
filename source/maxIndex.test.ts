/* eslint-disable no-magic-numbers */
import maxIndex from './maxIndex';

describe('maxIndex', () => {
  test("'Lorem ipsum' should be 10", () => {
    expect(maxIndex('Lorem ipsum')).toBe(10);
  });

  test("'' should be null", () => {
    expect(maxIndex('')).toBeNull();
  });

  test("'['Lorem ipsum', ''] should be 1", () => {
    expect(maxIndex(['Lorem ipsum', ''])).toBe(1);
  });

  test("'[] should be null", () => {
    expect(maxIndex([])).toBeNull();
  });
});
