'use strict';

// Selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//array of player 1 and player 2s respective scores
const scores = [0, 0];
let currentScore = 0;
let activeplayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
    //1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled
    if(dice!==1){
        //add dice to current score
        currentScore += dice;    
        //selecting respective player 1 and 2 class names dynamically
        document.getElementById(`current--${activeplayer}`).textContent = currentScore;
        //current0El.textContent = currentScore; // CHANGE LATER
        //above code was not dyamic
    } else { 
        document.getElementById(`current--${activeplayer}`).textContent = 0;
        //switch to next player
        activeplayer = activeplayer === 0 ? 1 : 0;
        //if activePlayer is 0 switch to 1 and vice versa

        currentScore = 0;

        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
})