import Jupiter from '../src/jupiter.js';

describe('Jupiter', () => {

  let jupiter;

  beforeEach(() => {
    jupiter = new Jupiter();
  });

  test('check creation of venus object', () => {
  expect(jupiter).toMatchObject(new Jupiter());
  });

  test('expect function outputAge to return 60 / 11.86', () => {
    expect(jupiter.outputAge(60)).toEqual(5);
  });
});