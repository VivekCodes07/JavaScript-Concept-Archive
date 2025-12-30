const score = 700;
console.log(typeof score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.random()); // Values b/w (0 - 9)
console.log((Math.random()*10) + 1); // (1 - 9)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));