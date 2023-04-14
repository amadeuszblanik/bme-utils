/* eslint-disable no-magic-numbers,no-bitwise */
import clamp from './clamp';

const toHex = (r: number, g: number, b: number): string => {
  const red = clamp(r, 0, 255);
  const green = clamp(g, 0, 255);
  const blue = clamp(b, 0, 255);

  const num = (red << 16) | (green << 8) | blue;

  return '#' + num.toString(16).padStart(6, '0');
};

export default toHex;
