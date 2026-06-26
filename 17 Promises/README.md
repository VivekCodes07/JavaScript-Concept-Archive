# JavaScript Promises — The Way I Want To Understand Them Forever

> Future Me,
>
> If you're reading this after months of not touching JavaScript, don't start by remembering `.then()`.
>
> Start by remembering **why Promises exist**.
>
> Once that clicks, everything else becomes easy.

---

# Before Promises Existed

Imagine JavaScript had only synchronous code.

```javascript
const user = getUser();

console.log(user);
```

Life is simple.

JavaScript runs:

```text
Line 1
 ↓
Line 2
 ↓
Line 3
```

One after another.

No surprises.

---

But then a problem appeared.

---

# The Problem

Imagine:

```javascript
const user = fetchUserFromServer();
```

Question:

```text
How long will the server take?
```

Maybe:

```text
10ms
```

Maybe:

```text
500ms
```

Maybe:

```text
5 seconds
```

Maybe:

```text
Never
```

JavaScript doesn't know.

---

Now remember:

# JavaScript Is Single Threaded

Meaning:

```text
One Call Stack

One Task At A Time
```

If JavaScript waited:

```javascript
const user = fetchUserFromServer();
```

the entire application would freeze.

---

Think:

```text
User Can't Click

User Can't Scroll

User Can't Type

Website Feels Dead
```

Not acceptable.

---

# The Birth Of Asynchronous Programming

Instead of waiting:

JavaScript says:

```text
I'll continue running.

Tell me when the data arrives.
```

That sentence is the foundation of async JavaScript.

---

# The First Solution — Callbacks

Example:

```javascript
fetchUser(function(user) {

    console.log(user);

});
```

Meaning:

```text
Don't give me the data now.

When it arrives,
run this function.
```

This worked.

For a while.

---

# Then Applications Got Bigger

Imagine:

```javascript
getUser(function(user) {

    getPosts(user.id, function(posts) {

        getComments(posts[0].id, function(comments) {

            getLikes(comments[0].id, function(likes) {

                console.log(likes);

            });

        });

    });

});
```

Looking at this hurts.

---

This became known as:

# Callback Hell

Also called:

```text
Pyramid Of Doom
```

Because code keeps moving right.

---

Problems:

```text
Hard To Read

Hard To Debug

Hard To Handle Errors

Hard To Maintain
```

Developers needed something better.

---

# The Question Promises Solve

Imagine:

```javascript
const user = fetchUser();
```

Question:

```text
Do we have the user yet?
```

No.

---

Question:

```text
Will we eventually have the user?
```

Yes.

---

So we need a way to represent:

```text
A Value
That Doesn't Exist Yet
But Will Exist Later
```

That representation is:

# A Promise

---

# The Definition I Want To Remember

A Promise is:

> An object that represents the eventual result of an asynchronous operation.

Simpler:

> A Promise is a placeholder for a future value.

---

# The Most Important Sentence In This README

```text
A Promise Is NOT The Data.

A Promise Is A Container
For Data That Will Arrive Later.
```

Read that again.

Most Promise confusion comes from forgetting this.

---

# Real Life Analogy

Imagine ordering food online.

Immediately after ordering:

```text
Food Not Here
```

Correct.

---

But you receive:

```text
Order Confirmation
```

That confirmation is the Promise.

---

Notice:

```text
Promise ≠ Food
```

The Promise simply tells you:

```text
Something Is Happening
```

Eventually:

```text
Food Arrives
```

or:

```text
Order Fails
```

---

# Promise States

Every Promise has a state.

Always.

---

Initially:

```text
Pending
```

Meaning:

```text
Still Waiting
```

---

Then eventually:

```text
Fulfilled
```

Meaning:

```text
Success
```

---

Or:

```text
Rejected
```

Meaning:

```text
Failure
```

---

Visual:

```text
           Pending

               │

      ┌────────┴────────┐

      ▼                 ▼

 Fulfilled          Rejected
```

---

# State Transitions

A Promise starts here:

```text
Pending
```

---

Then:

```text
Pending
   ↓
Fulfilled
```

OR

```text
Pending
   ↓
Rejected
```

---

Never:

```text
Fulfilled
   ↓
Rejected
```

Never.

---

Never:

```text
Rejected
   ↓
Fulfilled
```

Never.

---

# A Promise Can Settle Only Once

Think:

```text
Food Delivered
```

Can the same order become:

```text
Pending Again?
```

No.

Finished means finished.

---

Promises behave the same way.

---

# Creating A Promise

Example:

```javascript
const promise =
new Promise((resolve, reject) => {

});
```

At first this looks scary.

Let's decode it.

---

# Think Of This Instead

```javascript
new Promise((success, failure) => {

});
```

That's basically what it means.

---

# resolve()

Means:

```text
Operation Succeeded
```

Example:

```javascript
resolve("User Found");
```

State:

```text
Pending
   ↓
Fulfilled
```

---

# reject()

Means:

```text
Operation Failed
```

Example:

