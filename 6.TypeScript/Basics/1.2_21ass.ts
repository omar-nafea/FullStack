// Write Your Code Here
type n = number;

// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Write Your Code Here
type mixi = (number | boolean)
// Do Not Edit Here
let myInfo: mixi;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

// Write Your Code Here
type Info = {
    theName: string,
    theAge: number
}

// & is used to create an intersection type, which combines multiple types into one.
// This means that the new type will have all the properties of both types.
type Full = Info & {
    country: string
}
// Do Not Edit Here
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

function yesOrNo(val: number) : "Yes" | "No" {
    if(typeof(val) === 'number'){
    return val > 10 ? "Yes" : "No"
    }else{
        throw new Error("please provide a valid Number")
    }
}

// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False

type custom = "Yes" | "No"

function isHeOld(age: number) : custom | number {
    if(typeof(age) === 'number'){
        return age > 40 ? "Yes" : "No";
    }else{
        throw new Error("please provide a valid Number")
    }
}

// Do Not Edit Here
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
// console.log(isHeOld("100")); // Error

let post: (number | string | boolean)[]

post = [100, 200, "Title"]; // Error
post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
const [id1, title1, state] = post
// Do Not Edit Here
console.log(id1); // 100
console.log(title1); // "Title"
console.log(state); // true

const user: {
  username: string,
  age: number | string,
  website?: string,
  skills: {
    frontEnd: string[],
    backEnd: (string | number)[]
  }
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"]
  }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);

// enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums allow us to define a set of named constants, which can be used to represent a collection of related values.
// Enums are useful when you have a fixed set of related values that you want to represent in a more readable way.
// Enums can be numeric or string-based, and they can also have computed values.





// Numeric Enums are the most common type of enums in TypeScript.
// They are defined using the enum keyword followed by the name of the enum and a set of named constants.
// Numeric Enums can be defined with or without initial values.
// If no initial value is provided, the first constant will be assigned the value 0, and subsequent constants will be assigned incrementing values.
// Numeric Enums can also have computed values, which are values that are calculated based on other constants in the enum.

function getHardSeconds(vale: number) : number {
  return Game.Hard - vale;
}

enum Game {
  Easy = 100,
  Medium = Easy - 20,
  Hard = Medium - (Easy / 2),
  Insane = getHardSeconds(10)
}

// In this example, we define a numeric enum called Game with four constants: Easy, Medium, Hard, and Insane.
// The values of these constants are defined using arithmetic operations and a function call.
// The getHardSeconds function takes a number as an argument and returns the value of Game.Hard minus that number.
// The Game enum is then defined with the values of Easy, Medium, Hard, and Insane.
// Numeric Enums can be used to represent a fixed set of related values, such as game difficulty levels.
// Numeric Enums can be used to represent a fixed set of related values, such as game difficulty levels.
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20