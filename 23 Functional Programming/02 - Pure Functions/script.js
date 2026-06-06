/*
🧠 PURE vs IMPURE FUNCTIONS (my understanding)

A function is PURE if:
✔ Same input → same output (always predictable)
✔ No side effects (doesn't touch or change outside stuff)

If it depends on, modifies, or triggers anything outside → it's IMPURE
*/

// ---------------- PURE FUNCTION ----------------

function sum(a, b) {
  // simple logic, no dependency on anything outside
  // if I pass same values, I always get same result
  return a + b;
}

const result = sum(1, 5);
console.log("Sum:", result);

/*
🧠 Why this is pure:
* Doesn't use any external variable
* Doesn't change anything outside
* Fully predictable
*/

// ---------------- IMPURE FUNCTION ----------------

let user = { score: 10 };

/*
function increaseScoreImpure() {
  // ❌ modifying external object directly (side effect)
  user.score += 1;
}

🧠 Problem:
* Function is changing something outside
* Hard to track bugs in big apps
* If multiple places use this → chaos
*/

// ---------------- PURE VERSION ----------------

function increaseScore(user) {
  // instead of modifying original object,
  // I return a NEW object (immutability)
  return {
    ...user,
    score: user.score + 1
  };
}

const updatedScore = increaseScore(user);

console.log("Original user:", user);       // unchanged ✅
console.log("Updated user:", updatedScore); // new object ✅

/*
🧠 Why this is better:
* Original data is safe
* No hidden changes
* Easy to debug and test
*/

// ---------------- ⚠️ THE HIDDEN TRAPS (STILL IMPURE) ----------------

/*
Sometimes a function looks pure because it doesn't mutate data, 
but it is still IMPURE due to global state or environmental side effects:
*/

// TRAP 1: Unpredictable Native Methods
function generateId(username) {
  // ❌ IMPURE: Math.random() or new Date() changes output every millisecond
  // Same input ("Vivek") → different output every single time!
  return username + "_" + Math.random(); 
}

// TRAP 2: Input/Output Side Effects
function greetUser(name) {
  const message = `Hello ${name}`;
  console.log(message); // ❌ IMPURE: Modifies the outside world (browser console/terminal state)
  return message;
}

// TRAP 3: Network Requests / Async Operations
async function fetchUserScore(userId) {
  // ❌ IMPURE: Reaches out over the internet to a database
  // The network could fail, or database values could change at any time
  const res = await fetch(`/api/user/${userId}`);
  return res.json();
}


// ---------------- QUICK SELF RULE ----------------

/*
Whenever I write a function, I should ask:
1. Does it depend on external variables, dates, or random numbers? ❌
2. Does it modify something outside (variables, console, API, DOM)? ❌
3. If I pass input X, will it return output Y every single time? ✔

If it fails these → it's impure → rethink it if it should be pure!
*/

// 🚀 GOLDEN SHIFT SUMMARY:
// Real apps NEED impure functions to work (fetching data, printing to screen).
// The goal isn't 100% pure code. The goal is to separate pure business logic 
// from messy side effects so the core app remains completely predictable.
