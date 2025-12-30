// Q1. From this array, return only the names.

const employees = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];

const names = employees.map((emp) => {
    return emp.name;
});

console.log(names); // ['John', 'Jane', 'Bob']