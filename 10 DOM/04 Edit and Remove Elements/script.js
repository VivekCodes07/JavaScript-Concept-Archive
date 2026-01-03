function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}

addLanguage("Python");
addLanguage("TypeScript");

// Optimized Method

function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}

addOptiLanguage("Golang");


// Edit
// Example 1:
const secondLang = document.querySelector("li:nth-child(2)");
console.log(secondLang);
secondLang.innerText = "John Cena";

const newli = document.createElement('li');
newli.textContent = "Mojito";
secondLang.replaceWith(newli);

// Example 2:

const firstLang = document.querySelector("li:first-child");
console.log(firstLang);

// changing values

firstLang.outerHTML = '<li>TypeScript</li>';

// Remove
const lastLang = document.querySelector('li:last-child');
lastLang.remove();
