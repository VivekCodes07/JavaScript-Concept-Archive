/*
👉 reduce() gives a single value
👉 Sum, average, total, maximum, etc.
*/

const nums = [1, 2, 3, 4, 5];

const total = nums.reduce(function (acc, currentVal) {
  console.log(`Accumulator Value: ${acc}, Current Value: ${currentVal}`);
  return acc + currentVal;
}, 0);

console.log(total);

// reduce() using arrow function

const myTotal = nums.reduce((acc, currentVal) => acc + currentVal, 0);

console.log(myTotal);

const shoppingCart = [
  {
    courseName: "JavaScript Bootcamp",
    price: 2999,
  },
  {
    courseName: "C++ Bootcamp",
    price: 999,
  },
  {
    courseName: "Java Bootcamp",
    price: 2999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`Price to pay: ${totalPrice}`);
