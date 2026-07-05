# Lesson 8: `this` & `new` Keyword

## Introduction

So far, I've learned about:

- Object Literals
- Factory Functions
- Constructor Functions
- ES6 Classes

One thing I noticed is that both Constructor Functions and Classes use two things repeatedly:

```javascript
this
```

and

```javascript
new
```

I kept writing them without truly understanding what they were doing.

For example,

```javascript
function Employee(name) {
    this.name = name;
}
```

or

```javascript
class Employee {
    constructor(name) {
        this.name = name;
    }
}
```

Both examples work perfectly.

But...

- What exactly is `this`?
- Why does `this` suddenly refer to an object?
- What is the `new` keyword actually doing?
- Why does forgetting `new` completely change the behavior?

This lesson answers all of those questions.

---

# Understanding `this`

When I first started learning JavaScript, I often heard people say:

> "`this` refers to the current object."

That explanation is incomplete.

A better way to think about it is:

> **`this` refers to the object that is executing the current function.**

The important part is that the value of `this` is **not fixed**.

It depends on **how the function is called**, not where the function is written.

This is one of the most confusing topics in JavaScript, but once I understand this idea, everything starts making sense.

---

# `this` in Different Situations

The value of `this` changes depending on the context.

Let's explore each one.

---

## 1. `this` Inside an Object Method

```javascript
const employee = {
    name: "John",

    introduce() {
        console.log(this.name);
    }
};

employee.introduce();
```

Output

```
John
```

Why?

Because the method is being called using

```javascript
employee.introduce()
```

Here,

```
this === employee
```

So

```javascript
this.name
```

becomes

```javascript
employee.name
```

which is

```
John
```

---

## 2. `this` Inside a Constructor Function

```javascript
function Employee(name) {
    this.name = name;
}

const employee = new Employee("John");
```

Here,

`this` refers to the **new object** that JavaScript creates.

I never manually create that object.

The `new` keyword creates it for me.

So this line

```javascript
this.name = name;
```

actually becomes

```javascript
employee.name = "John";
```

---

## 3. `this` Inside a Class

```javascript
class Employee {

    constructor(name) {
        this.name = name;
    }

}
```

Exactly the same thing happens.

`this` refers to the newly created object.

Classes don't change how `this` works.

They simply provide cleaner syntax.

---

# The Biggest Rule About `this`

This is the rule I want to remember forever.

> **`this` depends on how a function is called, not where it is written.**

That one sentence explains almost every confusing situation involving `this`.

---

# Understanding the `new` Keyword

Most beginners think

> "`new` creates an object."

That's true.

But it doesn't tell the whole story.

When JavaScript sees

```javascript
const employee = new Employee("John");
```

it performs several steps behind the scenes.

Let's go through them one by one.

---

# Step 1: Create an Empty Object

JavaScript first creates an empty object.

Conceptually,

```javascript
const obj = {};
```

Current object

```javascript
{}
```

---

# Step 2: Connect the Object to the Prototype

JavaScript links the object to

```javascript
Employee.prototype
```

We'll study prototypes in detail in the next lesson.

For now, just remember that this connection allows the object to access shared methods later.

Conceptually,

```text
obj
 │
 ▼
Employee.prototype
```

---

# Step 3: Execute the Constructor Function

Now JavaScript executes

```javascript
Employee.call(obj, "John");
```

Notice something.

Inside the constructor,

```javascript
this === obj
```

Therefore,

```javascript
this.name = name;
```

becomes

```javascript
obj.name = "John";
```

Current object

```javascript
{
    name: "John"
}
```

---

# Step 4: Return the Object

Finally,

JavaScript automatically returns

```javascript
obj
```

The variable now stores the reference.

```text
employee
    │
    ▼

{
    name: "John"
}
```

That's why I never write

```javascript
return this;
```

JavaScript already does it.

---

# Visualizing the Entire Process

I write

```javascript
const employee = new Employee("John");
```

