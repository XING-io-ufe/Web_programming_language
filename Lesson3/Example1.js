const prompt = require('prompt-sync')();
// гараас утга өгсөнөөр зарлаж өгсөн i ийн утгаар 3х3 хэмжээтэй дараалсан массив гаргаж байна
var counts = [];
var c = 0;
for (var i = 0; i <3; i++) {
    counts[i] = [];
    for (var j = 0; j < 3; j++) {
        counts[i][j] = c;
        console.log(counts)
        c++;
    }
}