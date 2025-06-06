// 1
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [n, , , , m] = myNumbers;

console.log(n * m); // 5

// 2
let mySkills = [
    "HTML",
    "CSS",
    "JavaScript", ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
// let [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// 3

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
// let [a, b, c, d, e, f, g, h, i] = arr1.concat(arr2).concat(arr3);
// console.log(`My Best Friends: ${h}, ${i}, ${a}`);

// My Best Friends: Shady, Mahmoud, Ahmed
// let objectLength = Object.keys(game).length;
//

// 4
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
const {
    age: a,
    working: w,
    country: c,
    hobbies: [h1, h3],
} = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// 5

const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};

function f(theGame) {
    const [t, d, kaey] = Object.values(theGame);
    const [o, a] = Object.keys(kaey);
    const [one, two, or] = Object.values(kaey);
    const [u, j] = Object.values(one);
    const [u_price, j_price] = Object.values(two);

    console.log(`My Favourite Games Style Is ${t} Style`);
    // My Favourite Games Style Is YS Style

    console.log(`And I Love ${d} Games`);
    // And I Love Falcom Games

    console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
    // My Best Release Is Oath In Felghana It Released in USA & Japan

    console.log(`Although I Love ${a}`);
    // Although I Love Ark Of Napishtim

    console.log(`${a} Price in USA Is ${u_price}`);
    // Ark Of Napishtim Price in USA Is 20 USD

    console.log(`${a} Price in Japan Is ${j_price}`);
    // Ark Of Napishtim Price in Japan Is 10 USD

    console.log(`Origin Price Is ${or}`);
    // Origin Price Is 30 USD
}
f(game);