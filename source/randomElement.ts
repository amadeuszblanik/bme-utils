import maxIndex from './maxIndex';
import randomNumber from './randomNumber';

const FIRST_INDEX = 0;

const randomElement = <T>(elements: T[]): T | null => {
  const max = maxIndex(elements);

  if (max === null) {
    return null;
  }

  return elements[randomNumber(max, FIRST_INDEX)];
};

export default randomElement;
