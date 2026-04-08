// 1. No Input, No Output Function

let a = 100;
let b = 200;

function add() {
  let c = a + b;
  console.log(c);
}

add();

/*
======================== HOW JAVASCRIPT THINKS ============================

Whenever JavaScript runs a program, it does NOT directly start executing line-by-line.

Instead, it first prepares everything.

👉 Every Execution Context (Global or Function) runs in TWO steps:

1. Memory Creation Phase (also called Hoisting Phase)
2. Execution Phase

==========================================================================


======================== GLOBAL EXECUTION CONTEXT =========================

As soon as the program starts:

👉 Global Execution Context (GEC) is created
👉 It is pushed into the Call Stack

Now JavaScript starts Phase 1...

==========================================================================


======================== 1️⃣ MEMORY CREATION (HOISTING) ====================

Think of this like:
👉 “JS is scanning the code and setting up memory before doing anything”

In this phase:

✔ Variables are created and set to 'undefined'
✔ Functions are stored completely in memory

-------------------- IN OUR CODE --------------------

let a = 100;
let b = 200;

function add() {...}

👉 What JS does:

a → undefined
b → undefined
add → full function stored in memory

⚠️ This behaviour is called HOISTING

✔ Variables are "hoisted" with value = undefined  
✔ Functions are "hoisted" with full definition  

👉 Important:
JS has NOT executed anything yet

==========================================================================


======================== 2️⃣ EXECUTION PHASE ==============================

Now JavaScript starts running code line-by-line.

--------------------

let a = 100;
👉 a becomes 100

let b = 200;
👉 b becomes 200

function add() {...}
👉 Already handled, so skipped

add();
👉 Function is called

==========================================================================


======================== FUNCTION EXECUTION CONTEXT =======================

When add() is called:

👉 A new Execution Context is created
👉 It is pushed on top of the stack

Now SAME TWO PHASES happen again inside the function

==========================================================================


======================== add() → HOISTING (MEMORY PHASE) ==================

Inside function:

let c;

👉 c is created and set to undefined

c → undefined

==========================================================================


======================== add() → EXECUTION PHASE ==========================

Now code runs inside function:

let c = a + b;

👉 JS looks for a and b
👉 Not found locally → goes to Global scope

a = 100
b = 200

👉 c = 300

--------------------

console.log(c);
👉 Output: 300

==========================================================================


======================== FUNCTION ENDS ===================================

👉 Function execution finishes
👉 Its Execution Context is removed from stack

Now only Global Execution Context remains

==========================================================================


======================== PROGRAM FINISH ==================================

👉 After everything is done:

Global Execution Context is also removed

👉 Call Stack becomes empty

==========================================================================


======================== SIMPLE WAY TO REMEMBER ===========================

👉 Step 1: Hoisting (Memory Creation)
   - Variables → undefined
   - Functions → full definition

👉 Step 2: Execution
   - Values assigned
   - Code runs

👉 This happens:
✔ First in Global
✔ Then in every function

==========================================================================

*/