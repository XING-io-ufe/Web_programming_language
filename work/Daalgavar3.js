// 9.Гурвалжин эсэх
// Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж
// хэвлэ.
// utga
// Нэг мөрөнд 3 натурал тоо зайгаар тусгаарлагдан өгөгдөнө.
// Output
// Гурвалжин байгуулж болох бол YES үгүй бол NO.
// Example
// utga:
// 3 4 5
// Output:
// YES

const prompt = require('prompt-sync')();

let utga = prompt("ta gurvaljin utga space tei orull:");
let sides = utga.split(" ");


let a = Number(sides[0]);
let b = Number(sides[1]);
let c = Number(sides[2]);


if ((a + b > c) && (a + c > b) && (b + c > a)) {
    console.log("YES");
} else {
    console.log("NO");
}