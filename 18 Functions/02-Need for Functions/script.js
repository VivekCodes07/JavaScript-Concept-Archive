function calculateGrade(studentMarks) {
  let percentage = (studentMarks / 100) * 100;
  let studentGrade;
  if (percentage >= 90) {
    studentGrade = "A";
  } else if (percentage >= 80) {
    studentGrade = "B";
  } else if (percentage >= 70) {
    studentGrade = "C";
  } else if (percentage >= 60) {
    studentGrade = "D";
  } else {
    studentGrade = "F";
  }
  console.log(`Grade: ${studentGrade}`);
}

calculateGrade(78);
calculateGrade(88);

