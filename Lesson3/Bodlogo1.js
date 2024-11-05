const prompt = require('prompt-sync')();

// өгөгдсөн N элементтэй массивт К тоонд үлдэгдэлгүй хуваагдах тоо хичнээн байгааг ол 
var arr = [];
var N = prompt('garaas n too oruulna uu: ');
var K = prompt('garaas K too oruulna uu: ');

var count = 0;
for (var i = 0; i < N; i++) {
    arr[i] = prompt(`too ${i + 1}: `);
}
for (var i = 0; i < N; i++) {
    if (arr[i] % K == 0) {
        count++
    }
}
console.log(count);