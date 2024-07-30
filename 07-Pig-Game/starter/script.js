'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Starting conditions
const init = function () {
  scores = [0, 0]; // Stores players' score (P0, P1)
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active'); // Player 1
  player1El.classList.remove('player--active');

  diceEl.classList.remove('hidden');
};
init();

const switchPlayer = function () {
  // if 1 rolled, swith to next player
  // player still 0, but reset currect score before switch
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // Toggle both class at the same time
  player0El.classList.toggle('player--active'); // CSS class
  player1El.classList.toggle('player--active');
};

// 1. Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRoll);

    // 2. Display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`; // Appends the roll as the name

    // 3. Check if rolled 1
    if (diceRoll !== 1) {
      // add dice to current score
      currentScore += diceRoll;
      // Render the current score on dynamically rendered activePlayer
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // '1. Add current score to active player's score
    // When [player 1], will be scores 1, when P0 scores 0
    scores[activePlayer] += currentScore; // scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 5) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
