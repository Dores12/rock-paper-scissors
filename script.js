let choiceOptions = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return choiceOptions[Math.floor(Math.random() * 3)];
}

let myChoice = prompt("Enter your choice (rock, paper, scissors): ");

while (!choiceOptions.includes(myChoice)) {
    myChoice = prompt("Invalid choice. Enter your choice (rock, paper, scissors): ");
}

let computerChoice = getComputerChoice();

function whoWon (computerChoice, myChoice) {
    if (computerChoice === myChoice) {
        return "It's a tie!";
    }
    else if (computerChoice === "rock" && myChoice === "scissors") {
        return "Computer wins!";
    }
    else if (computerChoice === "rock" && myChoice === "paper") {
        return "You win!";
    }
    else if (computerChoice === "paper" && myChoice === "rock") {
        return "Computer wins!";
    }
    else if (computerChoice === "paper" && myChoice === "scissors") {
        return "You win!";
    }
    else if (computerChoice === "scissors" && myChoice === "paper") {
        return "Computer wins!";
    }
    else if (computerChoice === "scissors" && myChoice === "rock") {
        return "You win!";
    }
}
console.log(whoWon(computerChoice, myChoice));