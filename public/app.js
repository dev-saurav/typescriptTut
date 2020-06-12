"use strict";
// const anchor = document.querySelector('a')!; //1 shows that it will retern vaule
// // if (anchor) {
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!
//classes
var Invoice = /** @class */ (function () {
    //   // all the properties of the class are public
    //   private client: string; //outside the class it cannot be used
    //   readonly details: string; //read it but cannot change
    //   amount: number;
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    //shortcut for declaration
    function Invoice(
    //this only works if we use access modifiers
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes Rs" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on mario website', 250);
var invTwo = new Invoice('luigi', 'work on luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.details, inv.amount, inv.format());
});
console.log(invoices);
var form = document.querySelector('.new-item-form'); //typecasting
console.log(form.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
