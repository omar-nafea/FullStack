// Do Not Edit
type numandstring = number | string;

abstract class Game94 {
  constructor(public title: string, public price: numandstring) {}
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


// Write Function Code Here
function showTypes2<T = {}, M = {}, k = {}>(name: T | string = "Nothing", num: M | string = "Nothing", flag: k | string = "Nothing"): string {
  return `${name} - ${num} - ${flag}`;
}
// Default Generic Type Choice:
// You’ve used {} as the default type for your generics. While this works because you’re allowing a union with string (T | string), it’s a bit unusual. Typically, you might choose a default that more closely reflects the expected type. For example, if you expect the first parameter to be a string when no type is provided, you could use:

function showTypes<T1 = string, T2 = number, T3 = boolean>(
  name: T1 | string = "Nothing",
  num: T2 | string = "Nothing",
  flag: T3 | string = "Nothing"
): string {
  return `${name} - ${num} - ${flag}`;
}

// Union Types on Parameters:
// By defining the parameters as T | string, you ensure that if no value is passed, "Nothing" is valid. However, this also means that if a user explicitly provides a value, it must conform to the union, which can be less strict than if you designed the generics to default to string and then explicitly override the type. In many cases, this isn’t a problem for simple assignments like this, but in more complex scenarios you might want more control over the allowed types, Like this

function showTypes3<T1 = string, T2 = number, T3 = boolean>(
  value1?: T1,
  value2?: T2,
  value3?: T3
): string {
  const output1 = value1 !== undefined ? value1 : "Nothing";
  const output2 = value2 !== undefined ? value2 : "Nothing";
  const output3 = value3 !== undefined ? value3 : "Nothing";
  return `${output1} - ${output2} - ${output3}`;
}


// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes2()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true
console.log(showTypes2<string, number, boolean>("String", 100, true)); // String - 100 - true

// Write Class Code Here

class Game303<T>{
    constructor(public title: T, public price: number){}
    gettheDiscount(val: T){
        console.log(`The Discount is ${val}`)
    }

}
// Do Not Edit Here
let game1One = new Game303<string>("Ys", 100);
let game2Two = new Game303<number>(2064, 100); // There's A Game Called "2064"

console.log(game1One.title); // "Ys"
console.log(game1One.price); // 100
game1One.gettheDiscount("50"); // "The Discount Is 50"

console.log(game2Two.title); // 2064
console.log(game2Two.price); // 100
game2Two.gettheDiscount(80); // "The Discount Is 80"