// захын элементүүдийн үржвэрийг ол
let numbers = [
    [3, 1, 1, 1],
    [1, 3, 5, 1],
    [1, 3, 5, 1],
    [1, 1, 1, 1]
];


let a = 1;
let b = 1;
let c = 1;
let d = 1;


let rows = numbers.length;
let cols = numbers[0].length;

// Дээд мөр
for (let i = 0; i < cols; i++) {
    a *= numbers[0][i];
}

// Доод мөр
for (let i = 0; i < cols; i++) {
    b *= numbers[rows - 1][i];
}

// Зүүн багана (булангийн элементүүдийг оруулахгүй)
for (let i = 1; i < rows - 1; i++) {
    c *= numbers[i][0];
}

// Баруун багана (булангийн элементүүдийг оруулахгүй)
for (let i = 1; i < rows - 1; i++) {
    d *= numbers[i][cols - 1];
}

let product = a * b * c * d;
console.log(product);