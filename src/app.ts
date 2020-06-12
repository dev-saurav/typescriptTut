import { Invoice } from './classes/Invoice.js'; //Import must be .js
import { Payment } from './classes/payment.js'; //Import must be .js
import { HasFormatter } from './interfaces/HasFormatter';
import { ListTemplate } from './classes/ListTemplate.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web wrk', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

//interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  },
};

let someone: IsPerson;
const greetPerson = (person: IsPerson) => {
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

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
  console.log(inv.amount, inv.format());
});
console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement; //typecasting
console.log(form.children);
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//lsit template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
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
