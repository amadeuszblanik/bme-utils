const DEFAULT_MIN_VALUE = 1;
const INTEGER_FIX = 1;

const randomNumber = (max: number, min = DEFAULT_MIN_VALUE): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + INTEGER_FIX)) + min;
};

export default randomNumber;
