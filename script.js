let choiceOptions = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return choiceOptions[Math.floor(Math.random() * 3)];
}

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


let myScoreElement = document.querySelector(".myscore");
let computerScoreElement = document.querySelector(".computerscore");

let myScore = 0;
let computerScore = 0;


let myChoice = "";
let rounds = 5;
let getRoundNum = parseInt(document.querySelector(".round").textContent.split(": ")[1]);
const button = document.querySelectorAll("button");

button.forEach(button => {
    button.addEventListener('click', (e) => {
        myChoice = e.currentTarget.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        let result = playRound(computerChoice, myChoice);

        if (result === "You win!") {
            myScore += 1;
        }
        else if (result === "Computer wins!") {
            computerScore += 1;
        }

        computerScoreElement.textContent = computerScore;
        myScoreElement.textContent = myScore; 

        
    })
})


/*
let round = 5;

let myScore = document.querySelector(".myscore").textContent;
let computerScore = document.querySelector(".computerscore").textContent;

function game () {
    for (let i = 1; i <= round; i++) {
        let computerChoice = getComputerChoice();


        let result = playRound(computerChoice, myChoice);
        if (result === "You win!") {
            myScore++;
            console.log(myScore)

        }
        else if (result === "Computer wins!") {
            computerScore++;
            computerScore.textContent = computerScore;
        }
        
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

game()
*/