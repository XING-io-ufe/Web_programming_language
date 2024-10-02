// захын элементүүдийн үржвэрийг ол
let numbers = [
    [2, 3, 5, 9],
    [2, 3, 5, 9],
    [2, 3, 5, 9],
    [2, 3, 5, 9]
];

let product = 1;

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i][0] * numbers[i][numbers[0].length - 1];
}

product *= numbers[0][numbers[0].length - 1] * numbers[numbers.length - 1][0];

console.log(product);