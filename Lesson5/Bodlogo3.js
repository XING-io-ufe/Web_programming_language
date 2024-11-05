// өгөгдсөн тэгш оронтой бүхэл тооны зэргэлдээ цифрүүдийг солих swap(x) функф зохио
function swap(x) {

    let String_number = String(x);

    if (String_number.length % 2 != 0) {
        return false;
    }

    let swapped = '';

    let i = 0;

    while (i < String_number.length) {
        swapped += String_number[i + 1];
        swapped += String_number[i];
        i += 2;
    }


    return parseInt(swapped, 10);
}

console.log(swap(35));
console.log(swap(2817));
console.log(swap(98174));
console.log(swap(849320));  