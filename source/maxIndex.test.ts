/* eslint-disable no-magic-numbers */
import util from './maxIndex';

describe('util', () => {
  test("'Lorem ipsum' should be 10", () => {
    expect(util('Lorem ipsum')).toBe(10);
  });

  test("'' should be null", () => {
    expect(util('')).toBeNull();
  });

  test("'['Lorem ipsum', ''] should be 1", () => {
    expect(util(['Lorem ipsum', ''])).toBe(1);
  });

  test("'[] should be null", () => {
    expect(util([])).toBeNull();
  });
});
