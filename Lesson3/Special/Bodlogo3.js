// \ Диагоналын элементүүдийн утгыг 0 болгон өөрчил
let numbers = [
    [1, 15, 3, 9],
    [2, 35, 7, 9],
    [3, 1, 5, 9],
    [9, 1, 2, 4],
];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        if (i === j) {
            numbers[i][j] = 0;
        }
    }
}

console.log(numbers);
