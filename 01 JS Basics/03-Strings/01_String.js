const name = "Vivek";
const repoCount = 50;

// console.log(name + repoCount + " Value")

// String interpolation
console.log(`Hello my name is ${name} amd my repo count is ${repoCount}`);

let str = 'John Cena';
let newStr = str.toUpperCase();

console.log(str);
console.log(newStr);

// str.toLowerCase()
console.log(str.toLowerCase());

// str.trim() - removes whitespaces
let shinchan = '     Japan is beautiful   ';
console.log(shinchan.trim());

// str.slice(start, end)
let num = '0123456789';
console.log(num.slice(1, 6));

// str.concat(str2)
let str1 = 'Brock ';
let str2 = 'Lesnar';

let result = str1.concat(str2);
console.log(result);

// str.replace(searchVal, newVal)
let sentence = 'I love apples, and I bought three apples today.';
let correctedSentence = sentence.replaceAll('apples', 'bananas');

console.log(correctedSentence);
// Output: I love bananas, but I bought three bananas today.


// str.charAt(idndex)
let greeting = 'Hello';

// The character at index 0 (the first character)
console.log(greeting.charAt(0)); 
// Output: H

// The character at index 4 (the last character)
console.log(greeting.charAt(4)); 
// Output: o


