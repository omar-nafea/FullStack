/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));
// 404344800000
let date1 = new Date(0);
console.log(date1);
// Thu Jan 01 1970 02: 00: 00 GMT + 0200(Eastern European Standard Time)
let date2 = new Date(404344800000);
console.log(date2);
// Mon Oct 25 1982 00: 00: 00 GMT + 0200(Eastern European Standard Time)
let date3 = new Date("10-25-1982");
console.log(date3);
// Mon Oct 25 1982 00: 00: 00 GMT + 0200(Eastern European Standard Time)
let date4 = new Date("1982-10-25");
console.log(date4);
// Mon Oct 25 1982 02: 00: 00 GMT + 0200(Eastern European Standard Time)
let date5 = new Date("1982-10");
console.log(date5);
// Fri Oct 01 1982 02: 00: 00 GMT + 0200(Eastern European Standard Time)
let date6 = new Date("82");
console.log(date6);
// Fri Jan 01 1982 00: 00: 00 GMT + 0200(Eastern European Standard Time)
let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);
// Mon Oct 25 1982 02: 10: 00 GMT + 0200(Eastern European Standard Time)
let date8 = new Date(1982, 9, 25);
console.log(date8);
// Mon Oct 25 1982 00: 00: 00 GMT + 0200(Eastern European Standard Time)
let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);
// Mon Oct 25 1982 08: 10: 00 GMT + 0200(Eastern European Standard Time)