/* eslint-disable no-magic-numbers */
import toHex from './toHex';

describe('toHex', () => {
  test('should convert RGB to hex correctly', () => {
    expect(toHex(255, 255, 255)).toBe('#ffffff');
    expect(toHex(0, 0, 0)).toBe('#000000');
    expect(toHex(255, 0, 0)).toBe('#ff0000');
    expect(toHex(0, 255, 0)).toBe('#00ff00');
    expect(toHex(0, 0, 255)).toBe('#0000ff');
  });

  test('should handle out of range values', () => {
    expect(toHex(300, 0, 0)).toBe('#ff0000');
    expect(toHex(-20, 255, 0)).toBe('#00ff00');
    expect(toHex(0, 0, -10)).toBe('#000000');
  });

  test('should handle non-integer values', () => {
    expect(toHex(255.5, 255.2, 255.8)).toBe('#ffffff');
    expect(toHex(0.1, 0.9, 0.5)).toBe('#000000');
  });
});
