// -------------------------------------------------------------
// MASTER JAVASCRIPT FILE: Understanding "this", Regular Functions,
// Arrow Functions, Implicit Return & Object Returning
// -------------------------------------------------------------
// This file explains EVERYTHING in the clearest way possible.
// Read it from top to bottom for a complete understanding.
// -------------------------------------------------------------

// ===================== 1. "this" inside Objects =====================

const user = {
  username: "Michael",
  price: 999,

  // Regular function inside object → "this" refers to THIS object
  welcomeMsg: function () {
    console.log(`${this.username}, Welcome to the Website`);
    console.log("Current context:", this); // prints current user object
  },
};

user.welcomeMsg();

// Changing the property changes the output because "this" refers to object
user.username = "Brock";
user.welcomeMsg();

console.log("Global this:", this);
// In Node: {}   |   In Browser: window object


// ===================== 2. Regular Functions & this =====================

// Regular function, called normally → this = global object
function testFunction() {
  let name = "Hulk";
  console.log("Inside testFunction → this.name:", this.name);
  // undefined because THIS function does not own "name"
}

testFunction();


// Function Expression (still a regular function)
const person = function () {
  let name = "Tony";
  console.log("Inside person() → this.name:", this.name);
};

// person(); // uncomment to test


// ===================== 3. Arrow Functions & Lexical this =====================

// Arrow function does NOT create its own "this"
// It borrows "this" from the surrounding (parent) scope
const arrowTest = () => {
  console.log("Arrow function this:", this);
  // Will refer to global scope (because parent scope is global)
};

arrowTest();


// Example showing difference between regular function & arrow function
const demo = {
  value: 100,

  regularFn: function () {
    console.log("regularFn this.value =", this.value); // 100
  },

  arrowFn: () => {
    console.log("arrowFn this.value =", this.value); // undefined (no own this)
  },
};

demo.regularFn();
demo.arrowFn();


// ===================== 4. Arrow Function Syntax =====================

// ---- Normal Arrow Function ----
const add = (a, b) => {
  return a + b; // explicit return
};

console.log("add(3, 5) =", add(3, 5));


// ---- Implicit Return (NO curly braces) ----
const multiply = (a, b) => a * b;

console.log("multiply(5, 4) =", multiply(5, 4));

// Or using parentheses (optional, but clean)
const multiply2 = (a, b) => (a * b);


// RULE:
// ✔ If you use {} → you MUST use `return`
// ✔ If you use () or no braces → automatic return


// ===================== 5. Returning Objects in Arrow Functions =====================

// Must wrap object in parentheses, otherwise JS thinks {} is function body
const getUserObj = () => ({ username: "Vivek", age: 25 });

console.log("getUserObj():", getUserObj());

// WRONG: JS thinks {} is a code block, not an object
// const wrongObj = () => { username: "Vivek" }; // undefined


// ===================== 6. Bonus: Arrow Functions in Callbacks =====================

const numbers = [1, 2, 3, 4, 5];

// Using normal function
const doubled1 = numbers.map(function (num) {
  return num * 2;
});

// Using arrow function (cleaner)
const doubled2 = numbers.map((num) => num * 2);

console.log("Doubled Numbers:", doubled2);


// ===================== END OF MASTER FILE =====================

// You now understand:
// ✔ What "this" means in objects
// ✔ Regular functions vs arrow functions
// ✔ Lexical this
// ✔ Implicit returns
// ✔ Returning objects in arrow functions
// ✔ Practical usage examples
