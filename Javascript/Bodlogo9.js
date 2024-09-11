var prompt = require('prompt-sync')();
var a = parseInt(prompt('number 1 '));
var b = parseInt(prompt('number 2 '));
var c = parseInt(prompt('number 3 '));
var d = parseInt(prompt('number 4 '));
var e;
if(a > 60){
    e = a;
} else{
    e=0;
}
if(b>60){
    e =e+b;
}
if(c>60){
    e =e+c;
}
if(d>60){
    e =e+d;
}

console.log("niit too ", e); 