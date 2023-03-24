/* eslint-disable no-magic-numbers */
import util from './clamp';

describe('util', () => {
  test('value from 5 and between 0 and Infinity should return 5', () => {
    expect(util(5, 0, Infinity)).toBe(5);
  });

  test('value from 5 and between 0 and 3 should return 3', () => {
    expect(util(5, 0, 3)).toBe(3);
  });

  test('value from 5 and between 8 and Infinity should return 8', () => {
    expect(util(5, 8, Infinity)).toBe(8);
  });

  test('value from -5 and between 8 and Infinity should return 8', () => {
    expect(util(-5, 8, Infinity)).toBe(8);
  });

  test('minimum value cannot be set as infinity', () => {
    expect(() => util(-5, Infinity, -3)).toThrow();
  });

  test('value from 0 and between 0 and Infinity should return 8', () => {
    expect(util(0, 8, Infinity)).toBe(8);
  });

  test('when min value is higher than maximum should throw error', () => {
    expect(() => util(-5, 3, -3)).toThrow();
  });
});
