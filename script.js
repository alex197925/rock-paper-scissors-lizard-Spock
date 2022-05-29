function rpgGame(yourChoice) {
    let humanChoice, botChoice;
    console.log(yourChoice);
     humanChoice = yourChoice.id;
     botChoice = numberToChoice(randomToNumber());

    console.log(botChoice);
    //results = decideWinner(humanChoice, botChoice);

    //message = finalMessage(results); // {'message': "You won!", 'color': 'green'}

//rpgFrontEnd(yourChoice.id, botChoice, message);

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
        "scissors": {"scissors": 0.5, "rock": 1, "paper": 0, "lizard": 2, "spock:": 3},
        "paper": {"scissors": 1,  "rock": 0, "paper": 0.5, "lizard": 2, "spock": 3},
        "lizard": {"scissors": 1, "rock": 1, "paper": 2, "lizard": 0.5, "spock": 2 },
        "spock":  {"scissors": 3, "rock": 2, "paper": 0.5, "lizard": 1, "spock:": 0.5},
    }
}