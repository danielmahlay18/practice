'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🏆';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 30;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
*/

// HANDLING CLICK EVENTS
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

// Handling the 'Check' button click
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
document.querySelector('.message').textContent = 'NO NUMBER!⛔';
    }
    // When player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!🏆';
        document.querySelector('.number').textContent = secretNumber;


        document.querySelector('body').style.backgroundColor = '#21e038';

        document.querySelector('.number').style.width = '30rem';
  }
//   When guess is too high
  else if (guess > secretNumber) {
     if (score > 1) {
        document.querySelector('.message').textContent = 'Too High!📈, Try Lower';
        score--;
    document.querySelector('.score').textContent = score;}else {
      document.querySelector('.message').textContent = 'you lost🤡🤡🤡'
      document.querySelector('.score').textContent = 0;  
    }
  }
//   When guess is too low
  else {
     if (score > 1) {
        document.querySelector('.message').textContent = 'Too Low!📉, Try Higher';
        score--;
    document.querySelector('.score').textContent = score;}else {
      document.querySelector('.message').textContent = 'you lost🤡🤡🤡'
        document.querySelector('.score').textContent = 0;  
    }
  }
});

// Handling the 'Again' button click
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});