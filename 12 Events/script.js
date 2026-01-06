// Greeting
let button1 = document.querySelector("#btn1");

button1.onclick = function () {
  alert("Hello World!");
};

// Changining Background
let button2 = document.querySelector("#btn2");

button2.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${random}, ${random}, ${random})`;
});

// Show date on page

let button3 = document.querySelector("#btn3");
let para = document.querySelector("#para");

button3.addEventListener("click", function () {
  let now = new Date();
  para.textContent = now.toLocaleString();
});

// Event Object