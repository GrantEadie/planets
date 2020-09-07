export default class LifeExpect {
  constructor(age, beets, laugh, tweet, starSign)  {
    this.age = age;
    this.beets = beets;
    this.laugh = laugh;
    this.tweet = tweet;
    this.starSign = starSign;
    this.life = 65;
  }

  // How this works: life expectancy is higher if you eat more beets per week, laugh more per day, tweet less per day, and your starsign is either a water or air sign. Otherwise you will not live for long.  

  expectancyBeets() {
    if (this.beets < 5) {
      return this.life + 2;
    } else {
      return this.life + 10;
    }
  };  

  expectancyLaugh() {
    if (this.laugh < 5) {
      return this.life + 2;
    } else {
      return this.life + 10;
    }
  };

  expectancyTweet() {
    if (this.tweet > 3) {
      return this.life + 2;
    } else {
      return this.life + 10;
    }
  }
}