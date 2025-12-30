const coding = ["JavaScript", "Python", "C++", "Golang"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);

// filter:
// 👉 filter() removes elements based on a condition
// 👉 Array may become smaller

const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

const newNums = myNums.filter((num) => {
  return num > 2;
});

console.log(newNums); // [3, 4, 5, 6, 7, 8]

// Doing the same thing using forEach
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((item) => {
  if (item > 2) {
    console.log(item);
  }
});

// We have a list of students.
// Only students with marks >= 75 should pass.

const students = [
  { name: "Vivek", marks: 82, grade: "A" },
  { name: "Rahul", marks: 68, grade: "C" },
  { name: "Suresh", marks: 75, grade: "B" },
  { name: "Meena", marks: 76, grade: "C" },
  { name: "Anita", marks: 88, grade: "A" }
];


const passedStudents = students.filter((student) => {
  return student.marks >= 75;
});
console.log(passedStudents);

// Give a list of students who has grade 'C'
console.log("--------Students who scored Grade C: -------");
const gradeC = students.filter((s) => {
  return s.grade === "C";
});

console.log(gradeC);

// Using filter() with AND (&&)
console.log("---------A student with marks >= 70 and Have grade not equal to C--------");
const eligibleStudents = students.filter((student) => {
  return student.marks >= 70 && student.grade !== "C";
});

console.log(eligibleStudents);



/*
❓ But WHY?
Because forEach() always returns undefined
👉 No matter what you return inside it.

🧠 Important Rule (MEMORIZE THIS)
🔴 forEach()
Used to do something with each element

❌ Does NOT create a new array

❌ Ignores return

🟢 filter()
Used to select elements

✅ Returns a new array

✅ Uses return true / false



*/