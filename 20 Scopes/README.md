# JavaScript Scope — The Way I Wish Someone Had Taught Me

> My goal is not to memorize scope.
>
> My goal is to think like the JavaScript engine.

---

# Let's Start With A Simple Question

Look at this code:

```javascript
const username = "Rahul";

function greet() {
    console.log(username);
}

greet();
```

Output:

```javascript
Rahul
```

Seems normal.

But stop for a second.

Inside `greet()`, where is `username`?

```javascript
function greet() {
    console.log(username);
}
```

There is no variable called `username` inside the function.

So how did JavaScript find it?

The answer is:

# Scope

---

# What Is Scope?

Imagine you're looking for your phone.

What's the first thing you do?

You don't search the entire city.

You search:

```text
My Pocket
   ↓
My Desk
   ↓
My Room
   ↓
My House
```

You search from nearest to farthest.

JavaScript does exactly the same thing with variables.

When JavaScript needs a variable:

```javascript
console.log(username);
```

it starts searching.

```text
Current Scope
      ↓
Parent Scope
      ↓
Parent Scope
      ↓
Global Scope
```

This searching process is what scope is all about.

---

# Think Of Scopes As Rooms

Imagine a house.

```text
House
│
├── Living Room
│
└── Bedroom
```

If you're inside the bedroom:

You can walk out and access things in the house.

But if you're standing in the house:

You cannot magically access things hidden inside the bedroom.

JavaScript works the same way.

Child scopes can see parents.

Parents cannot see children.

This one rule explains most scope questions.

---

# The Global Scope

Anything declared outside functions belongs to the global scope.

Example:

```javascript
const appName = "Netflix";
```

Visual:

```text
Global Scope

appName = Netflix
```

Every scope inside the program can access it.

---

Example:

```javascript
const appName = "Netflix";

function show() {
    console.log(appName);
}

show();
```

Output:

```javascript
Netflix
```

Why?

Because JavaScript searched:

```text
show()
   ↓
Global Scope
```

Found it.

Done.

---

# Function Scope

Every function creates its own room.

Example:

```javascript
function greet() {

    const message = "Hello";

    console.log(message);
}
```

Visual:

```text
greet()

message = Hello
```

Inside the function:

```javascript
console.log(message);
```

works perfectly.

But outside:

```javascript
console.log(message);
```

Output:

```javascript
ReferenceError
```

Why?

Because `message` only lives inside that function's room.

---

# Parent Can Not See Child

This is one of the most important rules.

Look carefully:

```javascript
function outer() {

    function inner() {

        const secret = "123";
    }

    console.log(secret);
}

outer();
```

Output:

```javascript
ReferenceError
```

Most beginners think:

> But secret exists!

Yes.

Inside `inner()`.

And `outer()` cannot see inside its child.

Visual:

```text
outer()

└── inner()

     secret = 123
```

Parent looking down:

```text
outer
   ↓
inner
```

JavaScript does NOT search downward.

Ever.

---

# Child CAN See Parent

Now reverse it.

```javascript
function outer() {

    const secret = "123";

    function inner() {

        console.log(secret);
    }

    inner();
}

outer();
```

Output:

```javascript
123
```

Why?

Visual:

```text
outer()

secret = 123

└── inner()
```

When `inner()` needs `secret`:

```text
inner
   ↑
outer
```

Found.

Done.

Children can always look upward.

---

# Nested Scopes

Now let's create multiple rooms.

```javascript
const country = "India";

function state() {

    const city = "Chandigarh";

    function area() {

        const sector = "17";

        console.log(country);
        console.log(city);
        console.log(sector);
    }

    area();
}

state();
```

Visual:

```text
Global

country
│
└── state()

      city
      │
      └── area()

            sector
```

Inside `area()`:

JavaScript can see:

```text
sector
city
country
```

because it can keep moving upward.

---

# How JavaScript Searches

Imagine JavaScript is trying to find:

```javascript
console.log(country);
```

inside `area()`.

Search:

```text
area()
```

Found?

```text
No
```

Move up:

```text
state()
```

Found?

```text
No
```

Move up:

```text
Global
```

Found?

```text
Yes
```

Return value.

This searching process is called:

# Scope Chain

---

# Scope Chain

The scope chain is simply:

```text
Current Scope
      ↑
Parent Scope
      ↑
Parent Scope
      ↑
Global Scope
```

Nothing more complicated than that.

---

# Block Scope

Now let's talk about `{}`.

Many developers think:

```text
Functions create scope
```

True.

But blocks can create scope too.

Example:

```javascript
{
    let age = 25;
}

console.log(age);
```

Output:

```javascript
ReferenceError
```

Why?

Because:

```text
Block Scope

age = 25
```

Once JavaScript leaves the block:

```javascript
{
}
```

the variable is gone.

---

# let And const Are Block Scoped

Example:

```javascript
if (true) {

    let name = "Rahul";
    const city = "Chandigarh";
}
```

Both variables live only inside that block.

---

# var Is Different

Example:

```javascript
if (true) {

    var age = 25;
}

console.log(age);
```

Output:

```javascript
25
```

Why?

Because `var` ignores block scope.

`var` only cares about functions.

---

Example:

```javascript
function test() {

    if (true) {

        var x = 10;
    }

    console.log(x);
}

test();
```

Output:

```javascript
10
```

Because `x` belongs to the entire function.

---

# The Golden Rule

Whenever I see:

```javascript
let
const
```

I think:

```text
Block Scoped
```

Whenever I see:

```javascript
var
```

I think:

```text
Function Scoped
```

---

# Scope Is Decided By Where Code Is Written

This is called:

# Lexical Scope

Don't get scared by the name.

It simply means:

```text
Scope is determined by where code is written.
```

Not:

```text
Where code is called.
```

---

Example:

```javascript
const name = "Global";

function outer() {

    const name = "Outer";

    function inner() {

        console.log(name);
    }

    return inner;
}

const fn = outer();

fn();
```

Output:

```javascript
Outer
```

Why?

Because `inner()` remembers where it was created.

It was created inside:

```javascript
outer()
```

So it remembers that scope forever.

This idea becomes extremely important when learning closures.

---

# Scope And Execution Context

When a function runs:

JavaScript creates:

```text
Function Execution Context
```

Inside it:

```text
Memory
+
Reference To Parent Scope
```

That parent reference is what allows JavaScript to search upward.

Without it, scope chains wouldn't exist.

---

# The Mental Model I Want Forever

Whenever JavaScript needs a variable:

```javascript
console.log(something);
```

I imagine:

```text
Do I have it?

YES → Use it

NO
 ↓

Ask Parent

YES → Use it

NO
 ↓

Ask Parent

YES → Use it

NO
 ↓

Reach Global

Still No?
 ↓

ReferenceError
```

That's literally how JavaScript thinks.

---

# The One Diagram I Must Never Forget

```text
Global Scope
│
├── globalVar
│
└── outer()
      │
      ├── outerVar
      │
      └── inner()
            │
            ├── innerVar
            │
            └── Search Path

               inner
                 ↑
               outer
                 ↑
               global
```

Variables are searched upward.

Never downward.

Always remember that.

---

# Final Understanding

If someone asks me:

> What is scope?

My answer:

> Scope is the set of rules JavaScript uses to determine where variables can be accessed and how they are found.

If someone asks:

> How does JavaScript find a variable?

My answer:

> JavaScript starts searching in the current scope. If it doesn't find the variable, it moves to the parent scope, then the parent's parent, and continues until it reaches the global scope.

If the variable still isn't found:

```javascript
ReferenceError
```

That's scope.

That's the scope chain.

And that's how JavaScript finds every variable I use.
