// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName(): string
}

// Do Not Edit The Code Below
let userass: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}

userass.id = 200;
userass.id = "200"; // Type 'string' is not assignable to type 'number'
userass.state = false; // Cannot assign to 'state' because it is a read-only property


// Create Interface Here

interface Client {
  id: number,
  username: string,
  active: boolean,
  discount: number,
  getPrice(price: number): number
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}%`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);


// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}

interface Superman extends Man, Bird{
    bodyType: string,
    origin: string
}

let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}

console.log(creature)


// Create Class Here

class Player {
//   u: string;
//   g: string;
//   v: boolean;
//   s: number | string;
//   constructor(username: string, game: string, score: number | string, vip: boolean= false) {
//     this.u = username;
//     this.s = score;
//     this.g = game;
//     this.v = vip;
//     }
//   details() {
//     let result: string
//     if (this.v){
//         result = `VIP ${this.u}, Type Is ${this.g} Level Is ${this.s}`
//     }else{
//         result = `${this.u}, Type Is ${this.g} Level Is ${this.s}`
//     }
//     return result
//   }
  constructor(
    public username: string,
    public game: string,
    public score: number | string,
    public isVip: boolean = false
  ) {}

  details() {
    return `${this.isVip ? 'VIP ' : ''}${this.username}, Type Is ${this.game} Level Is ${this.score}`;
  }
}

// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// نريد إختصار ال Code تماما
class Shorten {
//   public id: number;
//   public username: string;
//   protected title: string;
//   constructor (id: number, username: string, title: string) {
//     this.id = id;
//     this.username = username;
//     this.title = title;
//   }
    constructor(public id: number, public username: string, protected title: string){} 
}

let tester1223 = new Shorten(100, "Elzero", "Developer");

console.log(tester1223.id);
console.log(tester1223.username);


// نريد تصليح الأخطاء وطباعة القيمة الخاصة بال Title بدون تغيير حالة ال Private الموجودة في ال Class Member
class Show {
  public get title(): string {
      return this._title;
  }
  public set title(value: string) {
      this._title = value;
  }
  constructor (private _title: string) {}
  setterFun() {
    return `Hello ${this._title}`;
  }
}

let tester = new Show("Elzero");

console.log(tester.title); // Property 'title' does not exist on type 'Show'
tester.title= "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester.title); // Property 'title' does not exist on type 'Show'

interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Player223 implements Play{
    constructor(public id: number, public title: string, public level: string | number ){}
    logIn(){
        console.log("Logged In")
    }
    logOut(val: string){
        console.log(`Logged Out, ${val}`)
    }
}

let player121 = new Player223(100, "Elzero", 95);

console.log(player121.id); // 100
console.log(player121.title); // "Elzero"
console.log(player121.level); // 95
player121.logIn(); // Logged In
player121.logOut("Good Bye"); // Logged Out, Good Bye