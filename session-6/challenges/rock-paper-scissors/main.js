const options = ["rock", "paper", "scissors"];

let computerChoice;
const computerChoiceSelector = () => {
  let num = Math.random();

  if (0 <= num < 0.33) {
    computerChoice = "rock";
  } else if (0.33 <= num < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
};

const calcOutcome = () => {
  let playerIndex = options.indexOf(playerChoice);
  let computerIndex = options.indexOf(computerChoice);

  if (playerIndex === computerIndex) {
    return "Result: draw";
  } else if (
    computerIndex - playerIndex === 1 ||
    playerIndex - computerIndex === 2
  ) {
    return "Result: computer wins";
  } else if (
    computerIndex - playerIndex === 2 ||
    playerIndex - computerIndex === 1
  ) {
    return "Result: player wins";
  }
};

const playerSelection = document.getElementById("playerSelection");
let playerChoice;

const choices = document.getElementById("choices");
const outcome = document.getElementById("outcome");

playerSelection.addEventListener("change", function (event) {
  const selectedValue = event.target.value;

  if (selectedValue !== "-1") {
    playerChoice = selectedValue.toLowerCase();
    // play game
    computerChoiceSelector();
    choices.innerText = `Player choice: ${playerChoice}, Computer choice: ${computerChoice}`;
    outcome.innerText = calcOutcome();
  }
});
