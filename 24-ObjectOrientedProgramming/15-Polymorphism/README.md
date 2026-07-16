# Lesson 15: Polymorphism

## Introduction

So far, I've learned three pillars of Object-Oriented Programming.

* Abstraction
* Encapsulation
* Inheritance

Now it's time to learn the final pillar.

**Polymorphism**.

This is one of the most powerful concepts in Object-Oriented Programming because it allows different objects to respond differently to the same method.

Instead of creating different method names for every object,

I can use one common method,

and each object decides how it should behave.

This makes applications much cleaner, easier to extend, and easier to maintain.

---

# What Does Polymorphism Mean?

The word **Polymorphism** comes from two Greek words.

```text
Poly
```

means

```text
Many
```

and

```text
Morph
```

means

```text
Forms
```

Together,

```text
Polymorphism

↓

Many Forms
```

In programming,

Polymorphism means

> **The same method can have different behaviors depending on the object that calls it.**

The method name stays the same.

The implementation changes.

---

# Why Do We Need Polymorphism?

Let's first understand the problem.

Imagine I'm creating different animals.

Without Polymorphism,

my code might look like this.

```javascript
class Dog {

    bark() {
        console.log("Woof!");
    }

}

class Cat {

    meow() {
        console.log("Meow!");
    }

}

class Cow {

    moo() {
        console.log("Moo!");
    }

}
```

Every class has a different method name.

Dog

↓

```javascript
dog.bark();
```

Cat

↓

```javascript
cat.meow();
```

Cow

↓

```javascript
cow.moo();
```

Although this works,

there is no consistency.

Every object exposes a different interface.

As my application grows,

this becomes difficult to manage.

---

# A Better Solution

Instead,

every animal should simply know how to

```javascript
speak();
```

Now,

each object implements the method differently.

Dog

↓

```text
Woof!
```

Cat

↓

```text
Meow!
```

Cow

↓

```text
Moo!
```

The method name stays the same.

Only the implementation changes.

This is Polymorphism.

---

# JavaScript Example

Let's create a parent class.

```javascript
class Animal {

    speak() {
        console.log("Some Animal Sound");
    }

}
```

Now let's create a child class.

```javascript
class Dog extends Animal {

    speak() {
        console.log("Woof!");
    }

}
```

And another child class.

```javascript
class Cat extends Animal {

    speak() {
        console.log("Meow!");
    }

}
```

Now create the objects.

```javascript
const dog = new Dog();

const cat = new Cat();

dog.speak();

cat.speak();
```

Output

```text
Woof!

Meow!
```

Notice something interesting.

Both objects call

```javascript
speak();
```

But each object produces a different result.

This is exactly what Polymorphism means.

---

# Understanding the Syntax

Let's understand every line.

---

## Creating the Parent Class

```javascript
class Animal
```

Creates the parent class.

This class contains the common behavior that every animal should have.

Every child class will inherit from this class.

---

## Parent Method

```javascript
speak()
```

This creates a method named `speak`.

At the parent level,

it represents a generic animal sound.

---

## Child Class

```javascript
class Dog extends Animal
```

The `extends` keyword creates an inheritance relationship.

Dog now inherits everything from Animal.

This means Dog automatically has access to every public property and method of Animal.

---

## Creating the Same Method Again

Inside Dog,

I write

```javascript
speak() {
    console.log("Woof!");
}
```

Notice something.

The parent already has

```javascript
speak()
```

But the child creates another method with the same name.

This is called **Method Overriding**.

Instead of using the parent's implementation,

Dog provides its own implementation.

---

## Creating Objects

```javascript
const dog = new Dog();
```

Creates a Dog object.

Even though Dog inherits from Animal,

it is still its own object.

---

## Calling the Method

```javascript
dog.speak();
```

JavaScript first checks

```text
Dog
```

before checking

```text
Animal
```

Since Dog already has its own

```javascript
speak()
```

JavaScript executes that version.

The parent's version is ignored.

---

# What is Method Overriding?

Method Overriding happens when a child class creates a method with the same name as a method in its parent class.

Example

Parent

