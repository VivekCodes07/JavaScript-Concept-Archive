# Lesson 2: Basics

## Introduction

In the previous lesson, I understood why Object-Oriented Programming exists and what problem it solves. I learned that objects help organize related data and behavior together.

Now it's time to understand what an object actually is in JavaScript and how JavaScript treats objects differently from other data types.

This lesson is extremely important because almost everything in JavaScript eventually revolves around objects. If I understand this lesson well, the rest of OOP will become much easier.

---

# Before Learning Objects, I Need to Understand JavaScript Data Types

Everything I create in JavaScript is some kind of data.

JavaScript divides data into two broad categories:

1. Primitive Types
2. Reference Types

Understanding the difference between these two categories is one of the most important concepts in JavaScript.

---

# Primitive Types

Primitive values are the simplest values JavaScript can store.

Examples include:

```javascript
let name = "Rahul";
let age = 20;
let isStudent = true;
let salary = null;
let city;
```

Primitive types include:

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

A primitive stores only one value.

For example,

```javascript
let age = 20;
```

Here, the variable `age` directly stores the value `20`.

Nothing complicated is happening.

---

# Reference Types

Reference types are different.

Instead of storing just one value, they can store collections of data.

The three most common reference types are:

- Objects
- Arrays
- Functions

Examples:

```javascript
const student = {
    name: "Rahul",
    age: 20
};

const colors = ["Red", "Blue", "Green"];

function greet() {
    console.log("Hello");
}
```

Although arrays and functions have their own behavior, they are also objects in JavaScript.

For now, my focus is on understanding objects.

---

# What Exactly Is an Object?

The simplest definition is:

>An object is a collection of related information stored as key-value pairs.

But I don't want to memorize definitions.

Instead, I want to understand the idea behind it.

Suppose I want to represent a student.

Without an object, I would write:

```javascript
const name = "Rahul";
const age = 20;
const course = "Computer Science";
const cgpa = 8.4;
```

This works.

But all these variables belong to the same student.

Instead of scattering them across my program, I can group them together.

```javascript
const student = {
    name: "Rahul",
    age: 20,
    course: "Computer Science",
    cgpa: 8.4
};
```

Now everything related to that student exists in one place.

That's exactly why objects exist.

---

# Understanding Key-Value Pairs

Consider this object.

```javascript
const car = {
    brand: "BMW",
    color: "Black",
    price: 7500000
};
```

Here,

```
brand  -> key
BMW    -> value

color  -> key
Black  -> value

price  -> key
7500000 -> value
```

A key is simply a label.

A value is the actual information associated with that label.

Every property inside an object follows this pattern.

---

# Properties vs Methods

Objects can store both information and functionality.

## Properties

Properties represent information.

Example:

```javascript
const phone = {
    brand: "Samsung",
    model: "S24",
    price: 80000
};
```

Everything inside this object is a property.

---

## Methods

Methods are simply functions stored inside an object.

Example:

```javascript
const phone = {
    brand: "Samsung",

    call() {
        console.log("Calling...");
    }
};
```

Here,

`call()` is called a method because it belongs to the object.

One thing I should always remember:

> Every method is a function, but not every function is a method.

---

# Accessing Object Properties

JavaScript provides two ways to access object properties.

## Dot Notation

This is the most common method.

```javascript
const person = {
    name: "Rahul",
    age: 20
};

console.log(person.name);
console.log(person.age);
```

Output:

```
Rahul
20
```

Whenever I know the property name beforehand, I should prefer dot notation because it is cleaner and easier to read.

---

## Bracket Notation

The second way is bracket notation.

```javascript
console.log(person["name"]);
```

Output:

```
Rahul
```

At first, this seems unnecessary because it produces the same result.

The real advantage appears when the property name is stored inside a variable.

Example:

```javascript
const key = "age";

console.log(person[key]);
```

Output:

```
20
```

Notice something important.

JavaScript first evaluates the variable `key`.

