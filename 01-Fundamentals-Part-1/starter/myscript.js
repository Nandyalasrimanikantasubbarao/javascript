//operators
//arithmetic operators

/*const mani = 928-829;
console.log(mani);

const now = 383;
const maniage=now-292;
console.log(maniage,mani)

//adding two names
const firstname='mani';
const secondname='kanta';
console.log(firstname+secondname)

//adding tow names with spaces between them
const firstnamee='mani';
const secondnamee='kanta';
console.log(firstnamee+' '+secondnamee)

//assignment operators

const b = 5*9;
console.log(b);

let x=10+29;//39
x +=10;//x=10+39
x *=2;//x=49*2
x++;//x=x+1
x--;//x=x-1
console.log("x="+x)//x=x value

//comparition operator
console.log(mani > maniage);//>,<,>=,<=,>=,<=,>=,<=,>)

const ravi=now-92;
const roju=now-89;
console.log(now-92 > now-89);

//strings
//OLDER why of string
const myname = 'manikanta';
const age =2004;
const job='student';
const currentyear=2023;

const manikanta = 'My name is '+ myname + ". I'm " +(currentyear-age)+' year old '+ job+'.';
console.log(manikanta);

//new why ES6 
const mani2 =`My name is ${myname} . I'm ${currentyear-age} years old ${job}.`;
console.log(mani2);

console.log( ` This is\n\ a \n\ multiline \n\ comment`);
*/

//if/else statements
/*
const age =17;
if(age >= 18){
    console.log('You can apply for driving licence' ); 
}
else{
    console.log(`you need to wait ${18-age} years to get driving licence.`)
}
*/

/*
//Type conversion
let n = '13';
console.log(Number(n) + 14);

let a ='14';//string 14
console.log(String(a)+ '7');//string 14+7=147

//Type conversion

//string accept '+' operator js automatically convert number to string this is called Type conversion
console.log('13'+1)//string13+number1=131
//string accept '-' operator js automatically convert string to number this is called Type conversion
console.log('13'-1)//string13-number1=12

let c='11'//string 11
c=c+1//string 11+number 1=111
console.log(c-1)//111-1=110
//truthy and falsey values
//falsy values are 5 type 
//0,'',undefined,null,NaN
console.log(Boolean(0))
//falsy values for boolean function
let m=0;
if(m){
    console.log('0 is a true value ')
}
else{
    console.log('0 is a falsy value that"s why else block executed');
}

let mani;
if(mani){
    console.log('mani value is defined. it"s true value that why if block is executed ')
}
else{
    console.log('mani value is undefined it"s false value that why else block is executed');
}
*/
/*
let favorite= prompt('what is your favorite number?');
console.log(`your favorite number is ${favorite} `)
*/
// //equality operator
// let n=prompt('enter your favorite number')
// if(n===18){
//     console.log('18 is amazing number');
// }else{
//     console.log(`${n} is amazing number`)
// }

//logical operator
// const  manilicence =true;
// const  manihasbike=true;
// console.log(manilicence && manihasbike);
// console.log(manihasbike || manilicence);
// console.log(!manihasbike && manilicence);

// const manihelmet = false;
// if(manilicence && manihasbike || !manihelmet){
//     console.log('mani can drive..')
// }
// else{
//     console.log("mani con't drive..")
// }

//switch statement (alternative of else if)
// const day= 'Sunday';

// switch(day){
//     case 'Monday':
//         console.log('reading the books');
//         console.log('watching movies');
//         break;
//     case 'Tuesday':
//         console.log('complete the given work');
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log('work on javascript');
//     case 'Friday':
//         console.log('going to collage');
//     case 'Saturday':
//     case 'Sunday':
//         console.log('enjoying the weekends');
//         break;
//     default:
//         console.log('Not a valid day')
// };

//else if for above example
// const day = 'Sunday';
// if(day ==='Monday'){
//     console.log('reading the books');
//     console.log('watching movies');
// }else if(day === 'Tuesday'){
//     console.log('complete the given work');
// }else if(day=== 'Wednesday' || day==='Thursday'){
//     console.log('work on javascript');
// }else if(day === 'Friday'){
//     console.log('going to collage');
// }else if(day ==='Saturday' || day ==='Sunday'){
//     console.log('enjoying the weekends');
// }
// else{
//     console.log('invalid day')
// } ;

//ternary operator
const age = 15;
const drink= age>= 20 ? 'I like to drink water'
: 'I like to drink cola'
console.log(drink);

//or

console.log(`${age>= 20 ? 'I like to drink water'
: 'I like to drink cola'}`)










