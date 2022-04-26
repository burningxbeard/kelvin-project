// Starting temperature for our calculation 
const kelvin = 300;
// Converting kelvin to celsius 
var celsius = (kelvin - 273);
// Converting celsius to farenheit 
var fahrenheit = (celsius * (9/5) + 32);
// Eliminating decimals in conversion 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees farenheit`);
