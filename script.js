let dataGame = ["rock", "paper", "scissor", "lizard", "spock"]
let playerInput;
let computerChoice;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton =  document.getElementById("scissor");
const lizardButton = document.getElementById("lizard");
const spockButton = document.getElementById("spock");

let userScore = 0;
let computerScore = 0;

const updatePlayer = document.querySelector('.playerUpdateScore')
const updateBot = document.querySelector('.botUpdateScore');




const playerResult = document.getElementById("player-score");
const tieScore = document.getElementById("tie-score");

function getRandomItem() {
    computerChoice = dataGame[Math.floor(Math.random() * dataGame.length)];
}


rockButton.addEventListener("click", function () {
    playerInput = rockButton.id;
    console.log(playerInput)
    getRandomItem();
    game();
})

paperButton.addEventListener("click", function () {
    playerInput = paperButton.id;
    console.log(playerInput)
    getRandomItem();
    game()
})

scissorButton.addEventListener("click", function () {
    playerInput = scissorButton.id;
    console.log(playerInput)
    getRandomItem()
    game()
})

lizardButton.addEventListener("click", function () {
   playerInput = lizardButton.id;
    console.log(playerInput)
    getRandomItem()
    game()
})

spockButton.addEventListener("click", function () {
playerInput = spockButton.id;
    console.log(playerInput)
    getRandomItem()
    game()
})



function game() {

    // Tie
    if (playerInput === computerChoice) {
        tieScore.innerText = "To tie!"
        userScore++;
        updatePlayer.innerText = userScore;
        computerScore++;
        updateBot.innerText = computerScore;
    }
    //Rock
    else if (playerInput === "rock") {
        if (computerChoice === "paper" || computerChoice === "spock") {
            updateBot.innerText = computerScore;
            computerScore++;
        } else {
            playerResult.innerText = "winner";
            userScore++;
            playerResult.innerText = userScore;
        }
    }
    // Scissor
    else if (playerInput === "scissor") {
        if (computerChoice === "rock" || computerChoice === "spock") {
            updateBot.innerText = computerScore;
            computerScore++;
        }else {
            playerResult.innerText = "winner";
            userScore++;
            playerResult.innerText = userScore;
        }
    }
    //  Lizard
    else if (playerInput === "lizard") {
        if (computerChoice === "rock" || computerChoice === "scissor"){
            updateBot.innerText = computerScore;
            computerScore++;
        }else {
            playerResult.innerText = "winner";
            userScore++;
            playerResult.innerText = userScore;
        }
    }
   //    Paper
    else if (playerInput === "paper") {
        if (computerChoice === "scissor" || computerChoice === "lizard") {
            updateBot.innerText = computerScore;
            computerScore++;
        }else {
            playerResult.innerText = "winner";
            userScore++;
            playerResult.innerText = userScore;
        }
    }
   //   Spock
    else if (playerInput === "spock") {
        if (computerChoice === "lizard" || computerChoice === "paper") {
            updateBot.innerText = computerScore;
            computerScore++;
        }else {
            playerResult.innerText = "winner";
            userScore++;
            playerResult.innerText = userScore;
        }
    }



}


