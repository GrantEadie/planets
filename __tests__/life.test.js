import LifeExpect from '../src/life.js';

describe('LifeExpect', () => {
  
  let lifeExpect;

  beforeEach(() => {
    lifeExpect = new LifeExpect(24, 4, 7, 2, "Virgo");
  });

  test('check creation of LifeExpect object', () => {
  expect(lifeExpect).toMatchObject(new LifeExpect(24, 4, 7, 2, "Virgo"));
  });

  test('check expectancyBeets function is working', () => {
    expect(lifeExpect.expectancyBeets()).toEqual(67);
  });

  test('check expectancyLaugh function is working', () =>{
    expect(lifeExpect.expectancyLaugh()).toEqual(75)
  });

  test('check expectancyTweet function is working', () => {
    expect(lifeExpect.expectancyTweet()).toEqual(75)
  }); 

  test('check expectancyStarSign function is working', () => {
    expect(lifeExpect.expectancyStarSign()).toEqual(67)
  });
});