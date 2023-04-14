/* eslint-disable no-magic-numbers */

interface Rgb {
  r: number;
  g: number;
  b: number;
}

const DEFAULT_BLEND_FACTOR = 0.5;

const blendColors = (rgbColour1: Rgb, rgbColour2: Rgb, factor: number = DEFAULT_BLEND_FACTOR): Rgb => ({
  r: Math.round(rgbColour1.r * (1 - factor) + rgbColour2.r * factor),
  g: Math.round(rgbColour1.g * (1 - factor) + rgbColour2.g * factor),
  b: Math.round(rgbColour1.b * (1 - factor) + rgbColour2.b * factor),
});

export default blendColors;
