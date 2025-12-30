/*******************************************************
 *  BEST JAVASCRIPT EXECUTION CONTEXT NOTES IN ONE FILE
 *******************************************************/

/*
-------------------------------------------------------
1. GLOBAL EXECUTION CONTEXT (GEC)
-------------------------------------------------------
- Created automatically when the script starts.
- Memory is allocated for variables and functions.
- Global object (window/global) is created.
- `this` points to the global object.

Two phases:
1) Creation Phase (memory setup)
2) Execution Phase (run code line-by-line)
*/

console.log("===== GLOBAL EXECUTION CONTEXT START =====");

var a = 10;

function greet() {
  console.log("Hello from greet()");
}

greet();


/*
-------------------------------------------------------
2. FUNCTION EXECUTION CONTEXT (FEC)
-------------------------------------------------------
Every time a function is called, a NEW execution context
is created.

A Function Execution Context contains:
- Variable Environment (local variables)
- Lexical Environment (scope)
- arguments object
- this keyword
*/

function add(x, y) {
  // Local variables stored in FEC
  var total = x + y;
  console.log("Inside add():", total);
  return total;
}

add(5, 7);


/*
-------------------------------------------------------
3. EXECUTION CONTEXT STACK / CALL STACK
-------------------------------------------------------
JavaScript uses a stack structure to manage execution.

When a function is called → push EC onto stack.
When function finishes → pop EC from stack.
*/

function one() {
  console.log("In function one()");
  two();
}

function two() {
  console.log("In function two()");
  three();
}

function three() {
  console.log("In function three()");
}

console.log("===== CALL STACK DEMO =====");
one();  // Triggers nested function calls


/*
-------------------------------------------------------
4. HOISTING
-------------------------------------------------------
During the Creation Phase, JS hoists:
- Variables → declared but value = undefined
- Functions → full function stored in memory
*/

console.log("===== HOISTING DEMO =====");

console.log(num); // undefined (hoisted)
var num = 50;

console.log(test()); // Works because function is hoisted
function test() {
  return "Function is fully hoisted!";
}


/*
-------------------------------------------------------
5. LEXICAL SCOPE & SCOPE CHAIN
-------------------------------------------------------
Lexical = where the function sits physically in the code.

Inner functions can access variables of parent functions,
but parents CANNOT access child's variables.
*/

console.log("===== SCOPE CHAIN DEMO =====");

var globalVar = "I am global";

function outer() {
  var outerVar = "I am outer";

  function inner() {
    var innerVar = "I am inner";

    console.log(globalVar);  // From global scope
    console.log(outerVar);   // From outer()
    console.log(innerVar);   // From inner()
  }

  inner();
}

outer();


/*
-------------------------------------------------------
6. EVENT LOOP & ASYNC EXECUTION CONTEXT
-------------------------------------------------------
JS is single-threaded, but handles async operations using:

- Web APIs (setTimeout, fetch, DOM events)
- Callback Queue
- Microtask Queue (Promises)
- Event Loop

Event Loop:
Runs when Call Stack is empty → moves queued tasks to stack.
*/

console.log("===== EVENT LOOP DEMO =====");

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback (moved from Web API)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise microtask");
  });

console.log("End");

/*
Execution order:
1. Start
2. End
3. Promise microtask (microtask queue runs before callback queue)
4. Timeout callback
*/


/*******************************************************
 *                      SUMMARY
 *******************************************************
- GEC created first.
- Each function call creates FEC.
- Call Stack manages which function runs.
- Hoisting prepares memory before execution.
- Scope Chain lets inner functions access outer variables.
- Event Loop allows async code while JS remains single-threaded.
*******************************************************/