```javascript
speak() {
    console.log("Some Animal Sound");
}
```

Child

```javascript
speak() {
    console.log("Woof!");
}
```

The child replaces the parent's implementation.

Whenever I call

```javascript
dog.speak();
```

JavaScript executes the child's version.

This is the foundation of Polymorphism.

---

# Why This Demonstrates Polymorphism

Notice that I never create

```javascript
dog.bark();

cat.meow();

cow.moo();
```

Instead,

every object exposes the same interface.

```javascript
animal.speak();
```

The object itself decides what should happen.

The caller doesn't need to know whether it's a Dog, Cat, or Cow.

It simply calls

```javascript
speak();
```

Each object behaves differently.

This is exactly what Polymorphism is all about.

---

# Things I've Learned So Far

* Polymorphism means "many forms."
* The same method can behave differently depending on the object.
* Child classes can override methods from the parent class.
* Method overriding is one of the most common ways to achieve Polymorphism.
* The caller doesn't need to know how each object implements the method.
* Every object decides its own behavior.

# Behind the Scenes of Polymorphism

So far, I've learned that a child class can create a method with the same name as its parent.

When that happens,

JavaScript executes the child's version instead of the parent's.

But **how does JavaScript know which method to execute?**

To answer that,

I need to understand **Method Lookup**.

---

# Method Lookup

Suppose I have the following code.

```javascript
class Animal {

    speak() {
        console.log("Some Animal Sound");
    }

}

class Dog extends Animal {

    speak() {
        console.log("Woof!");
    }

}

const dog = new Dog();

dog.speak();
```

At first glance,

it looks simple.

But internally,

JavaScript performs several steps before executing the method.

---

# Step 1: Check the Object

When I write

```javascript
dog.speak();
```

JavaScript first checks whether the object itself contains a property named

```javascript
speak
```

Conceptually,

it searches like this.

```text
dog

↓

Does this object contain speak()?

↓

No
```

The `dog` object only stores instance properties like

* name
* age
* breed

Methods are not stored directly inside the object.

---

# Step 2: Check Dog.prototype

Since JavaScript didn't find the method on the object,

it moves to

```text
Dog.prototype
```

Now it searches again.

```text
dog

↓

Dog.prototype

↓

Found ✔
```

Dog already defines

```javascript
speak()
```

so JavaScript immediately executes that version.

Output

```text
Woof!
```

The search stops here.

---

# Why Doesn't JavaScript Continue Searching?

Because the method has already been found.

JavaScript always uses the **first matching method** it encounters while moving up the prototype chain.

It doesn't continue searching once a match is found.

---

# What If Dog Doesn't Override the Method?

Suppose I remove

```javascript
speak()
```

from the Dog class.

```javascript
class Animal {

    speak() {
        console.log("Some Animal Sound");
    }

}

class Dog extends Animal {

}

const dog = new Dog();

dog.speak();
```

Now the search looks like this.

```text
dog

↓

Dog.prototype

↓

Not Found

↓

Animal.prototype

↓

Found ✔
```

Output

```text
Some Animal Sound
```

Since Dog doesn't provide its own implementation,

JavaScript simply uses the inherited one.

---

# Visualizing the Prototype Chain

Whenever a class inherits another class,

their prototypes become connected.

Conceptually,

it looks like this.

```text
dog
 │
 ▼
Dog.prototype
 │
 ▼
Animal.prototype
 │
 ▼
Object.prototype
 │
 ▼
null
```

Whenever JavaScript cannot find a method,

it keeps moving upward until

* the method is found, or
* it reaches `null`.

---

# What is Method Overriding?

Method Overriding happens when a child class creates a method with the **same name** as its parent.

Parent

```javascript
class Animal {

    speak() {
        console.log("Some Animal Sound");
    }

}
```

Child

```javascript
class Dog extends Animal {

    speak() {
        console.log("Woof!");
    }

}
```

Both methods have the same name.

```text
speak()
```

But the child provides a different implementation.

Because JavaScript finds the child's version first,

the parent's version is overridden.

---

# Calling the Parent Method with `super`

Sometimes,

