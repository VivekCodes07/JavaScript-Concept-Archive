// Searching Methods:

// 1. includes() — “Is this item present?”

let students = ["Rohan", "Mohan", "Shyam", "Abhishek"];

console.log(students.includes("Rohan"));
// true

console.log(students.includes("Shahrukh"));
// false


// 2. indexOf() — “Where is the item located?”

let colors = ["Red", "Blue", "Green", "Yellow"];

console.log(colors.indexOf("Green")); // 2

console.log(colors.indexOf("Black")); // -1 (means NOT found)


// 3. find() — “Give me the FIRST item that matches this condition.”

let marks = [30, 40, 60, 80, 50];

// If I ask: “Find the first mark above 50.” 
// Then:

let result = marks.find(m => m > 45);
console.log(result); // 60


// 4. findIndex() — Same as find() but gives INDEX

let studentMarks = [30, 40, 60, 80, 50];

let Result = marks.findIndex(m => m > 45);
console.log(Result);  // 2