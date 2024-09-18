var prompt = require('prompt-sync')();
var too1 = prompt('utga oruulna uu 1: ');
var too2 = prompt('utga oruulna uu 2: ');

while (too2 !== 0) {
    let temp = too2;
    too2 = too1 % too2;
    too1 = temp;
}

console.log(too1);