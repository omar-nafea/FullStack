console.log(100 == "100"); // true
console.log(100 !== 1000); // true
console.log(110 + 100 + 10 !== 20); // true
console.log(-10 == "-10"); // true
console.log(-(-50) >= +"-40"); // true
console.log(-10 <= -"-40"); // true
console.log(+"10" === 10); // true
console.log(-20 < false); // true
// 2

let num1 = 10;
let num2 = 20;
let g = true;

console.log(typeof num1 == "number"); // true
console.log(typeof num2 == "number"); // true
console.log(num1 * ++g == num2); // true
console.log(num2 / g == num1); // true
console.log(num1 + num2 == num1 * ++g); // true
console.log(num2 - num1 == num1); // true

// 3

let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a < b); // true
console.log(a < b || a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

// 4

// Test Case 1
let num = 9; // "009"

// Test Case 2
let num = 20; // "020"

// Test Case 3
let num = 110; // "110"

if (num < 10) {
    console.log(`00${num}`);
} else if (num < 100) {
    console.log(`0${num}`);
} else {
    console.log(`${num}`);
}

// 5

let numb1 = 9;
let str = "9";
let str2 = "20";

// Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");

if (numb1 == str) {
    console.log(`{num1} Is The Same Value As {str}`);
}
if (numb1 == str && typeof numb1 !== typeof str) {
    console.log(`{num1} Is The Same Value As {str} But Not The Same Type`);
}
if (num1 != str2 || typeof numb1 !== typeof str2) {
    console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`);
}
if (typeof str2 === typeof str && str !== str2) {
    console.log(`{str} Is The Same Type As {str2} But Not The Same Value`);
}

// 6

// Edit What You Want Here

let num1 = 12;
let num2 = 9;
let num3 = 12;
let num4 = 36;

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}

// 7

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
if (day === `${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1, 6)}`) {
    console.log(`passed`);
}

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
// Output => "No Appointments Available"

let day = "Monday";
let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "Its Not A Valid Day"

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log(`No Appointments Available`);
        break;
    case "Thursday":
        console.log(`From 10:00 AM To 6:00 PM`);
        break;
    case "Wednesday":
        console.log(`From 10:00 AM To 7:00 PM`);
        break;
    case "Monday":
    case "Thursday":
        console.log(`From 10:00 AM To 5:00 PM`);
        break;
    default:
        console.log(`Its Not A Valid Day`);
}