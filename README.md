## Introduction:
This game is a simple fun game in which both the players have to make a rock, paper, scissors, lizard and Spock. It has only two possible outcomes a draw, or a win for one player and a loss for the other player. We will be designing the game using JavaScript where a player will be playing against the computer. In total there will be 10 moves. The player has to choose one option among the rock, paper, lizard, Spock and scissors. A random option will be generated from the computer’s side and the one who wins will get one point every time. After 10 moves are over the final result will be displayed on the screen with a button to restart the game. The game will be completely responsive so that it can be played on every device.

## Introduction:
This game is a simple fun game in which both the players have to make a rock, paper, scissors, lizard and Spock. It has only two possible outcomes a draw, or a win for one player and a loss for the other player. We will be designing the game using JavaScript where a player will be playing against the computer. In total there will be 10 moves. The player has to choose one option among the rock, paper, lizard, Spock and scissors. A random option will be generated from the computer’s side and the one who wins will get one point every time. After 10 moves are over the final result will be displayed on the screen with a button to restart the game. The game will be completely responsive so that it can be played on every device.

will make everything from the beginning, step by step!!!


## The HTML Layout:
- [ ]  Create basic html layout


## Javascript Part
- [ ] Create a function game() that will contain all the logic of the game.
- [ ] Create a function playGame() and inside the function use DOM manipulation to get hold of all the five buttons we created in HTML for player input. Create an array playerOptions which will contain all five buttons as its elements. Similarly, create an array for computer options.
- [ ] Use forEach() loop on playerOptions so that we can add an event listener on all buttons with a single piece of code. Inside the loop increment moves counter by 1 display moves left on the screen by subtracting moves from 10. Generate a random value for the computer option and compare it with the player’s input.
- [ ] Create a function winner() which will receive two arguments one the player’s input and the other the computer’s option  The function will decide who wins the point among the player and computer.
- [ ] Create a function gameOver() which will display the final result with reload button. The function will be called when moves will become equals to 10.
- [ ] Call the playGame() function inside the game() function.
- [ ] Now call the game() function at the end of the file.




