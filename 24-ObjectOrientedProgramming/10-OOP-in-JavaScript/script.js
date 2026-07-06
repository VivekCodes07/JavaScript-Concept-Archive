/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                    LESSON 10 : OOP IN JAVASCRIPT                            ║
╚══════════════════════════════════════════════════════════════════════════════╝

This lesson is a revision of everything I've learned so far.

Until now I've learned:

✓ Object Literals
✓ Factory Functions
✓ Constructor Functions
✓ ES6 Classes
✓ this keyword
✓ new keyword
✓ Prototypes

Now I'm connecting all these concepts together to understand
how JavaScript implements Object-Oriented Programming (OOP).
*/

/* ───────────────────────── OBJECT LITERAL ───────────────────────── */

/*
Best when I only need one or two objects.
*/

const employee = {
  name: "John",
  age: 24,
  role: "Backend Developer",

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

employee.introduce();

/* ─────────────────────── FACTORY FUNCTION ───────────────────────── */

/*
Useful when I want to create multiple similar objects
without repeating code.
*/

function createEmployee(name, age, role) {
  return {
    name,
    age,
    role,

    introduce() {
      console.log(`Hi, I'm ${this.name}`);
    },
  };
}

const employee1 = createEmployee("Emma", 27, "Frontend Developer");

employee1.introduce();

/* ─────────────────── CONSTRUCTOR FUNCTION ─────────────────── */

/*
Constructor Functions work with the `new` keyword.

`this` refers to the newly created object.
*/

function Employee(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
}

/*
Instead of creating methods inside every object,
I attach them to the prototype.
*/

Employee.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const employee2 = new Employee("Michael", 30, "DevOps Engineer");

employee2.introduce();

/* ───────────────────────── ES6 CLASS ───────────────────────── */

/*
Classes provide cleaner syntax.

Behind the scenes,
JavaScript still uses prototypes.
*/

class Developer {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const developer = new Developer("Sophia", 25, "Full Stack Developer");

developer.introduce();

/* ─────────────────────── PROTOTYPES ─────────────────────── */

/*
Prototype methods are shared by every object.

Only one copy of the method exists.
*/

console.log(employee2.__proto__ === Employee.prototype);

/*
Output

true
*/

/* ───────────────────────── OOP IDEA ───────────────────────── */

/*
Object-Oriented Programming is all about
grouping related data and behavior together.

Properties

↓

Store information

Methods

↓

Define what the object can do.
*/

const car = {
  brand: "BMW",
  model: "M4",

  start() {
    console.log(`${this.brand} is starting...`);
  },
};

car.start();

/* ───────────────────────── REAL WORLD THINKING ───────────────────────── */

/*
Instead of writing random variables,

Think in terms of real-world entities.

School

↓

Student
Teacher
Course

E-Commerce

↓

User
Product
Cart
Order

Bank

↓

Customer
Account
Transaction

Each entity becomes an object.
*/

/* ───────────────────────── FINAL REVISION ───────────────────────── */

/*

Object Literal

↓

One or two objects

---------------------------------

Factory Function

↓

Create multiple objects

---------------------------------

Constructor Function

↓

Uses `new` and `this`

---------------------------------

ES6 Class

↓

Cleaner syntax over Constructor Functions

---------------------------------

Prototype

↓

Shared methods

---------------------------------

OOP

↓

Organize code around objects

*/

/* ───────────────────────── KEY TAKEAWAYS ───────────────────────── */

/*

✓ OOP organizes code around objects.

✓ Objects contain properties and methods.

✓ Factory Functions reduce repetitive code.

✓ Constructor Functions work with `new`.

✓ Classes are cleaner syntax.

✓ JavaScript is Prototype-Based.

✓ Classes still use prototypes internally.

✓ Prototypes allow objects to share methods.

Everything I've learned so far prepares me
for the Four Pillars of OOP.

*/