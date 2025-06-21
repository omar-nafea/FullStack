/*
  Number Challenge
*/

let a = 100;
let b = 200.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(d)); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.trunc(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d)); //100console.log();
console.log(Math.trunc(d)); //100
console.log(Math.round(d)); //99
console.log(Math.floor(d)); //99

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String

console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67 => Number