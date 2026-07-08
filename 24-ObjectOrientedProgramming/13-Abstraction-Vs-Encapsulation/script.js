/*
╔══════════════════════════════════════════════════════════════════════════════╗
║              LESSON 13 : ABSTRACTION vs ENCAPSULATION                      ║
╚══════════════════════════════════════════════════════════════════════════════╝

Both concepts involve "hiding" something,
which is why they're often confused.

But they solve different problems.

Abstraction

↓

Hide Complexity

────────────────────────────────────────────

Encapsulation

↓

Protect Data

This file demonstrates both concepts.
*/

/* ───────────────────────────── ABSTRACTION ───────────────────────────── */

/*
Abstraction means:

Show only what is necessary.

Hide the unnecessary implementation details.

As a user,
I only care WHAT something does.

I don't need to know HOW it does it.
*/

class Car {

  /*
    This method represents a very complex process.

    In a real application this could contain hundreds
    of lines of code.

    For simplicity,
    I'm only printing a message.
  */

  start() {
    console.log("Car Started...");
  }
}

/*
Creating a new Car object.

`new`

↓

Creates a new object.

Calls the constructor (if present).

Returns the newly created object.
*/

const car = new Car();

/*
As the user,

I simply call

car.start();

I don't know

• How fuel is injected
• How the engine rotates
• How the battery works
• How the ignition system starts

All of that complexity is hidden.

This is Abstraction.
*/

car.start();

console.log("\n---------------------------------------\n");

/* ─────────────────────────── ENCAPSULATION ─────────────────────────── */

/*
Encapsulation means:

Keep data and the methods
that operate on that data together.

The object itself should control
how its data changes.
*/

class BankAccount {

  /*
    Private Field

    The '#' symbol makes this property private.

    It can only be accessed
    from inside this class.
  */

  #balance = 0;

  constructor(owner, balance) {

    /*
      `this`

      ↓

      Refers to the current object.
    */

    this.owner = owner;

    this.#balance = balance;
  }

  /*
    Deposit Method

    Instead of changing the balance directly,

    I should always use this method.
  */

  deposit(amount) {

    this.#balance += amount;

    console.log(`₹${amount} deposited.`);
  }

  /*
    Withdraw Method

    Reduces the balance safely.
  */

  withdraw(amount) {

    this.#balance -= amount;

    console.log(`₹${amount} withdrawn.`);
  }

  /*
    This method allows me to view
    the balance without exposing
    the private field itself.
  */

  showBalance() {

    console.log(`Current Balance : ₹${this.#balance}`);
  }

}

const account = new BankAccount("John", 5000);

/*
I'm NOT doing this

account.#balance = 100000;

because it's private.

Instead,

I use the methods provided
by the object.
*/

account.deposit(1000);

account.withdraw(750);

account.showBalance();

console.log("\n---------------------------------------\n");

/* ───────────────────── WHY PRIVATE FIELDS? ───────────────────── */

/*
The following line would throw an error.

Uncomment it to see the error.

console.log(account.#balance);

JavaScript won't allow it because
private fields are only accessible
inside the class.

This is how JavaScript helps implement
Encapsulation.
*/

console.log("Balance is protected using a private field.");

console.log("\n---------------------------------------\n");

/* ─────────────────────── QUICK COMPARISON ─────────────────────── */

/*

ABSTRACTION

↓

Hide Complexity

Example

car.start();

I don't know how the engine starts.

────────────────────────────────────────

ENCAPSULATION

↓

Protect Data

Example

account.deposit(500);

I don't directly modify

#balance

The object controls it.

*/

console.log("Abstraction → Hide Complexity");
console.log("Encapsulation → Protect Data");

console.log("\n---------------------------------------\n");

/* ─────────────────────── REAL-WORLD THINKING ─────────────────────── */

/*

Coffee Machine

↓

Press

Make Coffee

↓

Coffee is prepared.

I don't know how.

↓

Abstraction

────────────────────────────────────────

Bank Account

↓

Deposit

Withdraw

Show Balance

↓

The balance is protected.

↓

Encapsulation

*/

console.log("Coffee Machine → Abstraction");
console.log("Bank Account  → Encapsulation");

console.log("\n---------------------------------------\n");

/* ───────────────────────── KEY TAKEAWAYS ───────────────────────── */

/*

✓ Abstraction hides complexity.

✓ Encapsulation protects data.

✓ Abstraction focuses on usability.

✓ Encapsulation focuses on safety.

✓ Private fields (#) help implement Encapsulation.

✓ Both concepts work together
  in real-world software.

Most Important Memory Trick

Abstraction

↓

"What can this object do?"

Encapsulation

↓

"How is its data protected?"

*/