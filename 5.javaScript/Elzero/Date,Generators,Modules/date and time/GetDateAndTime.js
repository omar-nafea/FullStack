/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("Oct 25, 82");
let dateDiff = dateNow - birthday;

console.log(dateDiff); // 1254844074874
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365); // 39.79084458631406
console.log(dateNow); // Sat Jul 30 2022 15: 47: 54 GMT + 0200(Eastern European Standard Time)
console.log(dateNow.getTime()); // 1659188874874
console.log(dateNow.getDate()); // 30
console.log(dateNow.getFullYear()); // 2022
console.log(dateNow.getMonth()); // 6
console.log(dateNow.getDay()); // 6
console.log(dateNow.getMinutes()); // 47
console.log(dateNow.getSeconds()); // 54