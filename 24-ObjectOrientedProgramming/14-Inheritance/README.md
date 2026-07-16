# Lesson 14: Inheritance

## Introduction

As I started learning Object-Oriented Programming, I noticed that many classes share the same properties and methods.

Imagine I'm building a company management system.

I have

* Developer
* Designer
* Manager

Every employee has

* Name
* Email
* Login()

If I write these common properties and methods inside every class, I'll end up writing the same code repeatedly.

This increases code duplication and makes the application harder to maintain.

Instead of repeating the same code,

Object-Oriented Programming gives me a much better solution.

That solution is **Inheritance**.

---

# What is Inheritance?

Inheritance is one of the four pillars of Object-Oriented Programming.

It allows one class to inherit the properties and methods of another class.

Instead of writing common functionality multiple times,

I write it once inside a parent class,

and every child class automatically gets access to it.

The biggest goal of Inheritance is

```text
Code Reusability
```

Write once.

Reuse many times.

---

# Why Do We Need Inheritance?

Let's first understand the problem.

Suppose I'm creating different types of employees.

Without Inheritance,

I might write this.

```javascript
class Developer {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in.`);
    }

}

class Designer {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in.`);
    }

}

class Manager {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in.`);
    }

}
```

At first glance,

this code looks completely fine.

But if I look carefully,

I'm repeating the same constructor three times.

I'm also repeating the same `login()` method three times.

This is unnecessary duplication.

Now imagine I have

* 20 employee types
* 50 employee types
* 100 employee types

The problem becomes much worse.

---

# The Problem with Duplicate Code

Suppose tomorrow I decide to change the login message.

Old

```javascript
console.log(`${this.name} logged in.`);
```

New

```javascript
console.log(`${this.name} successfully logged into the system.`);
```

Without Inheritance,

I now have to update

Developer

↓

Designer

↓

Manager

↓

HR

↓

Tester

↓

Support Engineer

↓

and every other employee class.

This wastes time.

It also increases the chances of bugs because I might accidentally forget to update one class.

This is why developers try to avoid duplicate code.

A very famous software engineering principle says

> **DRY (Don't Repeat Yourself)**

Inheritance helps me follow this principle.

---

# The Better Solution

Instead of putting common code everywhere,

I create one parent class.

```javascript
class Employee {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in.`);
    }

}
```

Now,

every employee already knows

* their name
* their email
* how to log in

Instead of rewriting these things,

other classes can simply inherit them.

---

# Creating a Child Class

```javascript
class Developer extends Employee {

}
```

This single line completely changes how my application works.

The `Developer` class automatically gets everything from `Employee`.

I didn't write

* constructor()
* login()

inside `Developer`.

Yet,

they are still available.

This is the power of Inheritance.

---

# Understanding the Syntax

Let's understand every part of this line.

```javascript
class Developer extends Employee {

}
```

---

## Step 1

```javascript
class Developer
```

Creates a new class named **Developer**.

Just like I've learned before,

a class is simply a blueprint for creating objects.

---

## Step 2

```javascript
extends
```

This is the keyword that creates an inheritance relationship.

When JavaScript sees

```javascript
extends
```

it understands

> "This class should inherit everything from another class."

Without this keyword,

there is no inheritance.

---

## Step 3

```javascript
Employee
```

This is the class I'm inheriting from.

It is called

* Parent Class
* Base Class
* Superclass

All three names mean exactly the same thing.

---

## The Child Class

The class that inherits is called

* Child Class
* Derived Class
* Subclass

Again,

all three names mean the same thing.

So in this example,

```text
Employee

↓

Parent Class
```

and

```text
Developer

↓

Child Class
```

---

# Creating an Object

Now let's create a Developer object.

```javascript
const developer = new Developer(
    "John",
    "john@email.com"
);
```

Something interesting happens here.

The `Developer` class doesn't have its own constructor.

So where does JavaScript get one from?

The answer is

Employee.

JavaScript automatically uses the constructor of the parent class.

This means

```javascript
this.name = name;
```

and

```javascript
this.email = email;
```

still execute,

even though I never wrote a constructor inside `Developer`.

---

# Calling an Inherited Method

Now let's call

```javascript
developer.login();
```

Output

```text
John logged in.
```

Wait...

I never wrote

```javascript
login()
```

inside the Developer class.

So how is this working?

Because the method was inherited from Employee.

The Developer object automatically has access to everything that belongs to its parent.

This is exactly what Inheritance means.

---

# Visual Representation

```text
                 Employee
          ┌──────────────────┐
          │ name             │
          │ email            │
          │ login()          │
          └────────▲─────────┘
                   │
              extends
                   │
          ┌────────┴─────────┐
          │    Developer     │
          │ writeCode()      │
          └──────────────────┘
```

The child class automatically receives all the common functionality from the parent class.

Instead of rewriting code,

it simply reuses it.

---

# Things I've Learned So Far

* Inheritance allows one class to reuse another class.
* The main purpose of Inheritance is code reuse.
* The `extends` keyword creates an inheritance relationship.
* The parent class stores common functionality.
* The child class automatically receives that functionality.
* Inheritance helps me follow the DRY (Don't Repeat Yourself) principle.
* Writing common code once is much better than repeating it in multiple classes.

# Constructor in Inheritance

So far, my child class doesn't have its own constructor.

```javascript
class Employee {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in.`);
    }

}

