/*
  Data Types
  - Type Alias
*/

type st = string;
let theName: st = "Elzero";
theName = "Osama";

type standnum = string | number;
let all: standnum = 10;
all = 100;
all = "Osama";

/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
  up: string,
  right: string,
  down: string,
  left: string
}

type Last = Buttons & {
  x: boolean
}

function getActions(btns: Last) {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Down Is ${btns.down}`);
  console.log(`Action For Button Left Is ${btns.left}`);
}

getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });

/*
  Data Types
  - Literal Types
*/

type nums = 0 | 1 | -1;

function compare(num1: number, num2: number) : nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: nums = 1;

/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We knows Exactly How Many Elements It Contains
  --- We Knows Which Types It Contains At Specific Positions
*/

let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];
// article.push(100);
console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);

/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/

function logging(msg: string) : void {
  console.log(msg);
  return;
}

console.log(logging("Iam A Message"));
console.log("Test");

const fail = (msg: string) => {
  throw new Error(msg);
  // return 10;
}

function alwaysLog(name: string) : never {
  while(true) {
    console.log(name);
  }
}

// alwaysLog("Osama");
// console.log("Test");

/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

enum Levl {
  Kids = 15,
  Easy0 = 9,
  Medium0 = 6,
  Hard0 = 3
}

let lvel: string = "Easy";

if (lvel === "Easy") {
  console.log(`The Level Is ${lvel} And Number Of Seconds Is ${Levl.Easy0}`);
}

/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

function getHardSecond() : number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15
}

enum Level {
  Kid = Kids.Five,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSecond()
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}

/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3));

/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type A = {
  one: string,
  two: number,
  three: boolean
}

type B = A & {
  four: number
}

type C = {
  five: boolean
}

type mix = A & C;

function getAction(btns: mix) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.five}`);
}

getAction({ one: "String", two: 100, three: true, five: true });

/*
  Type Annotations With Object
*/

let myObject: {
  readonly username: string,
  id: number,
  hire?: boolean,
  skills: {
    one: string,
    two: string
  }
} = {
  username: "Elzero",
  id: 100,
  hire: true,
  skills: {
    one: "HTML",
    two: "CSS"
  }
};

// myObject.username = "Osama";
myObject.id = 101;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);