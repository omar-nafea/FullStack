/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero
// 8 H
console.log(a.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ['Elzero']

// Use Only "substr" Method + Template Literals In Your Solution
console.log(
    `${a.charAt(0).toUpperCase() + a.substr(1, 6)}${
		a.charAt(11).toUpperCase() + a.substr(12, 17)
	}`
); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.substring(0, 2).toLowerCase() + a.substr(2, 80).toUpperCase()); // eLZERO WEB SCHOOl