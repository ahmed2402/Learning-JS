// Qs2. Create a game where you start with any random game number. Ask the user to keepguessing the game number until the user enters correct value.
let randNum = 5;
let userNum = prompt("Gues the number");

while (userNum != randNum) {
    userNum = prompt("Guess again nigga");
}

console.log("Congrats u won!");