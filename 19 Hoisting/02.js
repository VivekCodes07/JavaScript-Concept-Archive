/*
Difference between var and let keyword:

var:
    1. When hoisted, it is automatically initialized with undefined.
    2. There is no temporal dead zone.

let: 
    1. When hoisted, it is not initialized with undefined.
    2. There is a temporal dead zone.

*/
greet();
function greet() {
  console.log("Hello!");
}

/*
But in JavaScript imagine, I now take this call and put it above the declaration.

Now, people coming from another programming languages will immediately say, how can you call a function and then declare..? - error. 

But in Javascript, you can already predict if I were to execute -> NO Error

Reason: Hoisting
*/


/*
-------------Now let us understand from Memory POV-----------

1. First thing that happens in JavaScript is:
    -> Stack and Heap segment is created.

2. Inside Stack, G.E.C is created which has two phases:
    1. Memory Creation 
    2. Execution Phase

3. Now before the Memory Creation phase Hoisting happens.

    What is Hoisting?
    -> Identifying all the declarations and moving it to the top.

4. In this case, the function declaration is also a declaration.
   So now what JavaScript will do is, in its Hoisting process,
   -> it will take the function declaration and moves it to the top

5. Now when it moves it on top, tell me is the call first or declaration first..?
    Ans. -> Declaration
    That is why it works.

6. Now it will take all the declaration and put it inside creation phase, which means greet() function declaration comes in the creation phase.

7. What is remaining is this "call()", this line is taken and put inside the execution phase.

8. Now in the execution phase, when I call greet() on stack one region is created called as the Execution Context, which is further again divided into two parts:
    1. Creation Phase
    2. Execution Phase

9. In Creation phase, it will now go inside this function and see whether there is any Hoisting required.

There is no variable declaration, nothing 
    -> So, no Hoisting is required

10. This printing line "console.log("Hello");" is taken, and put inside the Execution Phase.

11. Now when the Executuiion Phase starts, there's only one line console.log where I'm printing Hello!, gets printed, that's it.

12. Once that is printed, there is no more statements inside the greet() function it's Execution Context is removed.

13. Control comes back to the G.E.C, is there any more lines to execute..? No 
    so, even the G.E.C gets removes.
    Stack becomes empty, program stops.
*/