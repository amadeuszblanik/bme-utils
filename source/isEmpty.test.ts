import isEmpty from './isEmpty';

describe('isEmpty', () => {
  test("'Lorem ipsum' should not be empty", () => {
    expect(isEmpty('Lorem ipsum')).toBeFalsy();
  });

  test("'' should be empty", () => {
    expect(isEmpty('')).toBeTruthy();
  });

  test('-2137 should not be empty', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(isEmpty(-2137)).toBeFalsy();
  });

  test('2137 should not be empty', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(isEmpty(2137)).toBeFalsy();
  });

  test('0 should be empty', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(isEmpty(0)).toBeTruthy();
  });

  test('NaN should be empty', () => {
    expect(isEmpty(NaN)).toBeTruthy();
  });

  test('[] should be empty', () => {
    expect(isEmpty([])).toBeTruthy();
  });

  test("[''] should not be empty", () => {
    expect(isEmpty([''])).toBeFalsy();
  });

  test("['Lorem ipsum'] should not be empty", () => {
    expect(isEmpty(['Lorem ipsum'])).toBeFalsy();
  });

  test('{} should be empty', () => {
    expect(isEmpty({})).toBeTruthy();
  });

  test("{ hello: 'World' } should not be empty", () => {
    expect(isEmpty({ hello: 'World' })).toBeFalsy();
  });

  test('null should be empty', () => {
    expect(isEmpty(null)).toBeTruthy();
  });

  test('undefined should be empty', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });
});
