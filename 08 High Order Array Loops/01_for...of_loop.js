// for...of loop
// 👉 Best for: Iterating over the values of an iterable (arrays, strings, Maps, Sets, etc.)


/*

Syntax:
for (const value of iterable) {
     use value
}

*/


// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    if (greet == " ") {
        continue;
    }
    console.log(`Each character is: ${greet}`);
}


// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");

console.log(map);


for (const [key, value] of map) {
    console.log(key, ': ', value);
}


const myObject = {
    game1: "NFS",
    game2: "SpiderMan"
};

for (const obj in myObject) {
    console.log(obj);
}