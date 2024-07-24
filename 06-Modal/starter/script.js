'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//// OPENING MODAL ////
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//// CLOSING MODAL ////
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Pressing 'x' or/and overlay adds .hidden and closes modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//// Handling an "Esc" Keypress Event ////
// Closes modal/overlay by pressing 'Escape'(if .hidden class is NOT present)
document.addEventListener('keydown', function (e) {
  console.log(e); // key: 'Escape' - // Adding/logging (e) param lets ut look at events in console
  console.log(e.key); // Escape

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Esc was pressed and modal closed.');
    closeModal();
  }
});
