function addLanguage(langName) {
    const li = document.createElement('li'); // Created a list element
    li.innerHTML = `${langName}`; // Passing text to it 
    document.querySelector('.language').appendChild(li); // Appending the li element into the ul
}

addLanguage("Python");
addLanguage("TypeScript");

// Optimized Method

function addOptiLanguage(langName) {
    const li = document.createElement('li'); // Create element
    li.appendChild(document.createTextNode(langName)); // Adding text to it 
    document.querySelector('.language').appendChild(li); // Appending element to the ul
}

addOptiLanguage("Golang");


// Edit

/* Three steps to edit any element:
   1. Select the element you want to edit
   2. Store that in a variable
   3. Edit the part you want to    
*/

// Example 1: (In this We first edit the 2nd li (secondLang) and then replace it by creating a 'newli')
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

/* Three steps to remove any element:
   1. Select the element you want to remove
   2. Store that in a variable
   3. Remove the part you want to    
*/

const lastLang = document.querySelector('li:last-child');
lastLang.remove();
