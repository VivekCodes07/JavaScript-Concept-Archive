# Lesson 5: Factory Functions

## Introduction

In the previous lesson, I learned about object literals and how they are the simplest way to create objects in JavaScript.

At first, object literals seemed perfect.

```javascript
const product = {
    name: "Wireless Mouse",
    price: 29.99,
    inStock: true
};
```

Simple.
Readable.
Easy to understand.

But then I asked myself a question.

> What if I'm building an e-commerce website with 10,000 products?

Am I supposed to manually write 10,000 objects?

Obviously not.

That's the first limitation of object literals.

This is where **Factory Functions** come into the picture.

They help me create multiple objects without repeating the same code over and over again.

---

# The Problem Object Literals Can't Solve Efficiently

Imagine I'm building Amazon.

Every product has the same information.

- Name
- Price
- Category
- Stock
- Rating

If I use object literals, my code starts looking like this.

```javascript
const product1 = {
    name: "Wireless Mouse",
    price: 29.99,
    category: "Electronics",
    stock: 100,
    rating: 4.5
};

const product2 = {
    name: "Mechanical Keyboard",
    price: 89.99,
    category: "Electronics",
    stock: 50,
    rating: 4.8
};

const product3 = {
    name: "USB-C Hub",
    price: 39.99,
    category: "Accessories",
    stock: 200,
    rating: 4.3
};
```

Look closely.

What is actually changing?

Only the values.

The structure remains exactly the same.

That means I'm writing the same code repeatedly.

Whenever I notice this pattern, it's a sign that I should automate it.

---

# Thinking Like a Programmer

Instead of asking,

> "How do I create another product?"

I should ask,

> "Can I create something that creates products for me?"

That's a completely different way of thinking.

Instead of manually building every object, I build a function that builds objects.

That function is called a **Factory Function**.

---

# What is a Factory Function?

A Factory Function is simply a function that creates and returns an object.

That's it.

There's nothing magical about it.

The word "factory" comes from real life.

A car factory doesn't build just one car.

It follows the same process to produce many cars.

Similarly, a Factory Function follows the same structure to create many objects.

---

# My First Factory Function

Let's convert our product object into a reusable function.

```javascript
function createProduct(name, price, category) {
    return {
        name,
        price,
        category
    };
}
```

Now creating products becomes incredibly easy.

```javascript
const product1 = createProduct(
    "Wireless Mouse",
    29.99,
    "Electronics"
);

const product2 = createProduct(
    "Mechanical Keyboard",
    89.99,
    "Electronics"
);

const product3 = createProduct(
    "USB-C Hub",
    39.99,
    "Accessories"
);
```

Notice something.

I only wrote the object structure once.

Every time I call the function, JavaScript creates a brand-new object.

That's the biggest advantage of Factory Functions.

---

# Breaking Down the Code

Let's understand exactly what's happening.

```javascript
function createProduct(name, price, category) {

    return {

        name,
        price,
        category

    };

}
```

The function receives three values.

```javascript
name
price
category
```

Then it creates a new object.

```javascript
{
    name,
    price,
    category
}
```

Finally,

```javascript
return
```

sends that object back to whoever called the function.

Nothing more.

Every time I call the function, JavaScript repeats these steps.

---

# Why Doesn't Every Product Become the Same?

This confused me at first.

If every product comes from the same function,

why don't they all contain the same values?

The answer is simple.

Every function call gets its own arguments.

Example

```javascript
createProduct("Laptop", 1200, "Electronics");
```

The parameters become

```
name = "Laptop"

price = 1200

category = "Electronics"
```

Another call

```javascript
createProduct("Headphones", 80, "Audio");
```

Now

```
name = "Headphones"

price = 80

category = "Audio"
```

Even though the function is the same,

the data changes every time.

That's why every object is different.

---

# Returning Objects

One important thing to remember.

Without `return`

nothing comes back.

Example

```javascript
function createProduct() {

    const product = {
        name: "Mouse"
    };

}
```

Now,

```javascript
const item = createProduct();

console.log(item);
```

Output

```
undefined
```

Why?

Because the function never returned the object.

Correct version

```javascript
function createProduct() {

    return {
        name: "Mouse"
    };

}
```

Now

```javascript
const item = createProduct();

console.log(item);
```

Output

```javascript
{
    name: "Mouse"
}
```

---

# Factory Functions Can Also Create Methods

Objects don't only contain data.

They can also contain behavior.

Example

```javascript
function createUser(username) {

    return {

        username,

        login() {
            console.log(`${username} logged in.`);
        }

    };

}
```

