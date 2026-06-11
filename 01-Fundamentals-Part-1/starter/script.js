   /* let js = 'amazing';
      console.log(40 + 8 + 23 - 10);

      console.log('Jonas');
      console.log(23);

      let firstName ='Matilda';
      console.log(firstName);
      console.log(firstName);
      console.log(firstName);

        // Variable name conventions
        let jonas_matilda = 'JM';
        let $function = 27;

        let firstJob = 'Programmer';
        let currentJob = 'Teacher';

        console.log(firstJob);
        console.log(currentJob);
*/
/*Boolean is the data type that can only be true or false. It is used to store values that represent the truthiness of a statement or condition. For example:
boolean can also be stored in a variable

let javascriptIsFun = true;
console.log(javascriptIsFun);

// the typeof operator is used to check the data type of a value or variable.

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'WOW!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2008;
console.log(typeof year);
// The typeof operator returns 'undefined' for variables that have been declared but not assigned a value
//  and it returns 'object' for null values, which is a known bug in JavaScript.
console.log(typeof null);
*/

// Variable Declarations
// let, const and var
/*
// let is used to declare variables that can be reasssigned later
let age = 30;
age =31;

// const is used to declare variables that cannot be reassigned later
const birthYear =1998;
// birthYear = 1999; // This will cause an error because birthYear is a constant
// const cannot have empty value, it must be assigned a value when it is declared

// const job;

// var is the old way to declare variables before ES6, it is function scoped and can be reassigned and redeclared
var job = 'Programmer';
job = 'Student';
job = 'Teacher'; // var can be redeclared, which can lead to bugs and confusion in larger codebases
lastName = 'Smith';
console.log(lastName); */
/*
// BASIC OPERATORS
// operators are used to perform operations on values and variables. They can be arithmetic, assignment, comparison, logical, etc.
// math operators
const now = 2044;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 **4);
// 2**4 means 2 to the power of 4, which is 2 * 2* 2 * 2 = 16
// the + operator can be used for both addition and string concatenation
const firstName = 'Kristina';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 8; // x = 18
x += 10; // x = x + 10 = 28
x *= 4; // x = x * 4 = 112
x++; // x = x + 1 = 113
x--; // x = x- 1 = 112
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 20);
const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 1991 > now - 2018);
 */
/*
// OPERATORS PRECEDENCE
// Operator precedence determines the order in which operators are evaluated in an expression.
const now = 2044;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25-10-5); // the - operator is evaluated from left to right.
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, because the assignment operator is evaluated from right to left.
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2; // the parentheses are evaluated first, then the addition, and finally the division.
console.log(ageJonas, ageSarah, averageAge);

// BMI Calculator Test Data 1 & 2
// const massMark = 78;
// const height = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const height = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / height ** 2;
const BMIJohn = massJohn / heightJohn ** 2
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI)
*/
/*
// TEMPLATE LITERALS
const firstName = 'Kristina';
const job = 'Programmer';
const birthYear = 1998;
const year = 2024;

const kristina = "I'm " + firstName + ' a ' + (year - birthYear) + ' years old ' + job ;
console.log(kristina);
// template literals are a new way to create strings in JavaScript, they are enclosed by backticks `` and can contain placeholders for variables and expressions, which are indicated by the ${} syntax.
const kristinaNew = `I'm ${firstName} a ${year - birthYear} years old ${job}`;
console.log(kristinaNew);

console.log(`just a regular string...`);
console.log('String with \n multiple \n lines'); // the \n character is used to create a new line in a string
*/
// TAKING DECISIONS: IF / ELSE STATEMENTS
/*
const age = 15;
if ( age >= 18){
   console.log("you're old enough to get a driver's license 🚗");
} else{
   const yearsLeft = 18 - age
   console.log(`you are too young. Try again in ${yearsLeft} years 🫂`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000){
   century = 20;
   console.log(`you were born in the ${century}th century`);
} else{
   century = 21;
   console.log(`you were born in the ${century}th century`);
}
*/

