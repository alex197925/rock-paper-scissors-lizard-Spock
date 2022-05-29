function rpgGame(yourChoice) {
    let humanChoice, botChoice;
    console.log(yourChoice);
     humanChoice = yourChoice.id;
     botChoice = numberToChoice(randomToNumber());

    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results); // {'message': "You won!", 'color': 'green'}
    console.log(message);

rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randomToNumber() {
   return  Math.floor(Math.random() * 5);

}

function numberToChoice(number) {
    return ["rock", "paper", "scissors", "lizard", "spock"] [number];
}

function decideWinner(yourChoice, computerChoice) {
    let gameDatabase = {
        "rock": {"scissors": 1, "rock": 0.5, "paper": 0, "lizard": 2, "spock": 3},
        "scissors": {"scissors": 0.5, "rock": 3, "paper": 0, "lizard": 2, "spock:": 3},
        "paper": {"scissors": 1,  "rock": 0, "paper": 0.5, "lizard": 2, "spock": 3},
        "lizard": {"scissors": 1, "rock": 1, "paper": 2, "lizard": 0.5, "spock": 2 },
        "spock":  {"scissors": 3, "rock": 2, "paper": 0, "lizard": 1, "spock:": 0.5},
    };

    let yourScore = gameDatabase[yourChoice][computerChoice];
    let computerScore = gameDatabase[computerChoice][yourChoice];

    return[yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return{ "message": "You lost!", "color": "red"};
    }else if (yourScore === 0.5) {
        return {"message": "You tied!", "color": "yellow"};
    }else {
        return {"message": "You Won!", "color": "green"};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finaleMessage) {
 let imagesDataBase = {
"rock": document.getElementById("rock").src,
     "paper": document.getElementById("paper").src,
     "scissors": document.getElementById("scissors").src,
     "lizard": document.getElementById("lizard").src,
     "spock": document.getElementById("spock").src
 }
// Let's remove all the images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    document.getElementById("lizard").remove();
    document.getElementById("spock").remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "'style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "'style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";

    document.getElementById("flex-box-rps-div").append(humanDiv);
    document.getElementById("flex-box-rps-div").append(botDiv);





}















