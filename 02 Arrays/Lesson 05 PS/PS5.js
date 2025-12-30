// Q1: Use slice to copy only "banana" and "mango":

let fruits = ["apple", "banana", "mango", "orange"];

console.log(fruits.slice(1, 3)); 


// 2: Remove "blue" using splice:

let colors = ["red", "blue", "green"];

colors.splice(1, 1);

console.log(colors);


// Q3: Insert "pink" at index 1 using splice:

let shades = ["white", "black"];

shades.splice(1, 0, "Pink");

console.log(shades);


// Q4: Combine these two arrays using concat:

let a = [1, 2];
let b = [3, 4];

console.log(a.concat(b));


/*
Q5: Explain the difference:

· slice vs splice
. Which one changes the original array?

Ans. Slice -> Gives out the copy of portion of the array.

Splice -> It is used to modify contents of the array by removing, replacing, and inserting elements.

Splice changes the original array.
*/


