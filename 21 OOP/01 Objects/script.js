/*
The point is how can we take a real world object and convert it into a JavaScript Object..?

In JavaScript there are many ways to create objects:
    1. Object Literal Notation
    2. New Object Constructor
    3. Constructor Function
    4. Classes (ES6+)

But now please try to understand out of these 4 ways, 
    1. Object Literal Notation
    2. Classes

These two you must compulsarily know.

Because the entire internet in a way talks to each other using something called as JSON (JavaScript Object Notation), which is very similar to what you're going to see here.
*/

// Any which way let's move forward and try to understand, okay.

/*
Let us assume I have a Car object, this is a real world Car object.

Every object has two parts, it's state of properties and its behaviour. In simple English 'has' and 'does'.

So, let us assume this Car has name, cost, mileage those are some properties and ofcourse the list goes on and on, we're just listing three.

Similarly, in terms of behaviour, probably it is, it can start, accelarate, and stop.

Now, how do we convert this into a real world object..?
    -> So, please try to understand. I'm just trying to show you the syntax here, okay.
    -> The syntax of creating a JavaScript object using the 'Object Literal Notation' is something like this.

    -> It starts with Curly brackets and inside the Curly brackets, what you call as a JavaScript objects are key : value pairs separated by comma like this.

    {
        key: value,
        key: value, 
        key: value
    };

Now I will give you more clarity on this and you'll understand it in depth.

But let's go back to our Car object.

Now how do we convert this into a JavaScript object..?

*/

let car1 = {
  name: "BMW",
  cost: 75.6,
  mileage: 8.6,

  start: function () {
    console.log("Car is starting..");
  },

  stop: function () {
    console.log("Car is stopping..");
  },

  accelarate: function () {
    console.log("Car is accelarating..");
  },
};

// Note: Every single Object must and should have something as a reference or a name. You should assign it to a variable.

// Otherways, think about it. How are you going to access ths Car..?

// You should have some way to access it right and that is by making use of the variable that I'm going to assign, or the reference that I'm going to assign.

// In our case the Variable is 'car1'.

/*
************ Now let's understand all of these from Memory POV ***************

1. Now everybody knows when JavaScript code is executing, we have two memory segments that comes into play.
    i. Stack
    ii. Heap

2. Interesting enough, the 'stack' was always the only segment which we were focusing on and the 'heap' was empty.

The reason why the Heap was always empty is because Heap comes into play only when Object comes into play.

Otherwise, they don't even matter because Heap is a memory segment designed to create objects, manage objects.

3. Anyways, first thing that happens in any JavaScript program is a G.E.C gets created inside Call Stack.

4. The Global Execution Context always has two phases:
    i. Creation Phase
    ii. Execution Phase

5. Now first thing that happns is hoisting.
   Hoisting -> It is the process of finding declarations such as variable declarations, function declarations, and even object declarations.

6. So now, what you can see is, here you'll see this is my variable. It is both getting declared and initialized in the same line.
i.e., let car1 = {...}.

7. JavaScript will split it into two lines like this:
   let a;
   a = {...}

8. First thing that happens in creation phase is that all declarations are created.
  -> In this case, memory for a is created like this.

9. And next comes the execution phase and that is where all this has to be executed.

10. So now JavaScript sees the moment you put {...} curly brackets and semicolon it knows that programmer is trying to create an Object.

11. JavaScript knows Objects have to be always and always allocated in the Heap segment.

12. So, please try to understand the moment you put Bracket, semicolon, on the Heap, one brand new block of memory is created for you, inside which our Object is going to be forming.

13. In order for JavaScript to easily identify, recognize and find this block of memory.
  -> Every block of memmory in our computer is always associated with an address.
  -> The address will look something like a hexadecimal number, very complicated to read.

14. Next what happens..?
    -> Now JavaScript goes and sees there are key: value pairs.
    -> So what it does is, it will now go and create one variable called as name and assign the value "BMW" to it.
    -> Next it will create a variable called cost and assign the value 75.6 and simililarly it will create a variable mileage and assign the value 8.6

    Now, this my friend is the 'has' part the state or 'property' of the object.

    I'm Just making one imaginary partition here.

15. Now next it will see there are further key: value pairs but these are not variables, these are actually functions.
    -> So, now it knows there should be a function called a start: function(), stop: function(), acelarate: function().


  This my friend is a JavaScript Object. 

  An object is a real-world entity which is created within a computer.

  An Obect will always have two parts:
    1. has part (properties)
    2. does part (behaviours)


    ```
    MEMORY STRUCTURE

    STACK                          HEAP
    -----                          -----

    car1        ---------->        {
                                     name: "BMW",
                                     cost: 75.6,
                                     mileage: 8.6,

                                     start: function,
                                     stop: function,
                                     accelerate: function
                                   }

    + car1 stores ONLY the address (reference)
    + Actual object is in HEAP
```



16. Once this Object is created its address is taken and assigned to 'car1' variable.  
    -> Which means now 'car1' is the holder of the address of the Object.
    -> And hence from here, a reference is created to the Object.

  Why we call it as a reference..? 
    -> It is because it is a variable which is holding the address, tje location of a particular point in your memory.

  And this is so important because if this 'car1' was not there, there is no way for the programmer to access this memory because the programmer doesn't even know its location.

  That's why reference is important.


  So, this is how Objects are created.
*/

/*
--------------Accessing the Object-----------
*/

console.log(car1.name);
car1.start();
car1.accelarate();


/*
-----------------------------------------------------------
# FINAL SUMMARY
-----------------------------------------------------------

✔ Object = real-world representation
✔ Object Literal = {} syntax
✔ Objects stored in HEAP
✔ Variable stores reference in STACK
✔ Object = HAS + DOES
✔ Reference is required to access object
*/