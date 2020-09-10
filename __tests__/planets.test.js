import Planets from '../src/planets.js';

describe('Planets', () => {

  let planet;

  beforeEach(() => {
    planet = new Planets(60, "Venus");
  });

  test('check creation of planet object', () => {
  expect(planet).toMatchObject(new Planets(60, "Venus"));
  });

  test('check that values are entering Planets class', () => {
    expect(planet.age + ", " + planet.selectPlanet).toEqual("60, Venus");
  });

  test('expect function outputAge with input of Venus to return 60 / .62', () => {
    expect(planet.outputAge()).toEqual(97);
  });
});