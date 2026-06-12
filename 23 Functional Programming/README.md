# Functional Programming in JavaScript

## My Understanding of Functional Programming

When I first heard the term **Functional Programming (FP)**, I thought it simply meant using methods like `map()`, `filter()`, and `reduce()`. After spending more time with JavaScript, React, and backend development, I realized that those methods are just tools. Functional Programming is actually a way of thinking about code.

The main idea is:

> Instead of constantly changing data and state, we transform data through functions.

In traditional programming, we often create variables, modify them repeatedly, and maintain state throughout the program.

Example:

```js
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
```

In Functional Programming, we focus more on describing the transformation:

```js
const total = numbers.reduce((sum, num) => sum + num, 0);
```

Both approaches produce the same result, but the second approach focuses on *what* we want rather than *how* we achieve it.

---

# Why Functional Programming Exists

As applications grow larger, code becomes difficult to manage because:

* Variables get modified from many places
* Functions produce unexpected side effects
* Debugging becomes difficult
* State changes become hard to track

Functional Programming tries to solve these problems by encouraging:

* Predictable functions
* Minimal mutations
* Reusable logic
* Better code organization

---

# Core Principles of Functional Programming

## 1. Pure Functions

A pure function is one of the most important concepts in Functional Programming.

A function is considered pure when:

1. It always returns the same output for the same input.
2. It does not affect anything outside itself.

Example:

```js
function add(a, b) {
  return a + b;
}
```

If I call:

```js
add(2, 3);
```

it will always return:

```js
5
```

No matter how many times I run it.

---

### Impure Function

```js
let counter = 0;

function increment() {
  counter++;
}
```

This function changes external state.

The output depends on previous executions, making it less predictable.

---

### Why Pure Functions Matter

Pure functions are:

* Easy to test
* Easy to debug
* Easier to reuse
* Predictable

When reading pure functions, I don't have to worry about hidden changes happening elsewhere in the application.

---

# 2. Immutability

Immutability means:

> Once data is created, avoid changing it directly.

Instead of modifying existing data, create new data.

---

### Mutable Approach

```js
const users = ["John", "Sara"];

users.push("Mike");
```

The original array is changed.

---

### Immutable Approach

```js
const users = ["John", "Sara"];

const updatedUsers = [...users, "Mike"];
```

The original array remains untouched.

---

### Why Immutability Is Useful

Imagine a React application.

If state is mutated directly:

```js
user.name = "John";
```

tracking changes becomes difficult.

Creating new objects makes updates easier to understand and detect.

---

# 3. First-Class Functions

JavaScript treats functions like values.

A function can:

* Be stored in a variable
* Be passed as an argument
* Be returned from another function

Example:

```js
const greet = function () {
  return "Hello";
};
```

---

# 4. Higher-Order Functions

A Higher-Order Function is a function that:

* Accepts another function
* Returns another function

Example:

```js
const numbers = [1, 2, 3];

numbers.map(num => num * 2);
```

Here:

```js
num => num * 2
```

is being passed into `map()`.

Therefore, `map()` is a Higher-Order Function.

---

# Array Methods Used in Functional Programming

The most commonly used FP methods in JavaScript are:

* map()
* filter()
* reduce()

These methods do not modify the original array and instead create new values.

---

# Understanding map()

Purpose:

> Transform every item in an array.

Example:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
```

Output:

```js
[2, 4, 6]
```

---

### My Mental Model for map()

I think of `map()` as:

```text
Input Array
      ↓
Transform Each Item
      ↓
New Array
```

Nothing gets removed.

Nothing gets combined.

Everything simply changes form.

---

# Understanding filter()

Purpose:

> Keep only the items that satisfy a condition.

Example:

```js
const numbers = [1, 2, 3, 4];

const evens = numbers.filter(num => num % 2 === 0);
```

Output:

```js
[2, 4]
```

---

### My Mental Model for filter()

```text
1 ❌
2 ✅
3 ❌
4 ✅

Result:
[2, 4]
```

Items either survive or get removed.

---

# Understanding reduce()

This is the method that confused me the most initially.

The key realization was:

> reduce() is just a loop with a running value.

Example:

```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
```

---

### Step-by-Step Execution

Initial:

```js
acc = 0
```

Iteration 1:

```js
0 + 1 = 1
```

Iteration 2:

```js
1 + 2 = 3
```

Iteration 3:

```js
3 + 3 = 6
```

Iteration 4:

```js
6 + 4 = 10
```

Result:

```js
10
```

---

### My Mental Model for reduce()

```text
Array
 ↓
Process Item
 ↓
Update Running Value
 ↓
Final Result
```

Unlike `map()` or `filter()`, reduce can return:

* Number
* String
* Object
* Array
* Anything

---

# Frequency Counter Pattern

One of the most common interview patterns.

Problem:

```js
["apple", "banana", "apple"]
```

Expected Output:

```js
{
  apple: 2,
  banana: 1
}
```

---

### Logic

For every item:

1. Check if it already exists.
2. If yes, increase count.
3. Otherwise start count at 1.

Example:

```js
const fruitCount = {};

for (const fruit of fruits) {
  if (fruitCount[fruit]) {
    fruitCount[fruit]++;
  } else {
    fruitCount[fruit] = 1;
  }
}
```

---

# Sorting in JavaScript

Sorting seems simple but has a hidden behavior.

---

### Incorrect Numeric Sorting

```js
[10, 2, 30].sort();
```

Result:

```js
[10, 2, 30]
```

Because JavaScript compares strings by default.

---

### Correct Numeric Sorting

Ascending:

```js
numbers.sort((a, b) => a - b);
```

Descending:

```js
numbers.sort((a, b) => b - a);
```

---

### Comparator Logic

If:

```js
a - b < 0
```

then `a` comes before `b`.

If:

```js
a - b > 0
```

then `b` comes before `a`.

---

# Function Composition

One of the most powerful ideas in Functional Programming.

Instead of creating huge functions, we create small functions and combine them.

Example:

```js
const double = x => x * 2;
const square = x => x * x;

const result = square(double(5));
```

Execution:

```text
5
↓
double
↓
10
↓
square
↓
100
```

---

# Real-World Functional Programming in React

React heavily encourages Functional Programming principles.

Examples:

* Immutable state updates
* Array transformations
* Pure components
* Reusable functions

Example:

```js
setUsers(prev =>
  prev.map(user =>
    user.id === id
      ? { ...user, active: true }
      : user
  )
);
```

This is Functional Programming in practice.

---

# When I Should Use Functional Programming

I prefer FP when:

* Transforming data
* Updating React state
* Processing API responses
* Working with arrays
* Building reusable utilities

---

# When I Should Avoid Overusing It

Not every problem needs Functional Programming.

Sometimes:

```js
for (...)
```

is clearer than a complicated `reduce()`.

Readability should always come first.

---

# What I Need to Know as a Full-Stack Developer

Essential:

* Pure Functions
* Closures
* Higher-Order Functions
* map()
* filter()
* reduce()
* Immutability
* Sorting
* Function Composition

Advanced (Nice to Know):

* Currying
* Partial Application
* Memoization
* Functors
* Monads

Most production JavaScript applications mainly use the essential concepts.

---

# Final Takeaway

My understanding of Functional Programming is:

> Functional Programming is the practice of solving problems by transforming data through small, predictable, reusable functions while minimizing mutations and side effects.

The most important thing is not memorizing definitions.

The most important thing is learning how data flows through functions and understanding how transformations happen step by step.

Once that mindset becomes natural, Functional Programming starts feeling less like a theory and more like a practical way to write cleaner JavaScript.
