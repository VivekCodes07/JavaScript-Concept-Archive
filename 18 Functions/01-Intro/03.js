// Function with PARAMETERS (x, y) and ARGUMENTS (a, b)

function add(x, y) {
  let c = x + y;
  console.log(c);
}

let a = 100;
let b = 200;
add(a, b);

/*
======================== HOW TO THINK ABOUT THIS ==========================

👉 JavaScript always runs code in TWO phases:

1. Memory Creation Phase (Hoisting)
2. Execution Phase

And yes — this happens:
✔ First in Global Execution Context
✔ Then AGAIN inside every function

==========================================================================


======================== GLOBAL EXECUTION CONTEXT =========================

As soon as program starts:

👉 Global Execution Context (GEC) is created
👉 Pushed into Call Stack

Now JS begins Phase 1...

==========================================================================


======================== 1️⃣ HOISTING (MEMORY PHASE) ======================

Think of this like:
👉 “JS is setting up everything before running code”

In this phase:

✔ Variables → created with value = undefined  
✔ Functions → stored completely in memory  

-------------------- IN OUR CODE --------------------

function add(x, y) {...}
let a, b;

👉 Memory becomes:

add → full function definition  
a → undefined  
b → undefined  

⚠️ This is HOISTING

✔ Functions are fully available even before execution  
✔ Variables exist but are undefined  

==========================================================================


======================== 2️⃣ EXECUTION PHASE ==============================

Now JS runs code line-by-line:

--------------------

function add(x, y) {...}
👉 Already handled (skip)

let a = 100;
👉 a = 100

let b = 200;
👉 b = 200

--------------------

add(a, b);

👉 Function is called with values:

add(100, 200)

==========================================================================


======================== FUNCTION EXECUTION CONTEXT =======================

👉 When function is called:

1. New Execution Context is created
2. Pushed onto Call Stack

Now SAME TWO PHASES happen inside function

==========================================================================


======================== add() → HOISTING ================================

Inside function:

let c;

👉 c → undefined

Also:
👉 Parameters are prepared (but values assigned in execution phase)

==========================================================================


======================== add() → EXECUTION ===============================

Now function starts executing:

👉 PARAMETERS RECEIVE VALUES:

x = 100   (value of a)
y = 200   (value of b)

✔ x and y are LOCAL to function
✔ They are copies (for primitive values)

--------------------

let c = x + y;

👉 c = 300

--------------------

console.log(c);

👉 Output: 300

==========================================================================


======================== IMPORTANT UNDERSTANDING ==========================

👉 Value flow:

a → x  
b → y  

✔ Only VALUES are passed (not the original variables)

So:

x = 100 (copy)
y = 200 (copy)

👉 If x changes, a does NOT change

==========================================================================


======================== FUNCTION END ====================================

👉 Function finishes execution

👉 Its Execution Context is removed from stack

Now only Global Execution Context remains

==========================================================================


======================== PROGRAM END =====================================

👉 After everything finishes:

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

👉 Parameters vs Arguments:

✔ Parameters → placeholders (x, y)
✔ Arguments → actual values (a, b)

👉 Values are COPIED (for primitives)

==========================================================================

*/