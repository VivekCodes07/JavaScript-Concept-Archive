const arr = ["a", "b", "c"];

console.log("for...of:");
for (const value of arr) {
    console.log(value);
}

console.log("for...in:");
for (const key in arr) {
    console.log(key); // 0, 1, 2 (keys)
}

console.log("forEach:");
arr.forEach(value => console.log(value));
