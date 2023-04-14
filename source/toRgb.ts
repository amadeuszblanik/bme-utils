export interface Rgb {
  r: number;
  g: number;
  b: number;
}

const R_INDEX_POSITION = 1;
const G_INDEX_POSITION = 2;
const B_INDEX_POSITION = 3;

const shorthandTransform = (shortHex: string): string => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const hex = shortHex.replace(shorthandRegex, (m, r, g, b) => `${String(r)}${String(r)}${String(g)}${String(g)}${String(b)}${String(b)}`);

  return hex;
};

const toRgb = (hex: string): Rgb | null => {
  hex = shorthandTransform(hex);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[R_INDEX_POSITION], 16),
        g: parseInt(result[G_INDEX_POSITION], 16),
        b: parseInt(result[B_INDEX_POSITION], 16),
      }
    : null;
};

export default toRgb;