```javascript
reject("Server Error");
```

State:

```text
Pending
   ↓
Rejected
```

---

# Using The Promise

Imagine:

```javascript
const promise =
fetch("/users");
```

Question:

```text
How Do I Access
The Future Value?
```

Answer:

```text
then()
```

---

# then()

Example:

```javascript
promise.then((data) => {

    console.log(data);

});
```

Mental translation:

```text
When The Promise Succeeds

Run This Function
```

---

This is how I want to read it:

```javascript
promise.then(...)
```

↓

```text
Promise,

when you're done,

give me the result.
```

---

# catch()

What if something fails?

Example:

```javascript
promise.catch((error) => {

    console.log(error);

});
```

Mental translation:

```text
If Something Goes Wrong

Run This Function
```

---

# Visual Model

```text
Promise

     │

     ├── Success
     │      ↓
     │    then()
     │
     │
     └── Failure
            ↓
         catch()
```

---

# The Biggest Beginner Mistake

Many developers think:

```javascript
const users =
fetch("/users");
```

means:

```text
users = actual data
```

Wrong.

---

Actual reality:

```javascript
const users =
fetch("/users");
```

means:

```text
users = Promise
```

Not data.

Promise.

---

Visual:

```javascript
console.log(
    fetch("/users")
);
```

Output:

```text
Promise { <pending> }
```

That's why this fails:

```javascript
const users =
fetch("/users");

console.log(users.name);
```

The data isn't available yet.

---

# Promise Chaining

One of the best things Promises introduced.

Example:

```javascript
fetch("/users")

.then(response => {
    return response.json();
})

.then(data => {
    console.log(data);
});
```

Think:

```text
Step 1

Get Response

      ↓

Step 2

Convert To JSON

      ↓

Step 3

Use Data
```

Each step waits for the previous step.

---

# The Hidden Magic

Every `.then()` returns:

```text
Another Promise
```

This is the secret behind chaining.

---

Visual:

```text
Promise
   ↓

then()

   ↓

Promise
   ↓

then()

   ↓

Promise
   ↓

then()
```

A chain of future values.

---

# Error Propagation

This is where Promises become beautiful.

---

Example:

```javascript
fetch("/users")

.then(response => response.json())

.then(data => {

    throw new Error("Oops");

})

.catch(error => {

    console.log(error);

});
```

---

Question:

```text
Where Did The Error Go?
```

Answer:

```text
Downward
```

Until:

```text
catch()
```

finds it.

---

Think:

```text
Errors Flow Down The Chain
Until A Catch Block Stops Them
```

---

# Promises And The Event Loop

Now we reach the advanced part.

---

Suppose:

```javascript
Promise.resolve()

.then(() => {
    console.log("Promise");
});
```

Where does this callback go?

---

Not here:

```text
Callback Queue
```

---

Instead:

```text
Microtask Queue
```

---

# Microtask Queue

Think:

```text
VIP Queue
```

Higher priority than normal callbacks.

---

Priority:

```text
Microtasks

      ↑

Callbacks
```

---

# The Famous Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
});

Promise.resolve()
.then(() => {
    console.log("Promise");
});

console.log("End");
```

Output:

```text
Start
End
Promise
Timeout
```

---

Why?

Because:

```text
Promise Callback
=
Microtask
```

and

```text
setTimeout Callback
=
Normal Callback
```

Microtasks always run first.

---

# Why Async/Await Feels Easier

Developers loved Promises.

But long chains became difficult.

---

Instead of:

```javascript
fetchUsers()
.then(users => getPosts(users))
.then(posts => getComments(posts))
.then(comments => {

});
```

we can write:

```javascript
const users =
await fetchUsers();

const posts =
await getPosts(users);

const comments =
await getComments(posts);
```

Much cleaner.

---

But remember:

```text
Async/Await
Is Still Promises
```

Always.

---

# The Complete Promise Lifecycle

Whenever I write:

```javascript
fetch("/users");
```

I should visualize:

```text
Network Request Starts

         ↓

Promise Created

         ↓

Pending

         ↓

Success Or Failure

         ↓

Fulfilled / Rejected

         ↓

Microtask Queue

         ↓

then() / catch()

         ↓

Callback Executes
```

---

# The One Diagram I Must Never Forget

```text
Async Operation
       │
       ▼

     Promise

       │

    Pending

       │

 ┌─────┴─────┐

 ▼           ▼

Success    Failure

 ▼           ▼

then()    catch()

       │

       ▼

Microtask Queue

       │

       ▼

Event Loop

       │

       ▼

Call Stack
```

---

# Final Understanding

If someone asks:

> What is a Promise?

My answer:

> A Promise is an object that represents a value that may become available in the future.

If someone asks:

> Why were Promises created?

My answer:

> To manage asynchronous operations in a predictable and readable way while avoiding callback hell.

If someone asks:

> What is the most important thing to remember about Promises?

My answer:

```text
A Promise Is Not The Future Value.

A Promise Is The Placeholder
For The Future Value.
```

Everything else grows from that idea.
