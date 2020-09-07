import LifeExpect from '../src/life.js';

describe('LifeExpect', () => {
  
  let lifeExpect;

  beforeEach(() => {
    lifeExpect = new LifeExpect(95, 4, 7, 2, "Virgo");
  });

  test('check creation of LifeExpect object', () => {
  expect(lifeExpect).toMatchObject(new LifeExpect(95, 4, 7, 2, "Virgo"));
  });

  test('check expectancyBeets function is working', () => {
    expect(lifeExpect.expectancyBeets()).toEqual(20);
  });

  test('check expectancyLaugh function is working', () =>{
    expect(lifeExpect.expectancyLaugh()).toEqual(25)
  });

  test('check expectancyTweet function is working', () => {
    expect(lifeExpect.expectancyTweet()).toEqual(25)
  }); 

  test('check expectancyStarSign function is working', () => {
    expect(lifeExpect.expectancyStarSign()).toEqual(17)
  });
   
  test('check that a combination of functions will effect the output age', () => {
    expect(lifeExpect.expectancyBeets()+lifeExpect.expectancyLaugh()+lifeExpect.expectancyStarSign()+lifeExpect.expectancyTweet()).toEqual(87)
  });

  test('check that timeLeft function will return correct outputs', () => {
    expect(lifeExpect.timeLeft(lifeExpect.expectancyBeets()+lifeExpect.expectancyLaugh()+lifeExpect.expectancyStarSign()+lifeExpect.expectancyTweet())).toEqual(8)
  })
});