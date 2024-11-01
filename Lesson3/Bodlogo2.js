const prompt = require('prompt-sync')();
// NxM хэмжээтэй санамсаргүй тоогоор дүүргэсэн 2 хэмжээст тоон массив үүсгэж массивын тэгш тоонуудын нийлбэрийг ол
let rows = prompt('мөрний утга авна: ');
let cols = prompt('баганы утга авна: ');

let arr2D = [];

for (let i = 0; i < rows; i++) {
    arr2D[i] = [];
    for (let j = 0; j < cols; j++) {
        arr2D[i][j] = Math.floor(Math.random() * 10);
    }
}


let niilber = 0;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (arr2D[i][j] % 2 === 0) {
            niilber += arr2D[i][j];
        }
    }
}

console.log("Тэгш тоонуудын нийлбэр:", niilber);