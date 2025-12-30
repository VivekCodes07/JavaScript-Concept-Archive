/*
👉 Best for: Iterating over keys (property names) of an object
⚠️ Not recommended for arrays (because it loops keys, not values, and may catch unexpected properties).

*/

const myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

// for accessing value of an object: Object[key]
for (const key in myObj) {
  console.log(`${key} stands for ${myObj[key]}`);
}

// If we try to use for...in loop with arrays we get indexes of arrays as key
const languages = ["JS", "C++", "Python", "Golang", "C#"];

for (const key in languages) {
  console.log(key);
}

// now to get values of array using for...in we have to use languages[key]

const fruits = ["Banana", "Mango", "Apple", "Guava"];

for (const value in fruits) {
  console.log(`fruit at index ${value} = ${fruits[value]}`);
}
