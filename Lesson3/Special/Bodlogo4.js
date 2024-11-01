// / Диагоналын элементүүдийн утгыг 0 болгон өөрчил
let numbers =
    [[1, 15, 3, 9],
    [2, 35, 7, 9],
    [3, 1, 5, 9],
    [9, 1, 2, 4],];

for (let i = 0; i < numbers.length; i++) {
    numbers[i][numbers.length - 1 - i] = 0;
}

console.log(numbers);