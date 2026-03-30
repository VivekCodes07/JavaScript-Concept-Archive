// 1. No Input, No Output Function

let a = 100;
let b = 200;

function add() {
  let c = a + b;
  console.log(c);
}

add();

/*
======================== BASIC MEMORY UNDERSTANDING ========================

1. When you WRITE this program → it is temporarily in RAM (editor memory).

2. When you SAVE this file (script.js) → it is stored permanently on Hard Disk.

3. When you RUN this program using Node.js → 
   the file is LOADED back into RAM for execution.

4. Inside RAM, Node.js creates a Runtime Environment which includes:
   - Call Stack (VERY IMPORTANT for us)
   - Heap (for objects, advanced topic)
   - Event Loop (for async operations)

👉 In this example, we ONLY focus on the CALL STACK.

==========================================================================


======================== CALL STACK EXECUTION =============================

1. Initially → Call Stack is EMPTY.

2. As soon as execution starts →
   JavaScript creates something called:

   👉 Global Execution Context (GEC)

   This is pushed onto the Call Stack.

   Stack:
   ┌──────────────────────────┐
   │ Global Execution Context │
   └──────────────────────────┘


======================== MEMORY CREATION PHASE ============================

3. JavaScript scans the entire code (before executing line-by-line).

   It identifies:
   - Variables outside functions → a, b
   - Functions → add()

4. Memory allocation happens:

   - 'a' → reserved in memory
   - 'b' → reserved in memory
   - 'add' → function definition stored

   (Note: variables initially get undefined, then values are assigned)

5. Then values are assigned:

   a = 100
   b = 200

6. Function 'add' is stored but NOT executed yet.

==========================================================================


======================== FUNCTION EXECUTION ===============================

7. Now JavaScript reaches:

   add();

👉 Function is CALLED

8. When a function is called:

   TWO IMPORTANT THINGS HAPPEN:

   (1) A new Execution Context is created for the function
   (2) It is PUSHED onto the Call Stack

   Stack becomes:
   ┌──────────────────────────┐
   │ add() Execution Context  │
   ├──────────────────────────┤
   │ Global Execution Context │
   └──────────────────────────┘


======================== INSIDE FUNCTION ================================

9. Now execution moves INSIDE the function add()

   let c = a + b;

   - 'c' is a LOCAL variable (exists only inside this function)
   - It gets memory inside add() Execution Context
   - Value: c = 100 + 200 = 300

10. console.log(c);

   Output: 300


======================== FUNCTION COMPLETION =============================

11. Function execution finishes →

👉 Its Execution Context is REMOVED (POP) from the Stack

   Stack becomes:
   ┌──────────────────────────┐
   │ Global Execution Context │
   └──────────────────────────┘


======================== PROGRAM END =====================================

12. After everything is done →

👉 Global Execution Context is also removed

👉 Stack becomes EMPTY again

==========================================================================


======================== KEY MEMORY CONCEPTS ==============================

✔ Call Stack works on LIFO (Last In First Out)

✔ Each function call creates a NEW Execution Context

✔ Local variables (like 'c') exist ONLY inside their function

✔ Global variables (like 'a', 'b') exist throughout the program

✔ Functions are stored in memory but executed ONLY when called

==========================================================================

*/