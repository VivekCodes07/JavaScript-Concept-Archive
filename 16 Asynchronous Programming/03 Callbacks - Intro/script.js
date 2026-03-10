// Understanding Callbacks

/*
function myFunc(callback) {
  console.log("Function is doing task 1...");
  callback();
}

myFunc(() => {
  console.log("Function is doing task 2");
});
*/
function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

/*
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
*/
getTwoNumbersAndAdd(
  4,
  5,
  function (num1, num2) {
    console.log(`Sum: ${num1 + num2}`);
  },
  function () {
    console.log("Invalid DataType!");
  },
);
