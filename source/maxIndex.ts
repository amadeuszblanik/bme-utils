const INDEX_LENGTH_DECREMENT = 1;
const MIN_INDEX = 0;

export default (elements: any[] | string): number | null => {
  const index = elements.length - INDEX_LENGTH_DECREMENT;

  if (index < MIN_INDEX) {
    return null;
  }

  return index;
};
