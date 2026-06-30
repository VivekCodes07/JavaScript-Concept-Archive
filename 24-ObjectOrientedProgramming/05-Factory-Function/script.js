let student = {
  name: "Vivek",
  age: 20,
  skills: "Backend Development",
  details: function () {
    console.log(`Hello my name is ${this.name}. I'm a backend developer.`);
  },
};

// Factory Funtion
function Student(name, age, skills) {
  return {
    name: name,
    age: age,
    skills: skills,
    details: function () {
      console.log(`Hello my name is ${this.name}. I'm a ${this.skills} developer.`);
    },
  };
}

let s1 = Student("Vivek", 20, "ExpressJS");
let s2 = Student("Abhinav", 20, "ReactJS");
console.log(s1);
s1.details()
console.log(s2);
s2.details()


/*
------------Factory Function-------------
    - A function that returns a new object.
    - Great for creating multiple similar objects without classes.

    ** Doesn't involve prototypes by default (unless you manually set them)

*/