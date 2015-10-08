var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    answer = celsius + 273.15;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };
  this.celsiusToFahrenheit = function(celsius) {
    answer =  (9*(celsius / 5))+32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };



});
