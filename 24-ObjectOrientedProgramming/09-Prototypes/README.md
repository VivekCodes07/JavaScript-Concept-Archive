# Lesson 9: Prototypes

## Introduction

So far, I've learned multiple ways to create objects in JavaScript.

- Object Literals
- Factory Functions
- Constructor Functions
- ES6 Classes

I also learned how the `new` keyword creates a new object and how `this` points to that object during initialization.

Now another question naturally comes to mind.

> When I create multiple objects, where are the methods stored?

Consider this class.

```javascript
class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    introduce() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
```

Now I create three employees.

```javascript
const employee1 = new Employee("John", 24, "Backend Developer");

const employee2 = new Employee("Emma", 27, "Frontend Developer");

const employee3 = new Employee("Michael", 31, "DevOps Engineer");
```

All three objects can call

```javascript
employee1.introduce();

employee2.introduce();

employee3.introduce();
```

This raises an important question.

Does every employee get its own copy of `introduce()`?

Or do they somehow share the same function?

That's exactly what Prototypes solve.

---

# The Problem

Imagine I'm building software for a company with 100,000 employees.

Every employee has different information.

```text
Employee 1

Name : John
Age  : 24

--------------------------

Employee 2

Name : Emma
Age  : 27

--------------------------

Employee 3

Name : Michael
Age  : 31
```

Having different data makes sense.

But what about this method?

```javascript
introduce() {
    console.log("Hello");
}
```

Should JavaScript create **100,000 copies** of this function?

Absolutely not.

That would waste memory.

Since every employee performs the exact same behavior, JavaScript stores only **one copy** of the method.

This is where Prototypes come in.

---

# What is a Prototype?

A Prototype is simply another object that stores properties and methods that can be shared between multiple objects.

Instead of copying the same method into every object,

JavaScript stores one shared copy inside the prototype.

Think of it like this.

```text
                     Employee.prototype

              introduce()
              login()
              logout()

                    ▲
          ┌─────────┼─────────┐
          │         │         │
          │         │         │
     employee1 employee2 employee3
```

Every employee owns its own data.

But all employees share the same methods.

---

# Creating a Prototype

Let's create one ourselves.

First, create a Constructor Function.

```javascript
function Employee(name, age, role) {

    this.name = name;
    this.age = age;
    this.role = role;

}
```

At this point,

objects created from this constructor only contain data.

Example

```javascript
const employee1 = new Employee(
    "John",
    24,
    "Backend Developer"
);

console.log(employee1);
```

Output

```javascript
Employee {

    name: "John",

    age: 24,

    role: "Backend Developer"

}
```

Notice something.

There are no methods yet.

Now let's add one.

---

# Creating My First Prototype Method

The syntax is

```javascript
ConstructorFunction.prototype.methodName = function () {

};
```

In my example

```javascript
Employee.prototype.introduce = function () {

    console.log(
        `Hello, I'm ${this.name}`
    );

};
```

Let's understand this line carefully.

```javascript
Employee.prototype
```

means

> Access the prototype object that belongs to the `Employee` constructor.

Then

```javascript
.introduce
```

creates a new property called

```
introduce
```

Finally,

```javascript
= function(){ }
```

assigns a function to that property.

So this line literally means

> Create a shared method called `introduce` that every Employee object can use.

---

# Using the Prototype Method

Now I can do this.

```javascript
const employee1 = new Employee(
    "John",
    24,
    "Backend Developer"
);

employee1.introduce();
```

Output

```
Hello, I'm John
```

Something interesting happened.

I never wrote

```javascript
employee1.introduce = ...
```

Yet the method still worked.

How?

Because JavaScript searched inside the prototype.

We'll understand that search in the next section.

---

# Adding More Prototype Methods

A Prototype can store multiple methods.

Example

```javascript
Employee.prototype.work = function () {

    console.log(
        `${this.name} is working.`
    );

};

