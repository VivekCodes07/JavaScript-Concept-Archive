/*
Functions as First Class Citizens / Functions as Objects
-------------------------------------------------------
A value is called First Class Citizen if:
1. It can be stored in a variable
2. It can be passed as an argument
3. It can be returned from a function
*/


/*----------------Object Example----------------*/

let c1 = {
  name: "BMW",
  cost: 75.6,
  mileage: 8.9,
};

function exmp(car) {
  console.log(car);
}

exmp(c1); // ✔️ Object passed as argument


/*----------------Now PROVE Functions are First Class Citizens----------------*/


/*----------------Condition 1----------------*/
/*
Can we store a function inside a variable?
*/

let greet = function () {
  console.log("Hello from function stored in a variable");
};

greet(); // ✔️ YES


/*----------------Condition 2----------------*/
/*
Can we pass a function as an argument?
*/

function executor(fn) {
  console.log("Executing function...");
  fn();
}

executor(greet); // ✔️ YES


/*----------------Condition 3----------------*/
/*
Can we return a function from another function?
*/

function outer() {
  return function () {
    console.log("I am returned from another function");
  };
}

let returnedFn = outer();
returnedFn(); // ✔️ YES


/*----------------Memory POV----------------*/
/*
Functions are stored in Heap memory (like objects)

Stack (GEC)              Heap
------------            -----------------
greet --------->        function() { ... }
returnedFn ----->       function() { ... }

Variables store reference (address)
*/


/*----------------Final Conclusion----------------*/
/*
Check all 3 conditions for FUNCTIONS:

1. Stored in variable? ✔️
2. Passed as argument? ✔️
3. Returned from function? ✔️

👉 Functions are First Class Citizens in JavaScript
👉 Functions are treated like values
👉 Functions behave like objects
*/


/*----------------Golden Line----------------*/
/*
"Functions are not special — they are just values."

This is what makes JavaScript extremely powerful 🚀
*/