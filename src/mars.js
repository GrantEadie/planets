export default class Mars {
  constructor(age) {
    this.age = age;
    this.years = 1.88;
  }

  outputAge () {
    return Math.round(this.age * this.years);
  }
}