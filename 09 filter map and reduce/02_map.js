// 👉 map() transforms each element in an array
// 👉 Same length array comes out
// 👉 Original array does not change
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const add2 = nums.map((n) => {
    return n + 2;
});

console.log(add2); // [3, 4, 5, 6, 7, 8, 9, 10, 11]

// Doing the same using forEach

const add3 = nums.forEach((n) => {
     console.log(n + 3)
});

console.log(add3);


// Chaining filter() + map()

/*
From a list of students:
1️⃣ Filter students with marks ≥ 70
2️⃣ Map to get only their names in uppercase
*/

const students = [
  { name: "Vivek", marks: 82 },
  { name: "Rahul", marks: 68 },
  { name: "Suresh", marks: 75 },
  { name: "Meena", marks: 60 }
];

const result = students
  .filter(student => student.marks >= 70)
  .map(student => student.name.toUpperCase());

console.log(result);

/*
1️⃣ filter()
👉 Keeps only:

[
  { name: "Vivek", marks: 82 },
  { name: "Suresh", marks: 75 }
]

2️⃣ map()
👉 Transforms each object into:

["VIVEK", "SURESH"]
*/

// Rule: First filter (remove unwanted), then map (transform what remains).


/*
From products:

* Keep products in stock

* Get their prices with 10% discount

*/
const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Phone", price: 30000, inStock: false },
  { name: "Tablet", price: 20000, inStock: true }
];

const discountedPrices = products
  .filter(product => product.inStock)
  .map(product => product.price * 0.9);

console.log(discountedPrices);
