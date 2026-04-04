// 🌍 Global Scope Example

let a = 100;
console.log("Global a:", a);

function fun() {
    console.log("Inside fun(), a:", a);
}

fun();

/*
====================================================
🧠 Understanding JavaScript Execution (Memory POV)
====================================================

1️⃣ When JavaScript starts execution:

👉 It creates something called:
   GEC (Global Execution Context)

Inside GEC:
   - Memory Phase (Creation Phase)
   - Execution Phase

Also uses:
👉 Call Stack → manages execution contexts
👉 Heap → stores objects (not used much here)


----------------------------------------------------
2️⃣ Creation Phase (Memory Allocation + Hoisting)
----------------------------------------------------

👉 Before executing code, JS scans the entire program.

This process is called:
👉 Hoisting

What happens here?

✔ Variables are identified
✔ Functions are identified

Memory Allocation:

- let a → hoisted but NOT initialized
          → stays in TDZ (Temporal Dead Zone)

- function fun() → fully stored in memory


Memory looks like:

    a   → uninitialized (TDZ)
    fun → { function code }


----------------------------------------------------
3️⃣ Execution Phase (Code runs line-by-line)
----------------------------------------------------

Now JavaScript starts executing:

Step 1:
    let a = 100;
    → 'a' gets value 100

Step 2:
    console.log("Global a:", a);
    → Output: Global a: 100

Step 3:
    fun();
    → Function is invoked


----------------------------------------------------
4️⃣ Function Execution Context (FEC)
----------------------------------------------------

👉 When fun() is called:

- A new Execution Context is created
- Pushed into Call Stack

Inside fun():

    console.log("Inside fun(), a:", a);

👉 JS tries to find 'a'


----------------------------------------------------
5️⃣ Scope Chain (VERY IMPORTANT)
----------------------------------------------------

JS searches for variables like this:

    1. Inside function (local scope) ❌
    2. Outside → Global scope ✅

👉 This is called:
   Lexical Scoping


Scope Chain:

    fun() → Global → null


----------------------------------------------------
6️⃣ Final Output:
----------------------------------------------------

Global a: 100
Inside fun(), a: 100


----------------------------------------------------
7️⃣ Key Concepts to Remember
----------------------------------------------------

✔ Global variables are accessible inside functions

✔ Functions DO NOT execute unless called

✔ JavaScript uses Lexical Scope
   (scope depends on where function is defined)

✔ let & const are hoisted but in TDZ

✔ Functions are fully hoisted


----------------------------------------------------
8️⃣ Bonus Example (Local vs Global)
----------------------------------------------------

let a = 100;

function fun() {
    let a = 50;
    console.log("Local a:", a);
}

fun();

👉 Output:
Local a: 50

✔ Local variable overrides global variable
*/