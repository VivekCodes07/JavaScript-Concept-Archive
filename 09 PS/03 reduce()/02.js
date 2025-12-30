// Q2. Find the total marks of all students.

const students = [
  { name: "Raj", marks: 70 },
  { name: "Simran", marks: 80 },
  { name: "Kunal", marks: 90 },
];

const totalMarks = students.reduce((acc, n) => {
  return acc + n.marks;
}, 0);

console.log(totalMarks);
