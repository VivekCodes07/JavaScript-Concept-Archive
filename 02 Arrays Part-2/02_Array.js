const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Batman", "Flash"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

/* Concatenation: */
// const heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);


// spread Operator:
const heroes = [...marvelHeroes, ...dcHeroes];
console.log(heroes);

// flat method
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const usable_Array = anotherArray.flat(Infinity);

console.log("Usable array: ", usable_Array);

console.log(Array.isArray(["Hitesh", "Vivek"])); // true

const str = "world";
const charArray = Array.from(str); 
// charArray is: ['w', 'o', 'r', 'l', 'd']

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));