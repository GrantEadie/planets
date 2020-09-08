export default class Jupiter {
  constructor() {
    this.years = 11.86;
  }

  outputAge (age) {
    return Math.round(age / this.years);
  }
}