Employee.prototype.takeBreak = function () {

    console.log(
        `${this.name} is taking a break.`
    );

};

Employee.prototype.getRole = function () {

    console.log(this.role);

};
```

Now every employee automatically gets access to all of them.

```javascript
employee1.introduce();

employee1.work();

employee1.takeBreak();

employee1.getRole();
```

Without creating new copies of those functions.

---

# Why is This Memory Efficient?

Suppose I create three employees.

```javascript
const employee1 = new Employee("John", 24, "Backend Developer");

const employee2 = new Employee("Emma", 27, "Frontend Developer");

const employee3 = new Employee("Michael", 31, "DevOps Engineer");
```

Each object stores only its own data.

```text
employee1

name
age
role

---------------------

employee2

name
age
role

---------------------

employee3

name
age
role
```

The methods are stored only once.

```text
Employee.prototype

introduce()

work()

takeBreak()

getRole()
```

Instead of

```text
employee1

introduce()

employee2

introduce()

employee3

introduce()
```

JavaScript stores

```text
One shared introduce()

↓

Shared by every object
```

This is one of the biggest reasons prototypes exist.

They reduce unnecessary duplication and make object creation much more memory efficient.

---

# Visualizing the Memory

Instead of this

```text
employee1

name

age

role

introduce()

--------------------------

employee2

name

age

role

introduce()

--------------------------

employee3

name

age

role

introduce()
```

JavaScript organizes memory more like this.

```text
                    Employee.prototype

                  introduce()

                  work()

                  takeBreak()

                  getRole()

                         ▲

                         │

      ┌──────────────────┼──────────────────┐

      │                  │                  │

employee1          employee2          employee3

name               name               name

age                age                age

role               role               role
```

Every employee owns its own information.

Every employee shares the same behavior.

This is the core idea behind Prototypes.

---

# Things I've Learned So Far

At this point, I understand that

- A Prototype is another object.
- Prototype methods are shared.
- Objects don't copy those methods.
- Prototype methods are created using

```javascript
ConstructorFunction.prototype.methodName = function(){

}
```

- Every object created from the constructor automatically gets access to those methods.

In the next section, I'll learn **how JavaScript actually finds those methods** using something called the **Prototype Chain**.

---

# Property Lookup

Now I know that methods can be stored inside a prototype.

But another question comes to mind.

If the method isn't inside the object itself, then how does JavaScript find it?

To answer that, I first need to understand how JavaScript searches for properties.

Suppose I have this object.

```javascript
const employee = {
    name: "John",
    age: 24
};
```

Now I write

```javascript
console.log(employee.name);
```

What happens internally?

JavaScript starts searching.

```
Does employee contain "name"?
```

↓

Yes.

↓

Return `"John"`.

The search stops immediately.

JavaScript never searches anywhere else because it already found the property.

---

# What Happens When the Property Doesn't Exist?

Now suppose I write

```javascript
employee.role;
```

Does the object contain `role`?

No.

Instead of immediately giving up, JavaScript follows a hidden connection called the **Prototype Chain**.

---

# The Prototype Chain

Every object in JavaScript has an internal link to another object.

That object is called its **Prototype**.

When JavaScript can't find a property on the current object, it follows that link and continues searching.

Think of it like this.

```text
employee
    │
    ▼
Employee.prototype
    │
    ▼
Object.prototype
    │
    ▼
null
```

This entire path is called the **Prototype Chain**.

---

# Property Lookup Example

Let's create a Constructor Function.

```javascript
function Employee(name, age) {

    this.name = name;
    this.age = age;

}
```

Now add a prototype method.

```javascript
Employee.prototype.introduce = function () {

    console.log(`Hello, I'm ${this.name}`);

};
```

Now create an object.

```javascript
const employee = new Employee("John", 24);
```

Finally,

```javascript
employee.introduce();
```

How does JavaScript execute this?

---

# Step 1

JavaScript first checks

```
employee
```

Does this object contain

```
introduce()
```

?

```
No.
```

Current object

```text
employee

