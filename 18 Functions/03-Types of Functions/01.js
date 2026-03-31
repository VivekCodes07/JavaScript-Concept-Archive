// ==============================
// 1. Function Declaration
// A standard way to define a function.
// ==============================
function add(a, b) {
  return a + b;
}

console.log("Addition:", add(10, 20));


// ==============================
// 2. Function Expression
// Function defined within an expression context.
// ==============================
const subtract = function (a, b) {
  return a - b;
};

console.log("Subtraction:", subtract(10, 5));


// ==============================
// 3. Arrow Function
// A concise syntax for writing function.
// ==============================
const product = (a, b) => {
  return a * b;
};

console.log("Multiplication:", product(3, 4));


// ==============================
// How to write an arrow function as a one-liner?
// If a function has only a single line in its body,
// curly brackets are not required and you can write
// the body directly after the arrow.
// ==============================
const division = (a, b) => a / b;

console.log("Division:", division(20, 2));


// ==============================
// 4. IIFE (Immediately Invoked Function Expression)
// Functions that execute immediately after creation.
// ==============================
(function () {
  console.log("⚡ I run immediately..");
})();