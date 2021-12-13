const clamp = (value: number, min: number, max: number): number => {
  if (min > max) {
    throw Error("bme-utils/clamp:: minimum value can't be higher than maximum.");
  }

  return Math.min(Math.max(min, value), max);
};

export default clamp;
