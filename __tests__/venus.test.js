import Venus from '../src/venus.js';

describe('Venus', () => {

  let venus;

  beforeEach(() => {
    venus = new Venus(60);
  });

  test('check creation of venus object', () => {
  expect(venus).toMatchObject(new Venus(60));
  });
});