//өгөгдсөн өгүүлбэрт хамгийн их орсон үгийг ол
// Эхний өгүүлбэрийг тодорхойлно
var sentence = "Javascript is the most is popular the programming language is";

// 1. Өгүүлбэрийг үгсийн массив болгож хуваана
var words = sentence.split(" ");

// 2. Үгсийн тоог хадгалах объект үүсгэнэ
var wordCount = {};

// 3. Үгсийг давталт хийж тоолно
for (var i = 0; i < words.length; i++) {
    var word = words[i]; // Одоогийн үгийг авна
    // Хэрвээ уг үг өмнө нь тоологдсон бол тоог нэмнэ
    if (wordCount[word]) {
        wordCount[word]++;
    } else {
        // Хэрвээ уг үг анх удаа тоологдож байгаа бол 1-ээр эхлэнэ
        wordCount[word] = 1;
    }
}

// 4. Хамгийн их давтагдсан үгийг олох
var maxCount = 0; // Хамгийн их давтагдсан тоо
var mostFrequentWord = ""; // Хамгийн их давтагдсан үг

// Үгсийн тоог шалгаж, хамгийн их давтагдсан үгийг олох
for (var word in wordCount) {
    if (wordCount[word] > maxCount) {
        maxCount = wordCount[word]; // Хамгийн их тоог шинэчилнэ
        mostFrequentWord = word; // Хамгийн их давтагдсан үгийг шинэчилнэ
    }
}

// 5. Хариуг хэвлэнэ
console.log("Хамгийн их давтагдсан үг: " + mostFrequentWord + " (" + maxCount + " удаа)");