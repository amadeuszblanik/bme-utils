import isEmpty from './isEmpty';

const LENGTH_INDEX_DIFFERENCE = 1;

const lastElement = <T = any>(list: T[]): T | null => {
  if (isEmpty(list)) {
    return null;
  }

  return list[list.length - LENGTH_INDEX_DIFFERENCE];
};

export default lastElement;
