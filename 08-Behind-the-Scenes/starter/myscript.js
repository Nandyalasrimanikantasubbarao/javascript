'use strict';

// function calkAge(birthyear) {
//   const age = 2023 - birthyear;
//   function printAge() {
//     console.log(`your name is ${firstname}, and age is ${age}`);
//   }
//   printAge();
//   return age;
// }

// const firstname = 'Manikanta';
// calkAge(2002);
// console.log(age);

//primitive type
let lastname = 'Manikanta';
let oldname = lastname;
lastname = 'ravi';
console.log(lastname, oldname);

//Refference type
const jessica = {
  firstname: 'jessica',
  lastname: 'williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastname = 'ravi';
console.log('Beffore marriage:', jessica);
console.log('After marriage:', marriedJessica);

//Copping object
const jessica2 = {
  firstname: 'jessica',
  lastname: 'williams',
  age: 27,
  family:['Alice','Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastname = 'ravi';
console.log('Beffore marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
