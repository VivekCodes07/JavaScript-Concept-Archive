/*
  # Every Single Promise is going to have a Callback function, also known as executor function.

  # It is that executor fn which is going to try to fulfill the Promise, and in the process of trying to fulfill the Promise, 
  It'll either Succeed or it'll Fail.

  # Promise will always maintain a State which can have 3 possible values:
    1. Pending 
    2. Fulfilled
    3. Unfulfilled

  # Inside this executor fn, I have tried to fulfill my Promise there can only be two things which happend when I try to fulfill my Promise
  i.e., Either it becomes a success or otherwise it's a failure.

  # Then how do we understand whether it is successful or failure ..?
   
    -> Simple, by looking at the State:
       1. If State -> Fulfilled, then it's successful
       2. If State -> Unfulfilled, then it's a failure

  
  # Now how do we change the state?

  1. To change it to the Fulfilled state -> It has given us a function resolve()

  2. To change it to the Unfulfilled state -> It has given has a function reject()

*/

let prm = new Promise((resolve, reject) => {
  console.log("Executor function..");
  resolve({ id: 101, name: "Vivek" });
});

prm
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });


  /*
    ---------Summary--------

    So, basically all you hv understood is:

    1. When you create a Promise an Object is created. 

    2. Inside that Object one function will execute called as Executor function.

    3. When the executor function executes, depending upon whether it as a Success or a Failure you have given two built-in functions called as resolve() and reject() using which you can change the State of the Promise to "fulfill" or "unfulfilled".
  
  */ 

  /*
    -----------Now What You Need To Understand Is:---------------
    
   1. Let us assume the Promise was successful, some "data" was generated.

   2. That "data" now should come outside the Promise - So that You've access to it. 


   # How Do You Do That..?
  -> Very simple, that is using resolve() and reject().

  -> Whatever you pass inside resolve() is the data which gets accessed outside the Promise.
     Similarly, whatever you give inside reject() is the data which gets accessed outside the Promise.

  ## Now What Happens After That..?
  
  # Case 1:
  1. Your executor fn gets executed, let us assume it was Success.
  2. What will you call..? -> resolve()
  3. Now if you call resolve() and pass the "data" inside resolve() for Success.
  4. resolve() will take that "data" automatically give it to another built-in function, available inside every Promise called as the "then() function".
  
  # Case 2:
  1. If the Promise was not fullfilled
  2. You would call reject() and then it passes whatever the err. msg you give it to "catch() function".
  */