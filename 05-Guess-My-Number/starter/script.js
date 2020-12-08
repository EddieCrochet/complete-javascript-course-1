'use strict';

let number = Math.trunc(Math.random()* 26) + 1;
let secretLetter;
let score = 20;
let highScore = 0;
const message = document.querySelector('.message');
const DOMScore = document.querySelector('.score');

const alph = ['A', 'B', 'C', 'D', 'E' ,'F' , 'G', 'H', 'I', 'J' ,'K' , 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S' ,'T' , 'U', 'V', 'W', 'X', 'Y', 'Z'];
for(let i = 0; i < 26; i++) {
    secretLetter = alph[number];
}
console.log(secretLetter);

document.querySelector('.check').addEventListener
('click', function() {
    let guess = document.querySelector('.guess').value.trim().toUpperCase();
    let isGuessIndex = (el) => el === guess;
    let guessIndex = alph.findIndex(isGuessIndex);
    
    if (!guess) {
        message.textContent = 'No Letter!!!'
    } else if (guessIndex > number) {
        if (score > 1) {
            message.textContent = "Guess was too high!";
            score--;
            DOMScore.textContent = score;
        } else {
            message.textContent = "You lost the game, nerd!";
            DOMScore.textContent = 0;
        }
    } else if (guessIndex < number) {
        if (score > 1) {
            message.textContent = "Guess was too low!";
            score--;
            DOMScore.textContent = score;
        } else {
            message.textContent = "You lost the game, nerd!";
            DOMScore.textContent = 0;
        }
    } else if (guess == secretLetter) {
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
    let number = Math.trunc(Math.random()* 26) + 1;
    score = 20;
    let secretLetter;
    for(let i = 0; i < 26; i++) {
        secretLetter = alph[number];
    }
    console.log(secretLetter);
    message.textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    DOMScore.textContent = score;
    document.querySelector('.guess').value = " ";
    document.querySelector('body').style.backgroundColor = '#222';
});