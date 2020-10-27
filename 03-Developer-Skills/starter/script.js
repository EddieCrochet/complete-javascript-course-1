// Remember, we're gonna use strict mode in all scripts now!

'use strict';
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');
*/

///////
// CODING CHALLENGE Functions

/*
const calcAverage = (x, y, z) => (x + y + z)/3;
console.log("average for the Dolphins is: " + calcAverage(44, 23, 71));
console.log("average for the Koalas is: " + calcAverage(65, 54, 49));

//TEST 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} to ${avgDolphins}`);
    } else {
        console.log("No team wins! Hah!");
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34,27);
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

///////////
//CODING CHALLENGE 2 - ARRAYS

/*
function calcTip(value) { 
    if (49 < value < 301) {
        return value *.15
    } else {
        return value *.2
    }
}
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];
console.log(bills);
console.log(tips);
console.log(totals);
*/

////////////////////
// CODING CHALLENGE 3 - OBJECTS

const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is greater than ${mark.fullName}'s BMI (${mark.calcBMI()})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is greater than ${john.fullName}'s BMI (${john.calcBMI()})`);
}