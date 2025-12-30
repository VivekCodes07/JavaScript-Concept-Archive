// Sorting means arranging items in order.

// 1. sort() — Strings sort alphabetically by default:

let fruits = ["banana", "apple", "grapes"];
fruits.sort();
console.log(fruits); 
// ["apple", "banana", "grapes"]


// 2. Sorting Numbers - JavaScript sorts numbers as strings unless we guide it.


// Sorting Posts by Likes (Descending)
let likes = [56, 120, 10, 335];

likes.sort((a, b) => b - a);

console.log(likes);


// Sorting Low to High

let nums = [45, 67, 33, 90, 207];

nums.sort((a, b) =>  a - b);

console.log(nums);