Its value becomes `"age"`.

Then JavaScript executes

```javascript
person["age"]
```

If I wrote

```javascript
person.key
```

JavaScript would literally search for a property called `"key"`.

That is why dot notation cannot replace bracket notation in every situation.

---

# Updating Existing Properties

Objects are mutable.

This means I can change their contents.

```javascript
const student = {
    name: "Rahul",
    age: 20
};

student.age = 21;

console.log(student);
```

Output:

```javascript
{
    name: "Rahul",
    age: 21
}
```

Unlike primitive values, objects can be modified after they are created.

---

# Adding New Properties

Objects are flexible.

I can add new properties whenever I want.

```javascript
const student = {
    name: "Rahul"
};

student.course = "Computer Science";

console.log(student);
```

Output:

```javascript
{
    name: "Rahul",
    course: "Computer Science"
}
```

---

# Deleting Properties

I can also remove properties.

```javascript
const student = {
    name: "Rahul",
    age: 20
};

delete student.age;

console.log(student);
```

Output:

```javascript
{
    name: "Rahul"
}
```

---

# Primitive Copy vs Object Copy

This is one of the most important concepts in JavaScript.

## Primitive Copy

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output:

```
10
20
```

Changing `b` does not affect `a`.

Both variables store separate values.

---

## Object Copy

Now look at this example.

```javascript
const person1 = {
    name: "Rahul"
};

const person2 = person1;

person2.name = "Aman";

console.log(person1.name);
console.log(person2.name);
```

Output:

```
Aman
Aman
```

At first, this feels surprising.

I never changed `person1`.

So why did its value change?

The answer is simple.

`person2 = person1` does **not** create a new object.

Both variables point to the same object in memory.

Conceptually, I can imagine it like this:

```
person1 --------\
                 \
                  -----> Object
                 /
person2 --------/
```

Changing the object through either variable changes the same underlying object.

---

# Dot Notation vs Bracket Notation

A simple rule to remember:

Use dot notation when the property name is fixed.

```javascript
person.name
```

Use bracket notation when the property name comes from a variable.

```javascript
person[propertyName]
```

Whenever I feel confused, I should ask myself:

"Do I already know the property name while writing the code?"

If yes, use dot notation.

If no, use bracket notation.

---

# Things I Should Remember

- Objects group related information together.
- Objects store data using key-value pairs.
- Properties store data.
- Methods store behavior.
- Objects are mutable.
- Dot notation is simpler.
- Bracket notation is dynamic.
- Primitive values are copied by value.
- Objects are assigned and copied by reference.

---

# Common Mistakes

### Mistake 1

```javascript
person.key
```

This looks for a property named `"key"`.

If the property name is stored in a variable, use

```javascript
person[key]
```

---

### Mistake 2

Thinking this creates a new object.

```javascript
const b = a;
```

It doesn't.

It simply creates another reference to the same object.

---

### Mistake 3

Thinking methods are different from functions.

Methods are simply functions that belong to an object.

---

# Summary

This lesson introduced me to one of the most fundamental ideas in JavaScript.

Objects allow me to group related information together, making my code more organized and easier to maintain.

I also learned that objects behave differently from primitive values because they are stored and copied by reference.

Understanding this concept is extremely important because almost every advanced JavaScript topic—including functions, arrays, classes, prototypes, and the `this` keyword—builds on this behavior.

---

# Questions to Test Myself

Before moving to the next lesson, I should be able to answer these questions confidently.

1. What is the difference between primitive and reference types?
2. Why do objects use key-value pairs?
3. What is the difference between a property and a method?
4. When should I use bracket notation instead of dot notation?
5. Why does changing one object reference affect another variable?
6. Can I explain the difference between copying a primitive and copying an object without looking at these notes?

If I can answer these questions, then I've built a solid foundation for everything that comes next.

The next lesson is **Different Ways to Create Objects**, where I'll learn why JavaScript provides multiple ways to create objects and when each approach is useful.