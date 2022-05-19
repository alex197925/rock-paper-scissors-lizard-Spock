let dataGame = ["rock", "paper", "scissor", "lizard", "spock"]
let playerInput;
let computerChoice;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton =  document.getElementById("scissor");
const lizardButton = document.getElementById("lizard");
const spockButton = document.getElementById("spock");


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
    // getRandomItem();
    // game()
})

scissorButton.addEventListener("click", function () {
    playerInput = scissorButton.id;
    console.log(playerInput)
    // getRandomItem()
    // game()
})

lizardButton.addEventListener("click", function () {
   playerInput = lizardButton.id;
    console.log(playerInput)
    // getRandomItem()
    // game()
})

spockButton.addEventListener("click", function () {
playerInput = spockButton.id;
    console.log(playerInput)
    // getRandomItem()
    // game()
})



function game() {
    if(playerInput === "rock" && computerChoice === "rock") {
        console.log("draw")
    }
}