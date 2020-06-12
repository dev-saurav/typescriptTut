import { HasFormatter } from '../interfaces/HasFormatter.js';
//classes
export class Payment implements HasFormatter {
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
    readonly recepient: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.recepient} is owed Rs${this.amount} for ${this.details}`;
  }
}
