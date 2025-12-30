// Comparison Operators in JavaScript

console.log("==  Equal to (value only)");
console.log(5 == "5");  // true

console.log("=== Strict Equal (value + type)");
console.log(5 === "5"); // false

console.log("!=  Not Equal (value only)");
console.log(5 != "5");  // false

console.log("!== Strict Not Equal (value + type)");
console.log(5 !== "5"); // true

console.log(">   Greater Than");
console.log(10 > 6);    // true

console.log("<   Less Than");
console.log(3 < 7);     // true

console.log(">=  Greater Than or Equal To");
console.log(6 >= 6);    // true

console.log("<=  Less Than or Equal To");
console.log(4 <= 1);    // false

// Bonus example with variables
let a = 10;
let b = 20;

console.log("a < b =>", a < b);   // true
console.log("a == b =>", a == b); // false
console.log("a !== b =>", a !== b); // true
