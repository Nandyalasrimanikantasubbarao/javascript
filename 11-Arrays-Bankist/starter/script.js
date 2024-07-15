'use strict';

// const { forEach } = require('angular');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const diaplyMoments = function (moments) {
  containerMovements.innerHTML = '';
  moments.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
         
          <div class="movements__value">${mov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcSummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)

    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(names => names[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

const calBalence = function (movements) {
  const balence = movements.reduce((acc = 0, cur) => acc + cur);
  labelBalance.innerHTML = `${balence} EUR`;
};

let currentAccount;

btnLogin.addEventListener('click', function (event) {
  // prevent the default nature of html element
  event.preventDefault();
  // console.log('login');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.innerHTML = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display movements
    diaplyMoments(currentAccount.movements);
    // displayMovements(currentAccount.movements);

    // Display balence
    calBalence(currentAccount.movements);
    // Display summary
    calcSummary(currentAccount);
  }
});

// Event Handlers

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogskate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const Julia = [3, 5, 2, 12, 7],
//   Kate = [4, 1, 15, 8, 3];

// function finalcorrecte(finalJulia) {
//   const corrected = finalJulia.slice(0);
//   let corrected1 = corrected.splice(-2);
//   let corrected2 = corrected.reverse();
//   let corrected3 = corrected.splice(-1);
//   return corrected.reverse();
// }
// const checkDogs = function (dogsJulia, dogskate) {
//   const corrected = finalcorrecte(dogsJulia);
//   const dog = [...corrected, ...dogskate];

//   dog.forEach(function (dogAge, i) {
//     if (3 <= dogAge) {
//       console.log(
//         `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs(Julia, Kate);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Map method
// const eurToUsd = 1.1;
// // useing normal function
// // const movement = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// // useing arrow function
// const movement = movements.map(mov => mov * eurToUsd);

// useing normal function

// const movDescription = movements.map(function (mov, i, arr) {
//   if (mov > 0) {
//     return `Moment ${i + 1} You Deposited ${mov}`;
//   } else {
//     return `Moment ${i + 1} you Withdraw ${Math.abs(mov)}`;
//   }
// });

// console.log(movDescription);
// useing arrow function and ternery operator
// const movDescription = movements.map(
//   (mov, i) =>
//     `Movements ${i + 1}: ${
//       mov > 0 ? 'You Deposited' : 'you Withdraw'
//     } ${Math.abs(mov)}`
//   // if (mov > 0) {
//   //   return `Moment ${i + 1} You Deposited ${mov}`;
//   // } else {
//   //   return `Moment ${i + 1} you Withdraw ${Math.abs(mov)}`;
//   // }
// );

// console.log(movDescription);
// console.log(movement);
// console.log(movements);
/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice
// console.log(arr.slice(2));
// console.log(arr.slice(1, -1));
// console.log(arr);

// // Splice
// console.log(arr.splice(2));
// console.log(arr);

// // Reverce
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['z', 'y', 'x', 'v', 'u'];
// console.log(arr2.reverse());
// console.log(arr2);

// // concat
// const letters = arr.concat(arr2);
// console.log(letters);
// // or
// console.log([...arr, ...arr2]);

// // join
// console.log(letters.join('-'));

// // new array method
// const arr = [23, 25, 65];
// console.log(arr[0]);
// //or
// console.log(arr.at(0));
// console.log(arr.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // here I is to get index
// // for of loop
// for (const [i, moment] of movements.entries()) {
//   if (moment > 0) {
//     console.log(`Moment ${i + 1} You Deposited ${moment}`);
//   } else {
//     console.log(`Moment ${i + 1} you Withdraw ${Math.abs(moment)}`);
//   }
// }

// console.log('----ForEach----');
// // for Each loop
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Moment ${i + 1}: You Deposited ${mov}`);
//   } else {
//     console.log(`Moment ${i + 1}: you Withdraw ${Math.abs(mov)}`);
//   }
// });

// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} , ${value} `);
// });

// const set = new Set(['INR', 'INR', 'USD', 'YEN']);
// currencies.forEach(function (value, _, map) {
//   console.log(`${value} , ${value}`);
// });

// filter
// const move = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(move);

// const withDrawals = movements.filter(function (mov, i) {
//   return `at index: ${i} is less than ${mov < 0}`;
// });
// console.log(withDrawals);

// Reduce
// const balence = movements.reduce(function (acc = 0, cur, i, arr) {
//   console.log(`Iteration ${i} :${acc}`);
//   return acc + cur;
// });
// console.log(balence);

// Getting max value using reduce method
// const max = movements.reduce(function (acc = movements[0], cur) {
//   if (acc > cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// });
// console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calcAverageHumanAge = function (ages) {
//   const humanage = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const filt = humanage.filter(age => age > 18);
//   const hum_avg = filt.reduce((acc, cur, i) => acc + cur);
//   console.log(humanage);
//   console.log(filt);
//   return hum_avg;
// };

// const ages1 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(ages1);

// const eurToUsd = 1.1;
// const totalDip = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov);
// console.log(totalDip);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))

//     .filter(age => age > 18)
//     .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);
// const calage1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const calage2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(calage1, calage2);

// find method
const firstWithdrew = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrew);

const findAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(findAccount);
