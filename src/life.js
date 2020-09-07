export default class LifeExpect {
  constructor(age, beets, laugh, tweet, starSign)  {
    this.age = age;
    this.beets = beets;
    this.laugh = laugh;
    this.tweet = tweet;
    this.starSign = starSign;
    this.life = 0;
  }

  // How this works: life expectancy is higher if you eat more beets per week, laugh more per day, tweet less per day, and your starsign is either a water or air sign. Otherwise you will not live for long.  

  expectancyBeets() {
    if (this.beets < 5) {
      return this.life + 20;
    } else {
      return this.life + 25;
    }
  };  

  expectancyLaugh() {
    if (this.laugh < 5) {
      return this.life + 15;
    } else {
      return this.life + 25;
    }
  };

  expectancyTweet() {
    if (this.tweet > 3) {
      return this.life + 20;
    } else {
      return this.life + 25;
    }
  };

  expectancyStarSign() {
    if (this.starSign === "Virgo" || this.starSign === "Taurus" || this.starSign === "Capricorn" || this.starSign === "Aries" || this.starSign === "Leo" || starSign === "Sagittarius") {
      return this.life + 17;
    } else {
      return this.life + 25;
    }
  };

  timeLeft(totalLife) {
    if (this.age > totalLife) {
      return this.age - totalLife;
    } else {
      return totalLife - this.age;
    }
  }

}