// -----------------------------
// Example 1: Stack Memory (Primitive Data Types)
// -----------------------------

// Primitive values (String, Number, Boolean, null, undefined, Symbol, BigInt)
// are stored directly in STACK memory.

let myYTChannelName = "Vivek Explores"; 
// The actual string value "Vivek Explores" is saved in stack with variable name.

let anotherName = myYTChannelName; 
// Here, the VALUE is copied to another variable (not reference).
// So anotherName contains its own separate copy of the string.

anotherName = "Anonymous Wanderer"; 
// Only anotherName changes, not myYTChannelName.

console.log(myYTChannelName);   // Output: Vivek Explores
console.log(anotherName);       // Output: Anonymous Wanderer

// Note: Original value does NOT change because primitives are passed by VALUE
// (a completely separate copy is created).



// ----------------a-------------
// Example 2: Heap Memory (Non-Primitive Data Types)
// -----------------------------

/// Non-primitives (Objects, Arrays, Functions)
// are stored in HEAP memory and reference (address) is stored in STACK.


// ---------------- OBJECT EXAMPLE ---------------- //

let userOne = {
    email: "Kumarvivek76923@gmail.com",
    upi: "user@ybl"
};
// userOne stores a reference (pointer) to an object in HEAP memory.

let userTwo = userOne;
// Copying a non-primitive copies only the REFERENCE.

userTwo.email = "Vivekkrdas03@gmail.com";
// Both variables point to the same object, so update affects both.

console.log(userOne.email); // Output: Vivekkrdas03@gmail.com
console.log(userTwo.email); // Output: Vivekkrdas03@gmail.com



// ---------------- ARRAY EXAMPLE ---------------- //

let arr1 = [10, 20, 30];
// arr1 stores a reference to an array in HEAP memory.

let arr2 = arr1;
// Reference copied, NOT the array itself.

arr2.push(40);
// Changing arr2 modifies the same array in heap.

console.log(arr1); // Output: [10, 20, 30, 40]
console.log(arr2); // Output: [10, 20, 30, 40]



// ---------------- FUNCTION EXAMPLE ---------------- //

// Functions are objects internally, so they are also stored in HEAP.
// Variables store a reference to the function.

function greet() {
    console.log("Hello from the greet function!");
}

let greetCopy = greet;
// Only the REFERENCE is copied.

greetCopy();  // Calls the same function stored in heap
greet();      // Both refer to the same function

// You can verify they reference the same function:
console.log(greet === greetCopy); // true


// Note: Objects, Arrays, and Functions are passed by REFERENCE,
// meaning only the address is copied, not the actual value.
