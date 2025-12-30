// Q6. Add 10 bonus marks to each student.

const students = [
  { name: "Asha", marks: 60 },
  { name: "Ramesh", marks: 70 }
];

const newMarks = students.map((student) => {
     student.marks += 10;
     return student;
});

console.log(newMarks);