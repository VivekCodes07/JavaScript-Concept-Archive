/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                         LESSON 09 : PROTOTYPES                             ║
╚══════════════════════════════════════════════════════════════════════════════╝

WHY DO PROTOTYPES EXIST?

Imagine I create 1000 employees.

Every employee should have different data like:
- name
- age
- role

But every employee doesn't need its own copy of methods like
introduce(), work(), etc.

Instead of copying the same method into every object,
JavaScript stores one shared copy inside the Prototype.

This saves memory and makes object creation efficient.
*/

/* ───────────────────────── CONSTRUCTOR FUNCTION ───────────────────────── */

function Employee(name, age, role) {
  /*
    Every object gets its own copy of these properties.
  */

  this.name = name;
  this.age = age;
  this.role = role;
}

/* ─────────────────────── CREATING PROTOTYPE METHODS ─────────────────────── */

/*
Instead of writing methods inside the constructor,

I attach them to Employee.prototype.

Every object created using Employee will share these methods.
*/

Employee.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I work as a ${this.role}.`);
};

Employee.prototype.work = function () {
  console.log(`${this.name} is working...`);
};

/* ───────────────────────── CREATING OBJECTS ───────────────────────── */

const employee1 = new Employee("John", 24, "Backend Developer");
const employee2 = new Employee("Emma", 27, "Frontend Developer");

employee1.introduce();
employee2.introduce();

employee1.work();
employee2.work();

/*
Behind the scenes

employee1

{
    name: "John",
    age: 24,
    role: "Backend Developer"
}

↓

Employee.prototype

introduce()

work()

The methods are NOT copied into every object.
Both employee1 and employee2 share the same functions.
*/

/* ───────────────────────── PROPERTY LOOKUP ───────────────────────── */

/*
When I write

employee1.introduce()

JavaScript searches like this

employee1

↓

Employee.prototype

↓

Object.prototype

↓

null

The search stops as soon as the method is found.
*/

/* ───────────────────────── prototype vs __proto__ ───────────────────────── */

console.log(Employee.prototype);

console.log(employee1.__proto__);

/*
Both should refer to the same prototype object.
*/

console.log(employee1.__proto__ === Employee.prototype);

/*
Output

true
*/

/*
Easy way to remember

Constructor Function

↓

prototype

----------------------------

Object

↓

__proto__
*/

/* ───────────────────────── constructor PROPERTY ───────────────────────── */

console.log(Employee.prototype.constructor);

/*
Output

[Function: Employee]

Every prototype automatically contains a constructor property.
*/

/* ───────────────────────── OBJECT.PROTOTYPE ───────────────────────── */

/*
Why does this work?

Because toString() comes from Object.prototype.
*/

console.log(employee1.toString());

/*
JavaScript searched

employee1

↓

Employee.prototype

↓

Object.prototype

↓

Found toString()
*/

/* ───────────────────────── hasOwnProperty() ───────────────────────── */

console.log(employee1.hasOwnProperty("name"));
console.log(employee1.hasOwnProperty("introduce"));

/*
Output

true
false

"name" belongs to employee1.

"introduce" belongs to Employee.prototype.
*/

/* ───────────────────────── METHOD OVERRIDING ───────────────────────── */

/*
An object can override a prototype method.
*/

employee1.introduce = function () {
  console.log("This method belongs only to employee1.");
};

employee1.introduce();

employee2.introduce();

/*
employee1 uses its own method.

employee2 still uses the prototype method.

Reason?

JavaScript always checks the object first.
*/

/* ───────────────────────── CLASSES USE PROTOTYPES ───────────────────────── */

/*
Classes are just cleaner syntax.

Internally they still use prototypes.
*/

class Developer {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const developer = new Developer("Michael");

developer.greet();

/*
Developer.prototype

↓

greet()

The method is shared,
not copied into every object.
*/

/* ───────────────────────── KEY TAKEAWAYS ───────────────────────── */

/*

✓ Prototypes exist to share methods.

✓ Shared methods save memory.

✓ Constructor Functions have a prototype property.

✓ Objects have a __proto__ link.

✓ employee.__proto__ === Employee.prototype

✓ JavaScript first checks the object.

✓ If not found,
  it searches the Prototype Chain.

✓ Classes internally use prototypes.

✓ Prototype methods are shared.

✓ Object properties are unique.

*/



/* ───────────────────── EXTRA LEARNING ───────────────────── */

/*
One thing I realized while learning Prototypes.

Constructor Functions and ES6 Classes both use prototypes,
but the way I write them is different.
*/

/* ---------------- Constructor Function ---------------- */

function Employee(name) {
  this.name = name;
}

/*
I manually attach methods to the prototype.

Every object created using Employee
will share this single function.
*/

Employee.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const employee = new Employee("John");

employee.introduce();

/* ---------------- ES6 Class ---------------- */

class Developer {
  constructor(name) {
    this.name = name;
  }

  /*
    Even though this method is written inside the class,
    JavaScript automatically places it on Developer.prototype.

    Internally, it's similar to writing:

    Developer.prototype.introduce = function () {
      ...
    };

    I don't have to do it manually.
  */

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const developer = new Developer("Emma");

developer.introduce();

/* ---------------- Proof ---------------- */

console.log(Employee.prototype);
console.log(Developer.prototype);

/*
Both prototypes contain the shared introduce() method.

This proves that Classes are still using prototypes.
*/

console.log(employee.__proto__ === Employee.prototype); // true
console.log(developer.__proto__ === Developer.prototype); // true

/*
Key Takeaway

✓ Constructor Functions:
  I manually attach methods using .prototype.

✓ ES6 Classes:
  JavaScript automatically attaches methods to the prototype.

✓ End Result:
  Both approaches use the exact same prototype system.

Classes don't replace prototypes.
They simply provide a cleaner syntax for working with them.
*/