// өгсөн бүхэл тоо хэдэн оронтой тоо болохыг ол
var prompt = require('prompt-sync')();
var n = prompt('too oruulna uu: ');
let count = 0;
while (n !== 0) {
    n = n / 10;
    n = parseInt(n, 10);
    count++;
}
console.log(count); 