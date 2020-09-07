import Mars from '../src/mars.js';

describe('Mars', () => {

  let mars;

  beforeEach(() => {
    mars = new Mars(60);
  });

  test('check creation of venus object', () => {
  expect(mars).toMatchObject(new Mars(60));
  });
  
  test('check that values are entering Mars class', () => {
    expect(mars.age).toEqual(60);
  });

  test('expect function outputAge to return 60 / 1.88', () => {
    expect(mars.outputAge()).toEqual(32);
  });
});