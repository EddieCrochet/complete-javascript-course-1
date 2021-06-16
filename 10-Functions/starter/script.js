'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
}

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

//shit oops ive been taking notes in the wrong place
// forgot the structure lol

/*
//generic function removes paces from a given word
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};


// generic function capitalizes the first letter of any given word
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//takes a function so it is therefore a higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javasript is tehbest', upperFirstWord);

const high5 = function () {
    console.log('BIHGFIHVE ::)');
}

['jonas', 'martha', 'jim'].foreach(high5);
*/

// functions returning functinos

const greet = function(greeting){
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('jonas');
greeterHey('Steven');

greet('Hello')('billyboe');

//rewrite greet using arrow es6 functinos
const greetES6 = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
};

//lol but can be simplified down to belowe...
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetES6('howdy')('pardner');

greetArr('hola')('buddy');