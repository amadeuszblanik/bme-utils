interface Rgb {
  r: number;
  g: number;
  b: number;
  a?: number;
}

const R_INDEX_POSITION = 1;
const G_INDEX_POSITION = 2;
const B_INDEX_POSITION = 3;

const DEFAULT_OPACITY = 1;

const shorthandTransform = (shortHex: string): string => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const hex = shortHex.replace(shorthandRegex, (m, r, g, b) => `${String(r)}${String(r)}${String(g)}${String(g)}${String(b)}${String(b)}`);

  return hex;
};

const hexToRgb = (hex: string): Rgb | null => {
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

const extractRgb = (rgb: string): Rgb | null => {
  const colour = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/.exec(rgb)?.map(Number);

  return colour
    ? {
        r: colour[R_INDEX_POSITION],
        g: colour[G_INDEX_POSITION],
        b: colour[B_INDEX_POSITION],
      }
    : null;
};

const toString = (rgb: Rgb): string => {
  const values = [rgb.r, rgb.g, rgb.b, rgb.a || DEFAULT_OPACITY];

  return `rgba(${values.join(',')})`;
};

const toRgba = (colour: string, opacity: number): string => {
  const isHex = colour.startsWith('#');
  const rgb: Rgb | null = isHex ? hexToRgb(colour) : extractRgb(colour);

  if (!rgb) {
    throw new Error("Missing rgb value from '" + colour + "'");
  }

  rgb.a = opacity;

  return toString(rgb);
};

export default toRgba;