{
    name: "John",
    age: 24
}
```

---

# Step 2

JavaScript now follows the prototype.

```text
employee
    │
    ▼
Employee.prototype
```

Does this object contain

```
introduce()
```

?

Yes.

It finds

```javascript
function () {

    console.log(`Hello, I'm ${this.name}`);

}
```

---

# Step 3

JavaScript executes the function.

While executing,

```
this
```

still refers to

```
employee
```

Therefore

```javascript
this.name
```

becomes

```javascript
employee.name
```

Output

```
Hello, I'm John
```

---

# JavaScript Stops Searching Immediately

JavaScript searches from top to bottom.

The moment it finds a property,

it stops.

Example

```text
employee

↓

Employee.prototype

↓

Object.prototype

↓

null
```

If the property is found inside

```
Employee.prototype
```

JavaScript never continues to

```
Object.prototype
```

This makes property lookup fast and efficient.

---

# What If JavaScript Doesn't Find Anything?

Suppose I write

```javascript
employee.salary;
```

Search process

```text
employee

↓

Not Found

↓

Employee.prototype

↓

Not Found

↓

Object.prototype

↓

Not Found

↓

null
```

Since JavaScript reached the end of the chain,

the result is

```javascript
undefined
```

---

# Why Do All Objects Have `toString()`?

Have you ever noticed this?

```javascript
const employee = {
    name: "John"
};

console.log(employee.toString());
```

Even though I never created a

```javascript
toString()
```

method,

it still works.

Why?

Because

```
Object.prototype
```

contains it.

The search happens like this.

```text
employee

↓

Not Found

↓

Object.prototype

↓

Found!

↓

Execute
```

This is why almost every JavaScript object automatically has methods like

- `toString()`
- `hasOwnProperty()`
- `valueOf()`

They come from `Object.prototype`.

---

# Understanding `prototype`

Every function in JavaScript automatically gets a property called

```javascript
prototype
```

Example

```javascript
function Employee() {}

console.log(Employee.prototype);
```

Output

```text
{
    constructor: Employee
}
```

Whenever I write

```javascript
Employee.prototype.introduce = function(){};
```

I'm simply adding a new method to this prototype object.

---

# Understanding `__proto__`

Objects also have a hidden connection called

```javascript
__proto__
```

Example

```javascript
const employee = new Employee();

console.log(employee.__proto__);
```

Output

```javascript
Employee.prototype
```

This means

```javascript
employee.__proto__ === Employee.prototype
```

returns

```javascript
true
```

The object's prototype points to the constructor's prototype.

---

# `prototype` vs `__proto__`

This is one of the most confusing topics for beginners.

Here's how I remember it.

### `prototype`

Belongs to **Constructor Functions**.

```javascript
Employee.prototype
```

This is where shared methods are stored.

---

### `__proto__`

Belongs to **Objects**.

```javascript
employee.__proto__
```

This simply points to

```javascript
Employee.prototype
```

A simple way to remember it is

```text
Constructor Function
        │
        ▼
prototype

Object
        │
        ▼
__proto__
```

One creates the shared methods.

The other points to them.

---

# The `constructor` Property

If I inspect

```javascript
Employee.prototype
```

I'll notice something.

```javascript
console.log(Employee.prototype);
```

Output

```javascript
{
    constructor: Employee
}
```

Every prototype automatically contains a

```javascript
constructor
```

property.

I can even write

```javascript
employee.constructor
```

Output

```javascript
Employee
```

This tells me which Constructor Function created the object.

---

# Visualizing Everything Together

```text
                 Employee (Constructor Function)

                           │

                           │

                     prototype

                           │

                           ▼

            ┌─────────────────────────────┐

            │ constructor : Employee      │

            │ introduce()                 │

            │ work()                      │

            │ takeBreak()                 │

            └─────────────────────────────┘

                      ▲

                      │ (__proto__)

                      │

               employee1

             name : John

             age : 24

             role : Backend Developer
