/*
==============================================================================
LESSON 06 - CONSTRUCTOR FUNCTIONS
==============================================================================

What problem are Constructor Functions solving?

Suppose I'm building a company management system.

I need to create hundreds or even thousands of employees.

Creating every employee using object literals would repeat the same structure
again and again.

Constructor Functions allow me to define the structure once and create as many
objects as I want.

==============================================================================
*/

function Employee(name, age, role) {
  /*
  ============================================================================
  IMPORTANT

  At this point, I DID NOT create an object.

  JavaScript already created one for me because I used the `new` keyword.

  Inside a Constructor Function,

  `this`

  points to that newly created object.

  I simply fill that object with data.
  ============================================================================
  */

  this.name = name;
  this.age = age;
  this.role = role;

  /*
  ============================================================================
  I don't write:

  return this;

  because JavaScript automatically returns the object after the constructor
  finishes executing.

  That's one of the special powers of the `new` keyword.
  ============================================================================
  */
}

/*
==============================================================================
WHAT DOES `new` ACTUALLY DO?
==============================================================================

When JavaScript sees

    const employee = new Employee("John", 24, "Backend Developer");

It DOES NOT simply call the function.

Instead, it roughly performs these steps.

Step 1
-------

Create an empty object.

    {}

Step 2
-------

Link the object with Employee.prototype.

(Don't worry about prototypes yet.
We'll study them later.)

Step 3
-------

Call the constructor function.

Employee.call(newObject, "John", 24, "Backend Developer");

Notice something.

`this`

now points to

newObject

Step 4
-------

Automatically return the object.

return newObject;

==============================================================================

The real JavaScript engine does this differently,
but this mental model is enough to understand Constructor Functions.

==============================================================================
*/

/*
==============================================================================
Creating Objects
==============================================================================

Every time I use `new Employee()`

JavaScript repeats the four steps above.

That means every employee is a completely new object.
==============================================================================
*/

const employee1 = new Employee("John", 24, "Backend Developer");
const employee2 = new Employee("Emma", 27, "Frontend Engineer");

console.log(employee1);
console.log(employee2);

/*
==============================================================================
Visualizing Memory
==============================================================================

employee1
    │
    ▼

{
    name: "John",
    age: 24,
    role: "Backend Developer"
}


employee2
    │
    ▼

{
    name: "Emma",
    age: 27,
    role: "Frontend Engineer"
}

Notice that both variables point to DIFFERENT objects.

Changing one will never affect the other.

==============================================================================
*/

employee1.role = "Senior Backend Developer";

console.log(employee1.role);
console.log(employee2.role);

/*
Output

Senior Backend Developer

Frontend Engineer

This proves that every constructor call creates an independent object.
*/

/*
==============================================================================
Built-in Constructor Functions
==============================================================================

Constructor Functions are NOT something we invent.

JavaScript itself already uses them.

For example,

Array
Object
Date
Map
Set

are all Constructor Functions.

That's why we can write

new Array()

or

new Date()

==============================================================================
*/

const numbers = new Array(5, 6, 10, 56);

console.log(numbers);

/*
==============================================================================
Why is typeof numbers "object"?
==============================================================================

Because arrays are objects.

Arrays simply have extra capabilities built on top of normal objects.

For example,

push()
pop()
map()
filter()
reduce()

These methods make arrays behave differently,
but underneath, they are still objects.

==============================================================================
*/

console.log(typeof numbers);

/*
Output

object
*/

/*
==============================================================================
Why is typeof Array "function"?
==============================================================================

Because Array itself is a Constructor Function.

Remember

new Employee(...)

works because Employee is a function.

Similarly,

new Array(...)

works because Array is also a function.

The `new` keyword can only work with Constructor Functions.

==============================================================================
*/

console.log(typeof Array);

/*
Output

function
*/

/*
==============================================================================
Things I Should Remember
==============================================================================

✓ Constructor Functions are just normal functions.

✓ By convention, their names start with a capital letter.

✓ The `new` keyword changes how the function behaves.

✓ JavaScript creates the object for me.

✓ `this` points to that newly created object.

✓ JavaScript automatically returns the object.

✓ Arrays are objects.

✓ Array itself is a Constructor Function.

==============================================================================
*/