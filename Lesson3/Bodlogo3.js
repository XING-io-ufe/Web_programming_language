// өгөгдсөн массивт хамгийн олон давтагдсан  тоог ол
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 10, 5];
let Davtalt = 0;
let DavtsanElement;

for (let i = 0; i < arr.length; i++) {
    let tooloh = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            tooloh++;
        }
    }
    if (tooloh > Davtalt) {
        Davtalt = tooloh;
        DavtsanElement = arr[i];
    }
}

console.log('davtsan too ' + DavtsanElement + ' heden udaa ' + Davtalt);

