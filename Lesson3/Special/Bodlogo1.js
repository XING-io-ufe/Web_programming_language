// NxN хэмжээтэй 2 хэмжээст тоон массив үүсгэ
const prompt = require('prompt-sync')();

let rows = prompt('Enter the number of rows: ');
let cols = prompt('Enter the number of columns: ');

let arr2D = new Array(rows);

for (let i = 0; i < rows; i++) {
    arr2D[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
        arr2D[i][j] = i * cols + j;
    }
}

console.log(arr2D);