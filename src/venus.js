export default class Venus {
  constructor(age) {
    this.age = age;
    this.years = .62;
  }

  outputAge() {
    return this.age * this.years;
  }
}