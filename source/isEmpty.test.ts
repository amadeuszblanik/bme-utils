import util from './isEmpty';

describe('util', () => {
  test("'Lorem ipsum' should not be empty", () => {
    expect(util('Lorem ipsum')).toBeFalsy();
  });

  test("'' should be empty", () => {
    expect(util('')).toBeTruthy();
  });

  test('-2137 should not be empty', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(util(-2137)).toBeFalsy();
  });

  test('2137 should not be empty', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(util(2137)).toBeFalsy();
  });

  test('0 should be empty', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(util(0)).toBeTruthy();
  });

  test('NaN should be empty', () => {
    expect(util(NaN)).toBeTruthy();
  });

  test('[] should be empty', () => {
    expect(util([])).toBeTruthy();
  });

  test("[''] should not be empty", () => {
    expect(util([''])).toBeFalsy();
  });

  test("['Lorem ipsum'] should not be empty", () => {
    expect(util(['Lorem ipsum'])).toBeFalsy();
  });

  test('{} should be empty', () => {
    expect(util({})).toBeTruthy();
  });

  test("{ hello: 'World' } should not be empty", () => {
    expect(util({ hello: 'World' })).toBeFalsy();
  });

  test('null should be empty', () => {
    expect(util(null)).toBeTruthy();
  });

  test('undefined should be empty', () => {
    expect(util(undefined)).toBeTruthy();
  });
});
