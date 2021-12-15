
let playerName = prompt("Welcome! What is your name?");
alert("Hey, " + playerName);

let targetNumber = Math.floor(Math.random() * 26);
console.log(targetNumber);
let numTurns = 0;
let heeftGewonnen = false;

while (playerNumber != targetNumber && numTurns < 5) {
    numTurns++
    var playerNumber = prompt("Turn " + numTurns + " Enter a number between 0 and 25 to start guessing...");

    if (playerNumber == targetNumber) {
        alert("Congratulations, you have won the game!");
        heeftGewonnen = true;
    } else if (playerNumber < targetNumber) {
        alert("Unfortunately, that is incorrect, Please try again!");
    } else if (playerNumber > targetNumber) {
        alert("Unfortunately, that is incorrect, Please try again!")
    }

    if (heeftGewonnen == true) {
        alert("Bye" + playerName + "see you!");
    }
}
