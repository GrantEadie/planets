import Mars from '../src/mars.js';

describe('Mars', () => {

  let mars;

  beforeEach(() => {
    mars = new Mars();
  });

  test('check creation of venus object', () => {
  expect(mars).toMatchObject(new Mars());
  });
});