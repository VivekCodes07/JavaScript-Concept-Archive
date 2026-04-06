/*
Block: 
    -> A region of code which is place within those parentheses of if, else, while, do while, try, catch.

So. what they are saying is, if you create a variable within these blocks, sometimes they are restricted within only that block and cannot be accessed outside. i.e., Block Scope
*/

// -------------------- LET CASE --------------------

let temperature = 30;

if (temperature > 25) {
  let coolingTemp = temperature - 25;
  console.log("Server room needs to be called by", coolingTemp);
} else {
  let heatingTemp = 25 - temperature;
  console.log("Server room needs to be heated by", heatingTemp)
}

console.log(`Global Scope: ${temperature}`);
console.log(`Accessing Bock Scope: ${coolingTemp}`); // ❌ Reference Error


/*
In the case of let:
    -> When declaerd within a block scope, let does not breach the block scope during Hoisting.
*/


// -------------------- VAR CASE --------------------

var temperatureVar = 30;

if (temperatureVar > 25) {
  var coolingTempVar = temperatureVar - 25;
  console.log("Server room needs to be called by", coolingTempVar);
} else {
  var heatingTempVar = 25 - temperatureVar;
  console.log("Server room needs to be heated by", heatingTempVar)
}

console.log(`Global Scope: ${temperatureVar}`);
console.log(`Accessing Block Scope: ${coolingTempVar}`); // ✅ Works


/*
But, in the case of var:
    -> When declared within a block scope, var breaches the block scope and is hoisted to the next available scope.
*/