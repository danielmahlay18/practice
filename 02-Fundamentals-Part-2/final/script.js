'Use strict';
/*
let hasDriversLicense = false;
const passTest = true;
if(passTest)hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive 😊');
*/
// Strict mode allows you to code and show where bugs have occurred in the code

// FUNCTIONS
/*
function logger() {
console.log('My name is Jonas');
}
// calling / running / invoking a function
logger();
logger();
logger();

function fruitProcessor(Apples, Oranges) {
console.log(Apples, Oranges);
const juice = `Juice with ${Apples} Apples and ${Oranges} Oranges.`;
return juice;
}

const appleJuice = fruitProcessor(5, 7);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// FUNCTION DECLARATION AND EXPRESSION
/*
// function declaration
function calcAge1(birthYear) {
 return 2037 - birthYear;
}

const age1 = calcAge1(1992);
*/
/*
// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;  
}
const age2 = calcAge2(1991);
console.log(age2);

// ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3); 

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
    // return retirement;
}

console.log(yearsUntilRetirement(1992, 'Jobe'));
console.log(yearsUntilRetirement(1980, 'Mitch'));
*/
/*
// FUNCTIONS CALLING OTHER FUNCTIONS
const cutPieces = function (fruit) {
    return fruit * 4;
};

function fruitProcessor(Apples, Oranges) {

    const applePieces = cutPieces(Apples);
    const orangePieces = cutPieces(Oranges);

const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
// CODING CHALLENGE #1 PART 2
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));
// TEST 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
if(avgDolphins >= 2 * avgKoalas){
    console.log(`Doplhins win the trophy 🏆 (${avgDolphins} vs. ${avgKoalas})`);
}else if(avgKoalas >= 2 * avgDolphins){
    console.log(`Koalas win the trophy 🏆 (${avgDolphins} vs. ${avgKoalas})`); 
}else{
    console.log('No Team Wins 😓');
}
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(40, 14);

// TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
// INTRODUCTION TO ARRAYS
const friends = ['Michael', 'James', 'Peter']
console.log(friends);
const y = new Array(1991, 2002, 2003, 1998);// another of writing arrays
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// to mutate(change) a value in an array, it is shown as follows;
friends[2] = 'Jacob';
console.log(friends);

const firstName = 'king Von';
const jonas = [firstName, 'Schedtmann', 2037-2003, 'Teacher', friends];
console.log(jonas)

//  EXCERCISE
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const years = [1991, 2002, 2003, 1998, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]) ]
console.log(ages);
*/
// BASIC ARRAY OPERATIONS (METHODS)
/*
const friends = ['Michael', 'James', 'Peter']

// push method adds elements to the end of an array.
friends.push('Jay');
console.log(friends);

// unshift method adds elements to the start of an array.
friends.unshift('John');
console.log(friends);

// pop method remove the last elements of an array.
friends.pop();//first removal
friends.pop();//second removal
console.log(friends);

// shift method remove the first elements of an array.
friends.shift();
console.log(friends);

// the indexOf shows the number of the element in an array.
console.log(friends.indexOf(`James`));

// the includes method returns true/false if an element is in the array. 
console.log(friends.includes(`James`));
// use cases
if(friends.includes(`James`)){
    console.log(`You have a friend called James`);
}

// TEST 2
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 const bills = [125, 555, 44];
 const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
 const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]]
 console.log(bills, tips, total);
*/
/*
//  INTRODUCTION TO OBJECTS
// in objects the order of the values do not matter at all when retrieving them
const jonas = {
    firstName: `Jonas`,
    lastName:`Drey`,
    age: 2037 - 2002,
    job: `Sensei`,
    friends: [`Michael`, `Mitchelle`, `Drake`]
};
console.log(jonas);

// DOT VS. BRACKET NOTATION----> used for getting a property from an object
console.log(jonas.lastName);
// We can also use brackets.
console.log(jonas[`lastName`]);
// use cases;
const intrestedIn = prompt(`what do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.`);
if(jonas[intrestedIn]){
    console.log(jonas[intrestedIn]);
}else{
    console.log(`Wrong Request! Choose between firstName, lastName, age, job and friends`);
}

// how to add new properties to an object
jonas.location = `Portugal`;
jonas[`Twitter`] = `@jonasdrey12`
console.log(jonas);

// challenge
// 'jonas has 3 friends and his best friend is called Michael'
console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`);
*/


