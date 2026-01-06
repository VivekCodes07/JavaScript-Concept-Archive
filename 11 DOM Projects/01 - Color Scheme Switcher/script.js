const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === "grey") {
      document.body.style.backgroundColor = "grey";
    } else if (event.target.id === "white") {
      document.body.style.backgroundColor = "white";
    } else if (event.target.id === "blue") {
      document.body.style.backgroundColor = "blue";
    } else if (event.target.id === "yellow") {
      document.body.style.backgroundColor = "yellow";
    }
  });
});
