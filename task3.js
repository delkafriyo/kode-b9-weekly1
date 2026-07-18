/*
1. Make Function Suhu Celcius to Fahrenheit
2. Make function Fahrenheit to celcius
*/

let toFahrenheit = (num) => (num * 9) / 5 + 32;
let toCelcius = (num) => ((num - 32) * 9) / 5;

console.log(toFahrenheit(10));
console.log(toCelcius(25));
