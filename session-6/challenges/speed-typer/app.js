const words = [
  "illegal",
  "gleaming",
  "control",
  "secretary",
  "suppose",
  "thinkable",
  "psychedelic",
  "shy",
  "paltry",
  "glove",
  "caring",
  "political",
];

// Time left to play
let time = 0;
// Keeps track of score
let score = 0;
// Determines if user playing or not
let isPlayingGame;

// DOM Selectors:
const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const seconds = document.getElementById("seconds");

// Initialises the game
const initialise = () => {
  console.log("initialised game");

  // Fetch new random word and display it
  showWord();

  // Fetch the user's input
  wordInput.addEventListener("input", checkInput);

  // Do count down by 1 second
  setInterval(countDownTimer, 1000);

  // Check status of game
  setInterval(checkGameStatus, 500);
};

const countDownTimer = () => {
  if (time > 0) {
    time--;
  } else {
    isPlayingGame = false;
  }

  timeDisplay.innerHTML = time;
};

const checkGameStatus = () => {
  if (!isPlayingGame && time === 0) {
    // TODO stop this from overwriting "" when starting new game
    message.innerHTML = "Game Over";
    score = -1;
  }
};

const checkWordsMatch = () => {
  let matched = false;

  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "CORRECT";
    matched = true;
  } else {
    message.innerHTML = "";
  }

  return matched;
};

const checkInput = () => {
  if (checkWordsMatch()) {
    // Game starts after first word typed
    isPlayingGame = true;
    time = 6;

    // Show new word for start of game
    showWord();

    // Reset input
    wordInput.value = "";

    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
};

const showWord = () => {
  const randIdx = Math.floor(Math.random() * words.length);
  const wordSelected = words[randIdx];

  currentWord.innerHTML = wordSelected;
};

window.addEventListener("load", initialise);
