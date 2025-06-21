// 1 
let dateNow = new Date();
let birthday = new Date("Aug 25, 2003");
let dateDiff = dateNow - birthday;

// console.log(dateDiff);
let seconds = dateDiff / 1000; // Number Of Seconds
console.log(`${seconds.toFixed(0)} Seconds`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`${minutes.toFixed(0)} Minutes`);

let hours = minutes / 60; // Number Of Hours
console.log(`${hours.toFixed(0)} Hours`);

let days = hours / 24; // Number Of Days
console.log(`${days.toFixed(0)} Days`);

let Months = days / 30; // Number Of Years
console.log(`${Months.toFixed(0)} Months`);

let years = Months / 12; // Number Of Years
console.log(`${years.toFixed(0)} Years`);
// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

// 2 
let date7 = new Date(1980, 0, 1, 0, 0, 1);
console.log(date7);
// Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)

// 3
// let dateNow = new Date();
dateNow.setMonth(3);
console.log(dateNow);
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let name = month[dateNow.getMonth()];
console.log(`Previous Month Is ${name} And Last Day Is ${dateNow.getDate()}`);
// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

// 4
let date2 = new Date(404344800000);
console.log(date2);
let date8 = new Date(1982, 9, 25);
console.log(date8);
let date4 = new Date("1982-10-25");
console.log(date4);
// Needed Output
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

// 5
const t0 = performance.now();
for (let i = 0; i < 10000; i++) {
    console.log(`${i}`);
}
const t1 = performance.now();
console.log(`Loop Took ${(t1 - t0).toFixed(0)} Milliseconds.`);
// Needed Output
// "Loop Took 1921 Milliseconds."

// 6
function* gen() {
    let newCount = 200;
    let x = 14;
    yield x;
    while (true) {
        x += 140;
        yield x;
        x += newCount;
        newCount = newCount + 200;
    }
}

// Write Your Generator Function Here

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

// 7

function* genNumbers() {
    yield*[1, 2, 2, 2, 3, 4, 5];
}

function* genLetters() {
    yield*["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
    let myUniqueData2 = new Set(genNumbers());
    yield* myUniqueData2;
    let myUniqueData = new Set(genLetters());
    yield* myUniqueData;
}


// Write Your Generator Function Here

let generator1 = genAll();

console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}


// 8

// main.js File

// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names.toFixed(0)


// mod-one.js File
// import * as mod-one from "./mod-two";
function go(a, b, c) {
    return a + b + c;
}
// main.js File
// import * as calc from "./mod-one";
numOne = a;
numTwo = b;
numThree = c;
console.log(go(numOne, numTwo, numThree)); // 60