// CODING CHALLENGE #2
/*
const massMark = 78;
const height = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const height = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / height ** 2;
const BMIJohn = massJohn / heightJohn ** 2
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn){
   console.log(`Mark has a higher BMI of ${BMIMark} than John's ${BMIJohn}`)
} else{
   console.log(`John has a higher BMI of ${BMIJohn} than Mark's ${BMIMark}`)
}
*/

// type conversion and coercion
/*
const inputYear='1998';
console.log(Number(inputYear), inputYear); // the number () function converts string to numbers
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion is when JavaScript automatically converts a value from one type to another, such as when you use the + operator with a string and a number, it will convert the number to a string and concatenate them.
console.log('I am ' + 23 + 'Years Old');
console.log('22' - '12' - 2);
console.log('23' * '2');

let n = '1' + 1; // 11, + turns 1 into a string and concatenates with '1'
n = n - 1; // 10, - converts 11 to a number and subtracts 1 
console.log(n);
*/
// TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money){
   console.log("Don't spend it all");
}else{
   console.log('You should get a job!');
}

let Height = 123;
if (Height){
   console.log('YAY! Height is defined');
}else{
   console.log('Height is UNDEFINED');
}
*/

// EQUALITY OPERATOR == VS ===
/*
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favourite =Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite ===23){
   console.log('Cool! 23 is an awesome number!');
}else if(favourite === 7){
   console.log('7 is also a cool number');
} else if(favourite === 9){
   console.log('9 is also a cool number');
}else{
  console.log('Number is not 23 or 7 or 9');
}
// !== checks if the value is not equal to 23
if (favourite !== 23) console.log('Why not 23?');
*/

// BOOLEAN LOGIC AND LOGICAL OPERATORS
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // a AND b
console.log(hasDriversLicense ||hasGoodVision); // a OR b
console.log(!hasDriversLicense); // A NOT


// if(hasDriversLicense && hasGoodVision){
   // console.log('Sarah is able to drive');
// }else{
   // console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
   console.log('Sarah is able to drive');
}else{
   console.log('Someone else should drive...');
}
*/
/*
// TEST CHALLENGE #3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas){
   console.log('Dolphins win the trophy');
}else if(scoreKoalas > scoreDolphins){
   console.log('Koalas win the trophy');
}else if (scoreDolphins === scoreKoalas){
   console.log('There is a Tie!');
}
*/
/*
// THE SWITCH STATEMENT
const day = 'friday'; // day === 'monday' -> true
switch (day) {
   case 'monday' :
      console.log('plan a course structure');
      console.log('go to coding meeetup');
      break;
      case 'tuesday' :
         console.log('prepare theory videos');
         break;
         case 'wednesday' :
         case 'thursday' :
           console.log('write code examples');
           break;
           case 'friday' :
            console.log('record videos');
            break;
            case 'saturday' :
            case 'sunday' :
               console.log('enjoy the weekend :D');
               break;
               default:
                  console.log('Not a valid day!');
}
// using if else statement
if (day === 'monday'){
   console.log('plan a course structure');
   console.log('go to coding meeetup');
} else if (day === 'tuesday'){
   console.log('prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday'){
   console.log('write code examples');
} else if (day === 'friday'){
   console.log('record videos');
} else if (day === 'saturday' || day === 'sunday'){
   console.log('enjoy the weekend :D');
} else{
   console.log('Not a valid day!');
}
   */

//  STATEMENTS AND EXPRESSIONS
// An expression is a piece of code that produces a value, such as 3 + 4 or true && false.
// A statement is a complete line of code that performs an action, such as if (x > 10) { console.log('x is greater than 10'); } or for (let i = 0; i < 5; i++) { console.log(i); }.

// THE CONDITIONAL (TERNARY) OPERATORS

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 🥤')
// it is mostly used like this 
const drink = age >= 18 ? 'wine 🍷' : 'water 🥤';
console.log(drink);

let drink2;
if(age >= 18){
   drink2 = 'wine 🍷' ;
}else{
   drink2 = 'water 🥤';
}
console.log(drink2);
// the ternary operator is an expression so it can be placed in a template literal
console.log(`I like to drink ${ age >= 18 ? 'wine 🍷' : 'water 🥤'}`);

// CODING CHALLENGE #4
const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, The tip was ${tip}, and the Total value ${bill + tip}`);