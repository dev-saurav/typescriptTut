import { Invoice } from './classes/Invoice.js'; //Import must be .js
import { Payment } from './classes/payment.js'; //Import must be .js
import { ListTemplate } from './classes/ListTemplate.js';
const me = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
let someone;
const greetPerson = (person) => {
    console.log(`hello`, person.name);
};
greetPerson(me);
console.log(me);
// const anchor = document.querySelector('a')!; //1 shows that it will retern vaule
// // if (anchor) {
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.amount, inv.format());
});
console.log(invoices);
const form = document.querySelector('.new-item-form'); //typecasting
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//lsit template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// //generics
// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let docOne = addUID({ name: 'saurav', age: 40 });
// //let docTwo = addUID('string')
// console.log(docOne.age);
// //with interfaces
// interface Resource <T> {
//     uid: number
// }
//enums
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// ResourceType.BOOK
// //tuples
// //type of data is fixed at initialization
// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi'];
// let tup: [string, number, boolean] = ['ryu', 25, true]; //this is a tuple
// //tup[0] = false //not work
// //example
// let student: [string, number];
// student = ['saurav', 56];
