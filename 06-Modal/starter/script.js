'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodel = document.querySelector('.close-modal');
const show = document.querySelectorAll('.show-modal');
const openbtn = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < show.length; i++)
  show[i].addEventListener('click', openbtn);

const colsemodel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnclosemodel.addEventListener('click', colsemodel);
overlay.addEventListener('click', colsemodel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    colsemodel();
  }
});
