const prompt = require('prompt-sync')();
// гараас таван утга авч оруулсан тоо 9999 их 100К гаас бага байх тоог хэд байгааг тоолоод гаргана 
var arr = [];
var N = 5;
var count = 0;
for (var i = 0; i < N; i++) {
    arr[i] = prompt('enter value');
}
for (var i = 0; i < N; i++) {
    if(arr[i] > 9999 && arr[i] < 100000){
        count++
    }
}
console.log(count);