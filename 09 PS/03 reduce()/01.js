// Q1. Find the sum of all numbers.

const numbers = [5, 10, 15, 20];

const sum = numbers.reduce((acc, n) => {
    return acc + n;
}, 0);

console.log(sum);