fetch("https://catfact.ninja/fact")
  .then((response) => {
    return response.json();
  })
  .then((txt) => {
    console.log(txt);
  })
  .catch(() => {
    console.log("API Failed");
  });

async function getCatFact() {
  const data = await fetch("https://catfact.ninja/fact");
  // console.log(data);
  const text = await data.json();
  console.log(text)
}

getCatFact()

/*
This code demonstrates two ways to fetch data from an API in JavaScript:

1. Using Promises (.then/.catch)
2. Using async/await

---

## 🔹 Part 1: Using Promises

fetch("https://catfact.ninja/fact")
.then((response) => {
return response.json();
})
.then((txt) => {
console.log(txt);
})
.catch(() => {
console.log("API Failed");
});

Explanation:

1. fetch() sends a request to the API and returns a Promise.
2. When the request succeeds, the first .then() runs:

   * 'response' is the Response object from the server.
   * response.json() converts the response into a JavaScript object.
   * It returns another Promise.
3. The second .then() receives the parsed data ('txt') and logs it.
4. If any error occurs, .catch() handles it.

---

## 🔹 Part 2: Using async/await

async function getCatFact() {
const data = await fetch("https://catfact.ninja/fact");
const text = await data.json();
console.log(text);
}

getCatFact();

Explanation:

1. 'async' makes the function return a Promise.
2. 'await fetch(...)' waits until the API response is received.
3. 'await data.json()' waits until the response is converted to JSON.
4. The final result is logged to the console.

---

## 🔹 Key Concept

* Both approaches do the same thing.
* async/await is just a cleaner and more readable way to handle Promises.

Flow comparison:

Promises:     fetch → .then → .then → .catch
async/await:  fetch → await → await → result (use try/catch for errors)

*/

