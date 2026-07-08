# Lesson 13: Abstraction vs Encapsulation

## Introduction

When I first started learning Object-Oriented Programming, I thought **Abstraction** and **Encapsulation** meant the same thing because both involve "hiding" something.

After learning them properly, I realized they solve two completely different problems.

- **Abstraction** hides complexity.
- **Encapsulation** protects data.

This lesson focuses on understanding both concepts clearly so I never confuse them again.

---

# What is Abstraction?

Abstraction means exposing only the necessary functionality while hiding unnecessary implementation details.

As a user, I only need to know **what** something does.

I don't need to know **how** it does it.

The internal implementation is hidden from me.

This makes software easier to use because I can focus only on the functionality that matters.

---

# Real-World Example

Imagine driving a car.

To drive it, I only need to know how to use

- Steering Wheel
- Brake
- Accelerator
- Gear

I don't need to know

- How the engine starts
- How fuel reaches the engine
- How the pistons move
- How the transmission changes gears

All of these internal operations are hidden from me.

I simply drive the car.

This is the perfect example of **Abstraction**.

---

# Another Example

Think about a Coffee Machine.

I simply press

```text
Make Coffee
```

The machine automatically

- Heats the water
- Grinds the coffee beans
- Mixes milk
- Controls temperature
- Pours the coffee

I don't know how these steps happen.

I only care that I receive a cup of coffee.

Again,

this is Abstraction.

---

# JavaScript Example

```javascript
class Car {
  start() {
    console.log("Car Started...");
  }
}

const car = new Car();

car.start();
```

As the developer,

I only write

```javascript
car.start();
```

I don't need to know what happens inside the `start()` method.

The complexity is hidden from me.

---

# Understanding the Syntax

Let's understand every line.

---

### Creating a Class

```javascript
class Car
```

This creates a class named **Car**.

A class is a blueprint for creating objects.

Every Car object created from this class will have the same properties and methods.

---

### Creating a Method

```javascript
start()
```

This defines a method named **start**.

A method represents something an object can do.

In this example,

the Car object knows how to start itself.

---

### Inside the Method

```javascript
console.log("Car Started...");
```

Here I'm simply printing a message.

In a real-world application,

this method could contain hundreds of lines of code.

For example,

```text
Check Battery

↓

Check Fuel Level

↓

Turn Ignition

↓

Start Engine

↓

Update Dashboard

↓

Play Engine Sound
```

As the user,

I don't need to understand any of those internal steps.

They are hidden behind a simple method.

---

### Creating an Object

```javascript
const car = new Car();
```

Let's break this down.

```javascript
new Car()
```

The `new` keyword creates a brand-new object using the Car class.

Internally, JavaScript

- Creates a new object
- Links it to the class prototype
- Calls the constructor (if one exists)
- Returns the newly created object

That object is stored inside

```javascript
car
```

---

### Calling the Method

```javascript
car.start();
```

This is the only thing the user needs to know.

The user simply says

> "Start the car."

The user doesn't know how the engine starts.

The complexity remains hidden.

This is exactly what Abstraction means.

---

# Why This Demonstrates Abstraction

Notice that I never interact with the engine directly.

I never write code like

```javascript
car.turnFuelPumpOn();

car.rotateCrankshaft();

car.fireSparkPlugs();

car.injectFuel();
```

Instead,

I simply write

```javascript
car.start();
```

The class hides all the unnecessary details.

This gives me a simple interface while the complicated implementation stays inside the object.

That is the entire purpose of Abstraction.

---

# Another JavaScript Example

Imagine I'm building a Music Player.

```javascript
class MusicPlayer {
  play() {
    console.log("Playing Music...");
  }
}

const player = new MusicPlayer();

player.play();
```

As the user,

I only call

```javascript
player.play();
```

I don't know

- How the file is loaded
- How the speaker works
- How audio is decoded
- How the sound is processed

Everything is hidden behind one simple method.

Again,

this is Abstraction.

---

# Things I've Learned About Abstraction

- Abstraction hides unnecessary implementation details.
- It allows me to focus only on what an object can do.
- It provides a simple interface for complex systems.
- Users don't need to understand internal logic.
- Almost every software application uses Abstraction.

---

# Quick Revision

Whenever I hear

## Abstraction

I should immediately think

```text
Hide Complexity
```

Not

```text
Protect Data
```

That belongs to Encapsulation, which I'll learn next.

---

# What is Encapsulation?

Encapsulation means keeping data and the methods that operate on that data together inside a single object while controlling how that data can be accessed or modified.

The main purpose of Encapsulation is to **protect an object's internal state** from being changed in an invalid or uncontrolled way.

Instead of allowing anyone to directly modify important data,

the object itself decides how its data should change.

---

# Real-World Example

Imagine a Bank Account.

Suppose my account has

```text
Balance = ₹50,000
```

Should anyone be able to write

```javascript
account.balance = 1000000;
```

No.

That would make the account unreliable because anyone could change the balance to any value.

