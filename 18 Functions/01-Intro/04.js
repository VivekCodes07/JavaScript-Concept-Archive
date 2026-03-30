// Function with PARAMETERS + RETURN VALUE

function add(x, y) {
    let c = x + y;
    return c;
}

let a = 100;
let b = 200;
let result = add(a, b);
console.log(result);

/*
======================== CORE IDEA ========================================

✔ x, y → PARAMETERS (local placeholders inside function)

✔ a, b → ARGUMENTS (actual values passed)

✔ return → sends VALUE back to caller

✔ result → stores returned value

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

3. JavaScript scans entire code FIRST:

   Finds:
   - Function → add(x, y)
   - Variables → a, b, result

4. Memory allocation:

   add → function stored
   a → undefined
   b → undefined
   result → undefined

5. Value assignment:

   a = 100
   b = 200

==========================================================================


======================== FUNCTION CALL ===================================

6. Execution reaches:

   let result = add(a, b);

👉 Function is CALLED with arguments:

   add(100, 200)

7. Internally:

   (1) New Execution Context for add() is CREATED
   (2) It is PUSHED onto the Call Stack

   Stack:
   ┌──────────────────────────┐
   │ add() Execution Context  │
   ├──────────────────────────┤
   │ Global Execution Context │
   └──────────────────────────┘


======================== PARAMETER MAPPING ================================

8. Inside add() Execution Context:

👉 PARAMETERS receive values:

   x = 100   (value of a)
   y = 200   (value of b)

✔ x and y are LOCAL COPIES (primitive values)

==========================================================================


======================== FUNCTION EXECUTION ==============================

9. Execute function body:

   let c = x + y;

   - c is LOCAL variable
   - Value: c = 100 + 200 = 300

10. return c;

👉 VERY IMPORTANT:

   - Value 300 is RETURNED
   - Control goes BACK to Global Execution Context

==========================================================================


======================== RETURN FLOW =====================================

11. The function call is replaced with returned value:

   let result = add(a, b);

   becomes:

   let result = 300;

12. So:

   result = 300

==========================================================================


======================== FUNCTION END ====================================

13. After return →

👉 add() Execution Context is REMOVED (POP)

   Stack:
   ┌──────────────────────────┐
   │ Global Execution Context │
   └──────────────────────────┘


======================== FINAL EXECUTION ================================

14. Next line runs:

   console.log(result);

👉 Output: 300

==========================================================================


======================== PROGRAM END =====================================

15. After everything finishes →

👉 Global Execution Context is also REMOVED

👉 Call Stack becomes EMPTY

==========================================================================


======================== KEY MEMORY CONCEPTS ==============================

✔ Arguments → passed into parameters (a → x, b → y)

✔ Parameters are LOCAL variables inside function

✔ return sends VALUE back and ENDS function immediately

✔ Execution always resumes AFTER function call

✔ result stores the returned value

✔ Function Execution Context is destroyed after return

✔ Call Stack follows LIFO (Last In First Out)

==========================================================================

*/