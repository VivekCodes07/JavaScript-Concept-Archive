/*
🧠 PURE vs IMPURE FUNCTIONS (my understanding)

A function is PURE if:
✔ Same input → same output (always predictable)
✔ No side effects (doesn't touch outside stuff)

If it depends on or modifies anything outside → it's IMPURE
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

// ---------------- QUICK SELF RULE ----------------

/*
Whenever I write a function, I should ask:

1. Does it depend on external variables? ❌
2. Does it modify something outside? ❌

If yes → it's impure → rethink it
*/
