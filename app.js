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


app.controller('impostoController', function() {

  this.salario = 2000;

  this.calImposto = function(salario) {
    if (salario < 2000) { return salario*0.1};
    if (2000 <= salario && salario <= 35000 ) { return salario*0.2};
    if (salario > 3500 ) { return salario*0.3};
  };
});