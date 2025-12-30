// Singleton

// Singleton Object:
// const tinderUser = new Object()

const tinderUser = {}; // Non-Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "vivek@google.com",
  fullName: {
    userFullName: {
      firstName: "Vivek",
      lastName: "Kumar",
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName); // Vivek

const obj1 = { 1: "Vivek", 2: "a" };
const obj2 = { 3: "Ajay", 4: "b" };
const obj3 = { 5: "Akash", 6: "c" };

// const obj3 = {obj1, obj2};

// Object.assign()
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);


// spread(...)

const obj4 = {...obj1, ...obj2, ...obj3};
console.log(obj4);

const user = [
    {
        id: 1, 
        email: "Vivek@google.com"
    },
    {

    },
    {

    }
]

console.log(user[0].email);

console.log(tinderUser);

console.log("Keys: ",Object.keys(tinderUser)); // Prints all the keys of an object in array form.
console.log("Values:", Object.values(tinderUser)); // Prints all the values of an object in array form.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true -> Checks if it contains 'isLoggedIn' property


// A regular JavaScript object
const person = { name: 'Alice', age: 30, city: 'New York' };

const entriesArray = Object.entries(person);
/* entriesArray is: [
  ['name', 'Alice'], 
  ['age', 30], 
  ['city', 'New York']
]*/


// ------------------------------
// Object.entries(person)
// ------------------------------
// This method converts the object into an array of key–value pairs.
// Each pair becomes its own mini-array: [key, value]

const entries = Object.entries(person);

console.log(entries);

/*
OUTPUT:
[
  ["name", "Vivek"],
  ["age", 25],
  ["city", "Delhi"]
]

Explanation:
- "name" → "Vivek"
- "age"  → 25
- "city" → "Delhi"

So Object.entries() transforms an object into this "list of pairs".
*/

// ------------------------------
// Why is this useful?
// You can loop through an object easily with for...of
// ------------------------------

for (const [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

/*
OUTPUT:
name : Vivek
age : 25
city : Delhi

We destructured the pair into [key, value]
*/

// ------------------------------
// You can also convert an object → Map
// ------------------------------

const personMap = new Map(Object.entries(person));
console.log(personMap);

/*
OUTPUT (Map structure):
Map {
  "name" => "Vivek",
  "age"  => 25,
  "city" => "Delhi"
}
*/

