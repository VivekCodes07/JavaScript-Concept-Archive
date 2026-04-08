/*
==========================================================
        PASS BY VALUE vs PASS BY REFERENCE (JS)
==========================================================

In JavaScript, we work with TWO types of values:

1. PRIMITIVES  (Pass by Value)
   - Number, Boolean, null, undefined, string, bigint, symbol

2. OBJECTS (Pass by Reference)
   - Objects, Arrays, Functions

----------------------------------------------------------
CORE IDEA:

Primitives → copy the VALUE
Objects   → copy the REFERENCE (address)

==========================================================
                PART 1: OBJECT EXAMPLE
==========================================================
*/

let c1 = {
  name: "BMW",
  cost: 75.6,
  mileage: 8.9,
};

console.log("c1:", c1);
console.log("c1.name:", c1.name);

/*
----------------------------------------------------------
Now we assign c1 to c2
----------------------------------------------------------
*/

let c2;
c2 = c1;

/*
Question:
Does this create a NEW object?

Answer:
NO
Only the REFERENCE is copied

==========================================================
                MEMORY VISUALIZATION
==========================================================

After c1 creation:

STACK                  HEAP
------                 ------------------
c1  ───────────────►   { name: "BMW", cost: 75.6, mileage: 8.9 }

----------------------------------------------------------

After c2 = c1:

STACK                  HEAP
------                 ------------------
c1  ───────────────►
                     { name: "BMW", cost: 75.6, mileage: 8.9 }
c2  ───────────────►

Both point to SAME object

==========================================================
                PROOF
==========================================================
*/

c2.name = "Audi";

console.log("c2.name:", c2.name); // Audi
console.log("c1.name:", c1.name); // Audi

/*
Changing c2 ALSO changes c1
Because BOTH share SAME memory

----------------------------------------------------------
Important Check:
*/

console.log("c1 === c2:", c1 === c2); // true

/*
==========================================================
                GEC (Execution Context)
==========================================================

1. Creation Phase:
   - Variables are declared (hoisted)

   let c1 = undefined
   let c2 = undefined

2. Execution Phase:
   - Code runs line by line

   Step 1:
   c1 = { ... } → object created in HEAP

   Step 2:
   c2 = c1 → reference copied

==========================================================
                REAL LIFE ANALOGY
==========================================================

Object = House

c1 → You own the house
c2 → You give someone SAME key

Both access SAME house
Any change affects BOTH

==========================================================
                PART 2: PRIMITIVE EXAMPLE
==========================================================
*/

let a = 10;
let b = a;

b = 20;

console.log("a:", a); // 10
console.log("b:", b); // 20

/*
Memory:

STACK
------
a → 10
b → 20

Separate copies → NO effect on each other

==========================================================
                HOW TO COPY OBJECT PROPERLY
==========================================================
*/

let original = {
  brand: "BMW",
};

let copy = { ...original }; // spread operator

copy.brand = "Audi";

console.log("original.brand:", original.brand); // BMW
console.log("copy.brand:", copy.brand); // Audi

/*
Memory:

STACK                  HEAP
------                 ------------------
original ───────────►  Object1
copy     ───────────►  Object2 (NEW)

Now they are independent

==========================================================
                FINAL SUMMARY
==========================================================

PRIMITIVES:
Pass by VALUE
Separate copies
Safe changes

OBJECTS:
Pass by REFERENCE
Same memory shared
Changes affect all references

==========================================================
Golden Line:

"Objects are not copied in JavaScript — only their references travel."
==========================================================
*/