import util from './lastElement';

describe('lastElement', () => {
  test('Empty array should return null', () => {
    const list: string[] = [];

    expect(util(list)).toBeNull();
  });

  test("should return Last element when there' one element", () => {
    const list: string[] = ['First'];

    expect(util(list)).toBe('First');
  });

  test("should return Last element when there' more than one element", () => {
    const list: string[] = ['First', 'Second', 'Third'];

    expect(util(list)).toBe('Third');
  });
});
