/*
===============================================================================
📘 LESSON: FUNCTION COMPOSITION (Right-to-Left / Inside-Out)
===============================================================================

👉 Core Idea:
Function composition is the process of binding separate, small functions 
together so that the output of one function automatically becomes the direct 
input of the next.

Mathematically, it mimics standard algebra notation:
(f ∘ g ∘ h)(x) = f(g(h(x)))

⚠️ Execution order always moves from RIGHT to LEFT (or inside to outside).
*/

// --- Raw Input Data ---
let name = "  Vivek Kumar  ";

// --- Specialized, Single-Purpose (Unary) Functions ---
let toLower = (str) => str.toLowerCase();
const removeSpaces = (str) => str.replaceAll(" ", "");
const exclamation = (str) => `${str}!`;


/*
===============================================================================
❌ Manual, Nested Composition (The "Onion" Code)
===============================================================================
This works, but it forces your brain to read from the deep inside out.
You have to find the input variable `name` first, then trace your steps backward.
*/

const nestedResult = exclamation(removeSpaces(toLower(name)));
console.log("Nested Result:", nestedResult); // "vivekkumar!"


/*
===============================================================================
🚀 The Reusable `compose` Engine
===============================================================================
Instead of wrapping parentheses manually every time, we write a generic engine.
It uses `reduceRight` to process the array of functions from the last element 
(right) to the first element (left).
*/

const compose = (...fns) => (initialValue) => {
  return fns.reduceRight((accumulator, currentFn) => currentFn(accumulator), initialValue);
};


/*
===============================================================================
🔥 Real Functional Composition in Action
===============================================================================
Because `compose` executes from right-to-left (or bottom-to-top), we write our 
functions in that exact sequence. 

Trace the data path upward:
1. `toLower` fires first on the input string.
2. `removeSpaces` catches the lowercase result.
3. `exclamation` catches the spaceless string and finishes the job.
*/

const createUsername = compose(
  exclamation,   // Step 3 (Runs last)  : Adds the symbol
  removeSpaces,  // Step 2              : Strips out empty spaces
  toLower        // Step 1 (Runs first) : Enforces lowercase
);

// Run our newly created pipeline wrapper
const composedResult = createUsername(name);
console.log("Composed Engine Result:", composedResult); // "vivekkumar!"


/*
===============================================================================
🧠 Key Takeaway
Using `compose` lets you build a single, highly declarative function wrapper 
(`createUsername`) out of raw independent building blocks, mirroring real 
mathematical composition.
===============================================================================
*/
