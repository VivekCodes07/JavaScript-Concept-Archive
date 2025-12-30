// Q1. From the array below, filter students who scored more than 70.

const students = [
  { name: "Amit", marks: 65 },
  { name: "Neha", marks: 72 },
  { name: "Ravi", marks: 80 },
  { name: "Pooja", marks: 68 },
];

const requiredStudent = students.filter(function (s) {
  return s.marks > 70;
});

/*
const requiredStudent = students.filter((s) => {
    return s.marks > 70;
});

console.log(requiredStudent);
*/


// forEach will not work 
const moreThanRequired = students.forEach(function (s) {
  return s.marks > 70;
});

console.log(moreThanRequired); // undefined

/*
✅ When is forEach() used?
👉 forEach() is used when you want to do something with each item, not create a new array.

Think of it as:

“Go through every element and perform an action.”

If you don’t need a returned value → use forEach()

 */