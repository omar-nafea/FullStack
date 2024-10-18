/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/
let dateNow = new Date();
console.log(dateNow);
// Sat Jul 30 2022 15:43:22 GMT+0200 (Eastern European Standard Time)
console.log(Date.now()); // 1000 Mill = 1 Second
// 1659188602660
let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);
// Seconds 1659188602.66
let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);
// Minutes 27653143.377666667
let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);
// Hours 460885.7229611111
let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);
// Days 19203.571790046295
let years = days / 365; // Number Of Years
console.log(`Years ${years}`);
// Years 52.61252545218163