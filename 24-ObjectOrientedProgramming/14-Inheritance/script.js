/*
===============================================================================
                        LESSON 14 : INHERITANCE
===============================================================================

Inheritance allows one class to reuse the properties and methods
of another class.

Instead of writing the same code multiple times,
I write it once in a parent class.

Then child classes automatically inherit it.

Main Goal

→ Code Reusability

===============================================================================
*/

/*=============================================================================
                            PARENT CLASS
=============================================================================*/

/*
The Employee class contains the common functionality
that every employee should have.

This is called the Parent Class (or Base Class / Superclass).
*/

class Employee {
  constructor(name, email) {
    /*
        `this`

        Refers to the current object being created.
        */

    this.name = name;
    this.email = email;
  }

  /*
    Every employee can login.
    */

  login() {
    console.log(`${this.name} logged in.`);
  }

  /*
    Every employee can logout.
    */

  logout() {
    console.log(`${this.name} logged out.`);
  }
}

/*=============================================================================
                            CHILD CLASS
=============================================================================*/

/*
Developer inherits everything from Employee.

The keyword

extends

creates the inheritance relationship.
*/

class Developer extends Employee {
  constructor(name, email, language) {
    /*
        Calls the constructor of Employee.

        Employee is responsible for

        • name
        • email

        So instead of rewriting that logic,
        I simply call super().
        */

    super(name, email);

    /*
        This property belongs only
        to Developer.
        */

    this.language = language;
  }

  /*
    This method belongs only
    to Developer.
    */

  writeCode() {
    console.log(`${this.name} is writing ${this.language}.`);
  }
}

/*=============================================================================
                        CREATING AN OBJECT
=============================================================================*/

const developer = new Developer("Vivek", "vivek@example.com", "JavaScript");

/*
Behind the scenes

new Developer(...)

↓

Create empty object

↓

Call Developer constructor

↓

Developer calls super()

↓

Employee constructor initializes

name

email

↓

Developer initializes

language

↓

Return the completed object
*/

console.log(developer);

console.log("\n");

/*=============================================================================
                        INHERITED METHODS
=============================================================================*/

/*
login()

is NOT written inside Developer.

It is inherited from Employee.
*/

developer.login();

/*
logout()

is also inherited.
*/

developer.logout();

console.log("\n");

/*=============================================================================
                        CHILD'S OWN METHOD
=============================================================================*/

/*
writeCode()

belongs only to Developer.
*/

developer.writeCode();

console.log("\n");

/*=============================================================================
                    HOW JAVASCRIPT FINDS login()
=============================================================================*/

/*

When I write

developer.login();

JavaScript searches like this


developer

↓

Does developer have login() ?

↓

No

↓

Developer.prototype

↓

Found?

↓

No

↓

Employee.prototype

↓

Found

↓

Execute login()

This search process is called

Prototype Chain.
*/

developer.login();

console.log("\n");

/*=============================================================================
                        ANOTHER CHILD CLASS
=============================================================================*/

/*
Inheritance allows multiple child classes
to reuse the same parent.
*/

class Designer extends Employee {
  constructor(name, email, tool) {
    super(name, email);

    this.tool = tool;
  }

  designUI() {
    console.log(`${this.name} is designing using ${this.tool}.`);
  }
}

const designer = new Designer("Alex", "alex@example.com", "Figma");

designer.login();

designer.designUI();

console.log("\n");

/*=============================================================================
                        WHY INHERITANCE?
=============================================================================*/

/*

Without Inheritance

Developer

↓

name

email

login()

logout()

-----------------------

Designer

↓

name

email

login()

logout()

-----------------------

Manager

↓

name

email

login()

logout()

Lots of duplicate code.

================================================

With Inheritance

Employee

↓

name

email

login()

logout()

↓

Developer

↓

Designer

↓

Manager

One place for common functionality.

Less duplication.

Cleaner code.

*/

/*=============================================================================
                        KEY TAKEAWAYS
=============================================================================*/

/*

✓ Inheritance helps reuse code.

✓ Parent class stores common functionality.

✓ Child class automatically inherits it.

✓ extends creates the inheritance relationship.

✓ super() calls the parent's constructor.

✓ Child classes can have their own
  properties and methods.

✓ JavaScript finds inherited methods
  using the Prototype Chain.

Memory Trick

Inheritance

↓

"Write Once

Reuse Everywhere"

*/
