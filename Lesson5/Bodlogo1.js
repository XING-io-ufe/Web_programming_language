//өгөгдсөн 2 массивын давхардсан элемент агуулаагүй 1 массив үүсгэх mergeArrays(x) функц зохио 

function mergeArrays(arr1, arr2) {
    let mergedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!mergedArray.includes(arr1[i])) {
            mergedArray.push(arr1[i]);
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!mergedArray.includes(arr2[j])) {
            mergedArray.push(arr2[j]);
        }
    }
    return mergedArray;
}

var arr1 = [3, 4, 5];
var arr2 = [4, 9, 12, 15];

console.log(mergeArrays(arr1, arr2)); 