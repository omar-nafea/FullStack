"use strict";
let theName = "Elzero";
theName = "Osama";
let all = 10;
all = 100;
all = "Osama";
function getActions(btns) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
}
getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20));
console.log(compare(20, 15));
console.log(compare(20, 30));
let myNumber = 1;
let article = [11, "Title One", true];
article = [12, "Title Two", false];
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam A Message"));
console.log("Test");
const fail = (msg) => {
    throw new Error(msg);
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var Levl;
(function (Levl) {
    Levl[Levl["Kids"] = 15] = "Kids";
    Levl[Levl["Easy0"] = 9] = "Easy0";
    Levl[Levl["Medium0"] = 6] = "Medium0";
    Levl[Levl["Hard0"] = 3] = "Hard0";
})(Levl || (Levl = {}));
let lvel = "Easy";
if (lvel === "Easy") {
    console.log(`The Level Is ${lvel} And Number Of Seconds Is ${Levl.Easy0}`);
}
function getHardSecond() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 25] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSecond()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
let data = 1000;
console.log(data.repeat(3));
function getAction(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getAction({ one: "String", two: 100, three: true, five: true });
let myObject = {
    username: "Elzero",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS"
    }
};
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
//# sourceMappingURL=12_21code.js.map