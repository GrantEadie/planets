import Jupiter from '../src/jupiter.js';

describe('Jupiter', () => {

  let jupiter;

  beforeEach(() => {
    jupiter = new Jupiter();
  });

  test('check creation of venus object', () => {
  expect(jupiter).toMatchObject(new Jupiter());
  });
});