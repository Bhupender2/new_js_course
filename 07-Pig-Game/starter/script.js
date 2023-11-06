'use strict';

// selecting elements here
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1'); //this is another way of selecting the element and this one is specific to the id only and its little bit faster than querySelector
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
//naming the id name  classname, images like this dynamically
//declaring variables here and then later resiassigning them
let scores, currentScore, activePlayer, playing;

// starting conditions

const init = function () {
  scores = [0, 0]; // final score of both player so it is stored in array so that's why it is handy to set activePlayer to 0 and other thing also like score0EL etc etc it is more like the dice images naming so that we can use it dynamically
  currentScore = 0; // we will use let coz we have to change/add this inside the function
  activePlayer = 0; // it will change so we will use let
  //rolling the dice Functionally
  playing = true; // at first we are playing the game and its the state variable and it will be updated if score >=20
  // current Scores is resetting to zero
  score0EL.textContent = 0; // here we give a number but JS will change it to string
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEL.classList.add('hidden');

  //removing the winner class we can tell JS to remove the class even if its not there JS will happilly do that.
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  //making the player 1 as a default player
  player0EL.classList.add('player--active'); // if already added js will not add a second one
  player1EL.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //first we need to make the current score =0 of that player .
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // changing the active player
  player0EL.classList.toggle('player--active'); //toggle will add the class if its not there and remove the class if it is present
  player1EL.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    // if playing is true tabhi execute hoga otherwise not
    // generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // display the dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`; // it will get the dice according to the variable coz we have given the name of the images smartly

    // checked for the rolled 1

    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;

      // we want to change the active player dynamically based on there current scores thats why we set activePlayer to 0 .this is the dymanic approach

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      //current0EL.textContent = currentScore; // we will change this in future
    } else {
      //if true switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if the player's score is >=100 then finish the game

    if (scores[activePlayer] >= 20) {
      //switch to new game
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch  to the next  player
      switchPlayer();
    }
  }
});

// reseting the game on clicking new button
btnNew.addEventListener('click', init);

// we need to make the enternal state variable back to the initial state so we need to repeat the code on resetting but ofcourse we will not do so we will make the function here named init and store everything here and call it so that we can use it
