import Planets from '../src/planets.js';

describe('Planets', () => {

  let planetVenus;
  let planetJupiter;
  let planetMars;
  let planetMercury;

  beforeEach(() => {
    planetVenus = new Planets(60, "Venus");
    planetJupiter = new Planets(60, "Jupiter");
    planetMars = new Planets(60, "Mars");
    planetMercury = new Planets(60, "Mercury");
  });

  test('check creation of planet object', () => {
  expect(planetVenus).toMatchObject(new Planets(60, "Venus"));
  });

  test('check that values are entering Planets class', () => {
    expect(planetVenus.age + ", " + planetVenus.selectPlanet).toEqual("60, Venus");
  });

  test('expect function outputAge with input of Venus to return 60 / .62', () => {
    expect(planetVenus.outputAge()).toEqual(97);
  });

  test('expect function outputAge with input of Jupiter to return 60 / 11.86', () => {
    expect(planetJupiter.outputAge()).toEqual(5);
  });

  test('expect function outputAge with input of Mars to return 60 / 1.88', () => {
    expect(planetMars.outputAge()).toEqual(32);
  });

  test('expect function outputAge with input of Mercury to return 60 / .24', () => {
    expect(planetMercury.outputAge()).toEqual(250);
  });
});