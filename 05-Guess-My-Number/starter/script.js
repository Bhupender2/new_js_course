'use strict';
// document.querySelector('.message').textContent = 'start guessing now bitch';

// //now we want to add some input value using javascript

// document.querySelector('.guess').value = 10;

// //now we are manipulating the score
// document.querySelector('.score').textContent = 99;

// // whatever we have done till now here is called dom manipuation because we are actually manipulating dom using javascript

//NOW WE ARE MAKING THE REAL GAME
// we want to do something on clicking the botton
// after selecting the check class ...we simply use addeventlistner . basically addeventlistener just watches for event to happen and then it trigerr the event handler to execute the instruction ..and event handler is the code which execute when the event occurs

const secretNumber = Math.trunc(Math.random() * 20) + 1; //[0,20)+1//[0,19]+1=[1,20] //now the number will be betweeen 1 to 20 where 1,20 is included!

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number added!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too High 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Boooooo You lost the game 😢 ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Boooooo You lost the game 😢';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Bravo ! You are right 🎊 ';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // we need to make a string we cant just write it .it has to be inside  "" it.
  }
});

//now we are dealing with again button;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'start guessing...';
});
