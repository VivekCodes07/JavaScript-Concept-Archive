# Lesson 12: Four Pillars of Object-Oriented Programming

## Introduction

So far, I've learned **how JavaScript creates objects**.

- Object Literals
- Factory Functions
- Constructor Functions
- ES6 Classes
- `this`
- `new`
- Prototypes

Now it's time to learn **how to design software using objects**.

This is where the Four Pillars of Object-Oriented Programming come in.

These pillars are not specific to JavaScript.

They are universal OOP principles used in languages like Java, C++, C#, Python, and JavaScript.

---

# What are the Four Pillars of OOP?

The Four Pillars are design principles that help developers write code that is:

- Reusable
- Maintainable
- Scalable
- Easy to understand

The Four Pillars are:

1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

Every object-oriented application is built around these ideas.

---

# Why Do We Need These Pillars?

Imagine building a large application like:

- Instagram
- Amazon
- Netflix
- Spotify

Thousands of objects interact with each other.

Without proper organization,

the project would quickly become difficult to maintain.

The Four Pillars provide a structured way to organize objects and their relationships.

---

# Pillar 1: Abstraction

Abstraction means

> Show only what is necessary while hiding unnecessary implementation details.

Example

When I drive a car,

I only need to know

- Steering wheel
- Brake
- Accelerator

I don't need to know

- How the engine works
- How fuel burns
- How gears change internally

The complexity is hidden from me.

Programming works the same way.

Instead of worrying about how something works internally,

I simply use it.

Example

```javascript
car.start();
```

I don't care what happens inside `start()`.

I only care that the car starts.

---

# Pillar 2: Encapsulation

Encapsulation means

> Keep data and the methods that operate on that data together while protecting the object's internal state.

Example

```javascript
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
}
```

The object itself is responsible for managing its balance.

Instead of directly changing the balance from everywhere,

I should use the methods provided by the object.

This keeps the object in a valid state.

---

# Pillar 3: Inheritance

Inheritance allows one class to reuse another class's properties and methods.

Example

```javascript
class Animal {

    eat() {
        console.log("Eating...");
    }

}

class Dog extends Animal {}

const dog = new Dog();

dog.eat();
```

The `Dog` class automatically gets the `eat()` method from `Animal`.

Instead of rewriting the same code,

I reuse it.

This reduces duplication.

---

# Pillar 4: Polymorphism

Polymorphism means

> The same method can behave differently depending on the object calling it.

Example

```javascript
class Animal {
    speak() {
        console.log("Some sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow");
    }
}
```

Now

```javascript
dog.speak();
```

prints

```
Bark
```

while

```javascript
cat.speak();
```

prints

```
Meow
```

The method name is the same,

but the behavior changes.

---

# Understanding the Four Pillars Together

Imagine I'm building a Food Delivery App.

I have

```text
Restaurant

Customer

Delivery Partner

Order

Payment
```

Each object manages its own information.

Now let's apply the pillars.

### Abstraction

The customer simply presses

```
Place Order
```

They don't know how the backend processes the order.

---

### Encapsulation

Each object manages its own data.

For example,

The `Order` object manages

- Order Status
- Items
- Total Price

Other objects shouldn't randomly change this data.

---

### Inheritance

Suppose I create

```
Restaurant
```

Later,

I create

```
PremiumRestaurant
```

Instead of rewriting everything,

the new class inherits from the original Restaurant.

---

### Polymorphism

Suppose my application supports multiple payment methods.

```
Credit Card

UPI

PayPal

Wallet
```

Each payment method has

```javascript
pay();
```

The method name stays the same,

but every payment type performs the payment differently.

---

# How Everything Connects

```text
Objects

↓

Contain Data

↓

Contain Methods

↓

Follow OOP Principles

↓

Abstraction

↓

Encapsulation

↓

Inheritance

↓

Polymorphism

↓

Cleaner Software
```

---

# Real-World Examples

### Car

Abstraction

I drive the car.

I don't know how the engine works.

---

### Bank

Encapsulation

The account manages its own balance.

Nobody should directly modify it.

---

### Animals

Inheritance

Dog

Cat

Bird

All inherit common behavior from Animal.

---

### Payment System

Polymorphism

Every payment method has

```javascript
pay();
```

But every payment behaves differently.

---

# Why Are These Pillars Important?

Without these principles,

applications become

- Difficult to maintain
- Difficult to extend
- Full of duplicate code
- More prone to bugs

Using the Four Pillars helps build software that can grow without becoming unmanageable.

---

# Things I've Learned

- OOP is built on four core principles.
- Abstraction hides unnecessary complexity.
- Encapsulation keeps data and behavior together while protecting data.
- Inheritance promotes code reuse.
- Polymorphism allows the same method to behave differently.
- These principles work together to create clean and maintainable software.

---

# Summary

The Four Pillars of Object-Oriented Programming are the foundation of object-oriented design.

They help developers organize objects, reduce code duplication, hide complexity, protect data, and build applications that are easier to maintain and scale.

Although JavaScript uses prototypes internally, these four principles still apply and are widely used when designing object-oriented applications.

The next lessons will explore each pillar in much greater detail.

---

# Questions to Test Myself

1. What are the Four Pillars of OOP?
2. Why are they important?
3. What is Abstraction?
4. What is Encapsulation?
5. What is Inheritance?
6. What is Polymorphism?
7. Can I explain each pillar using a real-world example?
8. Which pillar helps reduce duplicate code?
9. Which pillar hides complexity?
10. Which pillar allows the same method to behave differently?