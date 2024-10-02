// өгөгдсөн өгүүлбэрт хамгийн олон орсон үгийг ол
var sentence = "Javascript is the most popular the programming language is";

const words = sentence.toLowerCase().split(/\s+/);
const wordCounts = {};
let mostCommonWord = "";
let maxCount = 0;

for (const word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
    if (wordCounts[word] > maxCount) {
        mostCommonWord = word;
        maxCount = wordCounts[word];
    }
}

console.log(`The most common word is: "${mostCommonWord}"`);