# Lesson 11: Constructor

## Introduction

I've already learned about Constructor Functions, ES6 Classes, `this`, `new`, and Prototypes.

This lesson is mainly a revision of the **Constructor** concept and how JavaScript uses it to initialize newly created objects.

---

# What is a Constructor?

A constructor is a special function whose job is to initialize an object when it is created.

Instead of assigning properties one by one,

```javascript
const employee = {};

employee.name = "John";
employee.age = 24;
employee.role = "Backend Developer";
```

I can initialize everything at once using a constructor.

```javascript
class Employee {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
}

const employee = new Employee("John", 24, "Backend Developer");
```

The constructor automatically runs whenever I create a new object using the `new` keyword.

---

# Constructor Function

Before ES6 Classes, JavaScript used Constructor Functions.

```javascript
function Employee(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
}

const employee = new Employee("John", 24, "Backend Developer");
```

Here,

`this`

refers to the newly created object.

---

# ES6 Class Constructor

ES6 introduced a cleaner syntax.

```javascript
class Employee {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
}
```

Although the syntax is different,

both Constructor Functions and Classes perform the same task.

They initialize newly created objects.

---

# Two Meanings of "Constructor"

This is something I should never confuse.

### 1. `constructor()` Method

```javascript
class Employee {
  constructor(name) {
    this.name = name;
  }
}
```

This is the special method that runs automatically when an object is created.

---

### 2. `constructor` Property

Every prototype automatically contains a `constructor` property.

Example

```javascript
function Employee() {}

console.log(Employee.prototype.constructor);
```

Output

```text
[Function: Employee]
```

I can also access it from an object.

```javascript
const employee = new Employee();

console.log(employee.constructor);
```

Output

```text
[Function: Employee]
```

This property tells me which constructor created the object.

---

# Key Takeaways

- A constructor initializes newly created objects.
- Constructor Functions and ES6 Class Constructors perform the same job.
- The `constructor()` method runs automatically when using `new`.
- Every prototype also contains a `constructor` property.
- The `constructor()` method and the `constructor` property are different things.

---

# Summary

A constructor is responsible for setting up an object with its initial values.

Whether I use a Constructor Function or an ES6 Class, the purpose remains the same.

This lesson also reminded me that every prototype contains a `constructor` property that points back to the function or class that created the object.

Understanding constructors makes it easier to understand object creation before moving on to the Four Pillars of Object-Oriented Programming.

---

# Questions to Test Myself

1. What is a constructor?
2. When does a constructor run?
3. What is the difference between a Constructor Function and a Class Constructor?
4. What is the purpose of the `constructor` property?
5. Why shouldn't I confuse the `constructor()` method with the `constructor` property?