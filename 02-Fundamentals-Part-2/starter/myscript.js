'use strict';

//functions
//function declaration
// function frouity (mazza,cola){
//     const juse = `I have ${mazza} mazza bottles and ${cola} cola bottles`
//     return juse;
// };
 //using the functions
// const mazzacolabottles = frouity(3,4);
// console.log(mazzacolabottles);//output will be (I have 3 mazza bottles and 4 cola bottles)
 //using same line of function again and again
// const manikanta = frouity(2,6);
// console.log(manikanta);//output will be (I have 2 mazza bottles and 6 cola bottles

//function expression
// const frouity =function(mazza, cola){
//     const juise =`I have ${mazza} mazza bottles and ${cola} cola bottles`
//     return juise;
// }

// const mazzaoranges =frouity(3,2);
// console.log(mazzaoranges);

 //function declaration
// function  manikanta(birithyear){
//     const age =`Manikanta is ${2023-birithyear} year's old`
//     return age;
// };

// const manikantaage = manikanta(2004);
// console.log(manikantaage);

//function expression
// const age1=function(birthyear1){
//     const gayi=`gayi is ${2023-birthyear1} year's old`
//     return gayi;
// }

// const gayiage=age1(2005);
// console.log(gayiage);

//arrow function

// const yearsretirement =(name,year)=>{
//     const age = 2023-year;
//     const retairementage= 60-age;
//     return `${name} have left ${retairementage} years for retairement`
// }
// console.log(yearsretirement('manikanta',1985));

//calling one function inside other function
// const frouitcutpieces =function(fruit){
//     return fruit*4;
// }
// const juices = function(apples,oranges){
//     const applepieces=frouitcutpieces(apples);
//     const orangespieces = frouitcutpieces(oranges);
//     return `i have ${applepieces} of apple peases and ${orangespieces} of orange peases`
// }

// console.log(juices(3,4))

//Arrays 
// const  mani=['ravi','raju','ramu'];//array
// console.log(mani.length)//length of array is 3
// console.log(mani.length-1)//3-1=2 array of 2 is ramu 

// function manikanta(birthyear) {
//     return 2023-birthyear;
    
// }

// const year=['1999','2002','2012','2018']
// const age1 =manikanta(year[0]);
// console.log(age1)
// const age2 =manikanta(year[1]);
// console.log(age1)
// const age3 =manikanta(year[2]);
// console.log(age3)
// const age4 =manikanta(year[3]);
// console.log(age4)
// const age5 =manikanta(year[year.length-1]);
// console.log(age5);

//Object
// const mani={
//     firstname: 'manikanta',
//     lastname:  'Nandyala',
//     age:  2023-2004,
//     job: 'student',
//     friends:['ravi','raju','ramu']
// };
// console.log(mani);

//dot(.)notation in object

// console.log(mani.firstname);
// console.log(mani.lastname);

//bracket notation in object

// console.log(mani['firstname']);
// console.log(mani['lastname']);

// const choseone = prompt('what you want know about mani? chose any one of the following firstname,lastname,age,job,friends');
// if(mani[choseone]){
//     console.log(mani[choseone])
// }else{
//     console.log('wrong request! chose any one of the following firstname,lastname,age,job,friends')
// }
//console.log(`${mani.firstname} has ${mani.friends.length} friends, and his best friend is ${mani.friends[0]}`);

//function inside a object
// const mani={
//     firstname: 'manikanta',
//     lastname:  'Nandyala',
//     birthyear:  2004,
//     job: 'student',
//     friends:['ravi','raju','ramu'],
//     hasDriverlicence: true,

    // calage: function(){
    //     return 2023-this.birthyear;
    // },

    //type 2
    // calage: function(birthyear){
    //     const age=this.birthyear
    //     return 2023-age;
    // },

    //type 3
//     calage: function(){
//         this.age=2023-this.birthyear
//         return this.age;
//     },

//     getsummary: function(){
//         return `${this.firstname} is a ${this.calage()} year old ${this.job}, and he has ${this.hasDriverlicence ? 'a' : 'no'} driver license`
//     },
// };
// console.log(mani.calage());
// console.log(mani.getsummary());

//Forloop

// for (let mani = 1; mani <= 10; mani++) {
//     console.log(`lifting wight repetition ${mani}`)
    
// };

//forloop for array's
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
//     for(let i=0; i < jonas.length; i++){
//         console.log(jonas[i], typeof jonas[i]);
//     }

//filling array
// const years = [1998,2002,2004,2007];
// const ages=[];
// for(let j=0; j<years.length; j++){
//     ages.push(2023-years[j]);
// }
// console.log(ages);

//continue and break statements
// for (let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string')continue
//     console.log(jonas[i],typeof jonas[i])
    
// }

// for (let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] == 'number')break
    
// }

//array in reverse

// const jonas = [
//     'Jonas',
//      'Schmedtmann',
//      2037 - 1991,
//      'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//  ];

//  for(let i=jonas.length-1; i>=0;i--){
//      console.log(i,jonas[i])
// };

//loop in side another loop
// for(let excercise=1;excercise<=3;excercise++){
//     console.log(`This is main loop no ${excercise}`)

//     for(let j=1;j<=6;j++){
//         console.log(`This is a sub loop no ${j},in main loop ${excercise}`)
//     }
// }

//while loop
// let rep=1
// while(rep<=6){
//     console.log(`This is rep no ${rep}`)
//     rep++
// };

//dise rep randomly
// let dice=Math.trunc(Math.random()*6)+1;
// while(dice !== 6){
//     console.log(`you rolled a dice ${dice}`);
//     dice=Math.trunc(Math.random()*6)+1;

//     if(dice===6){
//         console.log(`The lopp is end because when dice is ${dice} loop whill terminate`)
//     }
// }

