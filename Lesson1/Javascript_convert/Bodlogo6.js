// 2-тооны багыг ол
var prompt = require('prompt-sync')();
var a = parseInt(prompt('number 1 '));
var b = parseInt(prompt('number 2 '));

if(a==b){
    console.log("2 too hoorondoo tentsuu");
} else{
    if(a>b){
        console.log("a too in ih");
    } else{
        console.log("b too in ih");
    }
}