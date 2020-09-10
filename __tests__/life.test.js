import LifeExpect from '../src/life.js';

describe('LifeExpect', () => {
  
  let lifeExpect;

  beforeEach(() => {
    lifeExpect = new LifeExpect(95, 4, 7, 2, "Virgo");
  });

  test('check creation of LifeExpect object', () => {
  expect(lifeExpect).toMatchObject(new LifeExpect(95, 4, 7, 2, "Virgo"));
  });

  test('check expectancyBeets function is returning + 20 as 4 is less than 5', () => {
    expect(lifeExpect.expectancyBeets()).toEqual(20);
  });

  test('check expectancyLaugh function is returning + 25 as 7 is greater than 5', () =>{
    expect(lifeExpect.expectancyLaugh()).toEqual(25)
  });

  test('check expectancyTweet function is returning + 25 as 2 is less than 3', () => {
    expect(lifeExpect.expectancyTweet()).toEqual(25)
  }); 

  test('check expectancyStarSign function is returning + 17 as Virgo is a Fire Sign', () => {
    expect(lifeExpect.expectancyStarSign()).toEqual(17)
  });
   
  test('check that a combination of functions will effect the output age of the object class', () => {
    expect(lifeExpect.expectancyBeets()+lifeExpect.expectancyLaugh()+lifeExpect.expectancyStarSign()+lifeExpect.expectancyTweet()).toEqual(87)
  });

  test('check that timeLeft function will return an output age dependant upon if the inputted age is greater than the life expectancy', () => {
    expect(lifeExpect.timeLeft(lifeExpect.expectancyBeets()+lifeExpect.expectancyLaugh()+lifeExpect.expectancyStarSign()+lifeExpect.expectancyTweet())).toEqual(8)
  })
});