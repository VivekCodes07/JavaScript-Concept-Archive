# Lesson 6: Constructor Functions

## Introduction

In the previous lesson, I learned about Factory Functions and how they help eliminate repetitive code when creating multiple objects.

At first, Factory Functions seemed like the perfect solution.

```javascript
function createUser(name, email) {
    return {
        name,
        email
    };
}
```

Whenever I needed a new user, I simply called the function.

```javascript
const user1 = createUser("John", "john@example.com");
const user2 = createUser("Emma", "emma@example.com");
```

It worked beautifully.

So naturally, I had a question:

> If Factory Functions already solve the problem of repetitive object creation, why did JavaScript introduce Constructor Functions?

This lesson answers that question.

---

# Revisiting the Problem

Imagine I'm building an online learning platform like Udemy.

Every instructor has:

- Name
- Email
- Number of Courses

Every instructor can also:

- Publish a course
- Update a course

Using a Factory Function, I might write:

```javascript
function createInstructor(name, email) {
    return {
        name,
        email,

        publishCourse() {
            console.log(`${name} published a course.`);
        }
    };
}
```

Now I can create multiple instructors.

```javascript
const instructor1 = createInstructor("John", "john@example.com");
const instructor2 = createInstructor("Emma", "emma@example.com");
```

Everything looks good.

But there's something happening behind the scenes that I haven't noticed yet.

---

# The Hidden Problem with Factory Functions

Every time I call a Factory Function, JavaScript creates a **brand-new object**.

That part is expected.

But it also creates a **new copy of every method inside that object**.

Imagine I create three instructors.

```javascript
const instructor1 = createInstructor("John", "john@example.com");
const instructor2 = createInstructor("Emma", "emma@example.com");
const instructor3 = createInstructor("Michael", "michael@example.com");
```

Even though `publishCourse()` is exactly the same for every instructor, JavaScript creates three separate function objects in memory.

Conceptually, it looks like this:

```text
Instructor 1
-------------
name
email
publishCourse()  ← Copy 1

Instructor 2
-------------
name
email
publishCourse()  ← Copy 2

Instructor 3
-------------
name
email
publishCourse()  ← Copy 3
```

For three objects, this isn't a big deal.

But what if my application has **100,000 users**?

Now JavaScript has created **100,000 identical functions**.

That's unnecessary memory usage.

This is one of the reasons Constructor Functions became popular before ES6 classes existed.

---

# What is a Constructor Function?

A Constructor Function is simply a **special function used to create objects**.

Unlike a Factory Function, it doesn't explicitly return an object.

Instead, JavaScript creates the object automatically.

This is possible because of the `new` keyword.

---

# My First Constructor Function

Let's rewrite the previous Factory Function as a Constructor Function.

```javascript
function User(name, email) {
    this.name = name;
    this.email = email;
}
```

Notice two things.

1. The function name starts with a capital letter.
2. I'm using `this` instead of returning an object.

Now I create objects like this:

```javascript
const user1 = new User("John", "john@example.com");
const user2 = new User("Emma", "emma@example.com");
```

No `return` statement.

No object literal.

Yet I still get new objects.

Why?

That's where the `new` keyword comes in.

---

# Why Do Constructor Functions Start with a Capital Letter?

This is **not a JavaScript rule**.

It's a convention followed by developers.

For example,

```javascript
function User() {}
```

looks like a constructor.

Whereas,

```javascript
function createUser() {}
```

looks like a normal function.

Using PascalCase (starting with a capital letter) makes my code easier to read because I immediately know that this function is meant to be called with `new`.

---

# Understanding `this`

When I first saw this code,

```javascript
function User(name) {
    this.name = name;
}
```

I wondered,

> "What exactly is `this`?"

Inside a Constructor Function, `this` refers to **the new object that JavaScript is creating**.

I don't have to create the object myself.

JavaScript does it for me.

I simply describe what properties that object should have.

---

# The `new` Keyword

The `new` keyword is what makes Constructor Functions special.

Without `new`:

```javascript
const user = User("John");
```

JavaScript treats `User` like a normal function.

With `new`:

```javascript
const user = new User("John");
```

JavaScript understands that I'm trying to create a new object.

The `new` keyword changes how the function behaves.

---

# What Happens Under the Hood?

This is the part most tutorials skip.

When JavaScript sees:

```javascript
const user = new User("John", "john@example.com");
```

It roughly performs these steps behind the scenes.

### Step 1

Create an empty object.

```javascript
const obj = {};
```

---

### Step 2

