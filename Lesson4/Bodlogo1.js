// өгөгдсөн үгийн жижиг үсгийг том, том үсгийг жижиг үсэг болгон сольж хувирга
let text = "Hello World";
let swappedText = '';
for (let i = 0; i < text.length; i++) {
    if (text[i] == text[i].toUpperCase()) {
        swappedText += text[i].toLowerCase();
    } else {
        swappedText += text[i].toUpperCase();
    }
}
console.log(swappedText);