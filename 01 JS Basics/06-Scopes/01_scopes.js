let globalVar = "I'm global"; // Global scope

function exampleFunction() {
  var functionVar = "I'm function-scoped"; // Function scope (var)
  let anotherFunctionVar = "I'm also function-scoped"; // Function scope (let)

  if (true) {
    let blockVar = "I'm block-scoped"; // Block scope
    console.log(blockVar); // Accessible here
  }

  // console.log(blockVar); // Error: blockVar is not defined (outside its block)
  console.log(functionVar); // Accessible here
  console.log(anotherFunctionVar); // Accessible here
}

exampleFunction();
console.log(globalVar); // Accessible here
// console.log(functionVar); // Error: functionVar is not defined (outside its function)


// -------Nested Scope--------

function one() {
  const username = "Vivek";

  function two() {
    const website = "YouTube";
    console.log(username);
  }
  // console.log(website);

  two();
}

one();

if (true) {
  let username = "John Cena";
  if (username === "John Cena") {
    const website = " YouTube";
    console.log(username + website);
  }
  // console.log(website) -> Inaccessible

}
// console.log(username); -> Inaccessible


// ************** Interesting *****************

console.log(addOne(5)); // Accessible before initialization

function addOne(num) {
  return num + 1;
}




console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization

// Function Expression:
const addTwo = function(num) {
  return num + 2;
}

