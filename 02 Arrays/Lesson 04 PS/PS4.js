// Q1: Use includes() to check if "Delhi" is in this list:

let cities = ["Mumbai", "Pune", "Hyderabad"];

console.log(cities.includes("Delhi")); // false


// Q2: Use indexOf() to find the index of "grapes":

let fruits = ["banana", "apple", "grapes"];

console.log(fruits.indexOf("grapes")); // 2


// Q3: Use find() to get the first number > 50:

let nums = [10, 25, 67, 40, 55, 75];

let result = nums.find(n => n > 50);

console.log(result); // 67


// Q4: Sort this list alphabetically:

let names = ["Kiran", "Amit", "Zara", "Neha"];

console.log(names.sort());


// Q5: Sort prices low → high:

let prices = [500, 120, 80, 999];

prices.sort((a, b) => a - b);

console.log(prices);