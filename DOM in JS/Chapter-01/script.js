/*

4 Phases of DOM Manipulation:

1. DOM ✔️
2. Selection of HTML Elements ✔️
3. How to change or manipulate HTML ✔️
4. How to change the CSS ✔️
5. Event Listeners ✔️

*/

const heading = document.querySelector("h1");
console.log(heading);
// heading.innerHTML = "Stranger Things";

let paragraph = document.querySelector("p");

paragraph.innerHTML = "John Cena is Great";

paragraph.style.textAlign = 'center';

// Event listeners
let h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
    h1.style.color = "black";
    h1.style.backgroundColor = "green";
})


let box = document.getElementById('box');

let button = document.getElementById('btn');

button.addEventListener('click', () => {
    box.style.backgroundColor = 'yellow';
})

let offButton = document.getElementById('offbtn');

offButton.addEventListener('click', function () {
    box.style.backgroundColor = 'white';
})

