/*
  Loop Challenge
*/
let myAdmins = ["Ahmed", "thouria", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
    "Amgad",
    "Samah",
    "Ameer",
    "Omar",
    "Othman",
    "Amany",
    "Samia",
    "Anwar",
    "tamer",
];

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);

let num = 0;
for (j = 0; j < myAdmins.length; j++) {
    if (myAdmins[j] === "Stop") {
        break;
    }
    document.write(`<hr>`);
    document.write(`<div>the admin for team ${j + 1} is ${myAdmins[j]}</div>`);
    document.write(`<h3>Team Members: </h3>`);
    for (k = 0; k < myEmployees.length; k++) {
        if (myAdmins[j].charAt(0) === myEmployees[k].charAt(0)) {
            document.write(`<div>- ${++num} ${myEmployees[k]}</div>`);
        }
    }
    num = 0;
}