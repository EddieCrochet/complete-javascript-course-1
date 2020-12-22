'use strict';

let number = Math.trunc(Math.random()* 26) + 1;
let secretLetter;
let score = 20;
let highScore = 0;
const message = document.querySelector('.message');
const DOMScore = document.querySelector('.score');

const alph = ['A', 'B', 'C', 'D', 'E' ,'F' , 'G', 'H', 'I', 'J' ,'K' , 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S' ,'T' , 'U', 'V', 'W', 'X', 'Y', 'Z'];

secretLetter = alph[number];

console.log(secretLetter);

document.querySelector('.check').addEventListener
('click', function() {
    let guess = document.querySelector('.guess').value.trim().toUpperCase();
    let isGuessIndex = (el) => el === guess;
    let guessIndex = alph.findIndex(isGuessIndex);
    
    if (!guess) {
        message.textContent = 'No Letter!!!'

        //when guess is wrong
    } else if (guessIndex !== number) {
        if (score > 1) {
            //ternary operator to refgactor unnecessary code for DRY principle
            message.textContent = guessIndex > number ? "Guess was too high!" : "Guess was too low!";
            score--;
            DOMScore.textContent = score;
        } else {
            message.textContent = guessIndex > number ? "You lost the game, nerd!" : "You lost the game, guy!";
            DOMScore.textContent = 0;
        }
    } else if (guessIndex === number) {
        document.querySelector('.number').textContent = secretLetter;
        document.querySelector('body').style.backgroundColor = '#60b347';
        message.textContent = "Guess was just right, Baby!";
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
});

document.querySelector('.again').addEventListener
('click', function() {
    number = Math.trunc(Math.random()* 26) + 1;
    score = 20;
    secretLetter = alph[number];

    console.log(secretLetter);
    message.textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    DOMScore.textContent = score;
    document.querySelector('.guess').value = " ";
    document.querySelector('body').style.backgroundColor = '#222';
});