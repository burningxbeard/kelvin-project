// Starting temperature for our calculation 
const kelvin = 300;
// Converting kelvin to celsius 
const celsius = (kelvin - 273);
// Converting celsius to farenheit and round down 
const fahrenheit = Math.floor(celsius * (9/5) + 32);
// include newton as an option 
const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${fahrenheit} degrees farenheit which is also ${newton} newton?`);