I don't want to completely replace the parent's method.

Instead,

I want to use the parent's logic **and** add something extra.

For that,

JavaScript provides

```javascript
super
```

Example

```javascript
class Animal {

    speak() {
        console.log("Some Animal Sound");
    }

}

class Dog extends Animal {

    speak() {

        super.speak();

        console.log("Woof!");

    }

}
```

Output

```text
Some Animal Sound

Woof!
```

---

# Understanding `super.speak()`

Let's break it down.

```javascript
super
```

refers to the **parent class**.

---

```javascript
super.speak();
```

means

> "Execute the parent's `speak()` method."

After that,

JavaScript continues executing the remaining code inside the child method.

This allows me to reuse the parent's implementation instead of rewriting everything.

---

# When Should I Use `super.method()`?

Suppose every employee should log in.

The parent already handles the common login process.

```javascript
class Employee {

    login() {
        console.log("Employee logged in.");
    }

}
```

A Developer also wants to load the development tools.

Instead of rewriting the login logic,

the child can extend it.

```javascript
class Developer extends Employee {

    login() {

        super.login();

        console.log("Loading VS Code...");

    }

}
```

Output

```text
Employee logged in.

Loading VS Code...
```

This is much better than copying the parent's code.

---

# Why Polymorphism is Useful

Imagine writing code like this.

```javascript
if(type === "dog") {

    dog.bark();

}

else if(type === "cat") {

    cat.meow();

}

else if(type === "cow") {

    cow.moo();

}
```

As more animals are added,

this code becomes larger and harder to maintain.

With Polymorphism,

I simply write

```javascript
animal.speak();
```

The object decides what should happen.

The caller doesn't need to know the specific type.

This makes the code cleaner and much easier to extend.

---

# Things I've Learned So Far

* JavaScript searches for methods using the prototype chain.
* The child class is always checked before the parent class.
* Method Overriding replaces the parent's implementation.
* If the child doesn't override the method, JavaScript uses the parent's version.
* `super.method()` allows me to call the parent's implementation before adding my own logic.
* Polymorphism removes the need for long chains of conditional statements.

# Real-World Example 1: Payment System

Imagine I'm building an online payment application.

The application supports multiple payment methods.

* UPI
* Credit Card
* PayPal

Every payment method should perform one common action.

```javascript
pay();
```

Instead of creating different method names like

```javascript
payWithUPI();

payWithCard();

payWithPayPal();
```

I create one common parent class.

```javascript
class Payment {

    pay() {
        console.log("Processing payment...");
    }

}
```

Now every payment method can provide its own implementation.

```javascript
class UPI extends Payment {

    pay() {
        console.log("Processing payment using UPI...");
    }

}

class CreditCard extends Payment {

    pay() {
        console.log("Processing payment using Credit Card...");
    }

}

class PayPal extends Payment {

    pay() {
        console.log("Processing payment using PayPal...");
    }

}
```

Now every object responds differently,

even though they all use the same method.

```javascript
upi.pay();

card.pay();

paypal.pay();
```

This is Polymorphism.

---

# Real-World Example 2: Notification System

Suppose I'm building a notification service.

Every notification should have

```javascript
send();
```

Instead of creating

```javascript
sendEmail();

sendSMS();

sendPushNotification();
```

I create one common interface.

```javascript
class Notification {

    send() {
        console.log("Sending notification...");
    }

}
```

Then each notification type overrides the method.

```javascript
class Email extends Notification {

    send() {
        console.log("Sending Email...");
    }

}

class SMS extends Notification {

    send() {
        console.log("Sending SMS...");
    }

}

class PushNotification extends Notification {

    send() {
        console.log("Sending Push Notification...");
    }

}
```

Every object exposes the same method,

but performs a different action.

---

# Real-World Example 3: Game Characters

Imagine I'm building a game.

Every character can attack.

Parent class

```javascript
attack();
```

Child classes

* Warrior
* Mage
* Archer

Warrior

```javascript
attack() {
    console.log("Sword Attack");
}
```

Mage

```javascript
attack() {
    console.log("Magic Attack");
}
```

