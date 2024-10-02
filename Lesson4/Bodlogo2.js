// өгөгдсөн үг палиндром үг мөн эсэхийг шалга
var prompt = require('prompt-sync')();
var word = prompt('Ta ugee oruulna uu: ');

var reversedWord = word.split('').reverse().join('');

if (word.toLowerCase() === reversedWord.toLowerCase()) {
    console.log("yes");
} else {
    console.log("no");
}