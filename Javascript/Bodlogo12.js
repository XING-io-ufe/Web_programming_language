// 1-i тоо хүртэлх сондгой тоонуудыг хэвлэж харуул
var prompt = require('prompt-sync')();
var a = parseInt(prompt('number 1 '));

for(let i =1; i<a+1; i++){
    if(i % 2 ==1){
        console.log(i);
    }
}