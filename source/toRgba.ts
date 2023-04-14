import toRgb from './toRgb';
import extractRgb from './extractRgb';

export interface Rgba {
  r: number;
  g: number;
  b: number;
  a?: number;
}

const DEFAULT_OPACITY = 1;

const toString = (rgba: Rgba): string => {
  const values = [rgba.r, rgba.g, rgba.b, rgba.a || DEFAULT_OPACITY];

  return `rgba(${values.join(',')})`;
};

const toRgba = (colour: string, opacity: number): string => {
  const isHex = colour.startsWith('#');
  const rgb: Rgba | null = isHex ? toRgb(colour) : extractRgb(colour);

  if (!rgb) {
    throw new Error("Missing rgb value from '" + colour + "'");
  }

  return toString({ ...rgb, a: opacity });
};

export default toRgba;
