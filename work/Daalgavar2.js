// 7.Нийлбэр
// Өгөгдсөн n тоо хүртэлх натурал тоонуудын кубуудын нийлбэрийг ол.
// Давталт ашиглахгүй бодвол сайн.
// 1
// 3+23+33+...+n3
// .
// Input
// n натурал тоо өгөгдөнө.
// Output
// Нийлбэр
// Example
// Input:
// 5
// Output:
// 225

const prompt = require('prompt-sync')();
let n = parseInt(prompt('Натурал тоог оруулна уу:'));


let sum = (n * (n + 1)) / 2;

let niitCube = sum * sum;


console.log(niitCube);