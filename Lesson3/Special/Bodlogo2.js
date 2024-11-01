//массив доторх 0 болон 5-р  төгсссөн тоонуудын нийлбэрийг ол
let sum = 0;
let numbers = [[20, 15, 5, 9], [315, 70, 43, 29], [13, 8, 165, 22], [25, 30, 1, 95]];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] % 10 === 0 || numbers[i][j] % 10 === 5) {
            sum += numbers[i][j];
        }
    }
}

console.log(sum);