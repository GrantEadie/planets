export default class Planets {
  constructor(age, selectPlanet) {
    this.age = age;
    this.selectPlanet = selectPlanet;
    this.yearsVenus = .62;
    this.yearsJupiter = 11.86;
    this.yearsMercury = .24;
    this.yearsMars = 1.88;
  }

  outputAge () {
    if (this.selectPlanet === "Venus") {
      return Math.round(this.age / this.yearsVenus);
    } 
  }
}