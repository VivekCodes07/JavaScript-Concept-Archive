/* ==========================================================================
   🔥 LESSON 4: HIGHER ORDER FUNCTIONS (REAL UNDERSTANDING)
   ========================================================================== */

/* 🧠 WHAT ARE HIGHER ORDER FUNCTIONS?
   A function is "higher order" if it:
   → Takes another function as an argument
   → OR returns a new function

   Why is this possible in JavaScript?
   → Functions are First-Class Citizens (they are treated just like values)
   
   This means you can:
   * Store them in variables
   * Pass them into other functions
   * Return them from other functions
*/

/* --------------------------------------------------------------------------
   ## BASIC EXAMPLE (THE FOUNDATION)
   -------------------------------------------------------------------------- */

function greet(name) {
  return `Hello ${name}`; // Optimization: Uses modern template literals
}

function process(fn) {
  return fn("Vivek");
}

console.log(process(greet)); // "Hello Vivek"

/* Execution Blueprint:
   * `greet` is passed into `process` exactly like a text string or number value.
   * `process` acts as the Higher Order Function.
*/


/* --------------------------------------------------------------------------
   ## 🧠 THE "WHY": IMPERATIVE VS DECLARATIVE
   -------------------------------------------------------------------------- */

/* Without HOFs (Imperative):
   → We tell the computer HOW to do it line-by-line.
   → "Create empty array → loop through data → check conditions → push manually."

   With HOFs (Declarative):
   → We tell the computer WHAT we want to happen.
   → "Filter this data pipeline."
   
   👉 Less control code = fewer surface bugs = massive readability.
*/


/* --------------------------------------------------------------------------
   ## ⚙️ THE CORE IDEA: DATA PIPELINES
   -------------------------------------------------------------------------- */

/* Arrays are not static boxes of data. Think of them as liquid streams.
   Flow: [Raw Data] → [Filter] → [Map] → [Reduce] → [Final Result]
   Rule: Each pipeline step must do exactly ONE predictable job.
*/

const nums = [1, 2, 3, 4, 5];


/* --------------------------------------------------------------------------
   ## 🟢 FILTER (Selection)
   -------------------------------------------------------------------------- */

/* Intuition: "I only want specific items from this group."
   Mental Question: "Should this item stay? (true/false)"
*/

const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

/* Key Characteristics:
   * Immutability: Does NOT mutate the original array.
   * Return Value: Creates a shallow copy containing only matching elements.
   * Output Size: Always smaller than or equal to the original array.
*/


/* --------------------------------------------------------------------------
   ## 🔵 MAP (Transformation)
   -------------------------------------------------------------------------- */

/* Intuition: "Transform every item in place without changing the shape."
   Mental Question: "What should this specific item turn into?"
*/

const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

/* Key Characteristics:
   * Immutability: Original array remains perfectly untouched.
   * Output Size: Array length is ALWAYS exactly the same.
   * One-to-One: Modifies values, maintains index positions.
*/


/* --------------------------------------------------------------------------
   ## 🔴 REDUCE (Accumulation)
   -------------------------------------------------------------------------- */

/* Intuition: "Condense an entire collection down into a single outcome."
   Mental Question: "How should the current item update our running total?"
*/

const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

/* Execution Trace (Initial Value = 0):
   ┌───────┬───────────┬─────────────┬──────────────┐
   │ Loop  │ acc (old) │ curr (item) │ acc + curr   │
   ├───────┼───────────┼─────────────┼──────────────┤
   │ 1st   │     0     │      1      │      1       │
   │ 2nd   │     1     │      2      │      3       │
   │ 3rd   │     3     │      3      │      6       │
   │ 4th   │     6     │      4      │      10      │
   │ 5th   │    10     │      5      │      15 (End)│
   └───────┴───────────┴─────────────┴──────────────┘

   Key Characteristics:
   * Output Flexibility: Return value can be anything (Number, Object, Array).
   * Initial Value: Always supply the second parameter (0, [], {}) to avoid bugs.
*/


/* --------------------------------------------------------------------------
   ## 🔥 COMBINATION (THE REAL SKILL)
   -------------------------------------------------------------------------- */

/* Problem: Get the total sum of all numbers greater than 2 */
const result = nums
  .filter(n => n > 2)        // Pipeline Step 1: Discard [1, 2] -> Yields [3, 4, 5]
  .reduce((acc, n) => acc + n, 0); // Pipeline Step 2: Accumulate -> Yields 12

console.log(result); // 12

/* Pipeline Advantage: Zero temporary variables. Zero manual iterator states. */


/* --------------------------------------------------------------------------
   ## 🔥 REAL-WORLD APPLICATION
   -------------------------------------------------------------------------- */

const orders = [
  { id: 1, amount: 1200, status: "completed" },
  { id: 2, amount: 800,  status: "pending" },
  { id: 3, amount: 1500, status: "completed" },
  { id: 4, amount: 400,  status: "completed" }
];

/* Goal: Find total revenue of completed orders with an amount > 1000.
   Correction Note: original comment stated answer was 2700. 
   Math check: 1200 (completed & >1000) + 1500 (completed & >1000) = 2700. Correct!
*/
const revenue = orders
  .filter(o => o.status === "completed" && o.amount > 1000)
  .reduce((acc, o) => acc + o.amount, 0);

console.log(revenue); // 2700


/* --------------------------------------------------------------------------
   ## ⚠️ THE 3 CRITICAL ANTI-PATTERNS
   -------------------------------------------------------------------------- */

/* 1. Mismatched Element Data Types
   ❌ Breaking Accumulator:
   orders.filter(...).reduce((acc, o) => acc + o, 0); // Result: "[object Object]"
   
   ✅ Targeting Properties:
   orders.filter(...).reduce((acc, o) => acc + o.amount, 0);


   2. Redundant Mapping (The Speed Bump)
   ❌ Wasteful extra loop:
   orders.filter(o => o.id > 1).map(o => o.amount).reduce((acc, amt) => acc + amt, 0);
   
   ✅ Direct extraction:
   orders.filter(o => o.id > 1).reduce((acc, o) => acc + o.amount, 0);


   3. Flawed Sequencing Order
   ❌ Transforming before clearing data:
   const broken = array.map(heavyTransformation).filter(condition);
   
   ✅ Cleaning data before operating on it:
   const efficient = array.filter(condition).map(heavyTransformation);
   
   Reason: Drop unwanted junk first to reduce data cycles!
*/


/* --------------------------------------------------------------------------
   ## 🧠 FINAL PARADIGM SHIFT
   -------------------------------------------------------------------------- */

/* Mental Matrix for Problem Solving:
   Step 1: "What items should be thrown out?" ──> .filter()
   Step 2: "Do these items need to change form?" ─> .map()
   Step 3: "Do I need to compile one unified answer?" ─> .reduce()

   🚀 Level Progressions:
   • Beginner: Thinks exclusively in for/while loops.
   • Intermediate: Uses isolated map/filter/reduce blocks.
   • Advanced: Understands applications purely as functional data flows.

   FINAL CORE RULE: 
   "Stop micro-managing loops. Manage the flow of the data."
*/
