let para = document.querySelector("p");
let buttons = document.querySelectorAll("button");
let result = document.querySelector("#result");
let playerMove = "";
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    playerMove = event.target.value;
    pickTheFlip();
    if (playerMove === flip) {
      result.textContent = "You Won 🏆";
    } else {
      result.textContent = "You Lost 😭👎🏾";
    }

    para.textContent = `Flip was: ${flip}, You Chose: ${playerMove}`
  });
});

let flip = "";
function pickTheFlip() {
  if (Math.random() < 0.5) {
    flip = "Heads";
  } else {
    flip = "Tails";
  }
}
