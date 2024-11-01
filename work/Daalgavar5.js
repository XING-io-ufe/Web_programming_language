// 3. Муугийн тоо
// Сурагчдын дүн нэг хэмжээст массиваар өгөгдөв.Муу дүгнэгдсэн сурагчдын тоог ол.
//     Input
// Эхний мөрөнд сурагчдын тоо.
// Дараагийн мөрүүдэд сурагчдын дүн нэг нэг мөрөнд өгөгдөнө.
//     Output
// Муу дүнтэй сурагчдын тоо.
//     Жишээ
// Input:
// 5
// 96
// 59
// 55
// 76
// 62
// Output:
// 2

const prompt = require('prompt-sync')();

let niitSuragch = prompt("Сурагчдын тоо оруулна уу: ");;
let muuDunteiCount = 0;

for (let i = 0; i < niitSuragch; i++) {
    let dun = prompt();
    if (dun < 60) {
        muuDunteiCount++;
    }
}

console.log(muuDunteiCount);