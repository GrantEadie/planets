import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Planets from './planets.js';

$(document).ready(function() {

  $("#planet-age-form").submit(function(event) {
    event.preventDefault();
    let inputtedAge = $("#age").val();
    let inputtedPlanet = $("#planet").val();
    let planet = new Planets(inputtedAge, inputtedPlanet);
    console.log(inputtedPlanet);
    console.log(inputtedAge);

    $("#output").text("You would be " + planet.outputAge() + " years old on " + inputtedPlanet + "!");
  });
});