// 1. The length Property 

let cart = ["Pizza", "Coke", "Garlic Bread"];
console.log(cart.length); // 3


// 2. push() → Adds to the END

let colors = ["Red", "Blue", "Green"];
colors.push("Pink");

// 3. unshift() → Adds to the BEGINNING

let queue = ["Person B", "Person C"];
queue.unshift("Person A");
console.log(queue);

// 4. pop() → Removes LAST

let books = ["Book A", "Book B", "Book C"];
books.pop();
console.log(books);

// 5. shift() → Removes FIRST

let tasks = ["Wake up", "Brush Teeth", "Eat breakfast"];
tasks.shift();
console.log(tasks);

// 6. Checking if Something Is an Array

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray(["hello Kitty"])); // false

