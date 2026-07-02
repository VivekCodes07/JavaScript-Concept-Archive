/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                           LESSON 07 : ES6 CLASSES                          ║
╚══════════════════════════════════════════════════════════════════════════════╝

WHY DO CLASSES EXIST?

Before ES6, JavaScript developers used Constructor Functions to create objects.

They worked perfectly, but the syntax became difficult to read as projects
grew larger.

ES6 introduced Classes to solve this readability problem.

Important

Classes DO NOT replace Constructor Functions.

They're simply a cleaner syntax built on top of the exact same concept.

Everything I learned about

• new
• this
• Constructor Functions

still applies here.
*/

/* ───────────────────────── IMPLEMENTATION ───────────────────────── */

class Employee {
  /*
  constructor()

  This special method runs automatically every time I create a new object
  using the `new` keyword.

  Its only responsibility is to initialize the object.
  */

  constructor(name, age, role) {
    /*
    At this moment...

    JavaScript has ALREADY created an empty object.

    `this`

    points to that object.

    I'm simply adding properties to it.
    */

    this.name = name;
    this.age = age;
    this.role = role;
  }

  /*
  Unlike Constructor Functions,
  methods are written outside the constructor.

  This makes the class much cleaner and easier to read.
  */

  introduce() {
    console.log(`Hello, my name is ${this.name}. I'm a ${this.role}.`);
  }
}

/* ─────────────────────── CREATING OBJECTS ───────────────────────── */

const employee1 = new Employee("John", 24, "Backend Developer");
const employee2 = new Employee("Emma", 27, "Frontend Developer");

console.log(employee1);
console.log(employee2);

/*
Expected Output

Employee {
    name: "John",
    age: 24,
    role: "Backend Developer"
}

Employee {
    name: "Emma",
    age: 27,
    role: "Frontend Developer"
}
*/

/* ───────────────────────── UNDER THE HOOD ──────────────────────────

Let's slow everything down.

I wrote only ONE line.

const employee1 = new Employee("John", 24, "Backend Developer");

But JavaScript performed several operations behind the scenes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1

JavaScript sees the `new` keyword.

Immediately it understands

"I'm creating a new object."

So the first thing it does is

const obj = {};

Current object

{}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 2

JavaScript connects this object with Employee.prototype.

Conceptually

obj
 │
 ▼
Employee.prototype

Why?

Because later this object should be able to access every method
defined inside the class.

We'll study prototypes in detail in the next lesson.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 3

JavaScript now executes the constructor.

Something conceptually similar to

constructor.call(

    obj,

    "John",

    24,

    "Backend Developer"

)

Notice what happened.

Inside constructor()

this === obj

That means

this.name = name;

actually becomes

obj.name = "John";

Next

this.age = age;

becomes

obj.age = 24;

Next

this.role = role;

becomes

obj.role = "Backend Developer";

Current object

{
    name: "John",
    age: 24,
    role: "Backend Developer"
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 4

The constructor finishes executing.

JavaScript automatically returns

obj

So now

employee1
    │
    ▼

{
    name: "John",
    age: 24,
    role: "Backend Developer"
}

Notice

I NEVER wrote

return this;

JavaScript handled that automatically.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

/* ───────────────────────── CALLING METHODS ───────────────────────── */

employee1.introduce();

/*
Output

Hello, my name is John. I'm a Backend Developer.
*/

/* ─────────────────── WHAT HAPPENS WHEN I CALL A METHOD? ───────────────────

employee1.introduce();

Looks simple...

But JavaScript starts searching.

Question 1

Does employee1 itself contain introduce() ?

↓

No.

Question 2

Does Employee.prototype contain introduce() ?

↓

Yes.

↓

Execute it.

Now

this === employee1

So

this.name

becomes

"John"

and

this.role

becomes

"Backend Developer"

Finally

console.log()

prints

Hello, my name is John. I'm a Backend Developer.

*/

/* ─────────────────────────── EXPERIMENT TIME ─────────────────────────── */

/*
Experiment 1

Every object is independent.
*/

employee1.role = "Senior Backend Developer";

console.log(employee1.role);
console.log(employee2.role);

/*
Output

Senior Backend Developer

Frontend Developer

Changing one object does NOT affect another.
*/

/*
Experiment 2

What happens if I create another employee?
*/

const employee3 = new Employee("Michael", 31, "DevOps Engineer");

console.log(employee3);

/*
Can I predict the output before running the code?
If yes, then I understand how classes create objects.
*/

/* ─────────────────────────── KEY TAKEAWAYS ───────────────────────────

✓ A Class is a blueprint for creating objects.

✓ constructor() runs automatically when I use `new`.

✓ JavaScript creates the object before constructor() executes.

✓ `this` points to the newly created object.

✓ I never manually return the object.

✓ Classes are syntactic sugar over Constructor Functions.

✓ Objects created from classes are still normal JavaScript objects.

✓ Methods belong to the prototype (I'll understand this deeply in the next lesson).

*/