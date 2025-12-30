let str = " I am learning JavaScript ";

// Printing Original string
console.log(str);

// Removing extra spaces
let newStr = str.trim();
console.log(newStr);

// Replace JavaScript with C++
console.log(newStr.replace("JavaScript", "C++"));

// Slice only "I am"
let text = newStr.slice(0, 4);
console.log(text);

// Split string by spaces
console.log(newStr.split(" "));