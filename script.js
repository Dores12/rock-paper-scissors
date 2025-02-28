let choiceOptions = ["rock", "paper", "scissors"];
let afterGame = document.createElement("p");
afterGame.style.gridColumn = "span 2";

let myScoreElement = document.querySelector(".myscore");
let computerScoreElement = document.querySelector(".computerscore");

let myScore = 0;
let computerScore = 0;


let myChoice = "";
let rounds = "";
let getRoundNum = 1;

const button = document.querySelectorAll(".play-button");

const userInput = document.querySelector("input");
/* const bttnStart = document.querySelector(".start-button");

bttnStart.addEventListener("click", () => {
    let inputValue = userInput.value;

    if (inputValue === "")
        return

    rounds = inputValue;

}) */
userInput.focus();

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

const newGameBttn = document.querySelector(".new-game");

newGameBttn.addEventListener("click", newGame);

function newGame () {
    let inputValue = userInput.value;

    if (inputValue === "" || inputValue < 1)
        return

    rounds = inputValue;

    myScore = 0;
    computerScore = 0;
    getRoundNum = 1;

    myScoreElement.textContent = myScore;
    computerScoreElement.textContent = computerScore;
    document.querySelector(".round").textContent = "Round: " + getRoundNum + " / " + rounds;

    document.querySelector(".mychoice").textContent = "";
    document.querySelector(".computerchoice").textContent = "";

    button.forEach(button => {
        button.addEventListener('click', handleClick);
    });

    if (afterGame) {
        afterGame.remove();
    }
}

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

        
        computerScoreElement.textContent = computerScore;
        myScoreElement.textContent = myScore; 

        document.querySelector(".mychoice").textContent = "You: " + myChoice;
        document.querySelector(".computerchoice").textContent = "Computer: " + computerChoice;
        document.querySelector(".round").textContent = "Round: " + getRoundNum + " / " + rounds;

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
        else getRoundNum++;

    }

/*
button.forEach(button => {
    button.addEventListener('click', handleClick);
});
*/

