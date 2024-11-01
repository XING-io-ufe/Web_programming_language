// 9.Гурвалжин эсэх
// Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж
// хэвлэ.
// Input
// Нэг мөрөнд 3 натурал тоо зайгаар тусгаарлагдан өгөгдөнө.
// Output
// Гурвалжин байгуулж болох бол YES үгүй бол NO.
// Example
// Input:
// 3 4 5
// Output:
// YES

const prompt = require('prompt-sync')();
const input = prompt("ta gurvaljin utga space tei orull:"); // Жишээ оруулга
const sides = input.split(" "); // Зайгаар тусгаарлан хувааж байна

// Гурван талын уртыг тоон утганд хөрвүүлж байна
const a = Number(sides[0]);
const b = Number(sides[1]);
const c = Number(sides[2]);

// Гурвалжин байгуулах боломжтой эсэхийг шалгах
if ((a + b > c) && (a + c > b) && (b + c > a)) {
    console.log("YES");
} else {
    console.log("NO");
}