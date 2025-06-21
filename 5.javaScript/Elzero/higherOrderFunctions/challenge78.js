/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/
// .match(/[A-Za-z]/g)
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let zletter = myString[myString.length - true]; // Z

let solution = myString
    .split("")
    .map(function(ele) {
        return ele.replace("_", " ");
    })
    .filter(function(ele) {
        return isNaN(parseInt(ele)) && ele !== "," && ele !== zletter;
    })
    .reduce(function(acc, current) {
        if (acc === current) {
            return acc;
        } else {
            return `${acc}${current}`;
        }
    });
console.log(solution); // Elzero Web School
// ['E', 'E', 'l', 'z', 'e', 'r', 'o', 'W', 'e', 'b', 'S', 'c', 'h', 'o', 'o', 'l', 'Z']