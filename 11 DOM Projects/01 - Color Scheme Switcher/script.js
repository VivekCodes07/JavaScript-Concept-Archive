let buttons = document.querySelectorAll(".button");
console.log(buttons);
let body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (event.target.id === "grey") {
      body.style.backgroundColor = "grey";
      body.style.color = "black";
    } else if (event.target.id === "white") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = "blue";
      body.style.color = "white";
    } else {
      body.style.backgroundColor = "yellow";
      body.style.color = "black";
    }
  });
});
