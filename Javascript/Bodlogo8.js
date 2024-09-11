var prompt = require('prompt-sync')();
var a = parseInt(prompt('number 1 '));
var b = parseInt(prompt('number 2 '));
var c = parseInt(prompt('number 3 '));
var d = parseInt(prompt('number 4 '));
var e;
if(a % 7 == 0){
    e = 0+1;
} else{
    e=0;
}
if(b%7 == 0){
    e =e+1;
}
if(c%7==0){
    e =e+1;
}
if(d%7==0){
    e =e+1;
}

console.log("niit too ", e); 