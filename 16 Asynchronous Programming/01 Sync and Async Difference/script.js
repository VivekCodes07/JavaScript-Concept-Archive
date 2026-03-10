// Synchronous Programming:

/*
console.log("Script start");

for (let i = 0; i < 10000; i++) {
    console.log("Inside for loop")
}

console.log("Script end")
*/

// Asynchronous Programming:

// setTimeout()

console.log("Script start");

const id = setTimeout(() => {
  console.log("Hello World!");
}, 1000);

console.log("Id of setTimeout is ", id);
console.log("Clearing Timeout...")
clearTimeout(id);
console.log("Script end");
