// DOM Selectors
const rockIcon = document.getElementById("rock-icon");
const paperIcon = document.getElementById("paper-icon");
const scissorsIcon = document.getElementById("scissors-icon");
const resultDisplay = document.getElementById("result");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

const options = ["rock", "paper", "scissors"];
const results = ["It's a draw", "Computer wins", "Player wins"];

// Pick random index (0 to 2)
const computerIndexSelector = () => Math.floor(Math.random() * 3);

// Calculate the result
const calculateResult = (playerIndex, computerIndex) => {
  return results[(computerIndex - playerIndex + 3) % 3];
};

// Update scores
const updateScores = (result) => {
  if (result.includes("Computer")) {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
  } else if (result.includes("Player")) {
    playerScore.innerText = parseInt(playerScore.innerText) + 1;
  }
};

// Play game
const playGame = (playerIndex) => {
  // Make choice for computer
  let computerIndex = computerIndexSelector();
  // Display the choices under the scores
  playerChoiceDisplay.innerText = options[playerIndex];
  computerChoiceDisplay.innerText = options[computerIndex];
  // Calculate and display result
  let result = calculateResult(playerIndex, computerIndex);
  resultDisplay.innerText = result;
  updateScores(result);
};

// Event listeners for icons
rockIcon.addEventListener("click", () => {
  playGame(0);
});
paperIcon.addEventListener("click", () => {
  playGame(1);
});
scissorsIcon.addEventListener("click", () => {
  playGame(2);
});
