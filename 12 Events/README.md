# JavaScript Events — The Way I Want To Understand Them Forever

> If the DOM is the body of a webpage, then Events are the nervous system.
>
> Without events, a website is just a picture.
>
> With events, a website becomes interactive.

---

# Before We Start

When I first learned events, I saw code like:

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

Everyone taught:

> "This runs when the button is clicked."

Which is true.

But it doesn't answer:

* How does JavaScript know a click happened?
* What is an event?
* Who creates events?
* How does the browser communicate with JavaScript?
* Why does `addEventListener()` work?

This README answers those questions.

My goal is:

> To understand events so deeply that event handling feels obvious.

---

# Let's Start With A Website Without Events

Imagine this webpage:

```html
<button>Buy Now</button>
```

Looks nice.

But what happens when I click it?

Nothing.

Why?

Because the browser knows a click happened.

But JavaScript doesn't know what to do with it.

The browser is basically saying:

```text
User clicked the button.

Okay...

Now what?
```

No instructions exist.

So nothing happens.

---

# What Is An Event?

An event is:

> Something that happens in the browser.

Think:

```text
User Clicks

User Types

User Scrolls

User Submits Form

Page Loads

Mouse Moves

Key Pressed
```

All of these are events.

---

# Real Life Analogy

Imagine you're sitting in your room.

Suddenly:

```text
Doorbell Rings
```

That's an event.

The event itself isn't the important part.

The important part is:

```text
What should happen after it?
```

Maybe:

```text
Doorbell Rings
     ↓
Open Door
```

Or:

```text
Doorbell Rings
     ↓
Ignore It
```

Events are simply signals.

Something happened.

Now decide what to do.

---

# The Browser Is Constantly Watching

Think of the browser like a security guard.

It constantly watches:

```text
Mouse

Keyboard

Touch Screen

Forms

Network

Window
```

The browser is always listening.

Even when your JavaScript is doing nothing.

---

# The Browser Detects Events

Example:

```html
<button>Click Me</button>
```

User clicks.

Browser notices:

```text
CLICK DETECTED
```

Browser creates an event.

Think:

```text
User Click
      ↓

Browser Creates Event Object
      ↓

Browser Looks For Listeners
      ↓

Runs Matching Code
```

This flow explains almost everything.

---

# The Event Object

Whenever an event occurs:

The browser creates an object.

Example:

```javascript
{
    type: "click",
    target: button,
    timestamp: ...
}
```

This object contains information about the event.

Think:

```text
Event
=
Information
About What Happened
```

---

# The Most Important Mental Model

When something happens:

```text
User Action
      ↓

Browser Detects It
      ↓

Browser Creates Event Object
      ↓

Browser Runs Event Listener
      ↓

JavaScript Executes
```

This is the entire event system.

---

# Event Listener

An Event Listener is:

> A function waiting for an event.

Think:

```text
Listener
=
Waiting
```

Like a receptionist waiting for phone calls.

---

# addEventListener()

Example:

```javascript
button.addEventListener(
    "click",
    () => {
        console.log("Clicked");
    }
);
```

Think:

```text
Hey Browser,

when a click happens
on this button,

run this function.
```

That's literally what this code means.

---

# Breaking It Down

```javascript
button.addEventListener(
```

Means:

```text
Attach a listener
```

---

```javascript
"click"
```

Means:

```text
Wait for a click event
```

---

```javascript
() => {}
```

Means:

```text
Run this code
when the click happens
```

---

# Visualizing The Flow

```text
User Clicks Button
         ↓

Browser Detects Click
         ↓

Event Object Created
         ↓

Listener Found
         ↓

Callback Function Runs
         ↓

JavaScript Executes
```

---

# The Callback Function

Example:

```javascript
button.addEventListener(
    "click",
    function() {
        console.log("Clicked");
    }
);
```

This function is called a:

# Callback Function

Why?

Because the browser calls it back later.

Think:

```text
JavaScript:

Browser,
call me when
the click happens.
```

The browser remembers the function.

When the click occurs:

The browser executes it.

---

# The Event Object In Practice

Example:

```javascript
button.addEventListener(
    "click",
    (event) => {
        console.log(event);
    }
);
```

Every event listener receives an event object.

Think:

```text
Browser:

Here's information
about the click.
```

---

# event.target

One of the most important properties.

Example:

```javascript
button.addEventListener(
    "click",
    (event) => {

        console.log(event.target);

    }
);
```

Think:

```text
Which element
triggered the event?
```

---

Example:

```html
<button>Buy</button>
```

Click button.

Output:

```text
<button>Buy</button>
```

---

# event.type

Example:

```javascript
console.log(event.type);
```

Output:

```text
click
```

Useful when handling multiple event types.

---

# Common Events

These are the ones I use most.

---

## Click

```javascript
"click"
```

Triggered when user clicks.

---

## Double Click

```javascript
"dblclick"
```

Triggered when user double-clicks.

---

## Input

```javascript
"input"
```

Triggered whenever input value changes.

---

Example:

```javascript
input.addEventListener(
    "input",
    (e) => {
        console.log(e.target.value);
    }
);
```