Now

```javascript
const user = createUser("john_doe");

user.login();
```

Output

```
john_doe logged in.
```

Every user object now has both

- Data
- Behavior

Exactly what objects are supposed to represent.

---

# Why is This Better Than Object Literals?

Imagine I need 1,000 users.

With object literals

I'd write 1,000 objects.

With Factory Functions

I'd write one function.

Then

```javascript
const user1 = createUser("John");
const user2 = createUser("Emma");
const user3 = createUser("Michael");
const user4 = createUser("Sophia");
```

Much cleaner.

Much easier to maintain.

---

# Real-World Example

Suppose I'm building Spotify.

Every playlist has

- Name
- Creator
- Number of Songs

Instead of

```javascript
const playlist1 = {
    ...
};

const playlist2 = {
    ...
};

const playlist3 = {
    ...
};
```

I can write

```javascript
function createPlaylist(name, creator, songs) {

    return {

        name,
        creator,
        songs

    };

}
```

Now

```javascript
const chillMix = createPlaylist(
    "Chill Mix",
    "John",
    32
);

const workoutHits = createPlaylist(
    "Workout Hits",
    "Emma",
    48
);
```

Much better.

---

# Property Shorthand

Notice something.

Instead of writing

```javascript
return {

    name: name,

    price: price,

    category: category

};
```

JavaScript allows me to write

```javascript
return {

    name,

    price,

    category

};
```

This is called **Property Shorthand**.

If the property name and variable name are the same,

JavaScript automatically understands what I mean.

This makes my code cleaner.

---

# Benefits of Factory Functions

They help me

- Reduce repeated code
- Create multiple similar objects
- Keep my code organized
- Make future changes easier

Suppose I later decide every product should have a discount property.

Without Factory Functions

I'd have to edit hundreds of objects.

With a Factory Function

I edit one function.

Every future product automatically gets the update.

---

# Limitations of Factory Functions

Factory Functions solve many problems,

but they aren't perfect.

One issue is that methods are recreated every time.

Example

```javascript
function createUser(name) {

    return {

        name,

        login() {
            console.log("Login");
        }

    };

}
```

Every object gets its own copy of the `login()` function.

If I create 10,000 users,

JavaScript creates 10,000 identical login functions.

That isn't memory efficient.

Later in the course,

I'll learn how **Constructor Functions** and **Prototypes** solve this problem.

---

# Common Mistakes

## Mistake 1

Forgetting to return the object.

```javascript
function createUser() {

    {

        name: "John"

    }

}
```

This returns `undefined`.

Always use

```javascript
return {
    ...
};
```

---

## Mistake 2

Thinking Factory Functions are a special JavaScript feature.

They aren't.

They're just normal functions that happen to return objects.

---

## Mistake 3

Confusing Factory Functions with Constructor Functions.

Factory Functions

```javascript
const user = createUser("John");
```

Constructor Functions

```javascript
const user = new User("John");
```

The `new` keyword is the major difference.

---

# Things I Should Remember

- A Factory Function is just a function that returns an object.
- It helps eliminate repetitive object creation.
- Every function call returns a brand-new object.
- Factory Functions can also create methods.
- Property shorthand makes object creation cleaner.
- Factory Functions improve maintainability.
- Methods are recreated for every object, which can become inefficient.

---

# Summary

Factory Functions solve one of the biggest problems with object literals—repetition.

Instead of manually creating object after object, I can define the structure once inside a function and reuse it whenever I need a new object.

This makes my code cleaner, easier to maintain, and much more scalable.

However, Factory Functions still have one limitation: every object gets its own copy of the methods. This isn't a problem for small applications, but in large applications it wastes memory.

That's exactly why JavaScript introduced another pattern called **Constructor Functions**, which I'll learn in the next lesson.

---

# My Mental Model

If I had to explain Factory Functions to someone in one minute, I'd say:

> A Factory Function is like a cookie cutter. Instead of shaping every cookie by hand, I create one cutter and use it repeatedly. Every cookie has the same shape but different decorations. Similarly, a Factory Function creates objects with the same structure but different data.

---

# Questions to Test Myself

1. What problem do Factory Functions solve?
2. Why are they called "Factory" Functions?
3. What does a Factory Function return?
4. Why is using `return` important?
5. What is Property Shorthand?
6. What limitation do Factory Functions have?
7. Why do methods consume more memory in Factory Functions?
8. What topic will solve this limitation?

If I can answer these confidently without looking at the notes, then I have understood Factory Functions well enough to move on to **Constructor Functions**.