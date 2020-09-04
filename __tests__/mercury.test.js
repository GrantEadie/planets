import Mercury from '../src/mercury.js';

describe('Mercury', () => {

  let mercury;

  beforeEach(() => {
    mercury = new Mercury();
  });

  test('check creation of venus object', () => {
  expect(mercury).toMatchObject(new Mercury());
  });
});