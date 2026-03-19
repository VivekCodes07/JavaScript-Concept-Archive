/*
let data = await fetch("https://api.restful-api.dev/objects/1", { method: "GET" });

let txt = await data.json();
console.log(txt);
*/

let exmp = {
  name: "Apple MacBook Pro 16",
  data: {
    year: 2019,
    price: 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
  },
};
let data = await fetch("https://api.restful-api.dev/objects", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(exmp),
});

let txt = await data.json();
console.log(txt);

/*
This code sends data to an API using a POST request with the Fetch API.

---

## 🔹 Step 1: Create data object

let exmp = {
name: "Apple MacBook Pro 16",
data: {
year: 2019,
price: 1849.99,
"CPU model": "Intel Core i9",
"Hard disk size": "1 TB",
},
};

* This object contains the product details that will be sent to the server.
* It will later be converted into JSON format.

---

## 🔹 Step 2: Send POST request

let data = await fetch("https://api.restful-api.dev/objects", {
method: "POST",
headers: {
"Content-Type": "application/json",
Accept: "application/json",
},
body: JSON.stringify(exmp),
});

Explanation:

1. fetch() sends a request to the API.
2. method: "POST" → used to send new data to the server.
3. headers:

   * "Content-Type": tells the server we are sending JSON data.
   * "Accept": tells the server we expect JSON in response.
4. body:

   * JSON.stringify(exmp) converts the JavaScript object into JSON format.

---

## 🔹 Step 3: Handle response

let txt = await data.json();
console.log(txt);

* data.json() converts the response into a JavaScript object.
* The result (usually the created object with an ID) is logged to the console.

---

## 🔹 Key Concepts

* POST is used to create/send data to a server.
* fetch() returns a Promise, and 'await' pauses execution until it resolves.
* JSON.stringify() is required to send objects in API requests.

---

## 🔹 Note

* This code must be inside an async function or module (top-level await supported environments).
* For better error handling, use try...catch with async/await.

*/
