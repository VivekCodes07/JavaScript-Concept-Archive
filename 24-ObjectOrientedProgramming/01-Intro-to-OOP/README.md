# Lesson 1: Roadmap

## Introduction

Before I start learning Object-Oriented Programming (OOP), I want to understand *why* I am learning it. I've realized that if I jump straight into syntax like `class`, `this`, or `prototype`, I'll probably end up memorizing things instead of actually understanding them.

This lesson is about building the right mindset. Once I understand the purpose of OOP, the rest of the course will make much more sense.

---

# Why Am I Learning OOP?

When I first started programming, most of my code looked something like this:

```javascript
let name = "Rahul";
let age = 21;

function study() {
    console.log("Studying...");
}

function sleep() {
    console.log("Sleeping...");
}
```

This works perfectly for small programs.

But imagine building something like Instagram, Amazon, or a Banking System.

There could be:

- Millions of users
- Thousands of products
- Hundreds of orders
- Countless functions

If everything is just variables and functions, the code quickly becomes difficult to manage.

This is where OOP comes in.

Instead of thinking about individual variables and functions, OOP teaches me to think in terms of **objects**.

---

# What Problem Does OOP Solve?

Let's imagine I'm building a Student Management System.

Without OOP, I might write something like this:

```javascript
let student1Name = "Rahul";
let student1Age = 20;
let student1Course = "Computer Science";

let student2Name = "Aman";
let student2Age = 21;
let student2Course = "Mechanical Engineering";
```

This already looks repetitive.

Now imagine I have 10,000 students.

Writing separate variables for every student is impossible.

Instead, I can group everything related to a student into one object.

```javascript
const student = {
    name: "Rahul",
    age: 20,
    course: "Computer Science"
};
```

Now the information stays organized.

Instead of creating hundreds of unrelated variables, I have one object representing one student.

This is much cleaner and much easier to work with.

---

# What Is an Object?

The simplest way I like to think about an object is this:

> An object represents a real-world thing inside my program.

For example,

A car has information about itself.

- Brand
- Color
- Model
- Speed

It can also perform actions.

- Start
- Stop
- Accelerate

In programming, I can represent that like this:

```javascript
const car = {
    brand: "BMW",
    color: "Black",
    speed: 0,

    start() {
        console.log("Car Started");
    },

    stop() {
        console.log("Car Stopped");
    }
};
```

Notice something interesting.

The object contains both **information** and **behavior**.

That is one of the biggest ideas behind OOP.

---

# Properties vs Methods

Every object can contain two things.

## Properties

Properties describe the object.

For example,

```javascript
const person = {
    name: "Rahul",
    age: 20,
    city: "Delhi"
};
```

Here,

- `name`
- `age`
- `city`

are all properties because they describe the person.

---

## Methods

Methods describe what an object can do.

```javascript
const person = {
    name: "Rahul",

    speak() {
        console.log("Hello");
    }
};
```

Here,

`speak()` is a method because it performs an action.

A simple way to remember this is:

- Properties = What the object **has**
- Methods = What the object **does**

---

# Thinking in Objects

One thing I need to change is the way I think while solving problems.

Instead of asking,

> Which function should I write?

I should start asking,

> Which object should exist?

For example,

If I'm building an online shopping website, I shouldn't immediately think about writing functions.

I should first identify the objects.

Possible objects could be:

- User
- Product
- Shopping Cart
- Order
- Payment

Each of these objects will have its own properties and methods.

For example,

A Product might have

Properties

- Name
- Price
- Category
- Stock

Methods

- applyDiscount()
- updatePrice()

This way, related data and behavior stay together.

---

# Why Is OOP So Popular?

Most large applications use OOP because it helps keep the code organized.

Some advantages include:

## Better Organization

Everything related to an object stays in one place.

## Code Reusability

Instead of writing the same code repeatedly, I can reuse existing code.

## Easier Maintenance

If I need to update something related to a Student, I know exactly where to look.

## Better Scalability

As projects grow, organized code becomes much easier to manage.

---

# My Learning Journey

This course follows a specific order, and every topic builds on the previous one.

```
Roadmap
        ↓
Basics
        ↓
Different Ways to Create Objects
        ↓
Object Literals
        ↓
Factory Functions
        ↓
Constructor Functions
        ↓
Classes
        ↓
this & new
        ↓
Prototypes
        ↓
OOP in JavaScript
        ↓
Constructors
        ↓
Four Pillars of OOP
        ↓
Abstraction vs Encapsulation
        ↓
Inheritance
        ↓
Polymorphism
        ↓
Singleton Object
```

I shouldn't skip topics because later concepts depend on earlier ones.

For example,

Understanding Classes will be much easier if I already understand Constructor Functions.

Similarly,

Understanding Inheritance will be much easier if I understand Prototypes.

---

# What Do I Expect By The End Of This Course?

By the time I finish this course, I should be comfortable creating objects like these:

```javascript
class User {}

class Student {}

class Product {}

class ShoppingCart {}

class BankAccount {}

class Animal {}
```

More importantly, I should understand **why** they are designed the way they are.

Writing code is easy.

Designing code properly is the real skill.

---

# Important Mindset

I don't want to memorize definitions.

For example,

Instead of memorizing:

> "An object is a collection of key-value pairs."

I want to understand that an object is simply a way to keep related information together.

If I understand the idea, I won't have to memorize the definition.

---

# Things I Should Remember

- OOP is a way of organizing code.
- Objects represent real-world entities.
- Every object contains data and behavior.
- Data is stored as properties.
- Behavior is stored as methods.
- OOP makes large applications easier to build and maintain.
- Every topic in this course builds upon the previous one.

---

# Common Misconceptions

### "OOP is only about Classes."

No.

In JavaScript, objects existed long before classes were introduced in ES6.

Classes are simply a cleaner syntax for working with objects.

---

### "Learning syntax means I know OOP."

Not really.

Knowing how to write a class doesn't mean I understand why it exists.

Understanding the concepts is far more important than memorizing syntax.

---

### "OOP is the only programming style."

No.

JavaScript supports multiple programming paradigms, including Functional Programming and Procedural Programming.

OOP is just one way of organizing code, but it's a very powerful one for many applications.

---

# Summary

This lesson didn't teach me any syntax, and that's okay.

Instead, it helped me understand the purpose behind Object-Oriented Programming.

I learned that OOP is about organizing code by grouping related data and behavior into objects.

I also understood that the rest of this course isn't just about learning new keywords. Every upcoming topic is another tool that helps me build better objects and better applications.

If I keep this purpose in mind while learning, the syntax will become much easier to understand.

---

# Questions To Test Myself

Before moving to the next lesson, I should be able to answer these questions without looking at the notes.

1. Why was Object-Oriented Programming created?
2. What problem does it solve?
3. What is an object?
4. What is the difference between properties and methods?
5. Why do large applications benefit from OOP?
6. Why shouldn't I skip topics in this course?
7. Why is understanding concepts more important than memorizing syntax?

If I can answer all of these confidently, then I've built a strong foundation for the rest of the course.

The next lesson is **Basics**, where I'll start working with objects in JavaScript and understand how they behave under the hood.