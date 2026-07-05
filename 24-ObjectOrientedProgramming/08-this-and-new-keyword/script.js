/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                    LESSON 08 : `this` & `new` KEYWORD                       ║
╚══════════════════════════════════════════════════════════════════════════════╝

WHAT IS THIS LESSON ABOUT?

Up until now, I've been writing code like this

    this.name = name;

without actually understanding what `this` is.

I also kept using

    new Employee(...)

without knowing what JavaScript was doing behind the scenes.

This lesson connects everything I've learned so far.

The biggest thing I need to remember is

    `this` is NOT determined by where the function is written.

Instead,

    `this` is determined by HOW the function is called.

This single idea explains almost every `this` question in JavaScript.

*/

/* ───────────────────────────── EXAMPLE 1 ─────────────────────────────

`this` inside an Object Method

*/

const employee = {
  name: "John",

  introduce() {
    console.log(this);
    console.log(this.name);
  },
};

employee.introduce();

/*

Output

{
    name: "John",
    introduce: f
}

John

────────────────────────────────────────────────────────────────────────

Why?

Because the method is called like this

employee.introduce()

Notice the object BEFORE the dot.

employee.introduce()

         ▲

That object becomes `this`.

So internally JavaScript behaves roughly like

this === employee

Therefore

this.name

becomes

employee.name

which is

"John"

*/

/* ───────────────────────────── EXAMPLE 2 ─────────────────────────────

Constructor Function

*/

function Employee(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
}

const employee1 = new Employee("Emma", 25, "Backend Developer");

console.log(employee1);

/*

This time

`this`

does NOT refer to employee object above.

Instead

`this`

points to the BRAND NEW object that JavaScript creates.

*/

/* ───────────────────────── UNDER THE HOOD ────────────────────────────

I wrote

const employee1 = new Employee("Emma", 25, "Backend Developer");

Looks like one line.

Internally JavaScript roughly performs these steps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1

Create an empty object.

const obj = {};

Current object

{}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 2

Connect it with Employee.prototype.

obj

 │

 ▼

Employee.prototype

This allows the object to inherit shared methods later.

We'll study this deeply in the Prototype lesson.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 3

Execute the constructor.

Employee.call(

    obj,

    "Emma",

    25,

    "Backend Developer"

)

Now

this === obj

Therefore

this.name = name;

becomes

obj.name = "Emma"

Next

this.age = age;

becomes

obj.age = 25

Next

this.role = role;

becomes

obj.role = "Backend Developer"

Current object

{

    name: "Emma",

    age: 25,

    role: "Backend Developer"

}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 4

Automatically return

obj

JavaScript returns the object for me.

I never need

return this;

*/

/* ───────────────────────────── EXAMPLE 3 ─────────────────────────────

Classes

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

Even though this is a Class,

the behavior of `this`

is EXACTLY the same.

`this`

still points to the newly created object.

Classes simply hide some of the syntax.

*/

/* ───────────────────────────── EXAMPLE 4 ─────────────────────────────

Forgetting `new`

*/

function Student(name) {
  this.name = name;
}

// Student("Alex");

/*

Don't run this.

Without `new`

JavaScript DOES NOT create a new object.

It simply calls the function.

That means all the magic performed by `new`

disappears.

This is why Constructor Functions should always
be called using

new Student(...)

*/

/* ───────────────────────────── EXAMPLE 5 ─────────────────────────────

Arrow Functions

*/

const manager = {
  name: "Sophia",

  greet: () => {
    console.log(this);
  },
};

manager.greet();

/*

Many beginners expect

this === manager

But that's NOT what happens.

Arrow functions DO NOT create their own `this`.

Instead,

they inherit `this`

from the surrounding scope.

I'll study lexical `this` in detail later.

For now,

I simply remember

Normal Function

↓

Own `this`

Arrow Function

↓

Borrows `this`

*/

/* ─────────────────────────── MEMORY VISUALIZATION ──────────────────────────

Before

employee1

undefined

────────────────────────────────────────────────────────────────────────

After using `new`

employee1

   │

   ▼

{

    name: "Emma",

    age: 25,

    role: "Backend Developer"

}

Notice

employee1

doesn't store the object.

It stores the REFERENCE

to the object.

*/

/* ───────────────────────────── EXPERIMENT TIME ─────────────────────────────

Predict the output BEFORE running.

*/

const person = {
  name: "David",

  sayName() {
    console.log(this.name);
  },
};

person.sayName();

/*

Question

Why does this print

David

instead of

undefined

Can I explain it using

"the object before the dot"

If yes,

then I'm understanding `this`.

*/

/* ───────────────────────────── KEY TAKEAWAYS ───────────────────────────────

✓ `this` is determined when the function is CALLED.

✓ The object before the dot usually becomes `this`.

✓ Constructor Functions use `this` to initialize objects.

✓ Classes use `this` in exactly the same way.

✓ `new` creates the object.

✓ `new` sets `this`.

✓ `new` executes the constructor.

✓ `new` returns the object automatically.

✓ Arrow functions DON'T create their own `this`.

*/