var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var firstDice = document.querySelector(".img1");
firstDice.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var secondDice = document.querySelector(".img2");
secondDice.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var winnerHeader = document.querySelector(".container h1");
if (randomNumber1 > randomNumber2) {
  winnerHeader.textContent = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  winnerHeader.textContent = "Player 2 Wins! 🚩";
} else {
  winnerHeader.textContent = "Draw!";
}
