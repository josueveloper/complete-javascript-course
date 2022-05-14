'use strict';
/*
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');

console.log(message.textContent);

message.textContent = 'Correct number!!';
number.textContent = '34543';
score.textContent = '54543543543';
guess.value = '4';

console.log(typeof message);*/

const numberToGuessElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const message = document.querySelector('.message');
const guessElement = document.querySelector('.guess');

let numberToGuess = Math.trunc(Math.random() * 20) + 1;
let score = 20;

numberToGuessElement.textContent = numberToGuess;
scoreElement.textContent = score;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

const gameOver = function() {
  message.textContent = 'You lose!!';
  btnCheck.disabled = true;
};

const youWin = function() {
  message.textContent = 'You win!!';
  btnCheck.disabled = true;
};

const newGame = function() {
  message.textContent = 'Start guessing...';
  btnCheck.disabled = false;
  numberToGuess = Math.trunc(Math.random() * 20) + 1;
  numberToGuessElement.textContent = numberToGuess;
  score = 20;
  scoreElement.textContent = score;
  guessElement.value = '';
};

btnCheck.addEventListener('click', function() {
  const guess = Number(guessElement.value);

  if (!guess) {
    message.textContent = 'Not a number!!';
  } else if (guess === numberToGuess) {
    youWin();
  } else {
    message.textContent = 'Try another one';
    score--;
    scoreElement.textContent = score;

    if (score === 0) {
      gameOver();
      return;
    } else if (guess > numberToGuess) {
      message.textContent = 'Too high';
    } else {
      message.textContent = 'Too low';
    }
  }
});

btnAgain.addEventListener('click', function() {
  newGame();
});
