import Jupiter from '../src/jupiter.js';

describe('Jupiter', () => {

  let jupiter;

  beforeEach(() => {
    jupiter = new Jupiter(60);
  });

  test('check creation of venus object', () => {
  expect(jupiter).toMatchObject(new Jupiter(60));
  });

  test('check that values are entering Jupiter class', () => {
    expect(jupiter.age).toEqual(60);
  });
});