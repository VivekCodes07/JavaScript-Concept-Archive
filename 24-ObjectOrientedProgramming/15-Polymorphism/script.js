/*
===============================================================================
                          LESSON 15 : POLYMORPHISM
===============================================================================

Polymorphism means

One Method

↓

Many Behaviors

The same method can behave differently depending
on the object that calls it.

The most common way to achieve Polymorphism
in JavaScript is Method Overriding.

===============================================================================
*/


/*=============================================================================
                            PARENT CLASS
=============================================================================*/

/*
The Animal class represents the common behavior
shared by all animals.

Every animal can "speak",

but the actual sound depends on the animal.
*/

class Animal {

    speak() {

        console.log("Some Animal Sound");

    }

}


/*=============================================================================
                        CHILD CLASS : DOG
=============================================================================*/

/*
Dog inherits from Animal.

The keyword

extends

creates the inheritance relationship.
*/

class Dog extends Animal {

    /*
    Method Overriding

    Animal already has a speak() method.

    Here, Dog creates its own version.

    JavaScript will use this version
    instead of the parent's version.
    */

    speak() {

        console.log("Woof! 🐶");

    }

}


/*=============================================================================
                        CHILD CLASS : CAT
=============================================================================*/

class Cat extends Animal {

    /*
    Same method name.

    Different implementation.
    */

    speak() {

        console.log("Meow! 🐱");

    }

}


/*=============================================================================
                        CHILD CLASS : COW
=============================================================================*/

class Cow extends Animal {

    speak() {

        console.log("Moo! 🐮");

    }

}


/*=============================================================================
                        CREATING OBJECTS
=============================================================================*/

const dog = new Dog();
const cat = new Cat();
const cow = new Cow();


console.log("===== POLYMORPHISM =====\n");

/*
Even though every object calls

speak()

each object behaves differently.

This is Polymorphism.
*/

dog.speak();

cat.speak();

cow.speak();

console.log("\n");


/*=============================================================================
                    WHAT HAPPENS BEHIND THE SCENES?
=============================================================================*/

/*

When I write

dog.speak();

JavaScript searches like this

dog

↓

Does dog contain speak() ?

↓

No

↓

Dog.prototype

↓

Found ✔

↓

Execute Dog's version

JavaScript never reaches

Animal.prototype

because the method has already been found.
*/

dog.speak();

console.log("\n");


/*=============================================================================
                WHAT IF THE CHILD DOESN'T OVERRIDE?
=============================================================================*/

class Bird extends Animal {

    /*
    No speak() method here.
    */

}

const bird = new Bird();

/*
JavaScript searches

bird

↓

Bird.prototype

↓

Not Found

↓

Animal.prototype

↓

Found ✔

So the parent's method runs.
*/

bird.speak();

console.log("\n");


/*=============================================================================
                    CALLING THE PARENT METHOD
=============================================================================*/

/*
Sometimes I don't want to completely replace
the parent's method.

Instead,

I want to use the parent's logic
and then add my own.

For that,

JavaScript provides

super.method()
*/

class Lion extends Animal {

    speak() {

        /*
        Calls Animal's speak() method.
        */

        super.speak();

        console.log("Roar! 🦁");

    }

}

const lion = new Lion();

lion.speak();

console.log("\n");


/*=============================================================================
                        ANOTHER REAL-WORLD EXAMPLE
=============================================================================*/

class Payment {

    pay() {

        console.log("Processing Payment...");

    }

}

class UPI extends Payment {

    pay() {

        console.log("Payment Successful using UPI.");

    }

}

class CreditCard extends Payment {

    pay() {

        console.log("Payment Successful using Credit Card.");

    }

}

const upi = new UPI();
const card = new CreditCard();

/*
Same method.

Different behavior.
*/

upi.pay();

card.pay();

console.log("\n");


/*=============================================================================
                            KEY TAKEAWAYS
=============================================================================*/

/*

✓ Polymorphism means

  One Method

  ↓

  Many Behaviors

--------------------------------------------------

✓ Child classes can override
  parent methods.

--------------------------------------------------

✓ JavaScript always checks

  Child Class

  ↓

  Parent Class

while searching for a method.

--------------------------------------------------

✓ If the child doesn't override
  the method,

  JavaScript uses the parent's version.

--------------------------------------------------

✓ super.method()

allows me to call the parent's implementation.

--------------------------------------------------

Memory Trick

Abstraction

↓

Hide Complexity

Encapsulation

↓

Protect Data

Inheritance

↓

Reuse Code

Polymorphism

↓

Same Method

↓

Different Behavior

*/