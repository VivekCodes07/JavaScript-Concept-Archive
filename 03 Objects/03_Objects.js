/* -----------------------------------------
   OBJECT DESTRUCTURING
------------------------------------------ */

// A normal JavaScript object
const course = {
  courseName: "JavaScript Bootcamp",
  price: 999,
  courseInstructor: "Hitesh",
};

// Without destructuring (old way)
// We access properties like this:
// console.log(course.courseInstructor);

// With destructuring (new & easier way)
// We pull out the key `courseInstructor` and store it in a new variable `instructor`

// console.log(courseInstructor);
const { courseInstructor: instructor } = course;

// This prints "Hitesh"
console.log(instructor);

/* -----------------------------------------
   WHAT IS OBJECT DESTRUCTURING?
------------------------------------------ */

/*
Object destructuring allows us to extract values from objects
and store them into variables using a cleaner and shorter syntax.

Example:
const { keyName } = objectName;

You can also rename the variable:
const { keyName: newVariableName } = objectName;
*/

/* -----------------------------------------
   JSON TALK
------------------------------------------ */

/*
JSON = JavaScript Object Notation.
It is used to send data between computer systems.
It looks like JavaScript objects, but:
 - keys MUST be inside quotes " "
 - there are NO trailing commas
 - it's only data (no functions)
*/

// This is valid JSON:
const jsonData = `
{
    "name": "Vivek",
    "courseName": "JS Bootcamp",
    "price": 999
}
`;

// In real world, JSON comes from an API
// We convert JSON string → JavaScript object using JSON.parse()
const jsObject = JSON.parse(jsonData);

console.log(jsObject.name); // Vivek
console.log(jsObject.courseName); // JS Bootcamp
console.log(jsObject.price); // 999

/* -----------------------------------------
   JSON ARRAY EXAMPLE
------------------------------------------ */

// JSON can contain arrays of objects
const students = [
  { name: "Vivek", age: 20 },
  { name: "Rahul", age: 24 },
  { name: "Sneha", age: 21 },
];

// Accessing values
console.log(students[0].name); // Vivek
console.log(students[1].age); // 24
