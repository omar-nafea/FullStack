
/*
  Type Annotations With Class
*/

class User14 {
  u: string;
  s: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.u = username;
    this.s = salary;
    this.msg = function () {
      return `my name is ${this.u} Your Salary Is ${this.s}`;
    }
  }
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User14("omar", 4000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());


/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class User16 {
  msg: () => string;
  constructor(private username: string, protected salary: number,public readonly address: string) {
    this.msg = function () {
      return `Welcome ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  // the difference between msg and sayMsg is that msg is a function that returns a string, while sayMsg is a method of the class that returns a string.
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let usere = new User16("Elzero", 65000, "Cairo");

// console.log(userOne.username);
// console.log(userOne.salary);
console.log(usere.msg());
console.log(usere.sayMsg());

/*
  Class
  - Get And Set Accessors
*/

class User21 {
  public get changename(): string {
    return this._changename;
  }
  public set changename(value: string) {
    this._changename = value;
  }
  msg: () => string;
  constructor(private _changename: string, public salary: number, public readonly address: string) {
    this.msg = function () {
      return `Hello ${this._changename} Your Salary Is ${this.salary}`;
    }
  }
  // the difference between msg and sayMsg is that msg is a function that returns a string, while sayMsg is a method of the class that returns a string.

  sayMsg() {
    return `Hello ${this._changename} Your Salary Is ${this.salary}`;
  }
}

let user1e = new User21("Elzero", 6000, "Cairo");

console.log(user1e.changename);
user1e.changename = "Ahmed";
console.log(user1e.changename);
console.log(user1e.salary);
console.log(user1e.msg());
console.log(user1e.sayMsg());

/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
  // static members are shared across all instances of the class, meaning they belong to the class itself rather than to any specific instance. This allows you to access them without creating an instance of the class.
  // Static members are useful for properties or methods that should be shared among all instances of a class, such as a counter for the number of instances created or utility functions that don't depend on instance-specific data.
  --- Static Members Are Not Accessed Using "this"
  --- Static Members Are Accessed Using The Class Name
  --- Static Members Are Not Inherited By Child Classes
  --- Static Members Are Not Part Of The Instance

*/

class User22 {
  private static _created: number = 0;
  // select _created var and right click vs code will give you refactor option then select generate "get" and "set" accessors
  public static get created(): number {
    return User22._created;
  }
  public static set created(value: number) {
    User22._created = value;
  }
  static getCount() : void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    User22.created++;
    // this is used to refer to the current instance of the class, while User22 refers to the class itself.
  }
}

// as each instance it uses constructor it will increase the created count by one
let u1 = new User22("Elzero");
let u2 = new User22("Web");
let u3 = new User22("School");
// console.log(User.created); 

User22.getCount();
User22.created

/*
  Class
  - Implement Interface
*/

interface Settings2 {
  theme: boolean;
  font: string;
  save(): void;
}

class Usr implements Settings2 {
  constructor(public username: string, public theme: boolean, public font: string) {}
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}

let usrOne = new Usr("Elzero", true, "Open Sans");

console.log(usrOne.username);
console.log(usrOne.font);

usrOne.save();
usrOne.update();

/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/
// --- Abstract Classes Are Used As Base Classes For Other Classes
// --- Abstract Classes Can Have Abstract Members
// --- Abstract Members Are Methods That Must Be Implemented In The Child Class
// --- Abstract Members Are Declared Using The "abstract" Keyword
// --- Abstract Classes Can Have Regular Members
// --- Abstract Classes Can Have Constructors
// --- Abstract Classes Cannot Be Instantiated
// --- Abstract Classes Are Used To Define A Common Interface For All Child Classes

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime() : void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Pizza Is 1 Hour`);
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Burger Is Half Hour`);
  }
}

let pizzaOne = new Pizza("Awesome Pizza", 100);

console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();

/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/


class Player43 {
  constructor(public name: string) {}
  attack() : void {
    console.log("Attacking Now");
  }
}

class Amazon extends Player43 {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Spear");
    this.spears -= 1;
  }
}

class Barbarian extends Player43 {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Axe");
    this.axeDurability -= 1;
  }
}

let barOne = new Barbarian("Elzero", 100);

console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);

