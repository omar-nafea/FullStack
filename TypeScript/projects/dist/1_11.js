"use strict";
let allOfThem = "Osman";
allOfThem = "A";
allOfThem = 100;
allOfThem = true;
let arrOne = [2, 3, 4];
let arrTwo = ["sdaf", "sfa"];
let friends = ["khaled", "Ahmed", "Belly", 10, 32];
let arrThree = ["omar", 234, ["omara"]];
let arrayThree = [1, 2, 3, 4, "A", "B", "C"];
let arrayFour = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
let showMsg = true;
function showDetails(name, age, salary) {
    if (showMsg) {
        return `Hello ${name}, Age is ${age}, Salary is ${salary}`;
    }
    return `No data to show`;
}
console.log(showDetails("omar", 40, 5000));
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20));
console.log(calculate(+true, +true));
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
let arr;
arr = [32, [true, false], ['omar', ['ahmed', 23]]];
function reportErrors(username, age) {
    let rank = "Professor";
    return `Username: ${username}, age is ${age} and rank ${rank}`;
}
console.log(reportErrors("Elzero", 40));
function showData(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData("Osama", 40, "Egypt"));
let nothing;
let Name = "Elzero";
function showMyDetails(a = "", b = "", c = "") {
    return `${a}${b}${c}`;
}
console.log("sixth: " + showMyDetails(Name, "", ""));
function show2Data(name = "Un", age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(show2Data(undefined, 40, "Egypt"));
function show2msg(user, age, country) {
    return `${user}${age}${country}`;
}
console.log(show2msg());
console.log(show2msg("Elzero"));
console.log(show2msg("Elzero", 40));
console.log(show2msg("Elzero", "40", "Egypt"));
function printInConsole(...char) {
    for (let ch = 0; ch < char.length; ch++) {
        console.log(`The Value Is ${char[ch]} And Type Is ${typeof (char[ch])}`);
    }
    return `Done`;
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(10, 20));
//# sourceMappingURL=1_11.js.map