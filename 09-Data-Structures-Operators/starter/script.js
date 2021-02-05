'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //passing in a destructured object to the functio for multiple variables
  orderDelivery: function( {starterIndex=1, mainIndex=0, time='20:00', address} ) {
    console.log(`Order recieved!  ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//DESTRUCTURING OBJECTS
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName, 
  openingHours: hours, 
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

const{ menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables with objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};

//JS always expects a code block with curly braces, so
//to get around this just wrap the object in parenthesis!
({a, b} = obj);
console.log(a, b);

//Nested objects
const {fri: {open: o, close: c} } = openingHours;
console.log(o, c);


//DESTRUCTURING ARRAYS
/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//this is destructuring, thats it - unpacking to work with data
const [x,y,z] = arr;
console.log(x,y,z);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

//below switches the variables with out destructuring
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);

//SWITCHING TRICK UTILIZING DESTRUCTURING!!!
[main, secondary] = [secondary, main];
console.log(main, secondary);

//using our function that returns an array and destructuring that fr the customer order

//USE THIS TRICK TO RECIEVE 2 RETURN VALUES FROM A FUNCTION

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
//const [i, j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
//DESTRUCTURING-CEPTION
console.log(i, j, k);

//Defaolt values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/