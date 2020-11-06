'use strict';

const number = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let message = document.querySelector('.message');
let DOMScore = document.querySelector('.score');

document.querySelector('.check').addEventListener
('click', function() {
    const guess = document.querySelector('.guess').value;
    

    if (!guess) {
        message.textContent = 'No Number!!!'
    } else if (guess > number) {
        if (score > 1) {
            message.textContent = "Guess was too high!";
            score--;
            DOMScore.textContent = score;
        } else {
            message.textContent = "You lost the game, nerd!";
            DOMScore.textContent = 0;
        }
    } else if (guess < number) {
        if (score > 1) {
            message.textContent = "Guess was too low!";
            score--;
            DOMScore.textContent = score;
        } else {
            message.textContent = "You lost the game, nerd!";
            DOMScore.textContent = 0;
        }
    } else if (guess == number) {
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        message.textContent = "Guess was just right, Baby!";
        document.querySelector('.number').style.width = '30rem';
    }
});

document.querySelector('.again').addEventListener
('click', function() {
    const number = Math.trunc(Math.random()* 20) + 1;
    let score = 20;
    message.textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    DOMScore.textContent = score;
    document.querySelector('.guess').value = " ";
    document.querySelector('body').style.backgroundColor = '#222';
});