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
/*
step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => step4())
  .then(() => {
    console.log("All steps successful");
  })
  .catch(() => console.log("Promise failed"));
*/

async function run() {
  try {
    await step1();
    await step2();
    await step3();
    await step4();
    console.log("Promise fulfilled");
  } catch (error) {
    console.log("Promise failed");
  }
}

run();


/*
==================== ASYNC / AWAIT EXECUTION FLOW ====================

This program performs four asynchronous steps sequentially using
async/await. Each step returns a Promise that resolves after a delay
(using setTimeout).

The async function `run()` waits for each step to complete before
moving to the next one.

---------------------- HOW THE FLOW WORKS ----------------------

1️⃣ run() is called.

* Because run() is an async function, it automatically returns a Promise.

2️⃣ await step1()

* step1() is executed.
* "Step1 started.." prints immediately.
* setTimeout(4000) registers a timer in Web APIs.
* run() pauses at this line until the Promise resolves.

3️⃣ After 4 seconds:

* Timer callback runs.
* "Step 1 successful" prints.
* resolve() is called.
* The Promise becomes fulfilled.
* run() resumes execution.

4️⃣ await step2()

* "Step 2 started.." prints.
* setTimeout(3000) starts.
* run() pauses again.

5️⃣ After 3 seconds:

* "Step 2 completed" prints.
* Promise resolves.
* run() resumes.

6️⃣ await step3()

* "Step 3 started.." prints.
* setTimeout(2000) starts.
* run() pauses again.

7️⃣ After 2 seconds:

* "Step 3 completed" prints.
* Promise resolves.
* run() resumes.

8️⃣ await step4()

* "Step 4 started.." prints.
* setTimeout(1000) starts.
* run() pauses again.

9️⃣ After 1 second:

* "Step 4 completed" prints.
* Promise resolves.
* run() resumes.

🔟 Final line executes:

* "Promise fulfilled" prints.

---------------------- KEY CONCEPTS ----------------------

✔ await pauses the async function until the Promise resolves.
✔ JavaScript does NOT block the thread; the Event Loop keeps running.
✔ setTimeout callbacks run in the Callback Queue.
✔ When resolve() is called, the async function continuation
resumes via the Microtask Queue.
✔ This makes async/await internally behave like Promise chaining.

---------------------- TIMELINE ----------------------

0s  → Step1 started
4s  → Step1 successful → step2 starts
7s  → Step2 completed → step3 starts
9s  → Step3 completed → step4 starts
10s → Step4 completed → Promise fulfilled

Total runtime ≈ 10 seconds.

---------------------- MEMORY TRICK ----------------------

async/await = "write async code like synchronous code"

Step1 → wait → Step2 → wait → Step3 → wait → Step4 → done

Under the hood it is still:

step1().then(step2).then(step3).then(step4)

================================================================
*/
