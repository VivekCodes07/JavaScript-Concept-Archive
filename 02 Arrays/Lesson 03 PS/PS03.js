// Q1: Create an array of 3 countries and add a new one using push().

let countries = ["India", "Japan", "Germany"];
countries.push("USA");
console.log(countries);


// Q2: Remove the last item from this array: 

let items = ["Pen", "Pencil", "Eraser", "Sharpener"];
items.pop();
console.log(items);


// Q3: Add "Gold" to the start of this array using unshift():
 
let medals = ["Silver", "Bronze"];
medals.unshift("Gold");
console.log(medals);


// Q4: What does .length do?

// -> Tells us how many elements are present in the array.


// Q5: Check if "hello" is an array.

console.log(Array.isArray("Hello!")); // false


// Q6: Remove the first element of this array using shift():

let queue = ["Task 1", "Task 2", "Task 3"];
queue.shift();
console.log(queue);
