// 01
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let numsRe = /[0-9]/g;
console.log(ip.match(numsRe));


// 02
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regexp = /Os\d*O/g;
console.log(specialNames.match(regexp));
// Output
// ['Os10O', 'OsO', 'Os100O']

//03

let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig));
// ['+(995)-123 (4567)']
//04

let reri = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https: => maybe find it or not , 
// // , ?: match the /w but dont capture it , [/w]+ more than one or not
// * morethan one or none
//05
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)\d{2,4}/i;

console.log(date1.match(reg)); // "25/10/1982"
console.log(date2.match(card)); // "25 - 10 - 1982"
console.log(date3.match(reg)); // "25 10 1982"
console.log(date4.match(reg)); // "25 10 82"


//06

/*
  Regular Expression
  - Challenge
*/
// (\.\w+)?\/?

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?([\w]+\.)?([\w]+)(\.).*/ig
let re = /(https?:\/\/)?([\w]+\.)?([\w]+\b\.)[a-z]{1,}.*/ig
    // let re2 = /(https?:\/\/)?([\w]+\.)?([\w]+)\.\w+(\.\w+).*/ig

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));

// (.*)=> any thing will write it will match it

// a regular expression including three capture groups
const regex = /(Jane|John|Alison)\s(.*?)\s(Smith|Smuth)/;

const result = regex.exec('Jane Isabell Smith');
console.log(result[0]); // 'Jane Isabell Smith'
console.log(result[1]); // 'Jane'
console.log(result[2]); // 'Isabell'
console.log(result[3]); // 'Smith'
// a regular expression with two non-capturing groups
// and one capturing group
const regex2 = /(?:Jane|John|Alison)\s(.*?)\s(?:Smith|Smuth)/;
const result2 = regex.exec('Jane Isabell Smith');
console.log(result[0]); // 'Jane Isabell Smith'
console.log(result[1]); // 'Isabell'

const notMatchingResult = regex.exec('nope');
console.log(notMatchingResult); // null