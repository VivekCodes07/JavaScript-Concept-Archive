/*
👉 Best for: Running a function on each array element
Cannot be used on objects.
It works only on arrays.
*/

/*
Syntax:
array.forEach(function(value, index, array) {
    // use value
});

*/

// ["", "", "", ""]
// [{}, {}, {}, {}]


const coding = ["JS", "Python", "C++", "Java", "C#"];

console.log("for...Each using regular function:");

coding.forEach(function (lang) {
  console.log(lang);
});


const heroes = ["Batman", "Superman", "Hulk", "Ironman", "Drake"];

console.log("for...Each using arrow function");

heroes.forEach((hero, index, array) => {
  console.log(hero, index, array);
});

// passing reference of a function to for...Each

function printMe(item) {
    console.log(item);
}

const colors = ["red", "green", "blue"];

colors.forEach(printMe);

// accessing properties of an object inside an array
const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "JS"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    },
    {
        languageName: "Python",
        languageFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFile);
})