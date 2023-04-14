import toRgb from './toRgb';

describe('toRgb', () => {
  test('should convert hex to RGB correctly', () => {
    expect(toRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(toRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    expect(toRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(toRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
    expect(toRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 });
  });

  test('should handle shorthand hex values', () => {
    expect(toRgb('#fff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(toRgb('#000')).toEqual({ r: 0, g: 0, b: 0 });
    expect(toRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 });
    expect(toRgb('#0f0')).toEqual({ r: 0, g: 255, b: 0 });
    expect(toRgb('#00f')).toEqual({ r: 0, g: 0, b: 255 });
  });

  test('should handle hex values without a hash', () => {
    expect(toRgb('ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(toRgb('000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('should return null for invalid hex values', () => {
    expect(toRgb('#gggggg')).toBeNull();
    expect(toRgb('#12345')).toBeNull();
    expect(toRgb('1234567')).toBeNull();
  });
});
