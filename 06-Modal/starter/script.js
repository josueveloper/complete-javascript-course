'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(elem => {
  elem.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

//pendiente
document.addEventListener('keydown', closeModel);
