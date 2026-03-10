let stopBtn = document.querySelector(".stop-btn");
let body = document.querySelector("body");

let changingColor = setInterval(function () {
  let red = parseInt(Math.random() * 126);
  let blue = parseInt(Math.random() * 126);
  let green = parseInt(Math.random() * 126);

  let rgb = `rgb(${red}, ${blue}, ${green})`;
  body.style.background = rgb;
}, 1000);

stopBtn.addEventListener("click", function () {
  clearInterval(changingColor);
});
