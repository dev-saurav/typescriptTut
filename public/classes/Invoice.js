//classes
export class Invoice {
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
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes Rs${this.amount} for ${this.details}`;
    }
}