```

Looking at this diagram,

everything starts making sense.

- The object stores data.
- The prototype stores shared methods.
- The object points to the prototype.
- JavaScript follows that connection whenever it can't find a property.

---

# Things I've Learned So Far

At this point I understand that

- JavaScript first searches the object itself.
- If the property isn't found, JavaScript searches the prototype.
- This search continues until `null` is reached.
- This entire process is called the **Prototype Chain**.
- Functions have a `prototype` property.
- Objects have a `__proto__` property.
- `employee.__proto__ === Employee.prototype`
- Every prototype automatically contains a `constructor` property.
- Methods like `toString()` come from `Object.prototype`.

In the final part, I'll learn how **ES6 Classes use prototypes internally**, what happens when methods are overridden, the most common mistakes developers make with prototypes, and a complete summary of everything I've learned.

---

# How ES6 Classes Use Prototypes

When I first learned Classes, I thought they introduced a completely new way of creating objects.

For example,

```javascript
class Employee {

    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    introduce() {
        console.log(`Hello, I'm ${this.name}`);
    }

}
```

This syntax looks completely different from Constructor Functions.

However, internally JavaScript still uses prototypes.

The class above is conceptually similar to this.

```javascript
function Employee(name, age, role) {

    this.name = name;
    this.age = age;
    this.role = role;

}

Employee.prototype.introduce = function () {

    console.log(`Hello, I'm ${this.name}`);

};
```

Both approaches create objects that share methods through the prototype.

The only real difference is that Classes provide cleaner and more readable syntax.

This is why people often say

> Classes are syntactic sugar over JavaScript's prototype system.

---

# Methods Are Not Copied

Suppose I create three employees.

```javascript
const employee1 = new Employee("John", 24, "Backend Developer");

const employee2 = new Employee("Emma", 27, "Frontend Developer");

const employee3 = new Employee("Michael", 30, "DevOps Engineer");
```

Each object stores only its own data.

```text
employee1

name
age
role

------------------------

employee2

name
age
role

------------------------

employee3

name
age
role
```

The methods exist only once.

```text
Employee.prototype

introduce()

work()

takeBreak()
```

Whenever one of the objects calls

```javascript
employee1.introduce();
```

JavaScript follows the Prototype Chain and executes the shared function.

This is why prototypes are so memory efficient.

---

# Method Overriding

Sometimes an object can have a property or method with the same name as one inside its prototype.

Example

```javascript
function Employee(name) {

    this.name = name;

}

Employee.prototype.introduce = function () {

    console.log("Hello from Prototype");

};

const employee = new Employee("John");

employee.introduce = function () {

    console.log("Hello from Object");

};

employee.introduce();
```

Output

```
Hello from Object
```

Why?

Because JavaScript always searches the object first.

Since it finds the method there,

it never continues to the prototype.

This is called **Method Overriding**.

---

# Visualizing Method Overriding

```text
employee

introduce() ✔

↓

Employee.prototype

introduce()

↓

Object.prototype
```

Since JavaScript finds the method inside the object,

the prototype version is ignored.

---

# Prototype Lookup Rule

Whenever I access a property,

JavaScript follows this order.

```text
Current Object

↓

Prototype

↓

Object.prototype

↓

