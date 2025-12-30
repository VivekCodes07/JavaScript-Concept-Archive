/*
2. splice() (Destructive Editing: Remove/Insert)

"Tear pages from your notebook or add new ones."

changes the original array.
*/


// 1. Removing Items

let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 3); // -> Remove items from index 1 to 3
console.log(fruits); 


// 2. Inserting Items

let names = ["Rohan", "Sohan", "Mohan"];
names.splice(1, 0, "Shyam"); 
console.log(names);

// Explanation: 1. Start at index 1
//              2. Remove 0 items
//              3. Insert "Shyam at" index 1 


// 3. Replace Items 

let numbers = [10, 20, 30];

numbers.splice(1, 1, 99);

console.log(numbers);
// [10, 99, 30]


// Explanation: 1. Start at index 1
//              2. Remove 1 item
//              3. Replace it with 99


// This is exactly how “edit name / edit profile” works.