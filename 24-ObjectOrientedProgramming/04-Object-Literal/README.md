# Lesson 4: Object Literals

## Introduction

In the previous lesson, I learned that JavaScript provides multiple ways to create objects. The simplest and most commonly used method is the **Object Literal**.

When I first started learning JavaScript, this was also the first way I ever created an object. At that time, I simply memorized the syntax without understanding why it was called an "object literal."

In this lesson, I want to understand not only how to create an object using object literals but also when they are the right choice and when they are not.

---

# What is an Object Literal?

An object literal is the simplest way to create an object in JavaScript.

Whenever I directly write an object using curly braces (`{}`), I am creating an object using the object literal syntax.

For example,

```javascript
const user = {
    name: "John",
    age: 24,
    country: "USA"
};
```

This object contains three properties:

- `name`
- `age`
- `country`

JavaScript immediately creates this object for me.

No special function.
No class.
No constructor.

Just curly braces.

---

# Why is it Called an "Object Literal"?

The word **literal** simply means that I am writing the actual value directly in my code.

For example,

```javascript
let number = 10;
```

Here, `10` is a number literal.

```javascript
let message = "Hello";
```

Here, `"Hello"` is a string literal.

Similarly,

```javascript
const user = {
    name: "John"
};
```

This is an object literal because I am writing the object directly instead of generating it using another function.

---

# Creating My First Object

Let's create a simple object.

```javascript
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: false
};
```

This object represents one person.

Instead of storing four separate variables,

```javascript
const firstName = "John";
const lastName = "Doe";
const age = 25;
const isStudent = false;
```

I grouped everything into one object.

This makes my code cleaner because all the information about the user lives in one place.

---

# Understanding the Structure

Let's break this object down.

```javascript
const user = {
    firstName: "John",
    age: 25
};
```

### `user`

This is the variable that stores a reference to the object.

---

### `firstName`

This is called the **key** or **property name**.

---

### `"John"`

This is the **value** stored inside that property.

Every property follows this pattern.

```
key : value
```

---

# Objects Can Store Different Types of Values

One thing I really like about objects is that they can store almost anything.

```javascript
const user = {
    name: "John",
    age: 25,
    isPremium: true,
    hobbies: ["Reading", "Gaming"],
    address: {
        city: "New York",
        zipCode: "10001"
    }
};
```

Inside one object I can store

- Strings
- Numbers
- Booleans
- Arrays
- Other Objects
- Functions

This makes objects incredibly flexible.

---

# Adding Methods

Objects don't just store information.

They can also perform actions.

```javascript
const user = {
    name: "John",

    greet() {
        console.log("Hello!");
    }
};
```

Calling the method

```javascript
user.greet();
```

Output

```
Hello!
```

The function belongs to the object.

That's why it's called a **method**.

---

# Accessing Properties

There are two ways to access object properties.

## Dot Notation

```javascript
console.log(user.name);
```

Output

```
John
```

This is the syntax I will use most of the time.

---

## Bracket Notation

```javascript
console.log(user["name"]);
```

Output

```
John
```

This is useful when the property name is dynamic.

Example

```javascript
const property = "age";

console.log(user[property]);
```

Output

```
25
```

JavaScript first evaluates the variable and then looks for that property.

---

# Updating Properties

Objects are mutable.

That means I can change their contents after creating them.

```javascript
const user = {
    name: "John",
    age: 25
};

user.age = 26;

console.log(user);
```

Output

```javascript
{
    name: "John",
    age: 26
}
```

I didn't create a new object.

I simply modified the existing one.

---

# Adding New Properties

Objects can grow over time.

```javascript
const user = {
    name: "John"
};

user.country = "USA";

console.log(user);
```

Output

```javascript
{
    name: "John",
    country: "USA"
}
```

JavaScript doesn't complain.

It simply adds the new property.

---

# Deleting Properties

If a property is no longer needed, I can remove it.

```javascript
const user = {
    name: "John",
    age: 25
};

delete user.age;

console.log(user);
```

Output

```javascript
{
    name: "John"
}
```

The `delete` operator removes the property from the object.

---

# Why Object Literals Are Great

Object literals are:

- Easy to write
- Easy to read
- Perfect for small objects
- Excellent for configuration objects
- Great for storing related information

Whenever I need only one or two objects, object literals are usually my first choice.

---

# Where Object Literals Become a Problem

Imagine I need to create 500 users.

Writing this repeatedly would be frustrating.

```javascript
const user1 = {
    name: "John",
    age: 25
};

const user2 = {
    name: "Emma",
    age: 28
};

const user3 = {
    name: "Michael",
    age: 31
};
```

Notice something.

The structure is exactly the same.

Only the values are changing.

Repeating this hundreds of times violates one of the most important programming principles:

> **Don't Repeat Yourself (DRY).**

Whenever I notice that I'm copying and pasting the same code over and over, it's usually a sign that I need a better solution.

That's exactly why Factory Functions exist.

---

# Real-World Examples of Object Literals

Some objects naturally exist only once.

For example,

Application settings

```javascript
const settings = {
    theme: "Dark",
    language: "English",
    notifications: true
};
```

Website configuration

```javascript
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};
```

Shopping cart summary

```javascript
const cart = {
    totalItems: 3,
    totalPrice: 149.99
};
```

These objects don't need hundreds of copies.

Using an object literal is perfectly reasonable here.

---

# Common Mistakes

## Mistake 1

Thinking object literals are bad.

They aren't.

They are one of the most useful features in JavaScript.

The problem isn't object literals.

The problem is using them where a reusable solution would be better.

---

## Mistake 2

Creating multiple objects by copying and pasting.

If I keep duplicating the same structure, I should stop and ask,

> "Can I automate this?"

Most of the time, the answer is yes.

---

## Mistake 3

Forgetting that methods are just functions.

```javascript
const user = {
    greet() {
        console.log("Hello");
    }
};
```

`greet()` is simply a function stored inside an object.

Nothing more.

---

# Things I Should Remember

- Object literals are the simplest way to create objects.
- They use curly braces (`{}`).
- Objects store information using key-value pairs.
- Objects can also contain methods.
- Properties can be added, updated, or deleted.
- Object literals are ideal for unique or small objects.
- If I keep repeating the same object structure, it's time to look for a reusable approach.

---

# Summary

Object literals are the foundation of object creation in JavaScript.

They are simple, readable, and perfect for representing unique pieces of data.

However, they become inefficient when I need to create many objects with the same structure. Repeating the same code over and over makes my program harder to maintain.

This limitation naturally leads to the next concept: **Factory Functions**, which allow me to create multiple objects without duplicating code.

---

# My Mental Model

If I had to explain today's lesson to someone in one minute, I would say:

> An object literal is simply the most direct way of creating an object in JavaScript. It's perfect when I only need a few unique objects. But if I find myself copying the same object structure again and again, object literals are no longer the right tool. That's the point where reusable object creation techniques like Factory Functions become useful.

---

# Questions to Test Myself

Before moving on, I should be able to answer these questions without looking at the notes.

1. What is an object literal?
2. Why is it called a "literal"?
3. When should I use an object literal?
4. When should I avoid using object literals?
5. Why does creating many similar objects manually violate the DRY principle?
6. What problem will Factory Functions solve?

If I can confidently answer these questions, then I'm ready for the next lesson: **Factory Functions**.