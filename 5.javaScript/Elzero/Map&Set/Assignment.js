// 1

let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
const [, , two] = setOfNumbers;
console.log(two);

// Needed Output
// Set(3) { 10, 20, 2 }
// 2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let myUniqueData = new Set(myFriends.sort());
console.log(myUniqueData);
// Needed Output
// ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// 3

// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };
let myMap = new Map([
    ["username", "Alialla"],
    ["role", "Admin"],
    ["country", "Egypt"],
]);
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

// Needed Output
// Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt' }
// 3
// true

let theNumber = 100020003000;
let setOfNumber = new Set([...theNumber.toString()]); // creating a new set from theNumber var and convert it to string so i can (be iterable) spread it out in array
setOfNumber.delete("0"); // deleting zero number
let m = Array.from(setOfNumber, (n) => +n); // convert the string to a number
console.log(m.join('')); // concat

// Needed Output
// 123

// 4

let theName = "Elzero";
console.log(Array.from(theName));
// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']

// 5


let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
console.log(chars.copyWithin(3));
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

//6
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
chars2.copyWithin(3, 4);
console.log(chars2.copyWithin(4, 0));
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// 7
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(chars3.copyWithin(2));
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

// 8
function bringsnumfirst(array) {
    let heros = [];
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            heros.unshift(array[i]);
            heros.sort()
            array.splice(i, 1);
            i--;
        }
    };
    array.unshift(...heros);
    console.log(array);
}

let chars4 = ["A", 10, 15, 6, "B", "C", "D", "E"];
let chars5 = ["A", "B", "C", "D", "E", 20, 41, 16];

bringsnumfirst(chars4);


// 9 
let chars6 = ["A", "B", "C", "A", "B", "C", "D", "E"];
// console.log(chars5.copyWithin(0, 3, 6));

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let allArrays = [...numsOne, ...numsTwo];
// Needed Output
// [1, 2, 3, 4, 5, 6]

// 10
/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
// 2, 3, 4, 10
console.log(Math.min(...n1) ** Math.trunc(Math.E) * Math.trunc(Math.E) + Math.min(...n2))
console.log(Math.trunc(Math.SQRT1_2 * Math.min(...n1)) * Math.min(...n1) * Math.trunc(Math.PI));
// Needed Output
210