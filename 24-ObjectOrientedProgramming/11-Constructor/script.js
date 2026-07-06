/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                        LESSON 11 : CONSTRUCTOR                             ║
╚══════════════════════════════════════════════════════════════════════════════╝

A constructor is a special function whose job is to initialize
a newly created object.

I've already seen constructors in both:
✓ Constructor Functions
✓ ES6 Classes

This lesson is mainly a quick revision of that concept.
*/

/* ───────────────────── CONSTRUCTOR FUNCTION ───────────────────── */

/*
Before ES6 Classes, JavaScript used Constructor Functions.

When I use the `new` keyword,
JavaScript creates a new object and `this`
points to that newly created object.
*/

function Employee(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
}

const employee1 = new Employee("John", 24, "Backend Developer");

console.log(employee1);

/* ───────────────────────── ES6 CLASS ───────────────────────── */

/*
Classes provide cleaner syntax.

The constructor() method is automatically called
whenever I create a new object using `new`.
*/

class Developer {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

const developer = new Developer("Emma", 27, "Frontend Developer");

console.log(developer);

developer.introduce();

/* ───────────────────── CONSTRUCTOR PROPERTY ───────────────────── */

/*
Every prototype automatically contains a constructor property.

It points back to the function or class
that created the object.
*/

console.log(Employee.prototype.constructor);
console.log(employee1.constructor);

console.log(Developer.prototype.constructor);
console.log(developer.constructor);

/*
Expected Output

[Function: Employee]
[Function: Employee]

[class Developer]
[class Developer]
*/

/* ───────────────────── QUICK COMPARISON ───────────────────── */

/*

Constructor Function

↓

function Employee() {}

----------------------------------------

ES6 Class

↓

class Employee {
    constructor() {}
}

----------------------------------------

Both initialize a newly created object.

The syntax is different,
but the purpose is exactly the same.

*/

/* ───────────────────────── KEY TAKEAWAYS ───────────────────────── */

/*

✓ A constructor initializes an object.

✓ Constructor Functions were used before ES6.

✓ Classes provide a cleaner syntax.

✓ The constructor() method runs automatically.

✓ Every prototype has a constructor property.

✓ Don't confuse:

constructor()  -> Special method inside a class.

constructor    -> Property on the prototype.

*/