"use strict";
let myData;
myData = 1000;
myData = +true;
let myInfo;
myInfo = 1000;
myInfo = true;
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
function yesOrNo(val) {
    if (typeof (val) === 'number') {
        return val > 10 ? "Yes" : "No";
    }
    else {
        throw new Error("please provide a valid Number");
    }
}
console.log(yesOrNo(30));
console.log(yesOrNo(8));
function isHeOld(age) {
    if (typeof (age) === 'number') {
        return age > 40 ? "Yes" : "No";
    }
    else {
        throw new Error("please provide a valid Number");
    }
}
console.log(isHeOld(45));
console.log(isHeOld(30));
let post;
post = [100, 200, "Title"];
post = ["Title", 100, true];
post = [100, "Title", true];
post.push("Elzero");
const [id1, title1, state] = post;
console.log(id1);
console.log(title1);
console.log(state);
const user = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
};
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
function getHardSeconds(vale) {
    return Game.Hard - vale;
}
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = getHardSeconds(10)] = "Insane";
})(Game || (Game = {}));
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
//# sourceMappingURL=12_21ass.js.map