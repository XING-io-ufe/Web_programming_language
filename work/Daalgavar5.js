// 6.Сондгой нь их үү
// Нэг хэмжээст массив дахь сондгой тоонууд нь тэгш тоонуудаасаа их бол YES, үгүй бол
// NO гэж хэвлэ.
// Input
// Эхний мөрөнд массив дахь элементийн тоо.
// Дараагийн мөрүүдэд массивын элементүүд нэг нэгээрээ өгөгдөнө.
// Output
// Сондгой нь их бол YES, үгүй бол NO.
// Жишээ
// Input:
// 5
// 2
// 3
// 4
// 1
// 7
// Output:
// YES


const prompt = require('prompt-sync')();

let n = prompt('гараас N тоо оруулна уу: ');
let sondgoi = 0;
let tegsh = 0;


for (let i = 0; i < n; i++) {
    const number = prompt(`Элемент утга ${i + 1} оруулна уу: `);
    if (number % 2 === 0) {
        tegsh++;
    } else {
        sondgoi++;
    }
}

if (sondgoi > tegsh) {
    console.log("YES");
} else {
    console.log("NO");
}