// Function Scope Example

function fun() {
    let a = 100;
    console.log("Inside fun(), a:", a);
}

fun();

// This will cause an error
console.log("Outside fun(), a:", a);

/*
====================================================
Understanding Function Scope (Local Scope)
====================================================

1. What is Function Scope?

Variables declared inside a function using let/const/var
are ONLY accessible inside that function.

They are NOT accessible outside.


----------------------------------------------------
2. Execution Flow
----------------------------------------------------

Step 1:
JavaScript creates Global Execution Context (GEC)

During Creation Phase:
- function fun() is fully hoisted and stored in memory

Note:
- 'a' is NOT created in global scope


----------------------------------------------------
3. Execution Phase
----------------------------------------------------

Step 2:
fun() is called

- A new Function Execution Context (FEC) is created
- Pushed to Call Stack


----------------------------------------------------
4. Inside Function (Local Scope)
----------------------------------------------------

function fun() {
    let a = 100;
    console.log(a);
}

Inside FEC:

- 'a' is created in local memory
- Value assigned: 100

console.log(a):
→ Output: Inside fun(), a: 100


----------------------------------------------------
5. After Function Execution
----------------------------------------------------

- Function execution finishes
- FEC is removed from Call Stack

IMPORTANT:
- Local variables (like 'a') are destroyed
- They do NOT exist anymore


----------------------------------------------------
6. Outside the Function
----------------------------------------------------

console.log(a);

Now JavaScript tries to find 'a':

Search order:
1. Global scope → not found
2. No outer scope left

Result:
ReferenceError: a is not defined


----------------------------------------------------
7. Key Difference from Global Scope
----------------------------------------------------

Global Scope:
- Accessible everywhere

Function Scope:
- Accessible ONLY inside the function


----------------------------------------------------
8. Final Output
----------------------------------------------------

Inside fun(), a: 100
ReferenceError: a is not defined


----------------------------------------------------
9. Important Concept: Scope Direction
----------------------------------------------------

- Inner scope CAN access outer scope
- Outer scope CANNOT access inner scope

Example:

function fun() {
    let a = 100;
}

console.log(a); // ❌ Not allowed


----------------------------------------------------
10. Bonus Example (Shadowing + Scope Chain)
----------------------------------------------------

let a = 50;

function fun() {
    let a = 100;
    console.log("Inner a:", a);
}

fun();
console.log("Outer a:", a);

Output:
Inner a: 100
Outer a: 50

Explanation:
- Inner 'a' shadows outer 'a'
- Both exist in different scopes
*/