class Developer extends Employee {

}

const developer = new Developer(
    "John",
    "john@email.com"
);
```

This works perfectly.

But why?

Because when a child class doesn't define its own constructor,

JavaScript automatically uses the constructor of the parent class.

Conceptually, JavaScript behaves like this.

```javascript
class Developer extends Employee {

    constructor(...args) {
        super(...args);
    }

}
```

JavaScript does this behind the scenes for me.

That's why

```javascript
new Developer("John", "john@email.com");
```

still initializes

* name
* email

even though I never wrote a constructor inside `Developer`.

---

# But What If I Need More Properties?

Suppose every Developer should also store

```text
Programming Language
```

Now I need my own constructor.

```javascript
class Developer extends Employee {

    constructor(name, email, language) {

        super(name, email);

        this.language = language;

    }

}
```

Now my Developer object stores

```text
Name

↓

Email

↓

Programming Language
```

The first two belong to Employee.

The last one belongs only to Developer.

---

# Understanding the Syntax

Let's understand every line carefully.

---

## Creating the Constructor

```javascript
constructor(name, email, language)
```

This creates a constructor specifically for the Developer class.

Whenever I write

```javascript
new Developer(
    "John",
    "john@email.com",
    "JavaScript"
);
```

these values are received here.

```text
name

↓

"John"

----------------------

email

↓

"john@email.com"

----------------------

language

↓

"JavaScript"
```

---

## Understanding `super()`

```javascript
super(name, email);
```

This is probably the most important line in inheritance.

`super()` calls the constructor of the parent class.

Remember,

Employee already knows how to initialize

```javascript
this.name

this.email
```

Instead of rewriting that logic,

I simply call the parent's constructor.

Conceptually,

this happens.

```text
Developer Constructor

↓

Calls

↓

Employee Constructor

↓

Employee initializes

name

↓

email

↓

Returns to Developer

↓

Developer initializes

language
```

So the work is divided nicely.

Employee initializes employee-related data.

Developer initializes developer-specific data.

---

## Adding New Properties

```javascript
this.language = language;
```

After the parent constructor finishes,

I can now add properties that belong only to Developer.

My object now looks like this.

```text
Developer

↓

name

email

language
```

---

# Why Can't I Skip `super()`?

Suppose I write

```javascript
class Developer extends Employee {

    constructor(name, email, language) {

        this.language = language;

    }

}
```

JavaScript immediately throws an error.

Why?

Because in a child class,

the parent must be initialized first.

Until the parent constructor runs,

JavaScript doesn't allow me to use

```javascript
this
```

That's why `super()` must be called before accessing `this`.

The correct order is

```text
Call super()

