interface Rgb {
  r: number;
  g: number;
  b: number;
}

const R_INDEX_POSITION = 1;
const G_INDEX_POSITION = 2;
const B_INDEX_POSITION = 3;

const extractRgb = (rgba: string): Rgb | null => {
  const colour = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/.exec(rgba)?.map(Number);

  return colour
    ? {
        r: colour[R_INDEX_POSITION],
        g: colour[G_INDEX_POSITION],
        b: colour[B_INDEX_POSITION],
      }
    : null;
};

export default extractRgb;
