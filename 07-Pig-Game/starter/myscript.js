'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const curren0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');
const diceel = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');

const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const ply0 = document.querySelector('.player--0');
const ply1 = document.querySelector('.player--1');
const currentbtn = document.querySelector('.current-label');

let scores, currentscore, activeplayer, playing;
const init = function () {
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  curren0el.textContent = 0;
  current1el.textContent = 0;

  diceel.classList.add('hidden');
  ply1.classList.remove('player--winner');
  ply0.classList.remove('player--winner');
  ply0.classList.add('player--active');
  ply1.classList.remove('player--active');
};

init();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentscore = 0;
  ply0.classList.toggle('player--active');
  ply1.classList.toggle('player--active');
};

btnroll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;

    if (dice != 1) {
      currentscore += dice;
      document.getElementById(`current--  ${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      playing = false;
      diceel.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});

btnnew.addEventListener('click', init);
