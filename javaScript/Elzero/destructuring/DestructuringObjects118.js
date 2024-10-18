/*
  Destructuring
  - Destructuring Object
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
const { theName, theAge, Country } = user;

console.log(theName);
console.log(theAge);
console.log(Country);

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const costumer = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    skills: {
        html: 70,
        css: 80,
    },
};

const {
    theName: n,
    theAge: a,
    theCountry,
    theColor: co = "Red",
    skills: { html: h, css },
} = costumer;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = costumer.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);


const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};

// console.log( player.address.city );

const { name, club, address: { city } } = player;

// console.log(`${name} plays for ${club}`);

console.log(`${name} lives in ${city}`);