import Mercury from '../src/mercury.js';

describe('Mercury', () => {

  let mercury;

  beforeEach(() => {
    mercury = new Mercury(60);
  });

  test('check creation of venus object', () => {
  expect(mercury).toMatchObject(new Mercury(60));
  });

  test('check that values are entering Mercury class', () => {
    expect(mercury.age).toEqual(60);
  });

  test('expect function outputAge to return 60 / .24', () => {
    expect(mercury.outputAge()).toEqual(250);
  });
});