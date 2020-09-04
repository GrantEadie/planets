export default class Jupiter {
  constructor(age) {
    this.age = age;
    this.years = 11.86;
  }

  outputAge () {
    return Math.round(this.age * this.years);
  }
}