JavaScript roughly thinks like this

```text
Create an empty object
        │
        ▼

{}

        │
        ▼

Set this = object

        │
        ▼

Execute constructor

        │
        ▼

{
    name: "John"
}

        │
        ▼

Return object

        │
        ▼

employee
```

This mental model helps me understand what `new` actually does.

---

# What Happens If I Forget `new`?

Suppose I write

```javascript
const employee = Employee("John");
```

Now JavaScript does **not** create a new object.

It simply calls the function like any normal function.

That means all the special behavior of `new` disappears.

Depending on the environment and strict mode, this can lead to unexpected behavior or even errors.

That's why Constructor Functions and Classes should always be called using

```javascript
new
```

---

# Why Does `this` Feel So Confusing?

Because its value changes.

For example,

```javascript
const employee = {

    name: "John",

    introduce() {
        console.log(this.name);
    }

};
```

Here,

```
this === employee
```

But inside a Constructor Function,

```
this === newly created object
```

The keyword never changes.

The object it points to changes.

That's why I should stop asking

> "What is `this`?"

Instead ask

> "Who is calling this function?"

That question usually gives me the answer.

---

# A Quick Note on Arrow Functions

Arrow functions behave differently.

They don't create their own `this`.

Instead, they inherit `this` from their surrounding scope.

Example

```javascript
const employee = {

    name: "John",

    introduce: () => {
        console.log(this);
    }

};
```

This often surprises beginners because `this` here is **not** the `employee` object.

I'll study arrow functions and lexical `this` in more detail later.

For now, I just need to remember that arrow functions treat `this` differently.

---

# Common Mistakes

## Mistake 1

Thinking

> `this` always refers to the object where the function is written.

Wrong.

It depends on how the function is called.

---

## Mistake 2

Forgetting the `new` keyword.

```javascript
Employee("John");
```

Always remember

```javascript
new Employee("John");
```

---

## Mistake 3

Thinking Classes remove the need for `new`.

They don't.

This is still correct.

```javascript
new Employee()
```

Without `new`, JavaScript throws an error when using Classes.

---

# Things I Should Remember

- `this` is determined when a function is called.
- `this` does not always refer to the same object.
- Constructor Functions use `this` to initialize the new object.
- Classes use `this` in exactly the same way.
- The `new` keyword creates a new object.
- `new` links the object to the prototype.
- `new` executes the constructor.
- `new` automatically returns the object.
- Arrow functions handle `this` differently.

---

# Summary

The `this` keyword isn't tied to a specific object forever.

Instead, JavaScript decides its value when the function is called.

The `new` keyword is what makes Constructor Functions and Classes work. It creates a new object, binds `this` to that object, runs the constructor, and finally returns the object automatically.

Understanding these two concepts removes a lot of the "magic" from JavaScript object creation.

Now I know that when I write

```javascript
new Employee("John");
```

JavaScript is doing much more than calling a function—it's creating, initializing, linking, and returning a brand-new object behind the scenes.

---

# My Mental Model

If I had to explain this lesson to someone in one minute, I would say:

> Think of `this` as a blank name tag. It doesn't have a name until someone wears it. When a function is called, JavaScript decides who wears that name tag. The `new` keyword gives that name tag to the brand-new object being created, so every assignment using `this` adds data to that object.

---

# Questions to Test Myself

1. What does `this` actually represent?
2. Does `this` depend on where a function is written or how it is called?
3. What are the four main steps JavaScript performs when I use `new`?
4. Why don't I need to write `return this` inside a Constructor Function?
5. What happens if I forget the `new` keyword?
6. Do Classes change how `this` works?
7. Why are arrow functions different when using `this`?
8. If I can explain what JavaScript does internally when it sees `new Employee("John")`, have I truly understood this lesson?

If I can confidently answer these questions without looking at my notes, then I have built a strong foundation for the next lesson: **Prototypes**, where I'll finally understand how JavaScript shares methods between objects without creating unnecessary copies.