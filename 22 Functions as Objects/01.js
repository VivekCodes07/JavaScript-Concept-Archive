/*
Today we are going to learn an extremely important concept in JavaScript which is called as Functions as First Class Citizens or Functions as Objects. 


As we already know what is an Object in JS, right?
    -> In JS, an Object is a collection of Key-Value pairs (property-value pairs)

Now please try to understand, a JS Object in JavaScript is called as a "First Class Citizen".


Now what does "First Class Citizen" mean?

For any value in JavaScript (number, string, object, function, etc.)
to be called a First Class Citizen, it must satisfy 3 conditions:

    1. It can be stored in a variable
    2. It can be passed as an argument to a function
    3. It can be returned from a function

If all these are satisfied → it is a First Class Citizen ✅


Now let us first check this for OBJECTS
*/


/*
Now let's PROVE that Objects are First Class Citizens in JavaScript
*/


/*----------------Condition 1----------------*/
/*
1. Can we store an object inside a variable?
*/

let c1 = {
  name: "BMW",
  cost: 75.6,
  mileage: 8.9,
};

console.log(c1); // ✔️ YES, stored inside a variable


/*----------------Condition 2----------------*/
/*
2. Can we pass an object as an argument to a function?
*/

function display(obj) {
  console.log("Inside function:", obj);
}

display(c1); // ✔️ Object passed as argument


/*----------------Condition 3----------------*/
/*
3. Can we return an object from a function?
*/

function createCar() {
  return {
    name: "Audi",
    cost: 80,
  };
}

let newCar = createCar();
console.log(newCar); // ✔️ Object returned from function


/*----------------Extra Proof (Very Important)----------------*/

/*
We can even modify the object inside a function
*/

function modify(obj) {
  obj.name = "Mercedes";
}

modify(c1);

console.log(c1.name); // ✔️ Output: Mercedes

/*----------------Now let's Understand it From Memory POV-------------*/

/*
Whenever a JavaScript program runs, two memory segments are created:

    1. Stack Segment
    2. Heap Segment


Inside Stack → Global Execution Context (GEC) is created

GEC has 2 phases:
    1. Creation Phase
    2. Execution Phase


Now understand object creation:

👉 Assignment rule:
    First RHS executes, then LHS


👉 RHS:
    JS sees { ... } → understands object literal

    → Goes to Heap
    → Allocates memory
    → Creates object with properties:

        name → "BMW"
        cost → 75.6
        mileage → 8.9

    Object created ✔️


👉 LHS:
    Variable c1 is created inside Stack (GEC)

But IMPORTANT:

    c1 does NOT store the object ❌
    c1 stores the ADDRESS (reference) of object ✅


So internally:

    Stack (GEC)                     Heap
    ------------                  -----------------
    c1  --------->                { name: "BMW",
                                   cost: 75.6,
                                   mileage: 8.9 }

So c1 is just a reference (pointer)
*/


/*----------------Function Call Understanding----------------*/

/*
When we call:

    exmp(c1);

👉 The value inside c1 (address) is passed
*/


/*
Inside function:

    function exmp(car) { ... }

'car' receives SAME address
*/


/*
So internally:

    Stack (GEC)                     Heap
    ------------                  -----------------
    c1  --------->                Object
    car --------->                SAME Object

Both point to SAME memory location ✅
*/


/*----------------Important Insight----------------*/

/*
This is called "Pass by Reference" (for objects)

    - Not passing copy ❌
    - Passing reference (address) ✅
*/


/*----------------Proof----------------*/

function exmp(car) {
  car.name = "Audi";
}

exmp(c1);

console.log(c1.name); // Output: Audi


/*
Why?

Because both c1 and car refer to SAME object
*/


/*----------------Return Object (3rd Condition)----------------*/

function createCar2() {
  return {
    name: "Mercedes",
    cost: 90,
  };
}

let c2 = createCar2();
console.log(c2); // ✔️ Object returned


/*----------------Conclusion----------------*/

/*
Check all 3 conditions for OBJECTS:

    1. Stored in variable? ✔️
    2. Passed as argument? ✔️
    3. Returned from function? ✔️

So YES ✅

👉 Objects are First Class Citizens in JavaScript
*/


/*----------------Next Big Concept----------------*/

/*
Now the MOST IMPORTANT part:

👉 Functions in JavaScript ALSO follow the SAME rules

That means:

    - Stored in variables
    - Passed as arguments
    - Returned from functions

So:

👉 Functions are also First Class Citizens
👉 Also called First Class Functions
👉 Also called Functions as Objects


Next step: We will PROVE this 🔥
*/