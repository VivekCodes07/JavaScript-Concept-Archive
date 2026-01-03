const div = document.createElement('div');
console.log(div);

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "King of Pop");
div.style.backgroundColor = 'orange';
div.style.padding = "12px";
// div.innerText = "Michael Jackson";
const addText = document.createTextNode("Michael Jackson");
div.appendChild(addText);

// Adding div to the document / webpage
document.body.appendChild(div);

// ------Example 2:-------
// Creating a heading:
const heading = document.createElement('h1');
console.log(heading);
heading.className = 'main-title';
heading.id = 'first-heading';

// Adding a text node to heading:
const textNode = document.createTextNode('Fuck being Average');

heading.append(textNode);

// It exist only in the memory upto now, to make it visible on the webpage we have to append it to the document.

document.body.append(heading);
