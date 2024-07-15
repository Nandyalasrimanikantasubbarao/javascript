'use strict';
/*
//document method
//document.querySelector('.Message');

//console logging and selecting textcontent of perticular html class
//console.log(document.querySelector('.message').textContent);

//changing or manupulating the text in perticular html class
//document.querySelector('.message').textContent ='i am changed the text in html by using dom';

//changing text in message class
document.querySelector('.message').textContent = 'Correct number';

//changing text in number class
document.querySelector('.number').textContent = '13';

//changing text in score class
document.querySelector('.score').textContent = '15';

//chnging the velue in guess class
document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//if an event of click is happend to check class then function will execute else it will not execute
document.querySelector('.check').addEventListener('click', function () {
  //any value we get from browser is must be a string to convert this to number we use number method
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when they are no input
  // !=not
  if (!guess) {
    // document.querySelector('.message').textContent = 'Plese Enter The Number';
    displaymessage('Plese Enter The Number');
  }

  //when player win
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displaymessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('h1').textContent =
      'Congratulation You won the game!';

    //manupulating css in dom
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('h1').style.fontSize = '20px';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Number is too high' : 'Number is too low';
      displaymessage(
        guess > secretNumber ? 'Number is too high' : 'Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You lost the game!');
      document.querySelector('.score').textContent = '0';
    }
  }
});

//guess is to high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Number is too high';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = '0';
//   }
// }

//guess is to high
// else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Number is too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game!';
//     document.querySelector('.score').textContent = '0';
//   }
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.score').textContent = score;
  document.querySelector('div').style.width = '15rem';
  document.querySelector('div').textContent = '?';
  displaymessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('h1').style.fontSize = '40px';
});
