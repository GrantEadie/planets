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

  test('expect function outputAge to return 60 * 11.86', () => {
    expect(jupiter.outputAge()).toEqual(712);
  });
});