let choiceOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return choiceOptions[Math.floor(Math.random() * 3)];
}

const button = document.querySelectorAll("button");

button.forEach(button => {
    button.addEventListener('click', (e) => {
        const myChoice = e.currentTarget.textContent;
        console.log(myChoice)
    })
})



function playRound (computerChoice, myChoice) {
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
let myScore = 0;
let computerScore = 0;
let round = 5;

function game () {
    for (let i = 1; i <= round; i++) {
        let myChoice = prompt("Round: " + i + "\nCurrent score: " + computerScore + " : " + myScore + "\nEnter your choice (rock, paper, scissors): "); 
        let computerChoice = getComputerChoice();

        console.log("Computer choice: " + computerChoice + " || Your choice: " + myChoice);

        while (!choiceOptions.includes(myChoice)) {
            myChoice = prompt("Invalid choice. Enter your choice (rock, paper, scissors): ");
        }

        let result = playRound(computerChoice, myChoice);
        if (result === "You win!") {
            myScore++;
        }
        else if (result === "Computer wins!") {
            computerScore++;
        }
        console.log(playRound(computerChoice, myChoice));
    }

    if (myScore > computerScore) {
        console.log("You win the game! Score: " + myScore + " - " + computerScore);
    }
    else if (myScore < computerScore) {
        console.log("Computer wins the game! Score: " + computerScore + " - " + myScore);
    }
    else {
        console.log("It's a tie! Score: " + myScore + " - " + computerScore);
    }
}

/* game() */
