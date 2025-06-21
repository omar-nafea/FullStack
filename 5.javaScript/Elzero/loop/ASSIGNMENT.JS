// 1

let start = 10;
let end = 100;
let exclude = 40;

// Output

for (let m = start; m <= end; m += start) {
	if (m === exclude) {
		continue;
	}
	console.log(m);
}

// 2

let star = 10;
let en = 0;
let stop = 3;

// Output

for (let m = 10; m >= 0; m--) {
	if (m < 10) {
		console.log(`0${m}`);
	} else {
		console.log(`${m}`);
	}
	if (m === 3) {
		break;
	}
}

// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// 3

let starto = 1;
let endo = 6;
let breaker = 2;

for (x = starto; x <= endo; x++) {
	console.log(x);
	console.log(`-- ${breaker}`);
	console.log(`-- ${endo - breaker}`);
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// 4

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

for (i = 0; i <= friends.length - 1; i++) {
	if (friends[i].charAt(0) === letter.toUpperCase()) {
		friends.shift(friends[i]);
	}
	console.log(`"${friends.indexOf(friends[i])} => ${friends[i]}"`);
}
// 5

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
// "1 => Sayed"
// "2 => Mahmoud"
// a.startsWith("E")
while (index <= friends.length) {
	index += 1;
	if (typeof friends[index] === "number") {
		continue;
	}
	if (friends[index][0] === "A") {
		// friends[index].startsWith("A")
		continue;
	}
	console.log(`${++counter} => ${friends[index]}`);
}

/*

*/
