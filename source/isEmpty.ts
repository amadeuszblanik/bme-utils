const EMPTY_LENGTH = 0;

export default (element: any[] | string | number | object | null | undefined): boolean => {
  switch (typeof element) {
    case 'object': {
      if (element === null) {
        return true;
      }

      if (Array.isArray(element)) {
        return element.length <= EMPTY_LENGTH;
      }

      return Object.keys(element).length <= EMPTY_LENGTH;
    }
    case 'string': {
      return element.length <= EMPTY_LENGTH;
    }
    case 'number': {
      if (Number.isNaN(element)) {
        return true;
      }

      return element === EMPTY_LENGTH;
    }
    case 'undefined':
      return true;
  }
};
