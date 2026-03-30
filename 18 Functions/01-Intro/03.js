// Function with PARAMETERS (x, y) and ARGUMENTS (a, b)

function add(x, y) {
  let c = x + y;
  console.log(c);
}

let a = 100;
let b = 200;
add(a, b);

/*
======================== BASIC IDEA =======================================

✔ x, y → PARAMETERS (placeholders inside function)

✔ a, b → ARGUMENTS (actual values passed during function call)

✔ Value flow: a → x, b → y

==========================================================================


======================== CALL STACK START ================================

1. Initially → Call Stack is EMPTY

2. Execution starts →

👉 Global Execution Context (GEC) is CREATED and PUSHED

   Stack:
   ┌──────────────────────────┐
   │ Global Execution Context │
   └──────────────────────────┘


======================== MEMORY CREATION PHASE ============================

3. JavaScript scans the code:

   Finds:
   - Function → add(x, y)
   - Variables → a, b

4. Memory allocation:

   add → function stored
   a → undefined
   b → undefined

5. Value assignment:

   a = 100
   b = 200

==========================================================================


======================== FUNCTION CALL ===================================

6. Execution reaches:

   add(a, b);

👉 Function is CALLED with arguments:

   add(100, 200)

7. What happens internally?

   (1) New Execution Context is created for add()
   (2) It is PUSHED onto the Call Stack

   Stack:
   ┌──────────────────────────┐
   │ add() Execution Context  │
   ├──────────────────────────┤
   │ Global Execution Context │
   └──────────────────────────┘


======================== PARAMETER INITIALIZATION =========================

8. Inside add() Execution Context:

👉 PARAMETERS receive values:

   x = 100   (from a)
   y = 200   (from b)

✔ These are LOCAL variables inside function

✔ They are completely separate from a and b

==========================================================================


======================== FUNCTION EXECUTION ==============================

9. Now execution runs inside function:

   let c = x + y;

   - c is LOCAL variable
   - Value: c = 100 + 200 = 300

10. console.log(c);

👉 Output: 300

==========================================================================


======================== FUNCTION END ====================================

11. Function completes →

👉 add() Execution Context is POPPED from stack

   Stack:
   ┌──────────────────────────┐
   │ Global Execution Context │
   └──────────────────────────┘


======================== PROGRAM END =====================================

12. After execution finishes →

👉 Global Execution Context is also REMOVED

👉 Stack becomes EMPTY

==========================================================================


======================== KEY MEMORY CONCEPTS ==============================

✔ Parameters (x, y) are LOCAL to the function

✔ Arguments (a, b) pass VALUES, not variables themselves

✔ x and y are COPIES of a and b (for primitive values)

✔ Changes to x or y do NOT affect a or b

✔ Each function call creates a NEW Execution Context

✔ Call Stack follows LIFO (Last In First Out)

==========================================================================

*/