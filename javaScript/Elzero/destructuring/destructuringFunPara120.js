/*
  Destructuring
  - Destructuring Function Parameters
*/

const user = {
    theName: "Osama",
    theAge: 39,
    skills: {
        html: 70,
        css: 80,
    },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
    console.log(`Your Name Is ${n}`);
    console.log(`Your Age Is ${a}`);
    console.log(`Your CSS Skill Progress Is ${c}`);
}

/*
  Destructuring
  - Destructuring Mixed Content
*/

const user2 = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    },
};

const {
    theName: n,
    theAge: a,
    skills: [, , three],
    addresses: { egypt: e },
} = user2;

console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e}`);