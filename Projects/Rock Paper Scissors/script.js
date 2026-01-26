let para = document.querySelector('p');
let result = document.querySelector('#result');
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function(event) {
        pickComputerMove();
        let playerMove = event.target.value;
        
        if (playerMove === computerMove) {
            result.innerHTML = "it's a tie 😑"
        } else if (playerMove === "Rock" && computerMove === "Scissor") {
            result.innerHTML = "You Won 🏆"
        } else if (playerMove === "Paper" && computerMove === "Rock") {
            result.innerHTML = "You Won 🏆";
        } else if (playerMove === "Scissor" && computerMove === "Paper") {
            result.innerHTML = "You Won 🏆";
        } else {
            result.innerHTML = "You Lost 😭👎🏾"
        }

        para.innerText = `You Chose: ${playerMove}, Computer chose: ${computerMove}`
    })
})



let computerMove = '';
function pickComputerMove() {
    let randomNumber = parseInt(Math.random() * 10 + 1);
    if (randomNumber <= 3) {
        computerMove = "Rock";
    } else if (randomNumber <= 6) {
        computerMove = "Paper";
    } else {
        computerMove = "Scissor"
    }
    console.log(computerMove)
}

/*
The logic I have have apllied is:

1. Pick a random move for the computer.
2. Get the player's move from the clicked button.
3. Compare moves:
   - Same → tie
   - Player beats computer → win
   - Otherwise → lose
4. Display the result and both choices.

*/