// Q3. Count how many times each fruit appears.

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = {};

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];

  if (fruitCount[fruit]) {
    fruitCount[fruit] = fruitCount[fruit] + 1;
  } else {
    fruitCount[fruit] = 1;
  }
}

console.log(fruitCount);
