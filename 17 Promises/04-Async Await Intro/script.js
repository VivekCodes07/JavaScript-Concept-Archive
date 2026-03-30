function exmp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task completed");
      reject("Failed");
    }, 3000);
  });
}

/*
exmp()
  .then(() => {
    console.log("Promise fulfilled");
  })
  .catch(() => {
    console.log("Promise failure");
  });
*/

async function run() {
  try
  {
    await exmp();
    console.log("Promise fulfilled");
  }
  catch(error)
  {
    console.log("Promise failed");
  }
}

run();

/*
In this case you're telling, Hey! JavaScript run is a function inside which asynchronous code is executing, so you may have to wait.
i.e., Async/Await
*/