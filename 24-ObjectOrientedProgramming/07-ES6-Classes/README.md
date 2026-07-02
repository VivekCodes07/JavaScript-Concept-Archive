# Lesson 7: ES6 Classes

## Introduction

So far, I've learned three different ways to create objects in JavaScript.

1. Object Literals
2. Factory Functions
3. Constructor Functions

At this point, I wondered:

> If Constructor Functions already work perfectly, why did JavaScript introduce Classes?

The answer isn't because Constructor Functions were wrong.

They weren't.

In fact, **Classes are built on top of Constructor Functions.**

Classes simply provide a cleaner and more familiar syntax, especially for developers coming from languages like Java, C++, or C#.

This lesson is about understanding **why Classes exist**, **how they work**, and **what's happening behind the scenes**.

---

# A Quick Recap

Using a Constructor Function, I can create multiple objects.

```javascript
function Employee(name, role) {
    this.name = name;
    this.role = role;
}

const employee = new Employee("John", "Backend Developer");
```

This works perfectly.

So what's the problem?

Technically...

Nothing.

But as applications grow larger, Constructor Functions can become harder to organize.

Imagine a class representing a bank account with dozens of methods.

Using Constructor Functions, the code starts becoming difficult to read.

That's where Classes help.

---

# What is a Class?

A Class is a blueprint for creating objects.

It defines:

- What properties an object should have.
- What methods an object should have.

Think of it like an architectural blueprint.

The blueprint isn't the house.

It simply describes how every house should be built.

Similarly,

A Class is **not an object.**

It describes how objects should be created.

---

# My First Class

Let's rewrite our Constructor Function using a Class.

```javascript
class Employee {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

}
```

Now creating objects looks exactly the same.

```javascript
const employee1 = new Employee("John", "Backend Developer");

const employee2 = new Employee("Emma", "Frontend Engineer");
```

Notice something.

I still use

```javascript
new
```

The only thing that changed is the syntax.

---

# The constructor() Method

Inside every Class, there's a special method called

```javascript
constructor()
```

Whenever I create an object using

```javascript
new Employee(...)
```

JavaScript automatically calls

```javascript
constructor()
```

This is where I initialize the object's properties.

Example

```javascript
class Employee {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}
```

Every new object receives those values.

---

# Adding Methods

Classes allow me to define methods outside the constructor.

Example

```javascript
class Employee {

    constructor(name, role) {

        this.name = name;
        this.role = role;

    }

    introduce() {

        console.log(
            `${this.name} works as a ${this.role}.`
        );

    }

}
```

Usage

```javascript
const employee = new Employee(
    "John",
    "Backend Developer"
);

employee.introduce();
```

Output

```
John works as a Backend Developer.
```

---

# Why Is This Better?

Imagine a class with 15 methods.

With Constructor Functions

```javascript
function Employee() {

    this.login = function(){};

    this.logout = function(){};

    this.updateProfile = function(){};

}
```

Everything is inside one function.

With Classes

```javascript
class Employee {

    constructor(){}

    login(){}

    logout(){}

    updateProfile(){}

}
```

This feels much cleaner.

Methods are separated nicely.

The code is easier to read.

---

# Under the Hood

This is the most important part.

Many beginners think

> Classes introduced a completely new object system.

They didn't.

When JavaScript sees

```javascript
class Employee {

}
```

it internally creates something very similar to

```javascript
function Employee() {

}
```

A Class is basically **syntactic sugar** over Constructor Functions.

That means JavaScript still uses

- Constructor Functions
- Prototypes
- The `new` keyword

Classes simply hide some of the complexity.

---

# Is a Class a New Data Type?

No.

Creating an object with a Class

```javascript
const employee = new Employee();
```

still produces a normal JavaScript object.

Classes don't create a special "Class Object."

They simply create regular objects in a cleaner way.

---

# Do Classes Eliminate `new`?

No.

This is a common misunderstanding.

I still need

```javascript
new Employee();
```

Without `new`

```javascript
Employee();
```

JavaScript throws an error.

Unlike Constructor Functions, Classes **cannot** be called like normal functions.

---

# Constructor Functions vs Classes

Constructor Function

```javascript
function Employee(name) {

    this.name = name;

}
```

Class

```javascript
class Employee {

    constructor(name) {

        this.name = name;

    }

}
```

Both create objects.

Both use `new`.

Both use `this`.

Both ultimately rely on prototypes.

The difference is readability.

---

# Why Were Classes Introduced?

JavaScript became increasingly popular for building large applications.

Developers coming from other languages expected a Class-based syntax.

ES6 introduced Classes to make JavaScript easier to learn and easier to organize.

Instead of replacing Constructor Functions,

Classes simply wrapped them in a cleaner syntax.

---

# Common Mistakes

## Mistake 1

Thinking Classes replaced Constructor Functions.

They didn't.

Classes are built on top of them.

---

## Mistake 2

Thinking Classes remove prototypes.

They don't.

Every Class still uses prototypes internally.

We'll learn that in the next lessons.

---

## Mistake 3

Trying to call a Class without `new`.

```javascript
Employee();
```

This throws an error.

Always use

```javascript
new Employee();
```

---

# Things I Should Remember

- A Class is a blueprint for creating objects.
- Classes were introduced in ES6.
- Classes use the `constructor()` method for initialization.
- Methods are defined outside the constructor.
- Classes are syntactic sugar over Constructor Functions.
- Objects created from Classes are still normal JavaScript objects.
- Classes still rely on `new`, `this`, and prototypes.

---

# Summary

Classes make object creation cleaner and more organized.

They don't introduce a new object system.

Instead, they provide a modern syntax for concepts JavaScript already had through Constructor Functions.

Understanding this is important because it prevents a common misconception: Classes didn't replace Constructor Functions—they simply made them easier to work with.

As my applications grow larger, Classes make the code easier to read, maintain, and organize.

---

# My Mental Model

If I had to explain Classes to someone in one minute, I would say:

> A Class is like a cleaner version of a Constructor Function. Both are blueprints used to create objects. The only real difference is that Classes organize the code in a way that's easier for humans to read. Behind the scenes, JavaScript is still using the same concepts—Constructor Functions, `new`, `this`, and prototypes.

---

# Questions to Test Myself

1. Why were Classes introduced in ES6?
2. What problem do Classes solve?
3. What is the purpose of the `constructor()` method?
4. Are Classes a new type of object?
5. Do Classes replace Constructor Functions?
6. Can I create an object from a Class without using `new`?
7. What does "syntactic sugar" mean in the context of Classes?
8. What JavaScript features do Classes still rely on behind the scenes?

If I can confidently answer these questions, then I'm ready for the next lesson: **`this` & the `new` Keyword**, where I'll finally understand what `this` actually refers to in different situations and why the `new` keyword changes a function's behavior.