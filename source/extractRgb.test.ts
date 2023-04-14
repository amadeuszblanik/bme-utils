import extractRgb from './extractRgb';

describe('extractRgb', () => {
  test('should extract RGB values correctly', () => {
    expect(extractRgb('rgb(255, 255, 255)')).toEqual({ r: 255, g: 255, b: 255 });
    expect(extractRgb('rgb(0, 0, 0)')).toEqual({ r: 0, g: 0, b: 0 });
    expect(extractRgb('rgb(255, 0, 0)')).toEqual({ r: 255, g: 0, b: 0 });
    expect(extractRgb('rgb(0, 255, 0)')).toEqual({ r: 0, g: 255, b: 0 });
    expect(extractRgb('rgb(0, 0, 255)')).toEqual({ r: 0, g: 0, b: 255 });
  });

  test('should handle whitespace variations', () => {
    expect(extractRgb('rgb(255,255,255)')).toEqual({ r: 255, g: 255, b: 255 });
    // @TODO: expect(extractRgb('rgb(0,  0,  0)')).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('should ignore RGBA values', () => {
    expect(extractRgb('rgba(255, 255, 255, 0.5)')).toEqual({ r: 255, g: 255, b: 255 });
    expect(extractRgb('rgba(0, 0, 0, 1)')).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('should return null for invalid input', () => {
    // @TODO: expect(extractRgb('rgb(300, 0, 0)')).toBeNull();
    expect(extractRgb('invalid')).toBeNull();
    expect(extractRgb('#ffffff')).toBeNull();
  });
});
