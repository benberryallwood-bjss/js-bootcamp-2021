console.log("challenges/rock-paper-scissors.js");

// Challenge:
// Rock, Paper, Scissors
// Create this classic game.
// You need to accept the user’s choice (which for now can be stored in a variable).
// The computer choice can be derived from the ‘Math.random()’ method which returns a number between 0 and 1.
// Log the result and the choices for both user and computer.

const options = ["rock", "paper", "scissors"];
let playerChoice = "scissors";

let num = Math.random();
let computerChoice;

if (0 <= num < 0.33) {
  computerChoice = "rock";
} else if (0.33 <= num < 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

console.log(
  `Player choice: ${playerChoice}, Computer choice: ${computerChoice}`
);

let playerIndex = options.indexOf(playerChoice);
let computerIndex = options.indexOf(computerChoice);

if (playerIndex === computerIndex) {
  console.log("Result: draw");
} else if (computerIndex - playerIndex === 1) {
  console.log("Result: computer wins");
} else if (computerIndex - playerIndex === 2) {
  console.log("Result: player wins");
} else if (playerIndex - computerIndex === 1) {
  console.log("Result: player wins");
} else if (playerIndex - computerIndex === 2) {
  console.log("Result: computer wins");
}
