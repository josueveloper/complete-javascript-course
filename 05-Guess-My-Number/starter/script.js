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

const btn = document.querySelector('.check');

btn.addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');

  if (!guess) {
    message.textContent = 'Not a number!!';
  } else {
    message.textContent = 'Try another number';
  }
});
