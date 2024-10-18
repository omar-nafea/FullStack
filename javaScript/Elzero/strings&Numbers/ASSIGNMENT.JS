// 1

// Your Solutions
console.log(1000000); //1000000
console.log(5e5 + 5e5); // 100000
console.log(2.5e5 + 2.5e5 + 2.5e5 + 2.5e5); // 100000
console.log(2e5 + 2e5 + 2e5 + 2e5 + 2e5); // 100000
console.log(1e5 + 1e5 + 1e5 + 1e5 + 1e5 + 1e5 + 1e5 + 1e5 + 1e5 + 1e5); // 100000
// console.log(1_000_000); // 1000000
console.log(1e6); //1000000
console.log(10 ** 6); //1000000
console.log(10 * 10 * 10 * 10 * 10 * 10); //1000000
console.log(1000000.0); //1000000

// 2
console.log(Number.MAX_SAFE_INTEGER);
// 3  MAX_SAFE_INTEGER
let nnn = Number.MAX_SAFE_INTEGER;
console.log(nnn.toString().length); // 16
// 4
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); //100
console.log(parseFloat(myVar).toFixed(2)); //100.57
// 5  isInteger
let num = 10;
console.log(Number.isInteger(num) + true); // 2
// 6

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(flt.toFixed()); // 10
console.log(Math.trunc(flt)); //10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10

// 7
var min = 0;
var max = 4;
var random = Math.floor(Math.random() * (+max - +min)) + +min;
console.log(`${min} || ${random} || ${max} `); // 0 || 1 || 2 || 3 || 4

// 8

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterO.toLowerCase())); // True
console.log(word.includes(letterE.toUpperCase())); // True

// 9

let userName = "Elzero";

console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee