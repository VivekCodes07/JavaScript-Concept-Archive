// ==================================================
// 1. Function Declaration
// ==================================================

/*
  A function is a reusable block of code that performs
  a particular task.

  Instead of writing the same logic again and again,
  we can define it once and call it whenever required.

  Here, we are declaring a function using the 'function'
  keyword. We can also call this function before its
  declaration because function declarations are hoisted.
*/

function add(a, b) {
  return a + b;
}

console.log("Addition:", add(10, 20));

// ==================================================
// 2. Function Expression
// ==================================================

/*
  In a function expression, we create a function and
  assign it to a variable.

  Notice that we are not giving the function a name here.
  This is called an anonymous function.

  Unlike function declarations, function expressions
  assigned to const or let cannot be accessed before
  their initialization.
*/

const subtract = function (a, b) {
  return a - b;
};

console.log("Subtraction:", subtract(10, 5));

// ==================================================
// 3. Arrow Function
// ==================================================

/*
  Arrow functions provide a shorter syntax for writing
  functions in JavaScript.

  They are commonly used when passing functions as
  arguments, especially in array methods and callbacks.

  The logic is exactly the same as a regular function
  for this example, but the syntax is shorter.

  One important difference: arrow functions do not have
  their own 'this' or 'arguments' bindings.
*/

const multiply = (a, b) => {
  return a * b;
};

console.log("Multiplication:", multiply(3, 4));

// ==================================================
// 4. One-Line Arrow Function
// ==================================================

/*
  What if our arrow function contains only one expression?

  In that case, we can remove the curly braces and
  the return keyword.

  JavaScript automatically returns the result of that
  expression. This is called an implicit return.
*/

const divide = (a, b) => a / b;

console.log("Division:", divide(20, 2));

// ==================================================
// 5. IIFE (Immediately Invoked Function Expression)
// ==================================================

/*
  Normally, we define a function first and call it
  separately whenever we need it.

  But what if we want a function to execute immediately
  after it is created?

  That's where IIFE comes in.

  We wrap the function inside parentheses to make it
  an expression and then add () at the end to invoke it.

  IIFEs were commonly used to create private scopes
  before modern JavaScript introduced modules.
*/

(function () {
  const message = "I run immediately!";

  console.log(message);
})();

// ==================================================
// 6. Callback Function
// ==================================================

/*
  So far, we have called functions directly.

  But JavaScript also allows us to pass one function
  as an argument to another function.

  A function passed as an argument to another function
  is called a CALLBACK FUNCTION.

  Let's understand this with a real-world example:

  Imagine a student completes an assignment and then
  the teacher checks it.

  The teacher doesn't need to know exactly what happens
  after the checking process. We simply provide a
  function that should execute once checking is complete.

  That provided function is our callback.
*/

function checkAssignment(studentName, callback) {
  console.log(`${studentName} has submitted the assignment.`);

  console.log("Checking the assignment...");

  // Once the checking is complete, execute the callback.
  callback();
}

function showResult() {
  console.log("Assignment checked successfully!");
}

checkAssignment("Vivek", showResult);

/*
  Notice something important:

  We passed showResult without parentheses.

  showResult  -> Passes the function itself.
  showResult() -> Executes the function immediately
                  and passes its returned value.

  We want checkAssignment() to decide when to execute
  the callback, so we pass the function itself.
*/

// ==================================================
// 7. Callback Function with Parameters
// ==================================================

/*
  A callback can also receive parameters.

  Let's say we are building a calculator. Instead of
  creating separate functions for addition, subtraction,
  and multiplication, we can create one function that
  accepts another function to perform the calculation.

  This makes our code reusable and flexible.
*/

function calculate(a, b, operation) {
  console.log("Performing calculation...");

  // Execute the callback and pass the required values.
  const result = operation(a, b);

  return result;
}

// Passing an anonymous function as a callback.
const additionResult = calculate(10, 5, function (x, y) {
  return x + y;
});

console.log("Addition Result:", additionResult);

// We can also pass an arrow function as a callback.
const multiplicationResult = calculate(10, 5, (x, y) => {
  return x * y;
});

console.log("Multiplication Result:", multiplicationResult);

// ==================================================
// 8. Higher-Order Functions (HOF)
// ==================================================

/*
  Now that we understand callbacks, let's understand
  another important concept: Higher-Order Functions.

  A Higher-Order Function is simply a function that
  does at least one of the following:

  1. Accepts another function as an argument.
  2. Returns another function as its result.

  Remember our calculate() function above?

  It accepts another function (operation) as an argument.
  Therefore, calculate() is also a Higher-Order Function.

  Let's understand both cases separately.
*/

// --------------------------------------------------
// Example 1: Accepting a Function as an Argument
// --------------------------------------------------

/*
  Here, performOperation() accepts another function
  called operation.

  We can pass different functions depending on what
  operation we want to perform.

  The main function doesn't need to know whether we
  want addition or multiplication. It simply executes
  the function that we provide.
*/

function performOperation(a, b, operation) {
  return operation(a, b);
}

const addNumbers = (x, y) => x + y;
const multiplyNumbers = (x, y) => x * y;

console.log("HOF Addition:", performOperation(10, 20, addNumbers));

console.log("HOF Multiplication:", performOperation(10, 20, multiplyNumbers));

// --------------------------------------------------
// Example 2: Returning a Function from Another Function
// --------------------------------------------------

/*
  A Higher-Order Function can also return another function.

  Imagine we frequently need to calculate double or
  triple of different numbers.

  Instead of writing separate functions for each case,
  we can create a function that generates other functions.

  Here, createMultiplier() takes a multiplier and returns
  a new function that uses that multiplier.

  The returned function remembers the value of multiplier
  even after createMultiplier() has finished executing.
  This behaviour is related to a concept called CLOSURE,
  which we will study separately.
*/

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double:", double(5));
console.log("Triple:", triple(5));

// ==================================================
// 9. Built-in Higher-Order Functions
// ==================================================

/*
  JavaScript already provides several built-in
  Higher-Order Functions.

  We commonly use them when working with arrays.

  These methods accept callback functions, which are
  executed for each element or during the array operation.

  Let's understand three of the most commonly used ones:
  map(), filter(), and reduce().
*/

const numbers = [1, 2, 3, 4, 5];

// --------------------------------------------------
// A. map()
// --------------------------------------------------

/*
  Suppose we have an array of numbers and want to
  create a new array containing their doubled values.

  We could use a loop, but map() makes this easier.

  map() executes the callback for every element and
  returns a NEW array containing the returned values.

  The original array remains unchanged.
*/

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);

// --------------------------------------------------
// B. filter()
// --------------------------------------------------

/*
  Suppose we only want even numbers from our array.

  Instead of manually checking every element using
  a loop, we can use filter().

  filter() executes the callback for every element.

  If the callback returns true, that element is included
  in the new array. Otherwise, it is excluded.

  Just like map(), filter() does not modify the original
  array. It returns a new array.
*/

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);

// --------------------------------------------------
// C. reduce()
// --------------------------------------------------

/*
  What if we want to calculate the sum of all numbers
  in an array?

  We can use reduce().

  reduce() processes the array and combines its elements
  into a single accumulated result.

  It takes two important arguments:

  1. Callback function:
     - accumulator: Stores the result accumulated so far.
     - currentValue: The current element being processed.

  2. Initial value:
     - The starting value of the accumulator.

  Here, our accumulator starts at 0.

  Each iteration adds the current number to the
  accumulated total until all elements are processed.
*/

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Sum of Numbers:", sum);

// ==================================================
// 10. Quick Revision
// ==================================================

/*
  Function Declaration:
  A function defined using the function keyword.

  Function Expression:
  A function assigned to a variable.

  Arrow Function:
  A shorter syntax for writing functions.

  IIFE:
  A function that executes immediately after creation.

  Callback Function:
  A function passed as an argument to another function.

  Higher-Order Function:
  A function that accepts another function or returns one.

  map():
  Transforms array elements and returns a new array.

  filter():
  Selects elements based on a condition.

  reduce():
  Combines array elements into a single accumulated value.
*/
