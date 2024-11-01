//өгөгдсөн массиваас хамгийн урт элементийг олох longElement(x) функц зохио
function longElement(arr) {
    let longest = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

var arr = ["javascript", "is", "programming", "", "language"];
console.log(longElement(arr));