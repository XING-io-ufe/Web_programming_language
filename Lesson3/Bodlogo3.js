// өгөгдсөн массивт хамгийн олон давтагдсан  тоог ол
let arr =[1,2,3,4,5,6,7,8,9,10,4];
let Davtalt = 0;
let DavtsanElement;

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count > Davtalt) {
        Davtalt = count;
        DavtsanElement = arr[i];
    }
}

console.log('davtsan too ' + DavtsanElement + ' heden udaa ' + Davtalt);