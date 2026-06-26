# JavaScript Hoisting: Understanding What the Engine Sees

> If I can visualize what happens inside the JavaScript Engine, I never need to memorize hoisting again.

---

# Before We Start

When I first learned hoisting, I heard things like:

* "Variables are moved to the top."
* "`var` is hoisted."
* "`let` and `const` are not hoisted."

Some of these statements are incomplete and some are simply wrong.

The reality is much more interesting.

To truly understand hoisting, I need to understand:

1. The JavaScript Engine
2. Memory Heap
3. Call Stack
4. Global Execution Context (GEC)
5. Creation Phase
6. Execution Phase
7. Function Execution Contexts
8. Temporal Dead Zone (TDZ)

Hoisting is not an isolated topic.

It is a consequence of how JavaScript prepares memory before execution.

---

# The Story Begins

Imagine I write:

```javascript
console.log("Hello World");
```

What happens?

Most people think:

```text
JS reads line 1
JS executes line 1
Done
```

But that is NOT what happens.

Before executing anything, JavaScript prepares an environment to run my code.

Think of it like preparing a classroom before teaching starts.

Before students arrive:

* Seats are arranged
* Attendance sheet is created
* Whiteboard is cleaned
* Materials are prepared

Only then does the class begin.

JavaScript works exactly the same way.

---

# The JavaScript Engine

At a high level:

```text
JavaScript Engine

├── Memory Heap
└── Call Stack
```

These two pieces explain almost everything in JavaScript.

---

# Memory Heap

The Heap is where complex data is stored.

Examples:

* Objects
* Arrays
* Functions
* Maps
* Sets

Example:

```javascript
const user = {
    name: "Rahul"
};
```

Internally:

```text
Heap

0x001
{
   name: "Rahul"
}
```

Variable:

```text
user → 0x001
```

The variable does NOT contain the object.

It contains a reference to the object.

---

# Call Stack

The Call Stack tracks what JavaScript is currently executing.

Imagine a stack of books.

Only the book on top can be read.

```text
┌──────────┐
│ Current  │
└──────────┘
```

Whenever a function is called:

A new execution context is placed on top.

Whenever a function finishes:

Its execution context is removed.

This is why it is called a stack.

---

# The First Thing JavaScript Creates

The moment my JavaScript file starts:

```javascript
// app.js
```

JavaScript creates:

# Global Execution Context (GEC)

Think:

```text
Call Stack

┌─────────────┐
│     GEC     │
└─────────────┘
```

This is the environment where global code executes.

Everything starts here.

Always.

---

# What's Inside The GEC?

The GEC contains two major parts:

```text
Global Execution Context

├── Memory Component
└── Code Component
```

Also called:

```text
Creation Phase
Execution Phase
```

These two phases explain hoisting.

---

# Phase 1: Creation Phase

This is where hoisting happens.

Let's use:

```javascript
var x = 10;

function square(n) {
    return n * n;
}

var result = square(5);
```

Before running ANY line:

JavaScript scans the entire file.

---

# Memory Creation Step

Engine discovers:

```javascript
var x;
```

Memory:

```text
x → undefined
```

---

Engine discovers:

```javascript
var result;
```

Memory:

```text
result → undefined
```

---

Engine discovers:

```javascript
function square(n) {
   return n * n;
}
```

Memory:

```text
square → complete function
```

---

Final Memory State

```text
Memory

x → undefined

result → undefined

square → function square(n){
             return n*n;
         }
```

Nothing has executed yet.

This entire setup process is called:

# Hoisting

---

# Important Realization

Hoisting is NOT:

```text
Moving code upward
```

Hoisting IS:

```text
Allocating memory before execution starts
```

This single idea explains everything.

---

# Phase 2: Execution Phase

Now JavaScript starts executing line by line.

---

Line 1

```javascript
var x = 10;
```

Memory updates:

```text
x → 10
```

---

Function Declaration

```javascript
function square(n) {}
```

Skipped.

Why?

Because the function was already stored during Creation Phase.

---

Next Line

```javascript
var result = square(5);
```

Now a function call occurs.

---

# Function Execution Context (FEC)

Whenever a function is invoked:

```javascript
square(5)
```

JavaScript creates a brand-new execution context.

Stack:

```text
┌──────────────┐
│ square() FEC │
├──────────────┤
│     GEC      │
└──────────────┘
```

The function now becomes the active task.

---

# Inside square()

Parameter:

```javascript
n = 5
```

Memory:

```text
n → 5
```

Execution:

```javascript
return n * n;
```

Returns:

```text
25
```

Function completes.

FEC is removed.

Stack:

```text
┌─────────┐
│   GEC   │
└─────────┘
```

Execution continues.

---

# var Hoisting

Example:

```javascript
console.log(a);

var a = 10;
```

Creation Phase:

```text
a → undefined
```

