import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mars from './mars.js';
import Mercury from './mercury.js';
import Jupiter from './jupiter.js';
import Venus from './venus.js';

$(document).ready(function() {
  let jupiter = new Jupiter();
  let mars = new Mars();
  let mercury = new Mercury();
  let venus = new Venus();

  $("planet-age-form").submit(function() {
    let inputtedAge = $("#age").val();

  });

});