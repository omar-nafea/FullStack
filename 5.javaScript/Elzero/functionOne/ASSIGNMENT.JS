// 1

function sayHello(theName, theGender) {
	// Your Code Here
	if (theGender === "Male" || theGender === "male") {
		console.log(`Hello Mr ${theName}`);
	} else if (theGender === "Female" || theGender === "female") {
		console.log(`Hello Miss ${theName}`);
	} else if (theGender === undefined) {
		console.log(`Hello ${theName}`);
	}
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// 2

function calculate(firstNum, secondNum, operation) {
	// Your Code Here
	if (secondNum === undefined) {
		console.log(`Second Number Not Found`);
	} else if (operation === undefined) {
		console.log(firstNum + secondNum);
	} else if (operation === "add") {
		console.log(firstNum + secondNum);
	} else if (operation === "subtract") {
		console.log(firstNum - secondNum);
	} else if (operation === "multiply") {
		console.log(firstNum * secondNum);
	}
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// 3

function ageInTime(theAge) {
	// Your Code Here
	if (theAge > 100 || theAge < 10) {
		console.log(`Age Out Of Range`);
	} else {
		console.log(`${(month = theAge * 12)} months`);
		console.log(`${(weeks = month * 4)} weeks`);
		console.log(`${(days = weeks * 7)} days`);
		console.log(`${(hours = days * 24)} hours`);
		console.log(`${(min = hours * 60)} min`);
		console.log(`${(sec = min * 60)} sec`);
	}
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
