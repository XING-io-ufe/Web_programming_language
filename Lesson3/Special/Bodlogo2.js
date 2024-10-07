//массив доторх 0 болон 5-р  төгсссөн тоонуудын нийлбэрийг ол
let sum = 0;
let numbers = [[10, 15, 30], [25, 35, 70], [315, 165, 5], [95]];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] % 10 === 0 || numbers[i][j] % 10 === 5) {
        sum += numbers[i][j];
        }
    }
}

console.log(sum);