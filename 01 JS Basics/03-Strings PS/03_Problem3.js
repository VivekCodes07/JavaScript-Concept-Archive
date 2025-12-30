/*
let data = "Programming with JavaScript is amazing";

1. Check if it includes "JavaScript"
2. Check if it starts with "Programming"
3. Check if it ends with "amazing"
4. Find index of "JavaScript" using search()
5. Match all occurrences of letter "a"

*/

let data = "Programming with JavaScript is amazing";

console.log(data.includes("JavaScript"));

console.log(data.startsWith("Programming"));

console.log(data.endsWith("amazing"));

console.log(data.search("JavaScript"));

console.log(data.match(/a/g));