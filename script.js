let gameData = ["scissors", " paper", "rock", "lizard", "spock" ];





document.getElementById("scissors").addEventListener("click", function () {
/*let scissors = gameData[0]
    console.log(scissors)*/
computerSelection()
 })

function computerSelection(){
    let random = Math.floor(Math.random() * gameData.length)
    return gameData[random]
}





// document.getElementById("scissors").addEventListener("click", function () {
//   const randomPlayer = Math.floor(Math.random() * gameData.length)
//     console.log( randomPlayer, gameData[randomPlayer]);
// })