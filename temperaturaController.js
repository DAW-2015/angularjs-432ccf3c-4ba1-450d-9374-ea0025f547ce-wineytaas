

var app = angular.module('myApp', []);
	app.controller('temperaturaController', function() {
		//Zero absoluto
		this.c = -273.15; 	// Celsius
		this.f = -459.67 ;	// Fahrenheit
		this.k = 0 ;		// Kelvin
		this.temp = 0;
		this.escala = "Celsius";
		this.escalas = ["Celsius", "Fahrenheit" ,"Kelvin"];
		this.temperaturas = {
			Celsius: -273.15,
			Fahrenheit: -459.67,
			Kelvin: 0
		}

		this.convert = function(para){
			switch(this.escala){
				case "Celsius":
					switch(para){
						case "Celsius":
							return this.temp;
						case "Fahrenheit":
							return this.convertCF();
						case "Kelvin":
							return this.convertCK();
					}
				break;
				case "Fahrenheit":
					switch(para){
						case "Celsius":
							return this.convertFC();
						case "Fahrenheit":
							return this.temp;
						case "Kelvin":
							return this.convertFK();
					}
				break;

				case "Kelvin":
					switch(para){
						case "Celsius":
							return this.convertKC();
						case "Fahrenheit":
							return this.convertKF();
						case "Kelvin":
							return this.temp;
					}
				break;
			}
		};

		this.convertCF = function() {
			return (9*(this.temp / 5))+32;
		};
		this.convertCK = function() {
			return this.temp + 273.15;
		};

		this.convertFC = function() {
			return 5*((this.temp-32)/9);
		};
		this.convertFK = function() {
			return (this.temp + 459.67) * 5/9 ;
		};

		this.convertKC = function() {
			return this.temp - 273;
		};
		
		this.convertKF = function() {
			return this.temp * 9/5 - 459.67;
		};


		
});