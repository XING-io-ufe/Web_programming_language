// 10.Үржвэр нийлбэр
// 1*2+2*3+3*4+...+n*(n+1) нийлбэрийг ол.
// Input
// Натурал тоо өгөгдөнө.
// Output
// Нийлбэр
// Example
// Input:
// 5
// Output:
// 70


const prompt = require('prompt-sync')();
let n = prompt('гараас натурал N тоо өгнө үү: ');

let sum = 0;


for (let i = 1; i <= n; i++) {
    sum += i * (i + 1);
}


console.log(sum);