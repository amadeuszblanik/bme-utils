import compareObjects from './compareObjects';

describe('compareObjects', () => {
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
    expect(compareObjects(objectA, objectB)).toBeFalsy();
  });

  test('objectB and objectC should be the same', () => {
    expect(compareObjects(objectB, objectC)).toBeTruthy();
  });

  test('objectB and objectD should be different', () => {
    expect(compareObjects(objectB, objectD)).toBeFalsy();
  });

  test('objectC and objectD should be different', () => {
    expect(compareObjects(objectC, objectD)).toBeFalsy();
  });
});
