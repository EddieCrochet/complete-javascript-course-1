'use strict';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thurs', 'Fri', 'Sat', 'Sun'];

const openingHours= {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //before es6, had to reset values to set to object property
  //openingHours: openingHours,
  openingHours,
  //ES6 ENHANCED OBJECT LITERALS WAY above :)

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //passing in a destructured object to the functio for multiple variables
  orderDelivery( {starterIndex=1, mainIndex=0, time='20:00', address} ) {
    console.log(`Order recieved!  ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

};
/*

///////////////////////
// passing args

const flight = "LH234";
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284
}


const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if(passenger.passport === 24739479284) {
    alert('Checked in!');
  } else {
    alert('wroooong');
  }
};

checkIn(flight, jonas);

// above is the same as ....
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
*/

//////////////
//String Methods Practice

/*
const flights = 
  '_Delayed_Departure;fao98683745;tx73738942;11:25 +_Arrival;bru73749568;fao98683745;11:45 +_Delayed_Arrival;hel53726587;fao98683745;12:05 +_Departure;fao98683745;lis63896572;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  //console.log(flight.split(';'));
  //unpack into variables below
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴': ''} 
    ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} 
    (${time.replace(':', 'h')})`;
  console.log(output);
}
*/

/////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
const myBtn = document.createElement('button');
myBtn.setAttribute('class', 'btn');
myBtn.textContent = 'Translate!';
myBtn.style.width = 'auto';
document.body.append(myBtn);

myBtn.addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const textArr = text.split("\n");
  textArr.forEach(function(word){
    const [first, second] = word.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(1 + textArr.indexOf(word))}`)
    //document.body.append(output);
  })
});
*/



///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
  So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" 
  (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half 
  or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


// 1.
let events = [];
for (const [key, value] of gameEvents) {
  if(!events.includes(value)) events.push(value)
}

// Can also be done by unpacking a set like...
//const events = [..new Set(gameEvents.values())];

console.log(events);

// 2. 
gameEvents.delete(64);
console.log(gameEvents);

// 3. 
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes.`);

// 4.
for(let e of gameEvents){
  if(e[0] < 45) console.log(`[FIRST HALF] ${e}`)
  else console.log(`[SECOND HALF] ${e}`)
}
*/

/*
// Can also be done...
for(const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

//////////
// MAPS ITERATION
/*

// best way to create maps from scratch - set method is good for
//progrmmatically adding more over time
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!!'],
  [false, 'Try again!']
]);
console.log(question);

//convert object to map!!!
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

//The power of having boolean as keys below
//logs correct if user inputs correct answer
console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
*/

////////////////
// MAPS FUNDAMENTALS
// we can have any type of key in maps

/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 
'Vegetarian', 'Organic']).set('open', 11).set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
//clever trick allows us to use booleans as keys
console.log(rest.get(time > rest.get('open') 
&& time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();

const arr = [1, 2];
rest.set(arr, 'TEST');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

*/

//////////////
//SETS
/*
const orderSet = new Set(['pasta', 'pizza', 'pizza',
'risotto', 'pasta', 'pizza']);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('wine'));
orderSet.add('garlic bread');
orderSet.add('garlic bread');
orderSet.delete('risotto');
// THERE ARE NO INDEXES IN SETS - NO WAY TO GET DATA OR VALUES OUT
console.log(orderSet);
//below method deletes everything from set
//orderSet.clear()

for (const order of orderSet) console.log(order);

//main use of sets is to remove duplicates from arrays

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager',
'Chef', 'Waiter'];

// unpack set into a new array - then can compare arrays
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager',
'Chef', 'Waiter']).size);

console.log(new Set('hfbejhbahrfyhrejkl').size);
*/

////////////////////
//'football'/soccer game for the coding challenges
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'dowell', 'Hummels', 'Lewandowski', 'Lewandowski', 'Gnarby', 'Hummels', 'dowell', 'jane', 'Lewandowski', 'Gnarby', 'Lewandowski', ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// 1.
/*
for(let i = 0; i < game.scored.length; i++){
  console.log(`Goal ${i+1}: ${game.scored[i]}`);
}

// They did it a little cooler tbh...
for(const [j, player] of game.scored.entries()){
  console.log(`Goal ${j+1}: ${player}`);
}

// 2.
// my way
let sum=0;
for(let odd in game.odds) sum+=game.odds[odd];
let average=sum/Object.keys(game.odds).length;
console.log(average);

// THIS IS THE WAY THEY DID NUMBER 2 BELOW
// my way looks more efficient :)
const odds = Object.values(game.odds);
let avrg = 0;
for(const odd of odds) avrg += odd;
avrg /= odds.length;
console.log(avrg);

// 3.
// We need the team name AND the score - WHOLE OBJECT!
// this is how we know to use a for of loop
for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//BONUS
game.scorers = {};
for(const [k, player] of Object.entries(game.scored)){
  if(Object.keys(game.scorers).includes(player)) game.scorers[player] ++;
  else game.scorers[player] = 1;
}
console.log(game);

*/

// notes???

/*
if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are going to open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr);

// Propert VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// immediately destructure in for of loop below
for(const [key, {open, close}] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}


// WITH OPTIONAL CHAINING
//makes easier to check for bugs we might not otherwise know about
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

for( const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}!`);
}

// METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderFood?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];

console.log(users[0]?.name ?? 'User array empty...');

// ...above is way better than below...
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty...');
*/

/////////////////
// for-of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// OLD SCHOOL WAY
for(const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// USING DESTRUCTURING
for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
  For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and 
  one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
  ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
  and prints each of them to the console, along with the number of goals that were scored in total
   (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more 
  likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
///////////
//my work below
/*
//1. 
//We serperate the nested 2d array into 2 different arrays while keeping our old data intact and unchanged
const [players1, players2] = game.players;
console.log(players1, players2);

//2. 
const [gk, ...fieldPlayers] = players1;
//putting goalkeeper in his own variable while the rest of players go in own array
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
//putting all players in one array
console.log(allPlayers);

//4.
//substituting in new players to team1
const players1Final = [...players1, 'Thiago', 'Coutino', 'Perisic'];
console.log(players1Final);

//5.
const {
  odds: {team1, x: draw, team2}
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored!`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

*/

////////////////
//Nullish coalescing operator
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
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