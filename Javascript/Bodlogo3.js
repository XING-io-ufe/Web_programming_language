var prompt = require('prompt-sync')();
var a = parseInt(prompt('number 1 '));
var b = a % 10;
var c = a / 10;
var d = b * c;
console.log(d);