Archer

```javascript
attack() {
    console.log("Arrow Attack");
}
```

The game engine simply calls

```javascript
character.attack();
```

It doesn't need to know whether the character is a Warrior, Mage, or Archer.

Each object decides how to attack.

This is one of the biggest advantages of Polymorphism.

---

# Advantages of Polymorphism

## 1. Cleaner Code

Instead of creating multiple method names,

I expose one common interface.

Example

```javascript
animal.speak();
```

instead of

```javascript
dog.bark();

cat.meow();

cow.moo();
```

---

## 2. Easier to Extend

Suppose tomorrow I add

```text
Lion
```

I only create

```javascript
class Lion extends Animal {

    speak() {
        console.log("Roar!");
    }

}
```

I don't need to modify the existing classes.

---

## 3. Better Maintainability

Each class is responsible for its own behavior.

If I want to change how a Dog speaks,

I only update the Dog class.

The Cat and Cow classes remain untouched.

---

## 4. Reduces Conditional Statements

Without Polymorphism

```javascript
if(type === "dog") {

    dog.bark();

}

else if(type === "cat") {

    cat.meow();

}

else if(type === "cow") {

    cow.moo();

}
```

As more types are added,

the conditions become longer and harder to maintain.

With Polymorphism,

I simply write

```javascript
animal.speak();
```

The object itself decides which implementation should run.

---

# Common Beginner Mistakes

## Mistake 1

Using different method names.

Example

```javascript
dog.bark();

cat.meow();

cow.moo();
```

This is **not** Polymorphism.

A better approach is

```javascript
dog.speak();

cat.speak();

cow.speak();
```

The method name remains the same.

Only the implementation changes.

---

## Mistake 2

Thinking Inheritance alone is Polymorphism.

Inheritance allows classes to reuse code.

Polymorphism happens when child classes provide different implementations of the same method.

Inheritance and Polymorphism work together,

but they are not the same concept.

---

## Mistake 3

Forgetting Method Overriding.

If the child doesn't override the method,

every object behaves exactly like the parent.

In that case,

there is no different behavior.

---

# Mental Model

Whenever I hear

## Polymorphism

I immediately think

```text
One Method

↓

Many Behaviors
```

Then I ask myself

```text
Do different objects respond differently
to the same method?
```

If the answer is

```text
Yes
```

then I'm most likely using Polymorphism.

---

# Quick Revision of All Four Pillars

## Abstraction

```text
Hide Complexity
```

Only expose what the user needs.

---

## Encapsulation

```text
Protect Data
```

Keep data and methods together while controlling access.

---

## Inheritance

```text
Reuse Code
```

Allow child classes to inherit common functionality from a parent class.

---

## Polymorphism

```text
Same Method

↓

Different Behavior
```

Different objects respond differently to the same method.

---

# Things I've Learned

* Polymorphism means "many forms."
* The same method can behave differently depending on the object.
* Method Overriding is the most common way to achieve Polymorphism.
* JavaScript checks the child class before the parent during method lookup.
* `super.method()` allows me to call the parent's implementation.
* Polymorphism makes applications easier to extend and maintain.
* It helps reduce unnecessary conditional statements.

---

# Summary

Polymorphism is the fourth pillar of Object-Oriented Programming.

It allows different objects to respond differently to the same method.

Instead of creating separate method names for every object, I expose one common interface and let each class decide how it should implement that behavior.

This makes applications more flexible, easier to maintain, and easier to extend.

Whenever I think of Polymorphism, I want to remember one sentence:

> **Same method. Different behavior.**

---

# Questions to Test Myself

1. What does Polymorphism mean?
2. Why do we use Polymorphism?
3. What is Method Overriding?
4. How is Polymorphism different from Inheritance?
5. Why does JavaScript execute the child's method before the parent's?
6. What is the purpose of `super.method()`?
7. How does Polymorphism reduce the need for long `if...else` statements?
8. Can I explain Polymorphism using a payment system example?
9. Can I explain Polymorphism using game characters?
10. What are the four pillars of Object-Oriented Programming, and what problem does each one solve?
