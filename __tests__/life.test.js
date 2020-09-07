import LifeExpect from '../src/life.js';

describe('LifeExpect', () => {
  
  let lifeExpect;

  beforeEach(() => {
    lifeExpect = new LifeExpect(24, 4, 7, 2, "Virgo");
  });

  test('check creation of LifeExpect object', () => {
  expect(lifeExpect).toMatchObject(new LifeExpect(24, 4, 7, 2, "Virgo"));
  });

  test('check expectancy function is working', () => {
    expect(lifeExpect.expectancyBeets()).toEqual(67);
  });
});