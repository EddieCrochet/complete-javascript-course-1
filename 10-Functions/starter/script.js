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

/*
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


//below accomplished the same thing as the bind above
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(23));
console.log(addVAT2(100));
*/

//////////////
// coding challenge
////////////////////////////

/*
const poll = {
    question: 'What is the best programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        // Get Answer!
        ////////////////////

        //prompt(`${this.question} \n ${this.options[0]} \n ${this.options[1]} \n ${this.options[2]} \n ${this.options[3]} \n (Please enter the option number in the box)`);
        // can do the above as below!!!

        //prompt returns the INPUT and since we are using a number as the input for the answer we will just immediately  store it as  the number
        const answer = Number(prompt(`${this.question} \n ${this.options.join('\n')}\n(Please enter the option number in the box)`));
        console.log(answer);
        
        // Register answer!!
        ////////////////////////

        typeof answer === 'number' &&
        answer >= 0 && answer <= this.answers.length &&
        //answer < this.answers.length &&
        //the program wanted me to put the line above, but my line above that is better :)
        this.answers[answer]++;
        console.log(this);

        this.displayResults();
        this.displayResults('string');
    }, 
    //method to display results on DOM
    displayResults(type = 'array'){
        if(type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
//we have to bind so that the this keyword in the object's function does NOT point to the query selector (because of the event listener), but to the poll object


// Test data for buonus!!
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

// remember the type we pass in has a default of array so if we dont specify it will be that
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

////////////
// IIFE
// these functions disapppear right after they are called

/*
const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

//basically transform functino statement into an expression that we can immediately call
//simple way to isolate variables declarations not globally

// IIFE
(function() {
    console.log('this will never run again');
});

(() => console.log('Also works the es 6 way'))();
*/

////////////////
// Closures

// we do not create closure, they happen automatically
/*
const secureBooking = function() {
    let passengerCount = 0;

    //function that return a function
    return function() {
        passengerCount++;
        console.log(passengerCount);
    }
}

// booker becomes a function that is essentially what the passengerCount returns
//they can make a function remember all variable available at functions birthpplace
// any function always has access to the variable environment of the execution context in which it was created
//th CLOSURE is basically just the variable environment attached to the function exactly was it was where it was created
// 'Closed over" variables
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

/*
// Example 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
// calling g() makes f() become a function
f();

// reassigning f function
h();
// this f function is now different from the first one
f();
console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    //this callback function is executed completely serperate but because of closures we are still able to get the variables 
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/

//coding challenge 2
//////////////////////////

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    
    document.querySelector('body').addEventListener
    ('click', function() {
        header.style.color = 'blue';
    })
})();