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