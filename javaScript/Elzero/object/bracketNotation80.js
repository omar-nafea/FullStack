/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user = {
    theName: "Osama",
    country: "Egypt",
    "country of": "saudi arabia",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user["theName"]);
console.log(user["country of"]);
console.log(user.myVar); // user.country // undefined
console.log(user[myVar]); // user.country // Egypt