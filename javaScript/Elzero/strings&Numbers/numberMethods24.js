/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString()); //100
let jj = 100.1 + 2;
console.log((100.1 + 2).toString()); // 100.1

console.log((100.554555).toFixed(2)); // 100.55

console.log(Number("100 Osama")); //NaN
console.log(+"100 Osama"); //NaN
console.log(parseInt("100 Osama")); //100
console.log(parseInt(100)); //100
console.log(parseInt("Osama 100 Osama")); //NaN
console.log(parseInt("100.500 Osama")); //100
console.log(parseFloat("100.500 Osama")); //100.5

console.log(Number.isInteger("100")); //false
console.log(Number.isInteger(100.5)); //false
console.log(Number.isInteger(100)); // true

console.log(Number.isNaN("Osama" / 20)); //true