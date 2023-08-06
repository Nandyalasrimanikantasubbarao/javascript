// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const v = '23';
// if (v === 23) {
//   console.log(23);
// }
// debugging
// const calctemp = function () {
//   const measurement = {
//     type: 'name',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };
//   const value = measurement.value + 273;
//   return value;
// };

// console.log(calctemp());

//challenge
const array1 =[17,21,23];
const array2=[12,5,-5,0,4];

function printForecast(arr) {
  let str=''
  for(let i=0;i<arr.length;i++){
    str=str+`${arr[i]}C in ${i+1} days... `;
  }
  console.log('...'+str);
};
printForecast(array1);