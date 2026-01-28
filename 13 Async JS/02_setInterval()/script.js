let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let restart = document.querySelector("#restart");

let timer;
let count =  0;

start.addEventListener("click", function() {
    timer = setInterval(function() {
        count++;
        document.querySelector("h2").textContent = count;
    }, 1000)
})

stop.addEventListener("click", function() {
    clearInterval(timer);
})

restart.addEventListener("click", () => {
    count = 0;
    clearInterval(timer);
    document.querySelector("h2").textContent = count;
})