// Type Annotations with Arrays

let allOfThem: string | number | boolean = "Osman"

allOfThem = "A"
allOfThem = 100
allOfThem = true

let arrOne: number[] = [2,3,4]
let arrTwo: string[] = ["sdaf", "sfa"]
let friends: (string | number)[] = ["khaled", "Ahmed", "Belly", 10, 32]
let arrThree: (string | number | string[])[] = ["omar", 234, ["omara"]]

/*
  Type Annotations With Multidimensional Arrays
*/
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];
let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];

// Array<string> === string[]

let showMsg = true

function showDetails(name: string, age: number, salary: number) : string{
    if(showMsg){
        return `Hello ${name}, Age is ${age}, Salary is ${salary}`
    }
    return `No data to show`
}
console.log(showDetails("omar", 40, 5000))

function calculate(numOne: number, numTwo: number) {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

function printInfo(valueOne: number | string, valueTwo: number | string) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

let arr: (number | boolean[] | (string | (string | number)[])[])[];
arr = [32,[true, false], ['omar', ['ahmed', 23]]]

function reportErrors(username: string, age: number) {
  let rank = "Professor";
  return `Username: ${username}, age is ${age} and rank ${rank}`;
  // console.log("We Will Not Reach Here");
}

console.log(reportErrors("Elzero", 40));

/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData("Osama", 40, "Egypt"));

let nothing;
let Name: string = "Elzero";
function showMyDetails(a = "", b = "", c = "") {
  return `${a}${b}${c}`;
}

console.log("sixth: " + showMyDetails(Name, "" , "")); // Elzero

function show2Data(name = "Un", age: number, country: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(show2Data(undefined, 40, "Egypt"));

function show2msg(user? : string | number, age? : string | number, country? : number| boolean | string) : string {
  return `${user}${age}${country}`;
}

console.log(show2msg());
console.log(show2msg("Elzero"));
console.log(show2msg("Elzero", 40));
console.log(show2msg("Elzero", "40", "Egypt"));


// Write The Function Here
function printInConsole(...char: (number | string | boolean)[]){
  for (let ch = 0; ch < char.length; ch++){
    console.log(`The Value Is ${char[ch]} And Type Is ${typeof(char[ch])}`)
  } 
  return `Done`
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

function addAll(...nums: number[]) : number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  // nums.forEach((num) => result += num);
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));

const add = function(num1: number, num2: number) : number {
  return num1 + num2;
}

console.log(add(10, 20));

const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

console.log(addWithArrow(10, 20));