Runs every time user types.

---

## Submit

```javascript
"submit"
```

Triggered when a form is submitted.

---

## Keydown

```javascript
"keydown"
```

Triggered when a key is pressed.

---

Example:

```javascript
document.addEventListener(
    "keydown",
    (e) => {
        console.log(e.key);
    }
);
```

---

## Mouseover

```javascript
"mouseover"
```

Triggered when mouse enters an element.

---

## Mouseout

```javascript
"mouseout"
```

Triggered when mouse leaves an element.

---

# Why Forms Refresh The Page

Example:

```html
<form>

   <input>

   <button>Submit</button>

</form>
```

Click submit.

Page refreshes.

Why?

Because the browser has default behavior.

Think:

```text
Browser Default Action

Submit Form
      ↓

Reload Page
```

---

# preventDefault()

Sometimes we don't want default behavior.

Example:

```javascript
form.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

    }
);
```

Think:

```text
Browser,

don't do
your default action.
```

---

# Event Bubbling

This is where many developers get confused.

Let's make it simple.

---

Example:

```html
<div>

    <button>Click</button>

</div>
```

DOM Tree:

```text
div
│
└── button
```

Click button.

Where did the click happen?

```text
button
```

Correct.

But the event doesn't stop there.

The event travels upward.

---

Visual:

```text
button
   ↑
div
   ↑
body
   ↑
html
   ↑
document
```

This is called:

# Event Bubbling

---

# Real Life Analogy

Imagine:

```text
Child Shouts
     ↑

Parent Hears
     ↑

Grandparent Hears
```

The event moves upward through ancestors.

That's bubbling.

---

# Bubbling Example

```javascript
button.addEventListener(
    "click",
    () => {
        console.log("Button");
    }
);

div.addEventListener(
    "click",
    () => {
        console.log("Div");
    }
);
```

Click button.

Output:

```text
Button

Div
```

Why?

Because the event bubbled upward.

---

# stopPropagation()

Sometimes we want:

```text
Button Only
```

and NOT:

```text
Parent
Grandparent
```

Example:

```javascript
button.addEventListener(
    "click",
    (e) => {

        e.stopPropagation();

    }
);
```

Think:

```text
Stop the event
from moving upward.
```

---

# Event Delegation

This is one of the most useful concepts.

Suppose:

```html
<ul>

   <li>One</li>

   <li>Two</li>

   <li>Three</li>

</ul>
```

Instead of:

```javascript
li1.addEventListener(...)
li2.addEventListener(...)
li3.addEventListener(...)
```

Use one listener:

```javascript
ul.addEventListener(
    "click",
    (e) => {

        console.log(e.target);

    }
);
```

Why does this work?

Because of bubbling.

The click reaches the parent.

The parent can inspect:

```javascript
e.target
```

to see what was clicked.

---

# Why Event Delegation Is Powerful

Without delegation:

```text
100 Elements
=
100 Listeners
```

With delegation:

```text
100 Elements
=
1 Listener
```

More efficient.

Cleaner code.

Used heavily in real-world applications.

---

# The Browser's Role

Remember:

JavaScript does NOT detect clicks.

The browser does.

The flow is:

```text
User Clicks
      ↓

Browser Detects Click
      ↓

Browser Creates Event Object
      ↓

Browser Finds Listener
      ↓

Browser Executes Callback
      ↓

JavaScript Runs
```

This is one of the most important diagrams in frontend development.

---

# The Complete Event Lifecycle

Whenever a user clicks:

```text
1. User Clicks

2. Browser Detects Click

3. Event Object Created

4. Event Starts At Target

5. Event Bubbles Up

6. Browser Finds Listeners

7. Matching Callbacks Run

8. JavaScript Executes

9. Browser Continues
```

---

# The Ultimate Mental Model

Whenever I see:

```javascript
element.addEventListener(
    "click",
    callback
);
```

I translate it into:

```text
Browser,

please watch this element.

If a click happens,

execute this function
and give me information
about the event.
```

That's all.

---

# The One Diagram I Must Never Forget

```text
User Action
      │
      ▼

Browser Detects Event
      │
      ▼

Creates Event Object
      │
      ▼

Finds Event Listener
      │
      ▼

Runs Callback Function
      │
      ▼

JavaScript Executes
      │
      ▼

Page Updates
```

---

# Final Understanding

If someone asks:

> What is an event?

My answer:

> An event is something that happens in the browser, such as a click, key press, scroll, form submission, or mouse movement.

If someone asks:

> What is an event listener?

My answer:

> An event listener is a function waiting for a specific event to occur.

If someone asks:

> What does addEventListener() do?

My answer:

> It tells the browser to watch for a specific event on an element and execute a callback function when that event occurs.

If someone asks:

> What is event bubbling?

My answer:

> Event bubbling is the process where an event starts at the target element and then travels upward through its ancestors.

If I remember only one thing from this entire README, let it be this:

```text
User Does Something
        ↓

Browser Detects It
        ↓

Browser Creates Event
        ↓

Event Listener Runs
        ↓

JavaScript Responds
```

Everything in JavaScript events is built on top of that cycle.
