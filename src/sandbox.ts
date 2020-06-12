// // // //types in typescript
// // // let character = 'mario'; //this is always a string

// // // //let var or const
// // // let age = 30;
// // // let isBlackbelt = false;

// // // //character = 20 //type cannot be changed
// // // character = 'saurav'; //this is ok

// // // //age = 'yoshi'; //cannot be done

// // // const circ = (diameter: number) => {
// // //   return diameter * Math.PI;
// // // };

// // // //console.log('hello'); this will be a error

// // //arrays and object types
// // // //arrays
// // // let names = ['saurav', 'ganguly', 'yoshi'];
// // // names.push('this is ok');
// // // let numbers = [23, 56, 34];
// // // // numbers.push("dauv") this does not work

// // // let mixed = ['ken', 4, true, 'saurav'];
// // // mixed.push('saurv'); //now this is ok
// // // mixed[0] = true;

// // // //objects
// // // let ninja = {
// // //   name: 'mario',
// // //   belt: 'black',
// // //   age: 30,
// // // };

// // // //ninja = 78 //not possible
// // // //ninja.name = 78 not possible

// // // ninja.name = 'saurav'; //this is ok
// // // //ninja.age = "40"
// // // //ninja.skilles = "new" not possible

// // // ninja = {
// // //   name: 'yoshi',
// // //   belt: 'orange',
// // //   age: 40,
// // // }; //this is ok

// // //explicit and unions

// // //explicit types
// // let character: string;
// // let age: number;
// // let isLoggedIn: boolean;

// // //age = 'luigi' this is wrong
// // isLoggedIn = false;

// // //arrays
// // let ninjas: string[]; //this is array of string
// // // wrong ninjas = [10, 23]

// // //mixed array
// // //union type
// // let mixed: (string | number)[] = [];
// // mixed.push(67);
// // mixed.push('saurav');
// // // mixed.push(true) not possible
// // console.log(mixed);

// // let uid: string | number; //union type it can be a string or a number

// // //object
// // let ninjaOne: object;
// // ninjaOne = { name: 'saurav', age: 30 };

// // let ninjaTwo: {
// //   //defining the type of object
// //   name: string;
// //   age: number;
// //   beltColor: string;
// // };

// // ninjaTwo = {
// //   name: 'saurav',
// //   age: 20,
// //   beltColor: 'yeellow',
// // };

// //dynamic type : any
// // let age: any = 25;
// // age = 'saurav'; //this is ok

// // let mixed: any[] = [];
// // mixed.push(5);
// // mixed.push('saurav');
// // mixed.push(true);

// // let ninja: { name: any; age: any };

// console.log('text');

//initialize a tsc config using --> tsc init

//function type
///greet = 'hello0'

// let add: Function;
// add = (a: number, b: number, c: number | string = 10) => {
//   // this returns void
//   //? makes it optional
//   //= provides a default value
//   //default params in the end
//   console.log('c', c);
//   console.log(a + b);
// };
// add(5, 10);

// //add: function

// const minus = (a: number, b: number): number => {
//   return a + b;
// };

// let result = minus(10, 7);

// // result = "something" //this must be a number

// //type alisis
// type StringOrNum = string | number;
// //this can then be easily used again
// type objWithName = { name: string; uid: StringOrNum };

//fuction type signatures
//let greet : Function

//example 1
let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// }; this is ok

// greet = (name: string, b: number) => {}//not ok

// //exaple 2
// let calc: (a: number, b: number, c: string) => number;

// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action == 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// };

//example 3
// type person = { name: string; age: number };
// let logDetails: (obj: person) => void;
// logDetails = (ninja: { name: string; age: number }) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// };



