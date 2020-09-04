export default class Mercury {
  constructor(age) {
    this.age = age;
    this.years = .24;
  }

  outputAge () {
    return Math.round(this.age * this.years);
  }
}