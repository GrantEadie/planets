import LifeExpect from '../src/life.js';

describe('LifeExpect', () => {
  
  let lifeExpect;

  beforeEach(() => {
    lifeExpect = new LifeExpect();
  });

  test('check creation of LifeExpect object', () => {
  expect(lifeExpect).toMatchObject(new LifeExpect());
  });
});