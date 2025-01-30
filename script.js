let choiceOptions = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return choiceOptions[Math.floor(Math.random() * 3)];
}

let myChoice = prompt("Enter your choice (rock, paper, scissors): ");

while (!choiceOptions.includes(myChoice)) {
    myChoice = prompt("Invalid choice. Enter your choice (rock, paper, scissors): ");
}

let computerChoice = getComputerChoice();

console.log(computerChoice + " " + myChoice);