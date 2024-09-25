const prompt = require('prompt-sync')();


// var counts = [ [ 0, 1, 2], [ 3, 3, 5], [ 6, 7, 8] ];

// var counts = [];
// var c = 0;
// for (var i = 0; i <3; i++) {
//     counts[i] = [];
//     for (var j = 0; j < 3; j++) {
//         counts[i][j] = c;
//         console.log(counts)
//         c++;
//     }
// }



// var arr = [];
// var N = 5;
// var count = 0;
// for (var i = 0; i < N; i++) {
//     arr[i] = prompt('enter value');
// }
// for (var i = 0; i < N; i++) {
//     if(arr[i] > 9999 && arr[i] < 100000){
//         count++
//     }
// }
// console.log(count);


// var arr = [];
// var N = prompt('garaas n too oruulna uu: ');
// var K = prompt('garaas K too oruulna uu: ');

// var count = 0;
// for (var i = 0; i < N; i++) {
//         arr[i] = prompt('too');
// }
// for (var i = 0; i < N; i++) {
//     if(arr[i] % K ==0){
//         count++
//     }
// }
// console.log(count);




// var counts = new Array(3); 
// var tegsh = 0;
// for (var i = 0; i < 3; i++) {
//     counts[i] = new Array(3); 
//     for (var j = 0; j < 3; j++) {
//     counts[i][j] = Math.floor(Math.random() * 10); 

//     }
//     console.log(counts); 
// }

// for (var g = 0; g <= counts.length; g++){
//     if(counts[g] % 2 == 0){
//         tegsh++
//     }
// }
// console.log(tegsh)



// let rows = prompt('enter value rows: ');
// let cols = prompt('enter value cols: ');

// let arr2D = new Array(rows);

// for (let i = 0; i < rows; i++) {
//     arr2D[i] = new Array(cols);
//     for (let j = 0; j < cols; j++) {
//         arr2D[i][j] = Math.floor(Math.random() * 10); 
//     }
// }


// console.log("2D array");
// for (let i = 0; i < rows; i++) {
//     console.log(arr2D[i]);
// }


// let niilber = 0;

// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         if (arr2D[i][j] % 2 === 0) {
//             niilber += arr2D[i][j];
//         }
//     }
// }

// console.log("Tegsh too niilber:", niilber);


let arr =[1,2,3,4,5,6,7,8,9,10,4];
let maxRepetition = 0;
let maxElement;

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count > maxRepetition) {
        maxRepetition = count;
        maxElement = arr[i];
    }
}

console.log('davtsan too ' + maxElement + ' heden udaa ' + maxRepetition);