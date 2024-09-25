// Өгөгдсөн секундийг минут секунд руу  хөрвүүл
var prompt = require('prompt-sync')();
var a = parseInt(prompt('number 1 '));

var b = a / 60;
var c = a % 60;

console.log("Niit minut: ", b);
console.log("Niit second: ", c);