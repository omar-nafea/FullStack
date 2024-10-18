let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(`${words[2][0].slice(2, 6).toUpperCase()}`); // ZERO
// 2
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
    console.log(`Found`);
} else {
    console.log(`not found `);
}

if (haystack.lastIndexOf(needle) === -1) {
    console.log(`not found `);
} else {
    console.log(`Found`);
}

if (haystack.indexOf(needle) === -1) {
    console.log(`not found `);
} else {
    console.log(`Found`);
}

// 3

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

let allarr = allArrs.concat(arr2[2], arr1[2], arr2[3]);

console.log(allarr.join("").toLowerCase()); // fxy
console.log(allarr); // fxy