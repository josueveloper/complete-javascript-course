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
const highScoreElement = document.querySelector('.highscore');

let numberToGuess = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

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
  document.querySelector('body').style.backgroundColor = '#60b347';
  numberToGuessElement.style.width = '30rem';
  numberToGuessElement.textContent = numberToGuess;
  if (score > highScore) {
    highScore = score;
    highScoreElement.textContent = highScore;
  }
};

const playAgain = function() {
  message.textContent = 'Start guessing...';
  btnCheck.disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  numberToGuess = Math.trunc(Math.random() * 20) + 1;
  numberToGuessElement.style.width = '15rem';
  numberToGuessElement.textContent = '?';
  score = 20;
  scoreElement.textContent = score;
  guessElement.value = '';
};

btnCheck.addEventListener('click', function() {
  const guess = Number(guessElement.value);

  //when there is no input
  if (!guess) {
    message.textContent = 'Not a number!!';

    //when palyer wins
  } else if (guess === numberToGuess) {
    youWin();

    //when you fail a guess
  } else {
    message.textContent = 'Try another one';
    score--;
    scoreElement.textContent = score;

    //when you lose (score is 0)
    if (score === 0) {
      gameOver();
    } else {
      message.textContent = guess > numberToGuess ? 'Too high' : 'Too low';
    }
  }
});

btnAgain.addEventListener('click', function() {
  playAgain();
});
