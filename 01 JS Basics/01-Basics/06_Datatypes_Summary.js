// Primitive Datatypes: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 123467493372369n;

// Reference (Non-Primitive): Arrays, Objects, Functions

const heroes = ["Superman", "Batman", "Superman"];

let myObj = {
  name: "Vivek",
  age: 20,
};

const myFunction = function() {
    console.log('Hello World!');
}

console.log(typeof heroes);