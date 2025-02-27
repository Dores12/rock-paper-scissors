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

function newGame () {
    myScore = 0;
    computerScore = 0;
    getRoundNum = 1;

    myScoreElement.textContent = myScore;
    computerScoreElement.textContent = computerScore;
    document.querySelector(".round").textContent = "Round: " + getRoundNum;

    button.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    if (afterGame) {
        afterGame.remove();
    }
}

let afterGame = document.createElement("p");
afterGame.style.gridColumn = "span 2";

let myScoreElement = document.querySelector(".myscore");
let computerScoreElement = document.querySelector(".computerscore");

let myScore = 0;
let computerScore = 0;


let myChoice = "";
let rounds = 5;
let getRoundNum = parseInt(document.querySelector(".round").textContent.split(": ")[1]);
const button = document.querySelectorAll(".play-button");

function handleClick(e) {
    myChoice = e.currentTarget.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        let result = playRound(computerChoice, myChoice);

        if (result === "You win!") {
            myScore += 1;
        }
        else if (result === "Computer wins!") {
            computerScore += 1;
        }

        getRoundNum++;
        computerScoreElement.textContent = computerScore;
        myScoreElement.textContent = myScore; 

        document.querySelector(".mychoice").textContent = "You: " + myChoice;
        document.querySelector(".computerchoice").textContent = "Computer: " + computerChoice;
        document.querySelector(".round").textContent = "Round: " + getRoundNum;

        if (getRoundNum == rounds) {
            
            button.forEach(btn => {
                btn.removeEventListener('click', handleClick);
            });

            let resultMsg = "";
            
                if (myScore == computerScore) {
                    resultMsg = "It's a tie!";
                }
                else if (myScore > computerScore) {
                    resultMsg = "You win!";
                }
                else {
                    resultMsg = "You lose!";
                }
            

            
            afterGame.textContent = resultMsg + " Start new game";
            document.querySelector(".scoreboard").appendChild(afterGame);
        }

        

}

button.forEach(button => {
    button.addEventListener('click', handleClick);
});

const newGameBttn = document.querySelector(".new-game");

newGameBttn.addEventListener("click", newGame);

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