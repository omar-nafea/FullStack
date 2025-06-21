// spread operator
let contacts = ["Mary", "Joel", "Danny"];

let personFri = contacts;

let personalFriends = ["David", ...contacts, "Lily"];

personFri.push("John");

console.log(personalFriends);

console.log(personFri);


// includes()

let numArray = [1, 2, 3, 4, 5];
// normal way 
console.log(numArray.indexOf(0))
//its not exist so it will output : -1
console.log(numArray.indexOf(4))
// 3
// but with includes you can check if the item was there or not
console.log(numArray.includes(2))
// true

const listIngredients = ["flour", "sugar", "eggs", "butter"];
if (listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake")
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate")

}

// const in arrays 
const example = [];
example.push("Omar");
console.log(example)
// ["Omar"]

example = ['Ahmed'];
console.log(example)
// Uncaught TypeError: Assignment to constant variable.