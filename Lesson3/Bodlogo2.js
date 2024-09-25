const prompt = require('prompt-sync')();
// NxM хэмжээтэй санамсаргүй тоогоор дүүргэсэн 2 хэмжээст тоон массив үүсгэж массивын тэгш тоонуудын нийлбэрийг ол
let rows = prompt('enter value rows: ');
let cols = prompt('enter value cols: ');

let arr2D = new Array(rows);

for (let i = 0; i < rows; i++) {
    arr2D[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
        arr2D[i][j] = Math.floor(Math.random() * 10); 
    }
}


// console.log("2D array");
// for (let i = 0; i < rows; i++) {
//     console.log(arr2D[i]);
// }


let niilber = 0;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (arr2D[i][j] % 2 === 0) {
            niilber += arr2D[i][j];
        }
    }
}

console.log("Tegsh too niilber:", niilber);