let num1 = 12;
let num2 = 18;

while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
}

console.log(`GCD of 12 and 18 is ${num1}`);