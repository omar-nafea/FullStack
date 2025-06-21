/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow = new Date();
console.log(dateNow);
// Sat Jul 30 2022 15: 50: 19 GMT + 0200(Eastern European Standard Time)
console.log("#".repeat(66));

dateNow.setTime(1343661737289);
console.log(dateNow);
// Mon Jul 30 2012 17: 22: 17 GMT + 0200(Eastern European Standard Time)
console.log("#".repeat(66));

dateNow.setTime(10000);
console.log(dateNow);
// Thu Jan 01 1970 02: 00: 10 GMT + 0200(Eastern European Standard Time)
console.log("#".repeat(66));

dateNow.setDate(35);
console.log(dateNow);
// Wed Feb 04 1970 02: 00: 10 GMT + 0200(Eastern European Standard Time)
dateNow.setFullYear(2020, 13);
console.log(dateNow);
// Thu Feb 04 2021 02: 00: 10 GMT + 0200(Eastern European Standard Time)
dateNow.setMonth(15);
console.log(dateNow);
// Mon Apr 04 2022 02: 00: 10 GMT + 0200(Eastern European Standard Time)