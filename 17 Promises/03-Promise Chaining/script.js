function step1() {
  return new Promise((resolve, reject) => {
    console.log("Step1 started..");
    setTimeout(() => {
      console.log("Step 1 successful");
      resolve();
    }, 4000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    console.log("Step 2 started..");
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 3000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    console.log("Step 3 started..");
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 2000);
  });
}

function step4() {
  return new Promise((resolve, reject) => {
    console.log("Step 4 started..");
    setTimeout(() => {
      console.log("Step 4 completed");
      resolve();
    }, 1000);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => step4())
  .then(() => {
    console.log("All steps successful");
  })
  .catch(() => console.log("Promise failed"));

/*
==================== PROMISE CHAIN EXECUTION FLOW ====================

This program demonstrates sequential asynchronous execution using
Promise chaining. Each step returns a Promise that resolves after
a specific delay using setTimeout.

Execution order is strictly controlled by the `.then()` chain.

---------------------- HOW THE FLOW WORKS ----------------------

1️⃣ step1() is called first.

* Its Promise executor runs immediately.
* "Step1 started.." prints.
* setTimeout(4000) registers a timer in Web APIs.
* Promise state = pending.

2️⃣ After 4 seconds:

* Timer callback executes.
* "Step 1 successful" prints.
* resolve() is called.
* The Promise becomes fulfilled.

3️⃣ When resolve() happens:

* The next `.then()` callback is pushed to the Microtask Queue.
* That callback calls step2().

4️⃣ step2() starts immediately after step1 finishes.

* "Step 2 started.." prints.
* setTimeout(3000) starts.
* After 3 seconds → "Step 2 completed".
* resolve() triggers the next `.then()`.

5️⃣ step3() then runs:

* "Step 3 started.." prints.
* setTimeout(2000) starts.
* After 2 seconds → "Step 3 completed".
* resolve() triggers the next `.then()`.

6️⃣ step4() runs:

* "Step 4 started.." prints.
* setTimeout(1000) starts.
* After 1 second → "Step 4 completed".
* resolve() triggers the final `.then()`.

7️⃣ Final `.then()` executes:

* "All steps successful" prints.

---------------------- KEY CONCEPTS ----------------------

✔ Each `.then()` waits for the previous Promise to resolve.
✔ `.then()` automatically returns a new Promise (this enables chaining).
✔ resolve() pushes the next callback into the Microtask Queue.
✔ setTimeout callbacks run in the Callback Queue (via Web APIs).
✔ The Event Loop ensures the next step runs only after the previous one finishes.

---------------------- TIMELINE ----------------------

0s   → Step1 started
4s   → Step1 successful → step2 starts
7s   → Step2 completed → step3 starts
9s   → Step3 completed → step4 starts
10s  → Step4 completed → All steps successful

Total execution time ≈ 10 seconds.

---------------------- MEMORY TRICK ----------------------

Think of it like a pipeline:

step1 → step2 → step3 → step4 → final result

Each step unlocks the next step by calling resolve().

================================================================
*/

