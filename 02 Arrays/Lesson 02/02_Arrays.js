// There are three common way to create an array.

// 1. Array literal

let cities = ["Mumbai", "Kolkata", "Bengaluru", "Hyedarabad"];

// 2. Using the Array constructor

let numbers = new Array(10, 20, 30);

//3. Creating an Empty Array & Filling later

let tasks = [];
tasks.push("Pay bills");
tasks.push("Study Javascript");

// 4. Arrays are mutable

let wishlist = ["Watch", "Shoes", "Laptop"];

console.log("Before Changing: ", wishlist);
wishlist[1] = "Sneakers";
console.log("After changing: ", wishlist);

 

