/*
Destructuring Challenge
*/

let chosen = 2;
const myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    {
        title: "Ahmed",
        age: 25,
        available: false,
        skills: ["Python", "Django"],
    },
    {
        title: "Sayed",
        age: 33,
        available: true,
        skills: ["PHP", "Laravel"],
    },
];

function availability() {
    if (available === true) {
        console.log("available");
    } else {
        console.log("not available");
    }
}

let ex;
if (chosen === 1) {
    [ex] = myFriends;
}
if (chosen === 2) {
    [, ex] = myFriends;
}
if (chosen === 3) {
    [, , ex] = myFriends;
}

({ title, age, available, skills } = ex);
let [, y] = skills;
console.log(title);
console.log(age);
availability();
console.log(y);