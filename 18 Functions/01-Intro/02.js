// Function with RETURN value

let a = 100;
let b = 200;

function add() {
  let c = a + b;
  return c;
}

let result = add();
console.log(result);

/*
======================== HOW JS HANDLES THIS ==============================

JavaScript doesn’t directly execute code.

👉 It always works in TWO phases inside every Execution Context:

1. Memory Creation Phase (Hoisting)
2. Execution Phase

==========================================================================


======================== GLOBAL EXECUTION CONTEXT =========================

As soon as program starts:

👉 Global Execution Context (GEC) is created
👉 Pushed into Call Stack

Now JS starts Phase 1...

==========================================================================


======================== 1️⃣ HOISTING (MEMORY PHASE) ======================

Think of this as:
👉 “JS is preparing memory before running anything”

In this phase:

✔ Variables → created with value = undefined  
✔ Functions → stored completely in memory  

-------------------- IN OUR CODE --------------------

let a, b, result;
function add() {...}

👉 Memory becomes:

a → undefined  
b → undefined  
result → undefined  
add → full function definition  

⚠️ This is HOISTING

✔ Variables are hoisted as undefined  
✔ Functions are hoisted with full body  

👉 Still NO execution yet

==========================================================================


======================== 2️⃣ EXECUTION PHASE ==============================

Now JS starts running line-by-line:

--------------------

let a = 100;
👉 a = 100

let b = 200;
👉 b = 200

function add() {...}
👉 already handled

--------------------

let result = add();

👉 Function is CALLED

==========================================================================


======================== FUNCTION EXECUTION CONTEXT =======================

When add() is called:

👉 New Execution Context is created
👉 Pushed onto Call Stack

Now AGAIN same 2 phases happen inside function

==========================================================================


======================== add() → HOISTING ================================

Inside function:

let c;

👉 c → undefined

(Local memory created for function)

==========================================================================


======================== add() → EXECUTION ===============================

Now function starts executing:

let c = a + b;

👉 JS looks for a, b
👉 Not in local → goes to Global

a = 100  
b = 200  

👉 c = 300

--------------------

return c;

👉 This is VERY IMPORTANT:

✔ Function STOPS immediately  
✔ Value (300) is sent BACK to caller  
✔ Control goes back to Global Execution Context  

==========================================================================


======================== WHAT RETURN ACTUALLY DOES ========================

This line:

let result = add();

👉 Internally becomes:

let result = 300;

✔ Returned value replaces the function call

👉 So now:
result = 300

==========================================================================


======================== FUNCTION ENDS ===================================

👉 After return:

add() Execution Context is REMOVED from stack

Now only Global Execution Context remains

==========================================================================


======================== FINAL EXECUTION ================================

console.log(result);

👉 Output: 300

==========================================================================


======================== PROGRAM FINISH ==================================

👉 After all code runs:

Global Execution Context is removed

👉 Call Stack becomes EMPTY

==========================================================================


======================== SIMPLE WAY TO REMEMBER ===========================

👉 Hoisting Phase:
   - Variables → undefined
   - Functions → full definition

👉 Execution Phase:
   - Values assigned
   - Function runs

👉 return:
   ✔ Sends value back
   ✔ Stops function immediately
   ✔ Replaces function call with returned value

==========================================================================

*/