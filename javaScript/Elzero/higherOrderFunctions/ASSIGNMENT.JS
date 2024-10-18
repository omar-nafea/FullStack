let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let ign = mix
    .map(function(ele) {
        return isNaN(parseInt(ele)) ? ele : "";
    })
    .reduce(function(acc, current) {
        return `${acc}${current}`;
    });
console.log(ign);
// 2
let myString = "EElllzzzzzzzeroo"; // Elzero
let ignore = myString
    .split("")
    .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    .join("");
console.log(ignore);
// 3
let myArray = ["E", "l", "z", ["e", "r"], "o"]; // Elzero
var flattened = myArray.reduce((acc, el) => acc.concat(el), []);
// let flat = myArray.flat();
// console.log(flat);
console.log(flattened);
// 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"]; // [-1, -10, 10, 20, -5, -3]
let bla = numsAndStrings
    .filter(function(ele) {
        return !isNaN(parseInt(ele));
    })
    .map(function(ele) {
        return -ele;
    });
console.log(bla);
// 5
let nums = [2, 12, 11, 5, 10, 1, 99]; // 500

let add = nums.reduce(function(acc, current) {
    if (current % 2 === 0) return acc * current;
    else if (current % 2 !== 0) return acc + current;
}, 1); // 500

console.log(add);