// Өгөгдсөн 2 оронтой тооны цифрүүдийн үржвэрийг ол
var prompt = require('prompt-sync')();
var a = parseInt(prompt('number 1 '));
var b = a % 10;
var c = parseInt(a / 10);
var d = b * c;
console.log(d);