↓

Parent object gets initialized

↓

Now use this

↓

Add child properties
```

A simple rule to remember:

> **If a child class has its own constructor, call `super()` first.**

---

# Complete Example

```javascript
class Employee {

    constructor(name, email) {

        this.name = name;
        this.email = email;

    }

    login() {

        console.log(`${this.name} logged in.`);

    }

}

class Developer extends Employee {

    constructor(name, email, language) {

        super(name, email);

        this.language = language;

    }

    writeCode() {

        console.log(`${this.name} is writing ${this.language}.`);

    }

}

const developer = new Developer(
    "John",
    "john@email.com",
    "JavaScript"
);

developer.login();

developer.writeCode();
```

Output

```text
John logged in.

John is writing JavaScript.
```

Notice something.

`login()`

came from Employee.

`writeCode()`

belongs to Developer.

The object is using both inherited and its own functionality.

---

# Behind the Scenes

When I create

```javascript
const developer = new Developer(
    "John",
    "john@email.com",
    "JavaScript"
);
```

JavaScript performs these steps.

```text
Step 1

Create an empty object.

↓

Step 2

Call Developer constructor.

↓

Step 3

Developer constructor calls

super()

↓

Step 4

Employee constructor initializes

name

email

↓

Step 5

Control returns to Developer.

↓

Step 6

Developer initializes

language

↓

Step 7

Object is fully created.
```

---

# Method Lookup

Suppose I write

```javascript
developer.login();
```

JavaScript searches for the method like this.

```text
developer

↓

Does this object have login() ?

↓

No

↓

Developer.prototype

↓

Does it exist here?

↓

No

↓

Employee.prototype

↓

Found

↓

Execute the method
```

This search process is called the **Prototype Chain**.

Inheritance works because JavaScript links the prototypes of parent and child classes.

---

# Things I've Learned So Far

* Child classes automatically use the parent's constructor if they don't have one.
* `super()` calls the constructor of the parent class.
* `super()` must be called before using `this` inside a child constructor.
* Child classes can add their own properties after calling `super()`.
* JavaScript finds inherited methods through the prototype chain.

---

# Real-World Example 1: Company Management System

Imagine I'm building a company management system.

Every employee has some common information.

* Name
* Email
* Employee ID

Every employee can also

* Login
* Logout

Instead of writing these properties and methods inside every class,

I create one parent class.

```javascript
class Employee {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} logged in.`);
    }

    logout() {
        console.log(`${this.name} logged out.`);
    }

}
```

Now I can create different employee types.

```javascript
class Developer extends Employee {

    writeCode() {
        console.log(`${this.name} is writing code.`);
    }

}

class Designer extends Employee {

    designUI() {
        console.log(`${this.name} is designing the interface.`);
    }

}

class Manager extends Employee {

    manageTeam() {
        console.log(`${this.name} is managing the team.`);
    }

}
```

Every child class automatically gets

* Name
* Email
* login()
* logout()

while also having its own unique behavior.

This is one of the most common uses of Inheritance.

---

# Real-World Example 2: Animals

Imagine I'm creating a zoo management application.

Every animal can

* Eat
* Sleep
* Breathe

So I create

```text
Animal
```

Then

```text
Dog

Cat

Bird
```

inherit from it.

Each animal automatically gets

* eat()
* sleep()
* breathe()

while also having its own unique methods.

Dog

```javascript
bark()
```

Bird

```javascript
fly()
```

Cat

```javascript
meow()
```

This prevents duplicate code and keeps the application organized.

---

# Advantages of Inheritance

## 1. Code Reusability

The biggest advantage.

Instead of writing the same code repeatedly,

I write it once.

Every child class automatically reuses it.

---

## 2. Less Duplicate Code

Without Inheritance

```text
Developer

↓

login()

↓

logout()

---------------------

Designer

↓

login()

↓

logout()

---------------------

Manager

↓

login()

↓

logout()
```

The same methods are repeated.

With Inheritance

