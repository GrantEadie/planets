import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planets from './planets.js';
import LifeExpect from './life.js';

$(document).ready(function() {

  $("#planet-age-form").submit(function(event) {
    event.preventDefault();
    let inputtedAge = $("#age").val();
    let inputtedPlanet = $("#planet").val();
    let inputtedBeets = $("#beets").val();
    let inputtedLaugh = $("#laugh").val();
    let inputtedTweet = $("#tweets").val();
    let inputtedStarSign = $("#starSign").val();
    let planet = new Planets(inputtedAge, inputtedPlanet);
    let lifeExpect = new LifeExpect (inputtedAge, inputtedBeets, inputtedLaugh, inputtedTweet, inputtedStarSign);
    let finalLife = lifeExpect.timeLeft(lifeExpect.expectancyBeets()+lifeExpect.expectancyLaugh()+lifeExpect.expectancyStarSign()+lifeExpect.expectancyTweet());
    let planetLife = new Planets(finalLife, inputtedPlanet);

    $("#output").text("You would be " + planet.outputAge() + " years old on " + inputtedPlanet + "!");

    if (inputtedAge > lifeExpect.life) {
      $("#outputLife").text("You have lived " + finalLife + " over the expected amount!!");
      $("#outputPlanetLife").text("That's " + planetLife.outputAge() + " years on " + inputtedPlanet + " over the expected amount!");
    } else {
      $("#outputLife").text("You have " + finalLife + " years left to live.");
      $("#outputPlanetLife").text("That's " + planetLife.outputAge() + " years on " + inputtedPlanet + " left to live!");
    }
  });
});