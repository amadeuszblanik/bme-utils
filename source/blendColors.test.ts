/* eslint-disable no-magic-numbers */
import blendColors from './blendColors';

describe('blendColors', () => {
  test('should blend colors correctly with default factor', () => {
    expect(blendColors({ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 })).toEqual({ r: 128, g: 128, b: 128 });
    expect(blendColors({ r: 255, g: 0, b: 0 }, { r: 0, g: 255, b: 0 })).toEqual({ r: 128, g: 128, b: 0 });
  });

  test('should blend colors correctly with custom factor', () => {
    expect(blendColors({ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, 0.25)).toEqual({ r: 191, g: 191, b: 191 });
    expect(blendColors({ r: 255, g: 0, b: 0 }, { r: 0, g: 255, b: 0 }, 0.75)).toEqual({ r: 64, g: 191, b: 0 });
  });

  test('should handle edge cases', () => {
    expect(blendColors({ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, 0)).toEqual({ r: 255, g: 255, b: 255 });
    expect(blendColors({ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, 1)).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('should handle out-of-range factor values', () => {
    // @TODO: expect(blendColors({ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, -0.5)).toEqual({ r: 255, g: 255, b: 255 });
    // @TODO: expect(blendColors({ r: 255, g: 255, b: 255 }, { r: 0, g: 0, b: 0 }, 1.5)).toEqual({ r: 0, g: 0, b: 0 });
  });
});
