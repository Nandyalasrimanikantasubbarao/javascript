'use strict';

// const { set } = require('express/lib/application');

// Data needed for a later exercise

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
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
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderpasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${(ing1, ing2, ing3)}`);
  },
};
restaurant.orderDelivery({
  time: '1:20',
  address: 'avidi',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'rajamundry',
  starterIndex: 1,
});

const rest = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'Manikanta',
  owner: 'linkage',
};

//Strings
const airline = 'Air to India';
const planeNo = 'B8291';

//to get particular element in the string
console.log(planeNo[0]);
console.log(airline[1]);

//to get length in string
console.log(airline.length);
//to get index number
console.log(airline.indexOf('A'));
//slice method (it remove untill the number)
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

//fixing capitalization in name
const pasinger = 'ManI';
const PasingerLower = pasinger.toLowerCase(pasinger);
const pasingerCorrect = PasingerLower[0].toUpperCase() + PasingerLower.slice(1);
console.log(pasingerCorrect);

//Comaring Emails example
const email = 'manikanta@292';
const loginMail = '  maniKaNta@292';

const CorrectEmail = loginMail.toLowerCase().trim();
console.log(CorrectEmail);

//Replacing
const Announcement =
  'All passengers come to boarding door 23.Boarding door 23!';
console.log(Announcement.replaceAll('door', 'gate'));

//Bolean Methods
const plane = 'B293a';
console.log(plane.includes('B29'));
console.log(plane.startsWith('B'));

//Practice Execercise
function checkBaggage(items) {
  const bag = items.toLowerCase();
  if (bag.includes('knife') || bag.includes('gun')) {
    console.log('You are not allowed');
  } else {
    console.log('Wellcome to on board');
  }
}
checkBaggage('I have some food,a pen and a knife for safty ');
checkBaggage('I have gun and camera');
checkBaggage('I have some food,a pen ');

//split method in string
console.log('a+very+nice+string'.split('+'));
const [firstname, lastname] = 'Sri Manikanta'.split(' ');
const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

function capitalizeNames(name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
}

capitalizeNames('sri manikanta subbarao');

//paddimg
const message = 'Manikanta';
console.log(message.padStart(15, '+').padEnd(30, '+'));
function cadNum(num) {
  const str = num + '';
  const Number = str.slice(-4);
  console.log(Number.padStart(str.length, '*'));
}
cadNum(82725188);

//Repeat
const messag = 'Weather is not good...please stay in your houses.'.repeat(3);
console.log(messag);

function alert(n) {
  console.log(`There are ${n} plane in line for landing ${'✈️'.repeat(n)}`);
}
alert(3);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getcode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ' '} ${type.replaceAll(
    '_',
    ' '
  )}  ${getcode(from)} ${getcode(to)} (${time.replace(':', 'h')})`.padStart(
    43,
    ' '
  );
  console.log(output);
}
// //map
// const map_1 = new Map();
// //add values to Map
// map_1.set('name', 'mandi Restorent');
// map_1.set('address', 'ravilapalem');
// map_1.set('open', 8);
// map_1.set('close', 21);
// map_1.set(true, 'we are open');
// map_1.set(false, 'we are closed');
// console.log(map_1);
// const time = 13;

// console.log(map_1.get(time > map_1.get('open') && time < map_1.get('close')));

// //set
// const set_1 = new Set(['mani', 'ravi', 'mani', 'raju', 'ravi', 'mani']);

// console.log(set_1);
// //to know the set size
// console.log(set_1.size);
// //to know the element which is present in the set
// console.log(set_1.has('mani'));
// //to add the element in to the set
// console.log(set_1.add('giri'));
// //to delete the element
// console.log(set_1.delete('ravi'));

// const arr = ['mani', 'ravi'];
// console.log(arr);
// console.log(arr.pop('ravi'));
// //property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let opendays = `We are open on ${properties.length} days:`;
// //for of loop
// for (const day of Object.keys(openingHours)) {
//   opendays += `${day},`;
// }

// console.log(opendays);

// //property values
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
//otional chaining
// console.log(restaurant.openingHours.mon?.open);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

//or assignment operator
// rest2.numGuests = rest.numGuests || 10;
// rest.numGuests = rest2.numGuests || 10;

// rest.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest);
// console.log(rest2);
// restaurant.numGuests=0;
//Nullish: null and undefined (Not or '')
// const guest2 = restaurant.numGuests ?? 10;
// console.log(guest2);
// console.log('----or---');
// //use Any data type , return any data type,short - circuting
// console.log(3 || 'mani');
// console.log(true || 0);

// //AND operator '&&'

// console.log('---- And-----');
// console.log(0 && 'Mani');

//adding new elements in array
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// //by using spread operator
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'chiken biriyani'];
// console.log(newMenu);

// const mainmenucopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// const ingredients = [
//   prompt("Let's make pasta! ingredients 1?"),
//   prompt('ingredients 2?'),
//   prompt('ingredients 3?'),
// ];
// console.log(ingredients);
// restaurant.orderpasta(ingredients[1], ingredients[2], ingredients[3]);
// restaurant.orderpasta(...ingredients);

// const newRestaurent = {
//   foundedIn: 1990,
//   ...restaurant.categories,
//   founder: 'Guiseppe',
// };
// console.log(newRestaurent);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1
// const [player1, player2] = game.players;
// console.log(player1, player2);

// //2
// const [gk, ...fieldPlayers] = player1;
// console.log(gk);

// //3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// //4
// const players1Final = [player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// //5
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// const final = [team1, draw, team2];
// console.log(final);

// //6
// const printGoals = function (...players) {
//   const player = players.length;
//   console.log(`${player} goals were scored`);
// };

// printGoals('Davies');

// //7
// // if (team1 < team2) {
// //   console.log('team1 win');
// // } else {
// //   console.log('team1 win');
// // }

// console.log(team1 < team2 ? 'team1 win' : 'team1 win');

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
//1

// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}:${player}`);
// }

// //2
// let average = 0;

// for (const odd of Object.values(game.odds)) average += odd;

// average /= Object.values(game.odds).length;
// console.log(average);
