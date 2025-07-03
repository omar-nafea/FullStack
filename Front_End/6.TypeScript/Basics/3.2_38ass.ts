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

// Do Not Edit
type numandstring = number | string;

// can abstract class implement interfaces?
// Yes, an abstract class can implement interfaces in TypeScript. When an abstract class implements an interface, it must provide implementations for all the methods defined in the interface, unless those methods are also declared as abstract in the abstract class.


abstract class Game94 {
  constructor(public title: string, public price: numandstring) {}
  // abstract keywork before methed it late (postpone) the implementation of the method to the child class
  abstract getLocation() : string;
  abstract getDiscount() : string;
}

// Start Edit And Fix
class RPG extends Game94 {
  constructor(title: string, price: numandstring, public rate: number) {
    super(title, price)
  }
  getLocation(): string {
      return `Location`
  }
  override getDiscount(): string {
      return `Discount`
  }
}

class Action extends Game94 {
  constructor(title: string, price: numandstring, public rate: number, public company: string) {
    super(title, price)
  }
    getLocation(): string {
      return `Location`
  }
  override getDiscount(): string {
      return `Discount`
  }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"

