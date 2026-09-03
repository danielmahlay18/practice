'use strict';

// Default Parameters

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price
  };
  bookings.push(booking);
  console.log(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

// How passing Arguements work: Values VS Reference
const flight = 'LH234';
const info = {
    name: 'David Smith',
    passport: 22433578994
};

const checkIn = function(flightNum, passenger) {
flightNum = 'LH944';
passenger.name = 'Mr.' + passenger.name;

if (passenger.passport === 22433578994) {
    alert('Checked in')
} else {
    alert('Wrong Passport!')
}
};

checkIn(flight, info);
console.log(flight);
console.log(info);

// is the same as doing...
const flightNum = flight;
const passenger = info;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(info);
checkIn(flight, info);
*/

// Javascript does not have passing by reference, it has passing by value.
// The value of the reference is passed, not the reference itself.

//////////////////////////////////////////////////////////////////////////////////

// First-Class and Higher-Order Functions
// First-Class Functions: Functions are treated as first-class citizens in JS.
// They can be stored in variables, passed as arguments to other functions, and returned from functions.
// Higher-Order Functions: A function that receives another function as an argument, returns a new function, or both.
// first-class functions are a prerequisite for higher-order functions.


/*
// Functions Accepting Callback Functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};
*/

/////////////////////////////////////////////////////////////////
/*
// Higher-order function
const transformer = function(str, fn) {
console.log(`Original string: ${str}`);    
console.log(`Transformed string: ${fn(str)}`);

console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); // JAVASCRIPT is the best!
transformer('JavaScript is the best!', oneWord); // javascriptisthebest!

// JS uses callbacks all the time
const high5 = function() {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['james', 'martha', 'adam'].forEach(high5);

const oya = function( ) {
    console.log('oya');
};
document.body.addEventListener('click', oya);


// Functions Returning Functions
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('John');
greeterHey('Steven');

greet('Hello')('David');

// challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Dave');
*/
////////////////////////////////////////////

// The Call and Apply methods
/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    Bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.Bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    }
};

lufthansa.book(239, 'David Smith');
lufthansa.book(635, 'John Doe');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    Bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); // This will not work because the 'this' keyword is undefined in this context.

// The Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    Bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//  The Apply Method
const flightData = [585, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// The Apply method is not used much in modern JS, instead we use the Call method with the spread operator.
book.call(swiss, ...flightData);

/////////////////////////////////////////

// The Bind Method
// The bind method returns a new function where the 'this' keyword is bound to the object we pass in as an argument.
// It does not immediately call the function, but instead returns a new function that can be called later.

const bookEW = book.bind(eurowings);
const bookLH =book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Strange');
bookLH(239, 'Tony Parker');
bookLX(583, 'Mary Barnes');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('John Smith');
bookEW23('Mary Cooper');
// partial application means fixing some of the arguments of a function, which can be useful for creating specialized functions.

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    
    this.planes++;
    console.log(this.planes);
// lufthansa.buyPlane();
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// The bind method is used here to ensure that the 'this' keyword inside the buyPlane function refers to the lufthansa object, even when the function is called as an event handler.

// Partial Application: we can pre-set parameters for a function using the bind method.
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // We set the rate to 0.23 and leave the value to be set later.
// same as doing: const addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// simple challenge: create a function that returns a function that adds a tax rate to a value.
const addTaxRate = function(taxRate) {
    return function(value) {
        return value + value * taxRate;
    };
};
const newAddVAT = addTaxRate(0.33);
console.log(newAddVAT(100));
console.log(newAddVAT(23));
*/

// Coding Challenge #1: Poll App

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get the answer from the user
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register the answer
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
},

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);

        } else if (type === 'string') {
            // poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        };
    },
};

// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// bonus test data
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
/////////////////////////////////////////////////////////////////////////////////////////
*/

/*
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// IIFE is a function that is executed immediately after it is defined.
// It is a function that is defined and called at the same time.


const runOnce = function() {
console.log('this will never run again');
};
runOnce();

// IIFE
(function() {
    console.log('this will never run again');
    const isPrivate = 23;
})();
// console.log(isPrivate); // ReferenceError: isPrivate is not defined

(() => console.log('this will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate); // ReferenceError: isPrivate is not defined
console.log(notPrivate); // 46

// CLOSURES
const secureBooking =  function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
// closures are a very important concept in JavaScript. They allow a function to access variables from an outer function even after the outer function has returned.
// This is possible because the inner function maintains a reference to the variables of the outer function, creating a closure.
*/


/*
// CLOSURE EXAMPLES
// Example 1
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    };
};

const h =  function() {
    const b =  44;
    f =  function() {
        console.log(b * 2);
    }
};

g();
f(); // 46

// Re-assigning f function
h();
f(); // 88
console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`We will start boarding in ${wait} seconds`);
};

// const perGroup = 100; // This variable is in the global scope, but it will not affect the perGroup variable inside the boardPassengers function because of closures.
boardPassengers(180, 3);
*/
//////////////////////////////////////

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();