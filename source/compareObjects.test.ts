import util from './compareObjects';

describe('util', () => {
  const objectA = {
    hello: 'World',
    foo: 'Bar',
  };

  const objectB = {
    hello: 'World',
  };

  const objectC = Object.freeze({
    hello: 'World',
  });

  const objectD = new Object();
  Object.defineProperty(objectD, 'hello', {
    value: 'World',
    writable: false,
  });

  test('objectA and objectB should be different', () => {
    expect(util(objectA, objectB)).toBeFalsy();
  });

  test('objectB and objectC should be the same', () => {
    expect(util(objectB, objectC)).toBeTruthy();
  });

  test('objectB and objectD should be different', () => {
    expect(util(objectB, objectD)).toBeFalsy();
  });

  test('objectC and objectD should be different', () => {
    expect(util(objectC, objectD)).toBeFalsy();
  });
});
