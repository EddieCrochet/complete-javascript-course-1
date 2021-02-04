'use strict';

/* SCOPING

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //creating new variable with same name as outer scope's variable
            var firstName = 'Steven';
            const str = `Oh, and you're a millenial,
             ${firstName}`;
             console.log(str);

             function add(a, b) {
                 return a + b;
             }

             //reassignig outer scope's variable
             output = 'NEW OUTPUT!';
        }
        console.log(millenial);
        console.log(output);
    }
    printAge()
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

// Hoisting and TDZ in practice

/*
// Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl(2,3));
//console.log(addExpr(2,3));
console.log(addArrow);
//console.log(addArrow(2,3));

function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a+b;
}

var addArrow = (a,b) => a + b;

//Example

if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!!!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);
*/

//console.log(this);

/*

const calcAge = function(birthYear) {
    console.log(2037- birthYear);
    //this function is undefined because of strict mode
    console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037- birthYear);
    //this function is window becasue arrow 
    //functions do not get their own this keyword
    //they point to scope above (in this case global) for this keyword
    console.log(this);
}
calcAgeArrow(1984);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(2037 - this.year)
        console.log(this);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017,
};

//COPYING METHODS/FUNCTIONS FROM ONE OPBJECT TO ANOTHER IS POSSIBLE!
// WOW!
// This is called METHOD BORROWING!
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
console.log(f);
// but if you try to call f, it will be undefined
f();
*/

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);

        //ES6 way!!! New way! Do this!
        const self = this;
        //self or that are standard names
        const isMillenial = function() {
            //this is undefined in regular function calls
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
            //console.log(this.year >= 1981 && this.year <= 1996);
        };

        /*
         //one workaround is to set the this to a self const outside said function
         const self = this;
         //self or that are standard names
         const isMillenial = function() {
             //this is undefined in regular function calls
             console.log(self);
             console.log(self.year >= 1981 && self.year <= 1996);
             //console.log(this.year >= 1981 && this.year <= 1996);
         };
         */
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey, ${this.firstName}`);
    } 
};
jonas.greet();
jonas.calcAge();