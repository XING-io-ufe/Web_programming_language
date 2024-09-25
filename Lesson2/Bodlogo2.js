// 1 ээс i тоо хүртэлх сондгой тоонуулийг хэвлэж харуул
var prompt = require('prompt-sync')();
var a = (prompt('too oruulna uu: '));

for(let i =1; i<a+1; i++){
    if(i % 2 == 1){
        console.log(i)
    }
}