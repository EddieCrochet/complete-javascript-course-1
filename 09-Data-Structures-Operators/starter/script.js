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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
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

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/////////////
//SHORT CIRCUIITING
/*
console.log('------------ OR -----------------');
//Use ANY data type to return ANY data type - SHORT CIRCUITING!!!
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//easier to set default values this way instead of ternary operator
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------------ AND -----------------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooom', 'spinach');
}

//quick replace for very simple if statements
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


*/
////////////////////////
//REST OPERATOR

/*
//in arrays...

// SPREAD is on the right side of =
const arr = [1, 2, ...[3, 4]];

// REST because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

//in objects...
const {sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);


// IN FUNCTIONS


const add = function(...numbers) {
  let sum = 0;
  for(var i=0;i<numbers.length;i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(7, 2, 9, 4, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('cow', 'berry', 'potato');
restaurant.orderPizza('mashroom');

*/

//SPREAD OPERATOR
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr)

//make copy of arr but add to old one for it with spread operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
const starterMenuCopy = [...restaurant.starterMenu];

//join 2 arrays
//const menu = mainMenuCopy.join(starterMenuCopy);
//above prints all - below puts in one common array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

//Iterables: strings, arrays, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//real world example
const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
prompt('Ingredient 2?'),
prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


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

*/

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