/*
// OBJECT METHODS
const jonas = {
    firstName: `Jonas`,
    lastName:`Drey`,
    birthYear: 1991,
    job: `Sensei`,
    friends: [`Michael`, `Mitchelle`, `Drake`],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};
*/
// console.log(jonas.calcAge(1992));
// console.log(jonas[`calcAge`](1992));
// A better to this is to use the this. keyword
// the this. keyword can also be used to create new properties
/*
const jonas = {
    firstName: `Jonas`,
    lastName:`Drey`,
    birthYear: 1991,
    job: `Sensei`,
    friends: [`Michael`, `Mitchelle`, `Drake`],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return (`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`);
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
*/
/*
// ITERATION : THE FOR LOOP
// Loops allows us to automate repeatitive task
console.log('lifting weights repetition 1 🏋️');
console.log('lifting weights repetition 2 🏋️');
console.log('lifting weights repetition 3 🏋️');
console.log('lifting weights repetition 4 🏋️');
console.log('lifting weights repetition 5 🏋️');
console.log('lifting weights repetition 6 🏋️');
console.log('lifting weights repetition 7 🏋️');
console.log('lifting weights repetition 8 🏋️');
console.log('lifting weights repetition 9 🏋️');
console.log('lifting weights repetition 10 🏋️');


// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
 console.log(`lifting weights repetition ${rep} 🏋️`);
}
*/
// after the first result, the loop checks if the statement still holds true before printing out other results.

// LOOPING ARRAYS, BREAKING AND CONTINUING
/*
const jonas = [
     `Jonas`,
    `Drey`,
     2037 - 2002,
     `Sensei`,
    [`Michael`, `Mitchelle`, `Drake`],
    true
];
const types = []

// console.log(jonas[0]);
// console.log(jonas[1]);
// .....
// console.log(jonas[4]);
// console.log(jonas[5]); does NOT exist

for(let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);

}

console.log(types);

const years = [1991, 2002, 2004, 1997];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);
console.log('----- ONLY STRINGS -----') // The continue runs the code for typeof of jonas[i] by only selecting the strings in the array.
// CONTINUE AND BREAK
for(let i = 0; i < jonas.length; i++) {
if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('----- BREAK WITH NUMBER -----') // The break stops code from running after the first number is found.

for(let i = 0; i < jonas.length; i++) {
if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}
*/
/*
// LOOPING BACKWARDS AND LOOPS IN LOOPS
const jonas = [
     `Jonas`,
    `Drey`,
     2037 - 2002,
     `Sensei`,
    [`Michael`, `Mitchelle`, `Drake`],
    true
];

//  0,1,....4 -----> forward flow
// 4,3,.....0 -----> looping backward

for(let i = jonas.length - 1; i >= 0; i-- ) {
    console.log(i, jonas[i]);
}

// Creating a loop inside a loop
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting Exercise ${exercise}`);
    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Weight lifting Rep ${rep} 🏋️`);
    }
}
*/

/*
// THE WHILE LOOP

// for(let rep = 1; rep <= 10; rep++) {
//  console.log(`lifting weights repetition ${rep} 🏋️`);
// }

let rep = 1;
while(rep <= 10) {
//    console.log(`WHILE: lifting weights repetition ${rep} 🏋️`);
   rep++;
}
// the while loop does not need a counter

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You just rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) {
        console.log('the loop is about to end...');
    }
}
*/

/*
// CODING CHALLENGE 4
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 82, 52];
 const tips = [];
 const totals = [];
 for(let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
 }

 console.log(bills, tips, totals);

 const calcAverage = function (Avg) {
    let sum = 0;
    for(let i = 0; i < Avg.length; i++) {
        sum = sum + Avg[i];
    }
    return sum / Avg.length;
 }

 console.log(calcAverage(totals));
 console.log(calcAverage(tips));
 */