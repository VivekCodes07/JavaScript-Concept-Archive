/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                  LESSON 12 : FOUR PILLARS OF OOP                           ║
╚══════════════════════════════════════════════════════════════════════════════╝

Until now, I've learned how JavaScript creates objects.

Now I'm learning how to design software using Object-Oriented Programming.

The four pillars are:

1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

These pillars help me write code that is:

✓ Reusable
✓ Maintainable
✓ Scalable
✓ Easy to understand
*/

/* ────────────────────────────── ABSTRACTION ────────────────────────────── */

/*
Abstraction means:

Show only what is necessary and hide the internal complexity.

As a user, I only care about WHAT something does,
not HOW it does it.
*/

class Car {
  start() {
    console.log("Car Started...");
  }
}

const car = new Car();

car.start();

/*
I simply call

car.start()

I don't need to know how the engine,
battery, ignition system, or fuel injection works.
*/

/* ──────────────────────────── ENCAPSULATION ───────────────────────────── */

/*
Encapsulation means:

Keep data and the methods that work on that data together.

The object should manage its own state.
*/

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;

    console.log(`Deposited ₹${amount}`);
  }

  withdraw(amount) {
    this.balance -= amount;

    console.log(`Withdrawn ₹${amount}`);
  }

  showBalance() {
    console.log(`Current Balance: ₹${this.balance}`);
  }
}

const account = new BankAccount("John", 1000);

account.deposit(500);

account.withdraw(200);

account.showBalance();

/*
Instead of changing balance manually,

account.balance = 50000;

I should use the methods provided by the object.
*/

/* ───────────────────────────── INHERITANCE ────────────────────────────── */

/*
Inheritance allows one class
to reuse another class.

This reduces duplicate code.
*/

class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

const dog = new Dog();

dog.eat();

dog.bark();

/*
Dog didn't define eat().

It inherited it from Animal.
*/

/* ───────────────────────────── POLYMORPHISM ───────────────────────────── */

/*
Polymorphism means

The same method
can behave differently
depending on the object.
*/

class Bird {
  speak() {
    console.log("Some Bird Sound");
  }
}

class Sparrow extends Bird {
  speak() {
    console.log("Chirp Chirp");
  }
}

class Crow extends Bird {
  speak() {
    console.log("Caw Caw");
  }
}

const sparrow = new Sparrow();
const crow = new Crow();

sparrow.speak();

crow.speak();

/*
Same method

↓

speak()

Different outputs

↓

Chirp Chirp

↓

Caw Caw
*/

/* ─────────────────────────── HOW THEY WORK TOGETHER ────────────────────────── */

/*

Imagine I'm building a Food Delivery App.

Restaurant

↓

Accept Orders

-----------------------

Customer

↓

Place Orders

-----------------------

Delivery Partner

↓

Deliver Orders

Each object has

Properties

+

Methods

While following

✓ Abstraction
✓ Encapsulation
✓ Inheritance
✓ Polymorphism

*/

/* ───────────────────────────── FINAL REVISION ─────────────────────────── */

/*

ABSTRACTION

↓

Hide complexity.

--------------------------------

ENCAPSULATION

↓

Keep data and methods together.

--------------------------------

INHERITANCE

↓

Reuse existing code.

--------------------------------

POLYMORPHISM

↓

Same method,
different behavior.

*/

/* ───────────────────────────── KEY TAKEAWAYS ─────────────────────────── */

/*

✓ OOP has four pillars.

✓ Abstraction hides unnecessary details.

✓ Encapsulation protects and manages data.

✓ Inheritance promotes code reuse.

✓ Polymorphism allows one interface
  to have multiple behaviors.

✓ These four principles work together
  to build scalable and maintainable software.

The next lesson will explain
Abstraction and Encapsulation
in much greater depth.

*/