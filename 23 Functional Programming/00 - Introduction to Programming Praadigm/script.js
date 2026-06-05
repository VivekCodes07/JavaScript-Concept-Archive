/***********************************************************************
 * 📌 TOPIC: Imperative vs Declarative Programming
 *          + Functional Programming in JavaScript
 *
 * 🧠 Goal (for myself):
 * Understand the difference clearly + write cleaner JS code
 **********************************************************************/



/***********************************************************************
 * 🔴 1. IMPERATIVE PROGRAMMING → "HOW to do it"
 *
 * 👉 I control EVERYTHING step-by-step
 * 👉 Loops, indexes, mutations = my responsibility
 * 👉 More control, but more chances of bugs
 **********************************************************************/

const numbers = [1, 2, 3, 4, 5];

let doubledImperative = []; // empty array to store result

for (let i = 0; i < numbers.length; i++) {
    // step 1: access element
    // step 2: multiply
    // step 3: push result
    doubledImperative.push(numbers[i] * 2);
}

console.log("🔴 Imperative Result:", doubledImperative);

/*
🧠 My take:
- I am micromanaging everything
- Code is longer + less readable
- Easy to mess up (index errors, mutation issues)
*/



/***********************************************************************
 * 🟢 2. DECLARATIVE PROGRAMMING → "WHAT I want"
 *
 * 👉 I describe the result
 * 👉 JS handles the internal logic
 * 👉 Cleaner, shorter, more readable
 **********************************************************************/

const doubledDeclarative = numbers.map(num => num * 2);

console.log("🟢 Declarative Result:", doubledDeclarative);

/*
🧠 My take:
- No loop, no index handling
- Just say "transform this array"
- MUCH cleaner
*/



/***********************************************************************
 * 🔵 3. FUNCTIONAL PROGRAMMING (subset of Declarative)
 *
 * 👉 Uses functions as building blocks
 * 👉 Avoids side effects
 * 👉 Keeps data immutable
 *
 * Core Concepts:
 *   1. Pure Functions
 *   2. Immutability
 *   3. Higher-Order Functions (HOFs)
 **********************************************************************/



/***********************************************************************
 * 🧪 PURE FUNCTIONS
 *
 * ✔ Same input → same output
 * ✔ No side effects (doesn't touch outside world)
 **********************************************************************/

function add(a, b) {
    return a + b; // ✅ pure
}

// ❌ NOT pure (side effect)
let total = 0;

function addToTotal(num) {
    total += num; // modifies external state
}



/***********************************************************************
 * 🧊 IMMUTABILITY (Don't change original data)
 **********************************************************************/

const original = [1, 2, 3];

// ❌ Mutating (bad in FP mindset)
original.push(4);

// ✅ Non-mutating (good)
const updated = [...original, 5];

console.log("Original:", original);
console.log("Updated:", updated);

/*
🧠 Why this matters:
- Predictable behavior
- Easier debugging
- No hidden changes
*/



/***********************************************************************
 * ⚙️ HIGHER-ORDER FUNCTIONS (HOFs)
 *
 * 👉 Functions that take/return other functions
 **********************************************************************/

// MAP → transform each element
const doubled = numbers.map(n => n * 2);

// FILTER → select elements
const evens = numbers.filter(n => n % 2 === 0);

// REDUCE → combine into single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Map:", doubled);
console.log("Filter:", evens);
console.log("Reduce:", sum);



/***********************************************************************
 * 🧠 FINAL SUMMARY (VERY IMPORTANT - revise this)
 **********************************************************************/

/*
🔴 Imperative:
- Focus: HOW
- Manual control (loops, variables)
- More code, more control

🟢 Declarative:
- Focus: WHAT
- Cleaner, less code
- JS handles complexity

🔵 Functional Programming:
- A style inside declarative programming
- Uses:
    ✔ Pure functions
    ✔ Immutability
    ✔ map / filter / reduce

💡 My realization:
- JS allows both styles
- Modern JS = Declarative + Functional >>> Imperative
- Write less code, think more clearly
*/



/***********************************************************************
 * 🎯 EXTRA (for myself - interview / exam ready line)
 *
 * "Imperative programming focuses on HOW to perform tasks,
 * while declarative programming focuses on WHAT result is needed.
 * Functional programming is a declarative paradigm that emphasizes
 * pure functions, immutability, and higher-order functions."
 **********************************************************************/