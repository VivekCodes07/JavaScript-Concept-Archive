const div = document.createElement('div');
console.log(div);

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

div.setAttribute("title", "Creating title");
div.style.backgroundColor = 'orange';
div.style.padding = "12px";
// div.innerText = "Michael Jackson";
const addText = document.createTextNode("Michael Jackson");
div.appendChild(addText);

// Adding div to the document / webpage
document.body.appendChild(div);