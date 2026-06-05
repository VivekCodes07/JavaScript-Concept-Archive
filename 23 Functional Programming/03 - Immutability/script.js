/*
🧊 IMMUTABILITY (final notes - keep this clear)

immutability = never change existing data
→ always create and return a new version

core idea:

* original data should stay untouched
* updates should NOT have side effects

why this matters:

* no hidden changes
* predictable behavior
* easier debugging in large codebases
  */

// ---------------- OBJECT CASE ----------------

const user = {
name: "Vivek",
score: 10,
};

/*
❌ MUTATION (this is what I should avoid)

function updateScore(user) {
user.score += 1;  // modifying original object directly
return user;
}

problem:

* original object gets changed silently
* every reference to 'user' now sees updated value
* source of change becomes hard to trace
  */

// ✅ IMMUTABLE APPROACH

function updateScore(user) {
return {
...user,               // clone existing object
score: user.score + 1 // apply update on new copy
};
}

const updatedUser = updateScore(user);

console.log("Original:", user);       // unchanged
console.log("Updated:", updatedUser); // new object

/*
🧠 key check:
if original object is changing → something is wrong
*/

// ---------------- ARRAY CASE ----------------

const arr = [1, 2, 3];

/*
❌ MUTATION

arr.push(4); // directly modifies original array
*/

// ✅ IMMUTABLE WAY

const newArr = [...arr, 4];

console.log("Original Array:", arr);
console.log("New Array:", newArr);

/*
quick mental rule:

* push/pop/splice → mutation ❌
* spread/map/filter → safe ✅
  */

// ---------------- SHALLOW COPY PROBLEM ----------------

const user2 = {
name: "Vivek",
skills: ["JS"]
};

const newUser2 = { ...user2 }; // looks like new object

newUser2.skills.push("React");

console.log("Original skills:", user2.skills); // also changed 😬
console.log("New skills:", newUser2.skills);

/*
why this breaks:

* spread operator only copies top-level
* nested arrays/objects are still shared references

so:
user2.skills === newUser2.skills  // true
*/

// ✅ SAFE WAY FOR NESTED DATA

const safeUser = {
...user2,
skills: [...user2.skills] // clone nested array separately
};

safeUser.skills.push("Node");

console.log("Original skills (safe):", user2.skills); // unchanged
console.log("New skills (safe):", safeUser.skills);

/*
🧠 final rules (must remember):

1. never mutate original data
2. always return new object/array
3. shallow copy is NOT enough for nested data
4. if data changes unexpectedly → mutation bug

goal:
write code where data flow is predictable and controlled
*/
