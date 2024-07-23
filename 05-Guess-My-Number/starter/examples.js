'use strict';

// textContent change
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `New text here!🥳`; // ctrl + cmd + spc
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// .value change on <input>
document.querySelector('.guess').value = 7;
console.log(document.querySelector('.guess').value);

// addEventListener click
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);
  console.log(typeof guess);
});

// Random number, also displayed as spoiler
const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

// Functions refactored
const displayMessage = function (message) {
  // document.querySelector('.message').textContent = `⛔️ message`;
  document.querySelector('.message').textContent = message;
};
const changeBackground = function (bgc) {
  // document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('body').style.backgroundColor = bgc;
};

/* Guess too high/low refactored from under line of: "When guess is wrong"
    // If guess is too high
    else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = `⬇️ Too high!`;
        // Minus score if wrong, then display new score value
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = `💀 You lost the game!`;
        document.querySelector('.score').textContent = 0;
      }
    }

    // If guess is too low
    else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = `⬆️ Too low!`;
        // Minus score if wrong, then display new score value
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = `💀 You lost the game!`;
        document.querySelector('.score').textContent = 0;
      }
    } */
