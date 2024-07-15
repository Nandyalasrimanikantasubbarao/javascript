'use strict';
// const bookarr = [];

// // default parameters
// function flightBooking(
//   flightname,
//   numpasingers = 1,
//   price = 199 * numpasingers
// ) {
//   // es5 version
//   //   numpasingers = numpasingers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightname,
//     numpasingers,
//     price,
//   };
//   console.log(booking);
//   bookarr.push(booking);
//   console.log(bookarr);
// }

// flightBooking('B101');
// flightBooking('B101', undefined, 400);

// const flight = 'B201';
// const pasingers = {
//   name: 'Sri Manikanta',
//   passport: 20384633,
// };

// function checkIn(flightNum, pasingerName) {
//   flightNum = 'B536';
//   pasingerName.name = 'Mr' + pasingerName;
//   if (pasingerName.passport == 20384633) {
//     alert('CheckIn');
//   } else {
//     alert('Wrong Passport!!');
//   }
// }

// // checkIn(flight, pasingers);
// // console.log(flight);
// // console.log(pasingers);

// function newPassport(person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// }
// newPassport(pasingers);
// checkIn(flight, pasingers);

// function oneWord(str) {
//   return str.replaceAll(' ', '').toLowerCase();
// }

// function upperFirstWord(str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// }

// // higher order function
// function transformed(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string : ${fn(str)}`);
//   // to get the name of the functin which we calling
//   console.log(`Transformed by :${fn.name}`);
// }
// transformed('Javascript is the best!!', upperFirstWord);
// transformed('Javascript is the best!!', oneWord);

// // Js uses calbacks all the times
// function high5() {
//   console.log('😊');
// }
// document.body.addEventListener('click', high5);

// // normal function return other function
// function greet(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greetHi = greet('Hi');
// greetHi('Ravi');

// // In arrow function return other arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// const greethey = greetArr('hey');
// greethey('Manikanta');

// // This keyword
// const airIndia = {
//   airline: 'AirIndia',
//   iatacode: 'AI',
//   bookings: [],
//   book(flightname, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight name ${flightname} and code is ${this.iatacode}`
//     );
//     this.bookings.push({ flight: `${this.iatacode}${flightname}`, name });
//   },
// };
// airIndia.book(201, 'Manikanta');
// console.log(airIndia);

// const airAisa = {
//   airline: 'airAisa',
//   iatacode: 'AA',
//   bookings: [],
// };

// const book = airIndia.book;
// // Does not work
// // book(23,'Manikanta')

// // call method
// book.call(airAisa, 203, 'Ravi');
// // console.log(airAisa);

// book.call(airIndia, 203, 'Raju');
// console.log(airIndia);

// const swiss = {
//   airline: 'Swiss air lines',
//   iatacode: 'Lx',
//   bookings: [],
// };

// book.call(swiss, 203, 'Rani');
// // console.log(swiss);

// // Apply method
// const flightData = [504, 'mani'];
// book.apply(swiss, flightData);
// // console.log(swiss);

// // work same as apply method
// book.call(swiss, ...flightData);

// //bind method
// const AI = book.bind(airIndia);
// const AA = book.bind(airAisa);
// const bookSw = book.bind(swiss);
// AI(123, 'Bulli');

// //Presetting one argument using bind method
// const bookEW23 = book.bind(airAisa, 23);
// // flightnumber  is preset to 23
// bookEW23('Raviteja');
// bookEW23('Chinnu');

// // with Event listeners
// airIndia.planes = 300;
// airIndia.buyPlanes = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', airIndia.buyPlanes.bind(airIndia));

// // partial aplications
// const addTAX = (rate, value) => value + value * rate;

// const addVAT = addTAX.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(230));

// //funtion return other function in the form of arrow function
// const greetArr = rate => value => value + value * rate;

// const addvater = greetArr(0.23);
// console.log(addvater(1234));

// //funtion return other function in the form of normal function
// const addtaxer = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const taxer = addtaxer(0.23);
// console.log(taxer(7468));

///////////////////////////////////////
// Coding Challenge #1

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
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3,
   increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number 
   and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string 
as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply
 display the results array as it is, using console.log(). This should be the default option. 
 If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array'
 and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // get answer
//     const answer = Number(
//       prompt(
//         `${this.question} \n ${this.options.join('\n')}\n (write option number)`
//       )
//     );
//     console.log(answer);

//     // register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResult();
//     this.displayResult('string');
//   },
//   displayResult(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // bonus
// poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// // Immediately invoked function expresion(IEFE)
// (function () {
//   console.log('this is runs only onces');
//   const isprivate = 23;
// })();

// // alternative
// {
//   const isPrivate = 30;
// }
// we cant access the isprivate variable because it is in other scope
// we use this mostly for security that it doent show to others for only developers
// console.log(isPrivate);

// closures setuation
const booker = function () {
  let pasingers = 0;
  return function () {
    pasingers++;
    console.log(`${pasingers} pasingers`);
  };
};

const book = booker();
book();
book();
book();

// clousers setuation examples
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
