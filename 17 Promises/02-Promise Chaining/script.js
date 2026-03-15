let prm = new Promise(function executorFunc(resolve, reject) {
  console.log("Water has started to boil..");
  setTimeout(() => {
    console.log("Water has been boiled");
    resolve();
  }, 3000);
});

/* On successful completion of the Promise, resolve() gets called.

# What Does resolve() Do..?
-> resolve() will further call whichever function that has been provided inside "then(callback)".
*/

prm
  .then(() => {
    console.log("Promise fulfilled");
  })
  .catch(() => {
    console.log("Promise unfulfilled");
  });

setTimeout(() => console.log("Callback Queue"), 4000);


/*
We have three async things in this program:

1. Promise executor (runs immediately)
2. setTimeout 3000ms (inside the promise)
3. setTimeout 4000ms (outside the promise)


Also remember:

Promise .then() → Microtask Queue
setTimeout → Callback Queue


## Step-by-Step Execution (Like the JS Engine):

  Start program
│
├─ Promise executor runs
│      ↓
│  "Water has started to boil.."
│
├─ setTimeout(3000) → Web APIs
├─ setTimeout(4000) → Web APIs
│
│   (3 seconds pass)
│
├─ Timer 3000 fires
│      ↓
│  "Water has been boiled"
│      ↓
│  resolve()
│      ↓
│  Microtask Queue
│      ↓
│  "Promise fulfilled"
│
│   (1 more second)
│
├─ Timer 4000 fires
│      ↓
│  "Callback Queue"

*/


/*
This example proves a very important JavaScript rule:

-> Promise callbacks (Microtasks)
   run before
   Timer callbacks (Macrotasks)

Even if the timer started earlier.
*/


/*
Mental Model:

  Think of JavaScript like a restaurant kitchen:

  Chef (Call Stack)
    ↓
VIP orders (Microtasks / Promises)
    ↓
Normal orders (Callbacks / Timers)


Chef always finishes VIP orders first.

Promises = VIP.

*/