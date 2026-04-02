/***********************************************************************
 *           HOISTING WITH STACK + HEAP 
 **********************************************************************/


var a;
console.log(a);
a = 100;
console.log(a);



/***********************************************************************
 * 🧠 STEP 1: GLOBAL EXECUTION CONTEXT (GEC) CREATED
 **********************************************************************/

/*
When JS starts, it creates:

👉 GEC (Global Execution Context)
   Inside it:
   - Memory (Creation Phase)
   - Code Execution (Execution Phase)

Also uses:
👉 STACK → to manage execution
👉 HEAP → for objects (not used much here)


===========================================================
🧱 MEMORY STRUCTURE

STACK SEGMENT:
---------------------------------
| GEC                         |
|-----------------------------|
| a : undefined               |
---------------------------------

HEAP SEGMENT:
---------------------------------
(empty - no objects created)
---------------------------------
*/


/***********************************************************************
 * ⚙️ STEP 2: CREATION PHASE
 **********************************************************************/

/*
JS scans code BEFORE execution:

var a;

👉 JS does:
a → undefined

===========================================================
📦 STACK (after creation phase)

| GEC                         |
|-----------------------------|
| a : undefined               |
--------------------------------

KEY POINT:
👉 var gets memory + initialized with undefined
*/


/***********************************************************************
 * ▶️ STEP 3: EXECUTION PHASE
 **********************************************************************/


/*
LINE 1:
console.log(a);

👉 a = undefined

OUTPUT:
undefined
*/


/*
LINE 2:
a = 100;

👉 value updated in memory

STACK NOW:
---------------------------------
| GEC                         |
|-----------------------------|
| a : 100                     |
---------------------------------
*/


/*
LINE 3:
console.log(a);

👉 prints updated value

OUTPUT:
100
*/


/***********************************************************************
 * 🎯 FINAL FLOW (LIKE IMAGE DIAGRAM)
 **********************************************************************/

/*

        🔵 CREATION PHASE
---------------------------------
a → undefined

        🟢 EXECUTION PHASE
---------------------------------
console.log(a) → undefined
a = 100
console.log(a) → 100


===========================================================
📊 COMPLETE VISUAL

STACK SEGMENT:
---------------------------------
| GEC                         |
|-----------------------------|
| a : undefined → 100         |
---------------------------------

HEAP SEGMENT:
---------------------------------
(empty)
---------------------------------

===========================================================
*/


/***********************************************************************
 * 🧠 SUPER IMPORTANT INSIGHT
 **********************************************************************/

/*
👉 JavaScript does NOT run line by line directly

It FIRST:
✔ creates memory (creation phase)

THEN:
✔ executes code (execution phase)

That’s why:
console.log(a); → undefined (NOT error)

===========================================================
*/


/***********************************************************************
 * ⚡ BONUS: WHAT IF let WAS USED?
 **********************************************************************/

// console.log(b); ❌ ReferenceError
let b = 50;

/*
STACK DURING CREATION:
---------------------------------
b → (in TDZ, not accessible)
---------------------------------

Execution:
console.log(b) ❌ ERROR

===========================================================
KEY DIFFERENCE:

var → undefined ✅
let → TDZ ❌

===========================================================
*/


/***********************************************************************
 * 🏁 FINAL ANALOGY (STACK VIEW)
 **********************************************************************/

/*
Think of STACK like a whiteboard:

Creation Phase:
----------------
Write variable names:
a → undefined

Execution Phase:
----------------
Update values:
a → 100

===========================================================
*/