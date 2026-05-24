/*
Today we are going to learn an extremely important concept in JavaScript which is called as Functions as first class citizens or Functions as Objects. 
*/

let c1 = {
  name: "BMW",
  cost: 75.6,
  mileage: 8.9,
};

function exmp(car) {
  console.log(car);
}

exmp(c1);

/*----------------Now let's PROVE Functions are First Class Citizens-------------*/

/*
Till now we proved that Objects satisfy all 3 conditions.

Now let's check whether FUNCTIONS also satisfy these 3 conditions or not.
*/


/*----------------Condition 1----------------*/
/*
1. Can we store a function inside a variable?
*/

let greet = function () {
  console.log("Hello from function stored in a variable");
};

greet(); // ✔️ YES, we can store function in a variable


/*----------------Condition 2----------------*/
/*
2. Can we pass a function as an argument to another function?
*/

function executor(fn) {
  console.log("Executing function...");
  fn();
}

executor(greet); // ✔️ Passing function as argument


/*----------------Condition 3----------------*/
/*
3. Can we return a function from another function?
*/

function outer() {
  return function () {
    console.log("I am returned from another function");
  };
}

let returnedFn = outer();
returnedFn(); // ✔️ Function returned and executed


/*----------------Memory POV (Very Important)----------------*/

/*
Just like objects, functions are ALSO created inside the Heap memory.

So internally:

    Stack (GEC)                     Heap
    ------------                  -----------------
    greet --------->              function() { ... }
    returnedFn --->              function() { ... }

So functions are ALSO referenced using address just like objects.
*/


/*----------------Final Conclusion----------------*/

/*
Now check all 3 conditions for FUNCTIONS:

    1. Stored in variable? ✔️
    2. Passed as argument? ✔️
    3. Returned from function? ✔️

So YES ✅

👉 Functions are First Class Citizens in JavaScript
👉 Functions are treated like Objects
👉 Functions behave just like values


/*----------------Golden Line (Remember This)----------------*/

/*
In JavaScript:

    "Functions are not special — they are just values."

And that is what makes JavaScript EXTREMELY powerful 
*/