null
```

The search always stops as soon as the property is found.

---

# Common Mistakes

## Mistake 1

Thinking every object stores its own methods.

Wrong.

Usually, shared methods live inside the prototype.

---

## Mistake 2

Confusing

```javascript
prototype
```

with

```javascript
__proto__
```

Remember

Functions have

```javascript
prototype
```

Objects have

```javascript
__proto__
```

---

## Mistake 3

Thinking Classes don't use prototypes.

Wrong.

Every Class internally relies on prototypes.

Classes simply hide the syntax.

---

## Mistake 4

Thinking JavaScript copies methods into every object.

It doesn't.

Objects simply know where to find shared methods.

---

## Mistake 5

Ignoring the Prototype Chain.

Whenever JavaScript can't find a property,

it doesn't stop immediately.

Instead,

it follows the Prototype Chain until either

- the property is found, or
- it reaches `null`.

---

# Things I Should Remember

- Every object has a prototype.
- Prototypes allow multiple objects to share methods.
- Shared methods improve memory efficiency.
- Constructor Functions have a `prototype` property.
- Objects have a `__proto__` link.
- `employee.__proto__ === Employee.prototype`
- JavaScript always searches the object first.
- If the property isn't found, JavaScript searches the Prototype Chain.
- The search stops immediately once the property is found.
- Classes are built on top of prototypes.

---

# Complete Mental Model

Imagine a company.

Every employee has their own

- Name
- Age
- Salary
- Employee ID

Those belong only to that employee.

Now imagine the company handbook.

It contains rules like

- Login procedure
- Leave policy
- Office timings

Instead of giving every employee their own printed handbook,

the company keeps one shared handbook.

Whenever an employee needs information,

they simply look inside that handbook.

JavaScript works exactly the same way.

Objects own their data.

Shared methods live inside the prototype.

Whenever an object needs a method,

JavaScript looks inside that shared prototype.

---

# Summary

Prototypes are JavaScript's mechanism for sharing behavior between objects.

Instead of copying methods into every object,

JavaScript stores one shared copy inside the prototype.

When I access a property,

JavaScript first searches the object itself.

If the property isn't found,

it follows the Prototype Chain.

This continues until the property is found or the search reaches `null`.

Constructor Functions expose a `prototype` property where shared methods are stored.

Objects contain a hidden `__proto__` link that points to that prototype.

ES6 Classes don't replace prototypes.

Instead,

they use prototypes internally while providing a cleaner syntax.

Understanding prototypes helps me understand how JavaScript implements object-oriented programming behind the scenes.

---

# My Mental Model

If I had to explain Prototypes in one minute, I would say:

> Every object carries its own personal information, but instead of carrying its own copy of every function, it carries a reference to a shared library of functions called the Prototype. Whenever the object needs a method, JavaScript first checks the object itself. If it can't find the method there, it walks up the Prototype Chain until it either finds the method or reaches the end of the chain.

---

# Questions to Test Myself

1. Why do Prototypes exist?
2. What problem do they solve?
3. Where are prototype methods stored?
4. How do I create a prototype method?
5. What is the Prototype Chain?
6. How does JavaScript search for a property?
7. What's the difference between `prototype` and `__proto__`?
8. What is the purpose of the `constructor` property?
9. Why do all objects have methods like `toString()`?
10. Do ES6 Classes still use prototypes internally?
11. What happens when an object and its prototype both have a method with the same name?
12. Why are prototypes considered memory efficient?

If I can confidently answer these questions without looking at my notes, then I've understood one of the most important concepts in JavaScript.

Everything that comes next—Inheritance, Polymorphism, and Classes—is built on top of this prototype system.

## Extra Note: Constructor Functions vs Classes

One thing I realized while learning prototypes is that Constructor Functions and ES6 Classes handle prototype methods differently.

### Constructor Functions

I have to manually attach methods to the prototype.

```javascript
function Employee(name) {
  this.name = name;
}

Employee.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}`);
};
```

### ES6 Classes

I simply write methods inside the class body.

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
```

Even though I never wrote

```javascript
Employee.prototype.introduce = function () {};
```

JavaScript automatically places the method on `Employee.prototype` behind the scenes.

So the main difference is:

- Constructor Functions → I manually attach prototype methods.
- ES6 Classes → JavaScript automatically attaches prototype methods.

Both ultimately use the same prototype system.