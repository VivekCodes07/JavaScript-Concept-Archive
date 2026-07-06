# Lesson 10: OOP in JavaScript

## Introduction

So far, I've learned how to create objects in multiple ways.

- Object Literals
- Factory Functions
- Constructor Functions
- ES6 Classes
- `this` keyword
- `new` keyword
- Prototypes

Now it's time to connect all these concepts and understand how JavaScript implements Object-Oriented Programming (OOP).

This lesson doesn't introduce many new concepts. Instead, it helps me understand how everything I've learned so far fits together.

---

# What is Object-Oriented Programming?

Object-Oriented Programming (OOP) is a programming paradigm where code is organized around **objects**.

An object combines:

- Properties (Data)
- Methods (Behavior)

Example

```javascript
const employee = {
  name: "John",
  role: "Backend Developer",

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
```

Here,

Properties

```javascript
name
role
```

store information about the employee.

Method

```javascript
introduce()
```

defines what the employee can do.

---

# Why Do We Use OOP?

Without objects, code quickly becomes repetitive.

Example

```javascript
let employee1Name = "John";
let employee1Age = 24;

function employee1Intro() {}

let employee2Name = "Emma";
let employee2Age = 27;

function employee2Intro() {}
```

As the number of employees grows, the code becomes difficult to manage.

Instead, OOP allows me to group related data and behavior together.

```javascript
class Employee {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
```

Now I can create as many employees as I want without duplicating code.

---

# JavaScript and OOP

Unlike languages such as Java or C++, JavaScript was not originally built around classes.

JavaScript is a **Prototype-Based Language**.

When ES6 introduced the `class` keyword, it didn't replace prototypes.

Instead, classes became a cleaner way to work with prototypes.

So whenever I write

```javascript
class Employee {}
```

JavaScript still uses prototypes internally.

---

# Everything I've Learned So Far

### Object Literal

Best for creating one or two objects.

```javascript
const user = {
  name: "John",
};
```

---

### Factory Function

Useful when creating multiple similar objects.

```javascript
function createUser(name) {
  return {
    name,
  };
}
```

---

### Constructor Function

Introduced the `new` keyword and `this`.

```javascript
function User(name) {
  this.name = name;
}
```

---

### ES6 Classes

Cleaner syntax for Constructor Functions.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```

---

### Prototypes

Allow multiple objects to share the same methods instead of creating duplicate copies.

```javascript
User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
```

---

# Real-World Examples of OOP

Instead of thinking about variables and functions separately,

I should think about real-world entities.

A School Management System may have

- Student
- Teacher
- Course

An E-Commerce Website may have

- User
- Product
- Cart
- Order

A Banking System may have

- Customer
- Account
- Transaction

Each of these can be represented as objects containing both data and behavior.

---

# Key Takeaways

- OOP organizes code around objects.
- Objects combine properties and methods.
- JavaScript is fundamentally Prototype-Based.
- ES6 Classes are built on top of prototypes.
- OOP reduces code duplication.
- OOP makes applications easier to maintain and scale.
- Everything I've learned so far prepares me for the Four Pillars of OOP.

---

# Summary

This lesson helped me connect all the concepts I've learned so far.

I now understand that Object Literals, Factory Functions, Constructor Functions, ES6 Classes, `this`, `new`, and Prototypes are all different parts of JavaScript's object-oriented system.

The next lessons will focus on the **Four Pillars of OOP**, which explain how to design better and more maintainable software using object-oriented principles.

---

# Questions to Test Myself

1. What is Object-Oriented Programming?
2. Why do we use OOP?
3. What are the two main parts of an object?
4. Is JavaScript Class-Based or Prototype-Based?
5. Do ES6 Classes replace prototypes?
6. What problem does OOP solve?
7. Which object creation technique would I choose in different situations?
8. What are the Four Pillars of OOP that I'm about to learn?