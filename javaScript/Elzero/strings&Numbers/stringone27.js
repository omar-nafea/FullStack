/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName); //  Ahmed

console.log(theName[1]); //
console.log(theName[5]); // e

console.log(theName.charAt(1)); //
console.log(theName.charAt(5)); // e

console.log(theName.length); // 9
console.log(theName.trim()); // Ahmed

console.log(theName.toUpperCase()); //  AHMED
console.log(theName.toLowerCase()); // ahmed

console.log(theName.trim().charAt(2).toUpperCase()); // M