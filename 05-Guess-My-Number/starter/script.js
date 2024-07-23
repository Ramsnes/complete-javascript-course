'use strict';
//// Cached DOM elements ////
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');
const scoreEl = document.querySelector('.score');
const guessInputEl = document.querySelector('.guess');
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');

//// Functions ////
const changeBackground = function (bgc) {
  bodyEl.style.backgroundColor = bgc;
};
const changeWidth = function (width) {
  numberEl.style.width = width;
};
const displayMessage = function (message) {
  messageEl.textContent = message;
};

const updateHighscore = function () {
  if (score > highscore) {
    highscore = score;
  }
  highscoreEl.textContent = highscore;
};

const handleWin = function () {
  displayMessage(`🥳 Correct number!`);
  numberEl.textContent = secretNumber;
  changeBackground('#60b347');
  changeWidth('30rem');
  updateHighscore();
};

const handleWrong = function (guess) {
  if (score > 1) {
    displayMessage(guess > secretNumber ? `⬇️ Too high!` : `⬆️ Too low!`);
    // Minus score if wrong, then display new decremented score value
    score--;
    scoreEl.textContent = score;
  } else {
    displayMessage(`💀 You lost the game!`);
    scoreEl.textContent = 0;
  }
};

const initGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage(`Start guessing...`);
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessInputEl.value = ``;
  changeBackground('#222');
  changeWidth('15rem');
  console.log(secretNumber);
};

const evaluateGuess = function () {
  // Adds the input value from the input field to a variable
  let guess = Number(guessInputEl.value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage(`⛔️ No number!`);
  } else if (guess === secretNumber) {
    handleWin();
  } else if (guess !== secretNumber) {
    handleWrong(guess);
  }
};

//// Initial setup ////
let secretNumber; // Changes in initGame()
let score = 20; //
let highscore = 0; // Changes in updateHighscore()
initGame();

checkBtn.addEventListener('click', evaluateGuess); // 'Check-btn'
againBtn.addEventListener('click', initGame); // 'Again-btn'
