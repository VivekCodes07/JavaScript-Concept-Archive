// Q2. Filter even numbers from the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNums = numbers.filter((n) => {
    if (n % 2 == 0) {
        return n;
    }
});

console.log(evenNums);