/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

function returnNumber(val: number) : number {
  return val;
}
function returnString(val: string) : string {
  return val;
}
function returnBoolean(val: boolean) : boolean {
  return val;
}

console.log(returnNumber(100));
console.log(returnString("Elzero"));
console.log(returnBoolean(true));

function returnType<T>(val: T) : T {
  return val;
}
// syntax explanation:
// The function returnType is defined with a type parameter <T>.



// returnType function is a generic function that can accept any type of argument and return the same type.
// The type parameter T allows the function to be flexible and reusable for different types.
// the first <T> indicates that T is a type parameter, and it can be replaced with any type when the function is called.
// The second <T> in the function signature indicates that the function will return a value of type T.


console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));

/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/


const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Elzero"));

function testType<T>(val: T): string {
  return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(100));// The Value Is 100 And Type Is number
console.log(testType<string>("Elzero"));// The Value Is Elzero And Type Is string

function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Osama", 100));// The First Value Is Osama And Second Value 100
console.log(multipleTypes<string, boolean>("Elzero", true));// The First Value Is Elzero And Second Value true

// How Optional generic types Works
function createArray<T = number>(length: number, value: T): T[] {
  // to create an array of a specified length, filled with a specified value of type T.
  return new Array(length).fill(value);
  // This function creates an array of a specified length, filled with a specified value of type T.
}

// Using the default generic type (number)
const numbers = createArray(3, 42); // T is inferred as number

// Explicitly specifying a different type
const strings = createArray<string>(3, "Hello"); // T is string

console.log(numbers); // [42, 42, 42]
console.log(strings); // ["Hello", "Hello", "Hello"]


/*
  Generics
  - Classes
*/

class User92<T = string> {
  constructor(public value: T) {}
  show(msg: T) : void {
    console.log(`${msg} - ${this.value}`);
  }
}

let usertherteen = new User92<string>("Elzero");
console.log(usertherteen.value);
usertherteen.show("Message");// Message - Elzero

let userTwenty = new User92<number | string>(100);
console.log(userTwenty.value); // 100
userTwenty.show("Message");// Message - 100


/*
  Generics
  - Classes And Interfaces
*/

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game33 {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
    constructor(public data: T[] = []){}
  add(item: T) : void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
/*
Collection {
  data: [
    { itemType: 'Book', title: 'Atomic Habits', isbn: 150510 },
    { itemType: 'Book', title: 'Follow Your Heart', isbn: 650650 }
  ]
}
*/
let itemTwo = new Collection<Game33>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
/*
Collection {
  data: [
    {
      itemType: 'Game',
      title: 'Uncharted',
      style: 'Action',
      price: 150
    }
  ]
}
*/


// Write Function Code Here
function showTypes2<T = {}, M = {}, k = {}>(name: T | string = "Nothing", num: M | string = "Nothing", flag: k | string = "Nothing"): string {
  return `${name} - ${num} - ${flag}`;
}
// Default Generic Type Choice:
// In the function showTypes2, you have set default generic types as T = {}, M = {}, and k = {}. This means that if no type is provided when calling the function, it will default to an empty object type for each generic parameter.
// This is a valid choice, but it’s important to note that using {} as a default type means that the function will accept any object type, which may not be what you want. If you expect the parameters to be of specific types, you might want to choose a more appropriate default type.
// For example, if you expect the first parameter to be a string when no type is provided, you could use T = string instead of T = {}. This would make the function more type-safe and clear about its expected input types.
// we use {} as the default type for your generics. While this works because you’re allowing a union with string (T | string), it’s a bit unusual. Typically, you might choose a default that more closely reflects the expected type. For example, if you expect the first parameter to be a string when no type is provided, you could use:

function showTypes<T1 = string, T2 = number, T3 = boolean>(
  name: T1 | string = "Nothing",
  num: T2 | string = "Nothing",
  flag: T3 | string = "Nothing"
): string {
  return `${name} - ${num} - ${flag}`;
}

// Union Types on Parameters:
// By defining the parameters as T | string, you ensure that if no value is passed, "Nothing" is valid. However, this also means that if a user explicitly provides a value, it must conform to the union, which can be less strict than if you designed the generics to default to string and then explicitly override the type.

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