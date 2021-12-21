import firstElement from './firstElement';

describe('firstElement', () => {
  test('Empty array should return null', () => {
    const list: string[] = [];

    expect(firstElement(list)).toBeNull();
  });

  test("should return First element when there' one element", () => {
    const list: string[] = ['First'];

    expect(firstElement(list)).toBe('First');
  });

  test("should return First element when there' more than one element", () => {
    const list: string[] = ['First', 'Second', 'Third'];

    expect(firstElement(list)).toBe('First');
  });
});
