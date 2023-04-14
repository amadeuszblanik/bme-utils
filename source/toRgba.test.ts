/* eslint-disable no-magic-numbers */
import toRgba from './toRgba';

describe('toRgba', () => {
  test('should convert hex to RGBA correctly', () => {
    expect(toRgba('#ffffff', 0.5)).toBe('rgba(255,255,255,0.5)');
    expect(toRgba('#000000', 1)).toBe('rgba(0,0,0,1)');
    // @TODO: expect(toRgba('#ff0000', 0)).toBe('rgba(255,0,0,0)');
  });

  test('should convert RGB to RGBA correctly', () => {
    expect(toRgba('rgb(255, 255, 255)', 0.5)).toBe('rgba(255,255,255,0.5)');
    expect(toRgba('rgb(0, 0, 0)', 1)).toBe('rgba(0,0,0,1)');
    // @TODO: expect(toRgba('rgb(255, 0, 0)', 0)).toBe('rgba(255,0,0,0)');
  });

  test('should handle shorthand hex values', () => {
    expect(toRgba('#fff', 0.5)).toBe('rgba(255,255,255,0.5)');
    expect(toRgba('#000', 1)).toBe('rgba(0,0,0,1)');
  });

  test('should throw an error for invalid input', () => {
    expect(() => toRgba('#gggggg', 0.5)).toThrowError("Missing rgb value from '#gggggg'");
    // @TODO: expect(() => toRgba('rgb(300, 0, 0)', 1)).toThrowError("Missing rgb value from 'rgb(300, 0, 0)'");
    expect(() => toRgba('invalid', 0)).toThrowError("Missing rgb value from 'invalid'");
  });
});
