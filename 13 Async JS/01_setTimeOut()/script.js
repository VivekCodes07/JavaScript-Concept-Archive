let body = document.querySelector("body");

let btn = document.querySelector("#stop");

function sayHello() {
  console.log("Hello World!");
  document.querySelector("h1").textContent = "Hello World!";
}

const changeText = setTimeout(sayHello, 2000);

btn.addEventListener("click", () => {
    clearTimeout(changeText);
    console.log("STOPPED");
})


let darkMode = function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
};

setTimeout(darkMode, 3000);
