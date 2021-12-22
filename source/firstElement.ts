import isEmpty from './isEmpty';

const FIRST_ELEMENT_INDEX = 0;

const firstElement = <T = any>(list: T[]): T | null => {
  if (isEmpty(list)) {
    return null;
  }

  return list[FIRST_ELEMENT_INDEX];
};

export default firstElement;
