'use strict';

/*
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
*/

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

/*
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
*/

//////////
// call and apply methods


// CALL

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LM',
    bookings: [],
    //use the call method here to avoid copy and pasting this function to similar objects
    book(flightNum, name) {
        console.log(
            `${name} booked a fight on ${this.airline} flght ${this.iataCode}${flightNum}`
            );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, 
        name });
    },
};

lufthansa.book(239, 'Jonas Schmeddt');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//does NOT work
//book(23, 'sara w');

//think of it like saying 'the book function/method, but I want to call it on
// whatever new objct I pass in' or something
book.call(eurowings, 23, 'sara w');
console.log(eurowings);

book.call(lufthansa, 239, 'mary c');
console.log(lufthansa);

const swiss = {
    airline:'Swiss Air Lines',
    iataCode: 'LX', 
    bookings: [],
};

book.call(swiss, 583, 'Mary kreezie');
console.log(swiss);

//APPLY

//similar to call, but does not recieve list of args after this keyword,
// but instead will take an array of the arguments

const flightData = [583, "goerge c"];
book.apply(swiss, flightData);
console.log(swiss);

//apply has pretty much been replaced with....

book.call(swiss, ...flightData);
console.log(swiss);

// bind method

//returns new function where this keyword is set to whatever object you pass in
//this way is preferred as it allows you to set the this keyword NOW 
// and call the function when you like
const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Swteve clean');

// double-bind for more specificity!
// this is a pattern known aas partial application
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas j');
bookEW23("marty cro");

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
//lufthansa.buyPlane();
document.querySelector('.buy').addEventListener
('click', lufthansa.buyPlane.bind(lufthansa));

//PARTIAL APPLICATION

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

//where the VAT stands for a specific tax rate of 23%
const addVAT = addTax.bind(null, 0.23);
// same as below
// addVAT = value => value + value * 0.23;

console.log(addVAT(23));
console.log(addVAT(100));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(23));
console.log(addVAT2(100));