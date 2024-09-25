var prompt = require('prompt-sync')();
var too = prompt('too oruulna uu: ');
let anhni_too = true;

for (let i = 2; i * i <= too; i++) {
    if (too % i === 0) {
    anhni_too = false;
    break;
    }
}

if (anhni_too) {
    console.log(too + "anhni too mon");
} else {
    console.log(too + "anhni too bish");
}