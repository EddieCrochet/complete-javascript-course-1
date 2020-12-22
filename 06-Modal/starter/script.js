'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
    //attaches handler to all the buttons thru the loop
    btnsOpenModal[i].addEventListener
        ('click', function() {
            console.log('GUTTON LCIKIED>>>');
            modal.classList.remove('hidden');
        });
}