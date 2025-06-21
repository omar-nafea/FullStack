/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);
console.log(z);

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let ourFriends = [
    "Ahmed",
    "Sayed",
    "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]],
    "mosalah",
];

// console.log(ourFriends[3][2][1]);

// let [, , , [a, , [, b]]] = ourFriends;

let [q, , , [m, , [, n]], p] = ourFriends;

console.log(m); // Shady
console.log(n); // Gamal
console.log(q); // Gamal
console.log(p); // Gamal

// Assigning the rest of an array
// What
// if we want to assign some of the array to variables and the rest of the items in an array to a particular variable ? In that
// case, we would do this:

let [greeting, ...intro] = ["Hello", "I", "am", "Sarah"];

console.log(greeting); //"Hello"
console.log(intro); //["I", "am", "Sarah"]

function getArray() {
    return ["Hello", "I", "am", "Sarah"];
}
let [greet, pronoun] = getArray();

console.log(greet); //"Hello"
console.log(pronoun); //"I"
/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);