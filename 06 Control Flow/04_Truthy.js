// truthy and falsy

const userEmail = "vivek@google.com";

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have user Email");
}

// Falsy Values:

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values:

// true, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty.");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty.");
}

// Null Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;

val2 = null ?? 10;
val3 = undefined ?? 15;

val4 = null ?? 10 ?? 15;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Ternary Operator:

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