```text
Employee

↓

login()

↓

logout()

↓

Developer

Designer

Manager
```

Only one copy of the code exists.

---

## 3. Easier Maintenance

Suppose I improve the login functionality.

Without Inheritance,

I would update every class.

With Inheritance,

I only update

```text
Employee
```

Every child class automatically gets the updated behavior.

---

## 4. Easier to Extend

Tomorrow,

I decide to add

```text
Intern
```

I simply write

```javascript
class Intern extends Employee {

}
```

The new class immediately inherits all the common functionality.

---

# When Should I Use Inheritance?

Inheritance should only be used when there is an

```text
IS-A
```

relationship.

Examples

```text
Dog IS AN Animal.

Developer IS AN Employee.

SavingsAccount IS A BankAccount.

ElectricCar IS A Car.
```

These relationships make sense because the child is a more specific version of the parent.

---

# When Should I NOT Use Inheritance?

Not every relationship should use Inheritance.

Sometimes the relationship is

```text
HAS-A
```

instead of

```text
IS-A
```

Example

```text
Car HAS AN Engine.
```

A Car is not an Engine.

Therefore,

Inheritance doesn't make sense here.

Instead,

the Car object should simply contain an Engine object.

Another example

```text
House HAS A Door.
```

A House is not a Door.

Again,

Inheritance would be the wrong choice.

Whenever the relationship is "has-a", composition is usually a better design.

---

# Common Beginner Mistakes

## Mistake 1

Creating very large parent classes.

Example

```text
Animal

↓

eat()

sleep()

breathe()

bark()

meow()

fly()

swim()
```

This is incorrect.

Not every animal can bark.

Not every animal can fly.

Only common behavior should be placed inside the parent class.

---

## Mistake 2

Using Inheritance only to reuse code.

Just because two classes have similar code doesn't always mean they should have an inheritance relationship.

The relationship should make logical sense.

---

## Mistake 3

Forgetting to call `super()`.

Whenever I create a constructor inside a child class,

I must call

```javascript
super(...)
```

before using

```javascript
this
```

Otherwise,

JavaScript throws an error.

---

# Mental Model

Whenever I hear

## Inheritance

I should immediately think

```text
Reuse Existing Code
```

Then ask myself

```text
Is there an "IS-A" relationship?
```

If the answer is yes,

Inheritance is probably a good choice.

---

# Things I've Learned

* Inheritance allows one class to reuse another class's properties and methods.
* It helps follow the DRY (Don't Repeat Yourself) principle.
* Parent classes contain common functionality.
* Child classes inherit that functionality.
* Child classes can also have their own unique properties and methods.
* The `extends` keyword creates an inheritance relationship.
* `super()` initializes the parent class before the child class adds its own properties.
* JavaScript finds inherited methods through the prototype chain.
* Inheritance should only be used when there is an "is-a" relationship.

---

# Summary

Inheritance is one of the most powerful concepts in Object-Oriented Programming.

It allows related classes to share common functionality without duplicating code.

Instead of rewriting the same properties and methods in multiple classes, I can place the shared functionality inside a parent class and allow child classes to inherit it using the `extends` keyword.

If a child class needs its own constructor, I use `super()` to initialize the parent class before adding child-specific properties.

When used correctly, Inheritance makes applications cleaner, easier to maintain, and easier to extend.

The key idea I want to remember is:

> Write common code once, then let other classes reuse it.

---

# Questions to Test Myself

1. What is Inheritance?
2. Why do we use Inheritance?
3. What problem does Inheritance solve?
4. What is the purpose of the `extends` keyword?
5. What is the difference between a Parent Class and a Child Class?
6. Why do we use `super()`?
7. Why must `super()` be called before `this`?
8. What is the prototype chain?
9. What happens when JavaScript cannot find a method on an object?
10. What is an "is-a" relationship?
11. What is a "has-a" relationship?
12. When should I avoid using Inheritance?
13. What are the biggest advantages of Inheritance?
14. Can I explain Inheritance using a real-world example without looking at my notes?