Execution:

```javascript
console.log(a);
```

Output:

```text
undefined
```

Then:

```javascript
a = 10
```

Memory becomes:

```text
a → 10
```

---

# Why var Returns undefined

Because during Creation Phase:

```text
var variables are initialized immediately
```

with:

```text
undefined
```

---

# let Hoisting

Example:

```javascript
console.log(age);

let age = 25;
```

Many developers say:

```text
let is not hoisted
```

This is incorrect.

`let` IS hoisted.

Memory is reserved.

But initialization does not happen.

Creation Phase:

```text
age → <uninitialized>
```

not

```text
age → undefined
```

---

# The Temporal Dead Zone (TDZ)

The period between:

```text
Scope Entry
```

and

```text
Declaration Execution
```

is called:

# Temporal Dead Zone

Visual:

```text
{
   ↓ Scope Starts

   [ TDZ ]
   [ TDZ ]
   [ TDZ ]

   let age = 25

   ↓ TDZ Ends
}
```

Accessing a variable inside TDZ causes:

```javascript
ReferenceError
```

---

# Why TDZ Exists

Imagine:

```javascript
let salary = salary + 100;
```

Without TDZ:

JavaScript might accidentally use invalid data.

TDZ protects me from using variables before initialization.

---

# const Hoisting

`const` behaves exactly like `let`.

Creation Phase:

```text
city → uninitialized
```

Execution:

```javascript
const city = "Delhi";
```

Memory:

```text
city → "Delhi"
```

---

# Difference Between let And const

This is valid:

```javascript
let age;
```

This is invalid:

```javascript
const age;
```

Because const must be initialized immediately.

---

# Function Declaration Hoisting

Example:

```javascript
sayHello();

function sayHello() {
   console.log("Hello");
}
```

Creation Phase:

```text
sayHello → complete function
```

Execution:

```javascript
sayHello();
```

Output:

```text
Hello
```

Entire function is available before execution starts.

---

# Function Expression Hoisting

Example:

```javascript
sayHello();

var sayHello = function() {
   console.log("Hello");
};
```

Creation Phase:

```text
sayHello → undefined
```

Execution:

```javascript
undefined()
```

Result:

```javascript
TypeError
```

Because the variable exists.

But it is not a function yet.

---

# Arrow Functions

Example:

```javascript
hello();

const hello = () => {
   console.log("Hello");
};
```

Creation Phase:

```text
hello → uninitialized
```

Execution:

```javascript
hello()
```

Result:

```javascript
ReferenceError
```

Because the variable is inside TDZ.

---

# The Complete Program Lifecycle

Whenever JavaScript executes a file:

```text
1. Create Global Execution Context

2. Push GEC To Stack

3. Start Creation Phase

4. Allocate Memory

      var      → undefined
      let      → uninitialized
      const    → uninitialized
      function → complete function

5. Start Execution Phase

6. Execute Code Line By Line

7. Create Objects In Heap

8. Store References

9. Call Functions

10. Create Function Execution Contexts

11. Push FEC To Stack

12. Execute Function

13. Return Value

14. Pop FEC

15. Continue Execution

16. Finish Global Code

17. Pop GEC

18. Program Ends
```

---

# The Ultimate Interview Table

| Declaration          | Hoisted?         | Initial Value During Creation Phase  | Accessible Before Declaration? |
| -------------------- | ---------------- | ------------------------------------ | ------------------------------ |
| var                  | Yes              | undefined                            | Yes                            |
| function declaration | Yes              | Entire Function                      | Yes                            |
| let                  | Yes              | Uninitialized                        | No                             |
| const                | Yes              | Uninitialized                        | No                             |
| function expression  | Variable hoisted | undefined                            | No                             |
| arrow function       | Variable hoisted | TDZ/undefined depends on declaration | No                             |

---

# The One Diagram I Must Never Forget

```text
                      JS FILE
                          │
                          ▼
              Global Execution Context
                          │
      ┌───────────────────┴───────────────────┐
      ▼                                       ▼

 Creation Phase                      Execution Phase

 var      → undefined                Execute line by line

 let      → TDZ                      Create Objects

 const    → TDZ                      Store References

 function → Full Function            Call Functions

                                     Create FEC

                                     Push To Stack

                                     Execute

                                     Pop From Stack
```

---

# Final Understanding

If someone asks me:

> "What is hoisting?"

I should answer:

> Hoisting is the process that occurs during the Creation Phase of an Execution Context where JavaScript allocates memory for variables and functions before code execution begins.

Not:

> JavaScript moves code to the top.

That explanation is incomplete.

The real explanation involves:

* Execution Contexts
* Creation Phase
* Memory Allocation
* Heap
* Call Stack
* TDZ
* Function Contexts

Once I understand these concepts together, hoisting becomes obvious instead of something I need to memorize.
