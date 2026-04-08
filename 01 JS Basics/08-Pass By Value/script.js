/*
When a value within one variable is passed to another variable, it can be done in two ways:
    1. Pass by Value
    2. Pass by Reference
*/

/*----------Pass by Value--------- */
let a = 100;
let b;

b = a; // Copy of the value stored in a is passed to b 

console.log(`Value of a = ${a}`);
console.log(`Value of b = ${b} \n`);

console.log("Assigning b = 200...\n")
b = 200;
console.log(`Value of a = ${a}`);
console.log(`Value of b = ${b}`);


/* In Pass by Value, you have two variables right, with the same value.
   But they're two different copies. Now if I change one, the other doesn't get affected.
*/