Connect that object to the constructor's prototype.

We'll study prototypes later, but for now just know that JavaScript links them together.

Conceptually,

```text
obj
 │
 ▼
User.prototype
```

---

### Step 3

Call the constructor function.

```javascript
User.call(obj, "John", "john@example.com");
```

Notice something.

`this` now refers to `obj`.

So this line

```javascript
this.name = name;
```

becomes

```javascript
obj.name = "John";
```

Similarly,

```javascript
this.email = email;
```

becomes

```javascript
obj.email = "john@example.com";
```

---

### Step 4

Return the object automatically.

JavaScript finally does

```javascript
return obj;
```

This is why I never write

```javascript
return this;
```

JavaScript already handles it.

---

# Visualizing the Process

Before calling the constructor:

```text
new User(...)
```

JavaScript creates

```text
{}
```

Then

```text
{}
│
├── name = "John"
└── email = "john@example.com"
```

Finally,

```text
user
 │
 ▼
{
    name: "John",
    email: "john@example.com"
}
```

Everything happens automatically.

---

# Adding Methods

Constructor Functions can also create methods.

```javascript
function User(name) {

    this.name = name;

    this.login = function () {
        console.log(`${this.name} logged in.`);
    };

}
```

Now,

```javascript
const user = new User("Emma");

user.login();
```

Output

```
Emma logged in.
```

This works.

But there's a problem.

Every object gets its own copy of `login()`.

That's the exact same limitation we had with Factory Functions.

So Constructor Functions haven't completely solved the memory issue.

The real solution comes later when we learn **Prototypes**.

---

# Factory Function vs Constructor Function

Factory Function

```javascript
const user = createUser("John");
```

Constructor Function

```javascript
const user = new User("John");
```

Factory Functions return the object manually.

Constructor Functions rely on JavaScript to create and return the object automatically.

---

# Why Use Constructor Functions?

Constructor Functions became popular because they provided a standardized way of creating similar objects.

They also introduced concepts like:

- `new`
- `this`
- Prototypes

These concepts became the foundation for JavaScript's object-oriented programming model.

Even modern ES6 classes are built on top of Constructor Functions.

---

# Common Mistakes

## Mistake 1

Forgetting the `new` keyword.

```javascript
const user = User("John");
```

Now JavaScript treats `User` as a normal function.

The behavior becomes completely different.

Always remember:

Constructor Functions are meant to be called with `new`.

---

## Mistake 2

Returning an object manually.

```javascript
function User(name) {
    this.name = name;

    return {};
}
```

This defeats the purpose of a Constructor Function.

Let JavaScript return the object automatically.

---

## Mistake 3

Thinking Constructor Functions are classes.

They are not.

Classes were introduced later in ES6.

Constructor Functions were the original way JavaScript handled object creation before classes existed.

---

# Things I Should Remember

- Constructor Functions are used to create multiple similar objects.
- Their names usually start with a capital letter.
- They are called using the `new` keyword.
- `this` refers to the object being created.
- JavaScript automatically creates and returns the object.
- Constructor Functions still duplicate methods when methods are defined inside them.
- Prototypes solve that duplication problem.

---

# Summary

Constructor Functions are another way to create objects in JavaScript.

Unlike Factory Functions, I don't create or return the object myself. Instead, I let JavaScript handle that responsibility through the `new` keyword.

The biggest takeaway from this lesson isn't the syntax—it's understanding what JavaScript does behind the scenes. When I write `new User()`, JavaScript quietly creates an object, binds `this` to it, executes the constructor, and returns the object automatically.

Understanding this process will make the next topics—`this`, `new`, and Prototypes—much easier.

---

# My Mental Model

If I had to explain Constructor Functions to someone in one minute, I would say:

> A Constructor Function is like the blueprint used by a house builder. I don't manually build each house. Instead, I hand the blueprint to the builder (`new`), and the builder creates a new house based on that blueprint every time. My job is only to describe what each house should contain.

---

# Questions to Test Myself

1. Why weren't Factory Functions enough?
2. What is a Constructor Function?
3. Why do constructor names usually start with a capital letter?
4. What does the `new` keyword actually do?
5. What does `this` refer to inside a Constructor Function?
6. Why don't Constructor Functions need a `return` statement?
7. Do Constructor Functions completely solve the memory duplication problem?
8. Which JavaScript feature will solve that problem later?

If I can confidently answer these questions, then I have understood Constructor Functions and I'm ready to learn **ES6 Classes**, which provide a cleaner syntax built on top of the same concepts.