/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
  id?: number,
  readonly username: string,
  country: string
}

let user1: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt"
}

user1.country = "Syria";

console.log(user1);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Osama", country: "KSA" });

/*
  Interface
  - Interface Method And Parameters
*/

interface User2 {
  id: number;
  username: string;
  country: string;
  sayHello() : string;
  sayWelcome: () => string;
  getDouble(num: number) : number;
}

let user121: User2 = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  sayHello() {
    return `Hello ${this.username}`;
  },
  sayWelcome: () => {
    return `Welcome ${user121.username}`;
  },
  getDouble(n) {
    return n * 2;
  }
}

console.log(user121.id);
console.log(user121.sayHello());
console.log(user121.sayWelcome());
console.log(user121.getDouble(100));

/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface Settings {
  sidebar: boolean;
}

// Contact Page
interface Settings {
  external: boolean;
}

let userSettin: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}

/*
  Interface
  - Extending Interfaces
*/

interface User4 {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends User4,Moderator {
  protect?: boolean;
}

let user3: Admin = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  role: "Mod",
  protect: true
}

console.log(user3.id);

/*
  Interface
  - Interface vs Type Aliases
  - Take A Look On HTMLElement Interface
*/

// let el = document.getElementById("id") as HTMLElement;

// Homepage
type Settin = {
  readonly theme: boolean;
  font: string;
  sidebar: boolean;
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}

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
  sayMsg() {
    return `Hello ${this._changename} Your Salary Is ${this.salary}`;
  }
  // get username() : string {
  //   return this._username;
  // }
  // set username(value: string) {
  //   this._username = value;
  // }
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
  }
}

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