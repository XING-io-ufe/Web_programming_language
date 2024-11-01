// NxN хэмжээтэй 2 хэмжээст тоон массив үүсгэ
const prompt = require('prompt-sync')();

let rows = prompt('мөрний утга авна: ');
let cols = prompt('баганы утга авна: ');

let arr2D = [];

for (let i = 0; i < rows; i++) {
    arr2D[i] = [];
    for (let j = 0; j < cols; j++) {
        arr2D[i][j] = i * cols + j;
    }
}

console.log(arr2D);