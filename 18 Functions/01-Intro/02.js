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
======================== BASIC MEMORY UNDERSTANDING ========================

1. When you RUN this program →
   it is loaded into RAM and executed inside Node.js Runtime.

2. Inside RAM, we mainly focus on:
   👉 CALL STACK (for execution flow)

==========================================================================


======================== CALL STACK START ================================

1. Initially → Call Stack is EMPTY

2. Execution begins →

👉 Global Execution Context (GEC) is CREATED and PUSHED

   Stack:
   ┌──────────────────────────┐
   │ Global Execution Context │
   └──────────────────────────┘


======================== MEMORY CREATION PHASE ============================

3. JavaScript scans the code:

   Identifies:
   - Variables → a, b, result
   - Function → add()

4. Memory allocation:

   a → undefined
   b → undefined
   result → undefined
   add → function stored

5. Value assignment:

   a = 100
   b = 200

==========================================================================


======================== FUNCTION CALL ===================================

6. Execution reaches:

   let result = add();

👉 Function add() is CALLED

7. What happens?

   (1) New Execution Context is created for add()
   (2) It is PUSHED onto the stack

   Stack:
   ┌──────────────────────────┐
   │ add() Execution Context  │
   ├──────────────────────────┤
   │ Global Execution Context │
   └──────────────────────────┘


======================== INSIDE FUNCTION ================================

8. Execution enters add()

   let c = a + b;

   - 'c' is LOCAL to add()
   - Value: c = 100 + 200 = 300

9. return c;

👉 VERY IMPORTANT STEP:

   - The value 300 is RETURNED to the place where function was called
   - Control goes BACK to Global Execution Context
   - The function does NOT print anything itself


======================== RETURN FLOW =====================================

10. The returned value replaces the function call:

   let result = add();

   becomes:

   let result = 300;

11. So now:

   result = 300

==========================================================================


======================== FUNCTION END ====================================

12. After return →

👉 add() Execution Context is POPPED from stack

   Stack:
   ┌──────────────────────────┐
   │ Global Execution Context │
   └──────────────────────────┘


======================== FINAL EXECUTION ================================

13. Next line executes:

   console.log(result);

👉 Output: 300

==========================================================================


======================== PROGRAM END =====================================

14. After execution completes →

👉 Global Execution Context is also REMOVED

👉 Stack becomes EMPTY

==========================================================================


======================== KEY MEMORY CONCEPTS ==============================

✔ return sends VALUE back to the caller

✔ Execution always goes BACK after return

✔ Function Execution Context is destroyed after return

✔ result stores the returned value (300)

✔ Without return → function gives undefined by default

✔ Call Stack follows LIFO (Last In First Out)

==========================================================================

*/