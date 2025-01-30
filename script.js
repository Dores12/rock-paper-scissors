let choiceOptions = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return choiceOptions[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());