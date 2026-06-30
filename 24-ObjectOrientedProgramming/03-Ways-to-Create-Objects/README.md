# Lesson 3: Ways to Create Objects in JavaScript

## Introduction

In the previous lesson, I learned what objects are and why they are important in JavaScript. I also learned how to create a simple object using curly braces.

At that point, I had a question in my mind:

> "If I already know how to create an object, why does JavaScript provide multiple ways to create one?"

This lesson answers that question.

The purpose of this lesson is not to learn every method in detail. Instead, it's to understand **why multiple approaches exist** and when I should use each one.

The next few lessons will explain each approach individually.

---

# A Quick Recap

I already know that an object groups related data and behavior together.

For example,

```javascript
const student = {
    name: "Rahul",
    age: 20,

    study() {
        console.log("Studying...");
    }
};
```

This object represents one student.

It contains:

- Properties (`name`, `age`)
- A method (`study()`)

Creating one object like this is easy.

The problem starts when I need many similar objects.

---

# The Real Problem

Suppose I'm building a Student Management System.

The college has 5,000 students.

If I create every student manually, my code will look something like this:

```javascript
const student1 = {
    name: "Rahul",
    age: 20
};

const student2 = {
    name: "Aman",
    age: 21
};

const student3 = {
    name: "Priya",
    age: 19
};

const student4 = {
    name: "Anjali",
    age: 22
};
```

At first, this doesn't seem like a problem.

But imagine writing this for thousands of students.

I would end up copying and pasting the same structure again and again.

This creates two problems.

1. Code duplication
2. Difficult maintenance

Whenever I find myself copying and pasting the same code repeatedly, it's usually a sign that there's a better solution.

That's exactly why JavaScript provides different ways to create objects.

---

# Why Can't I Just Keep Using Object Literals?

Object literals are perfect when I need only one or two objects.

For example,

```javascript
const settings = {
    theme: "Dark",
    language: "English"
};
```

or

```javascript
const currentUser = {
    username: "rahul123",
    isLoggedIn: true
};
```

These are unique objects.

There will probably only be one settings object or one currently logged-in user.

In these situations, object literals are simple and easy to understand.

But what if I need 500 users?

Now writing every object manually becomes a terrible idea.

---

# JavaScript Gives Me Multiple Options

Instead of forcing me to use only one technique, JavaScript gives me multiple ways to solve different problems.

The four most common ways are:

1. Object Literals
2. Factory Functions
3. Constructor Functions
4. ES6 Classes

Each one exists for a reason.

Understanding that reason is much more important than memorizing the syntax.

---

# 1. Object Literals

This is the simplest way to create an object.

Example:

```javascript
const car = {
    brand: "BMW",
    color: "Black"
};
```

Advantages:

- Easy to write
- Easy to understand
- Perfect for small objects

Disadvantages:

- Not practical for creating many similar objects
- Leads to repeated code

I should use object literals when I only need a few unique objects.

---

# 2. Factory Functions

Imagine I need to create hundreds of students.

Instead of writing the entire object every time, I can write a function that creates objects for me.

Something like this:

```javascript
createStudent("Rahul", 20);
createStudent("Aman", 21);
createStudent("Priya", 19);
```

The function builds the object and returns it.

I don't need to repeat the same structure again and again.

This makes my code cleaner and easier to maintain.

I'll learn this in detail in the next lesson.

---

# 3. Constructor Functions

Before JavaScript introduced classes, developers commonly used constructor functions.

Example:

```javascript
const student = new Student("Rahul", 20);
```

The `new` keyword creates a new object automatically.

This approach is especially useful when creating multiple similar objects.

I'll study how it works later.

---

# 4. ES6 Classes

Classes were introduced in ES6 to provide a cleaner and more familiar syntax.

Instead of writing constructor functions manually, I can write:

```javascript
class Student {

}
```

Creating an object becomes:

```javascript
const student = new Student("Rahul", 20);
```

Internally, JavaScript still uses prototypes.

Classes simply make the syntax easier to read and organize.

This is why many modern JavaScript projects use classes.

---

# Do These Methods Create Different Kinds of Objects?

This is something I wondered about.

The answer is **No**.

Regardless of whether I use:

- Object Literal
- Factory Function
- Constructor Function
- Class

the final result is always an object.

The difference is only in **how the object is created**, not **what it becomes**.

That's an important distinction.

---

# Which Method Should I Use?

It depends on the situation.

### Object Literal

Use when I need only one or two unique objects.

Example:

- Configuration object
- Settings object
- Logged-in user

---

### Factory Function

Use when I need many similar objects and want simple, reusable code.

---

### Constructor Function

Useful for understanding how JavaScript worked before ES6 and how object creation works under the hood.

Many interview questions still cover constructor functions because they help explain prototypes and the `new` keyword.

---

### ES6 Classes

This is the modern and most common way to build large applications.

Even though classes are cleaner, I still need to understand constructor functions because classes are built on top of the same concepts.

---

# An Important Observation

Notice how JavaScript evolved over time.

First, developers used object literals.

Then they wanted a reusable way to create objects, so factory functions became popular.

As applications grew larger, constructor functions became common.

Finally, ES6 introduced classes to make object-oriented programming cleaner and easier to read.

Understanding this evolution helps me appreciate why JavaScript has multiple approaches instead of just one.

---

# Things I Should Remember

- JavaScript provides multiple ways to create objects.
- No single approach is "the best" for every situation.
- Each approach solves a different problem.
- All methods ultimately create objects.
- Classes are not a new type of object—they are simply a different syntax for creating objects.

---

# Common Misconceptions

### "Classes replaced everything."

No.

Classes did not replace objects, factory functions, or constructor functions.

They simply provide a cleaner syntax.

Understanding the older approaches helps me understand how JavaScript actually works.

---

### "Object literals are bad."

Not at all.

Object literals are the simplest and often the best choice for small, unique objects.

The problem only appears when I start creating many similar objects manually.

---

### "Factory Functions, Constructor Functions, and Classes create different objects."

They don't.

The object they produce is still a normal JavaScript object.

Only the creation process changes.

---

# Summary

This lesson helped me understand **why JavaScript has multiple ways to create objects**.

The answer is simple:

Different problems require different solutions.

Object literals are excellent for unique objects.

Factory functions help reduce code duplication.

Constructor functions introduced a reusable pattern for object creation.

ES6 classes made that pattern easier to write and understand.

Instead of memorizing four different syntaxes, I should remember the problem each one is trying to solve.

If I understand the problem, choosing the right solution becomes much easier.

---

# My Mental Model

If I had to explain today's lesson to someone in one minute, I would say:

> JavaScript doesn't have multiple ways to create objects because one way is wrong. It has multiple ways because applications grow over time. Object literals are perfect for simple cases, but as projects become larger and require many similar objects, JavaScript offers more powerful and reusable techniques like factory functions, constructor functions, and classes.

---

# Questions to Test Myself

Before moving to the next lesson, I should be able to answer these questions without looking at the notes.

1. Why does JavaScript have multiple ways to create objects?
2. What problem do object literals have when creating many similar objects?
3. What is the purpose of factory functions?
4. Why were constructor functions introduced?
5. Why did JavaScript add classes in ES6?
6. Do all these approaches create different types of objects?

If I can confidently answer these questions, then I have understood the purpose behind the different object creation techniques.

The next lesson begins with the first and simplest approach: **Object Literals**.