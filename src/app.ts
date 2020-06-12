// const anchor = document.querySelector('a')!; //1 shows that it will retern vaule

// // if (anchor) {
// //   console.log(anchor.href);
// // }

// console.log(anchor.href);

// const form = document.querySelector('form')!

//classes
class Invoice {
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
  constructor(
    //this only works if we use access modifiers
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.client} owes Rs${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
  console.log(inv.details, inv.amount, inv.format());
});
console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement; //typecasting
console.log(form.children);
//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
