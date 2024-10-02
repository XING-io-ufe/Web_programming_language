// өгөгдсөн үгийн жижиг үсгийг том, том үсгийг жижиг үсэг болгон сольж хувирга
let text = "Hello World";
let swappedText = text.replace(/./g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
console.log(swappedText);