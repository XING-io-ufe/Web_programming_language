// 1.Массивт байгаа эсэх
// Өгөгдсөн нэг хэмжээст бүхэл тоон массивт өгөгдсөн тоо байвал YES үгүй бол NO гэж
// хэвлэ. Өгөгдсөн тоо таарвал давталтыг зогсоох.
// Эхний мөрөнд массивын элементийн тоо. n<=100.
// Хоёр дахь мөрөнд массивын элементүүд зайгаар тусгаарлагдан өгөгдөнө. Int төрөл
// Гурав дахь мөрөнд хайх бүхэл тоо.
// Output
// Байвал YES үгүй бол NO.
// Жишээ
// Input:
// 5
// 1 2 3 4 5
// 2
// Output:
// YES
const prompt = require('prompt-sync')();


var array_n = prompt('array toogoo oruulna uu');
var n = prompt('Ta haih natural toogoo oruulna uu: 1 between 10');

const randomArray = [];

for (let i = 1; i <= array_n; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
}

for (var i = 1; i <= randomArray.length; i++) {
    if (randomArray[i] === n) {
        console.log("yes");
        break;
    } else if (i === randomArray.length) {
        console.log("no");
        break;
    }
}