Instead,

the Bank Account should provide methods like

```javascript
account.deposit(500);

account.withdraw(200);
```

These methods safely update the balance.

The balance is protected, and the object controls how it changes.

This is Encapsulation.

---

# Another Example

Think about your smartphone.

You can

- Increase Volume
- Decrease Volume

But you cannot directly modify the internal electrical signals that control the speaker.

Instead,

your phone provides buttons that safely manage the volume.

The internal implementation remains protected.

Again,

this is Encapsulation.

---

# JavaScript Example

```javascript
class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    showBalance() {
        console.log(this.#balance);
    }

}

const account = new BankAccount();

account.deposit(1000);

account.withdraw(250);

account.showBalance();
```

Everything related to the account stays inside the object.

The balance cannot be changed directly.

Instead,

I must use the provided methods.

---

# Understanding the Syntax

Let's understand every line.

---

### Creating the Class

```javascript
class BankAccount
```

Creates a blueprint called **BankAccount**.

Every bank account object created from this class will have the same properties and methods.

---

### Private Field

```javascript
#balance = 0;
```

The `#` symbol creates a **private field**.

Private fields can only be accessed from inside the class.

This means the following code is invalid.

```javascript
account.#balance
```

JavaScript will throw an error because private fields cannot be accessed from outside the class.

This is one of the ways JavaScript supports Encapsulation.

---

### Deposit Method

```javascript
deposit(amount)
```

This creates a method named `deposit`.

The parameter

```javascript
amount
```

represents the value passed by the user.

Example

```javascript
account.deposit(500);
```

Here,

```text
amount = 500
```

---

### Updating the Balance

```javascript
this.#balance += amount;
```

Let's understand every part.

```javascript
this
```

Refers to the current object.

---

```javascript
#balance
```

Accesses the private balance stored inside that object.

---

```javascript
+=
```

Adds the new amount to the existing balance.

Example

Initial Balance

```text
1000
```

Deposit

```text
500
```

Result

```text
1500
```

---

### Withdraw Method

```javascript
withdraw(amount)
```

This subtracts money from the account.

Example

```javascript
account.withdraw(300);
```

Internally,

```javascript
this.#balance -= amount;
```

reduces the balance.

---

### Show Balance

```javascript
showBalance()
```

Simply prints the current balance.

Notice that I never access

```javascript
#balance
```

directly from outside the object.

Instead,

I ask the object to show it to me.

---

# Why This Demonstrates Encapsulation

The important data

```text
Balance
```

is protected.

The only way to change it is through

- deposit()
- withdraw()

This allows the object to control its own state.

If tomorrow I decide that withdrawals should never allow a negative balance,

I only need to update the

```javascript
withdraw()
```

method.

The rest of the application remains unchanged.

This is one of the biggest advantages of Encapsulation.

---

# Abstraction vs Encapsulation

Although these concepts are closely related,

they solve different problems.

| Abstraction | Encapsulation |
|-------------|---------------|
| Hides complexity | Protects data |
| Focuses on what the object does | Focuses on how the object's data is managed |
| Makes objects easier to use | Makes objects safer to use |
| Exposes only the necessary functionality | Restricts direct access to important data |

---

# Mental Model

Whenever I hear

## Abstraction

I should think

```text
Hide Complexity
```

Example

```javascript
car.start();
```

I don't need to know how the engine starts.

---

Whenever I hear

## Encapsulation

I should think

```text
Protect Data
```

Example

```javascript
account.deposit(500);
```

Instead of changing the balance directly,

I use the object's methods.

---

# How They Work Together

These two concepts are different,

but they are often used together.

For example,

A Bank Account

Uses **Abstraction**

because I only call

```javascript
deposit();

withdraw();
```

without knowing how they work internally.

It also uses **Encapsulation**

because the balance is protected from direct modification.

Both principles work together to create clean and reliable software.

---

# Things I've Learned

- Abstraction hides unnecessary implementation details.
- Encapsulation protects an object's internal state.
- Abstraction focuses on simplicity.
- Encapsulation focuses on safety.
- Both concepts are commonly used together.
- Understanding their difference is one of the foundations of Object-Oriented Programming.

---

# Summary

Although Abstraction and Encapsulation are often confused,

they are not the same thing.

Abstraction is about providing a simple interface while hiding complexity.

Encapsulation is about protecting data and ensuring it can only be modified through controlled methods.

One helps users by simplifying interactions.

The other helps developers by keeping objects safe and consistent.

Together, they make software easier to use, maintain, and extend.

---

# Questions to Test Myself

1. What is Abstraction?
2. What is Encapsulation?
3. What problem does Abstraction solve?
4. What problem does Encapsulation solve?
5. Why are private fields useful?
6. What does the `#` symbol mean in JavaScript?
7. Why shouldn't important data be modified directly?
8. Can I explain both concepts using a Bank Account?
9. Can I explain both concepts using a Car?
10. Can I explain the difference without looking at my notes?