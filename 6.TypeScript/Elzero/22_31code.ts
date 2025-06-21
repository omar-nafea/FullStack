/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use ReadOnly And Optional Operator
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
// the difference between an interface and a type alias in TypeScript is that interfaces are used to define the structure of an object, while type aliases can be used to define any type, including primitive types, union types, and intersection types. Interfaces can be extended and implemented by classes, while type aliases cannot. Additionally, interfaces can be merged, while type aliases cannot.

// HTMLElement is an interface that represents any HTML element in the DOM.
// It provides properties and methods that are common to all HTML elements, such as `id`, `className`, `style`, and `addEventListener`.
// HTMLElement is a built-in interface in TypeScript that represents any HTML element in the DOM.

// let el = document.getElementById("id") as HTMLElement;


// Homepage
type Settin = {
  readonly theme: boolean;
  font: string;
  sidebar: boolean;
  external: boolean;
}

let userSettings: Settin = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}
