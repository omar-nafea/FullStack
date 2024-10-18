/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.2)); //99
console.log(Math.round(99.5)); //100

console.log(Math.ceil(99.2)); //100
console.log(Math.floor(99.9)); //99

console.log(Math.min(10, 20, 100, -100, 90)); //-100
console.log(Math.max(10, 20, 100, -100, 90)); //100

console.log(Math.pow(2, 4)); //16
console.log(Math.random()); //0.2549648
console.log(Math.trunc(99.5)); //99

// random

// Example: For getting a random number between 0(inclusive) and 1(exclusive).

var random = Math.random();
document.write("Random Number Generated : " + random);
// Output:
// Random Number Generated : 0.2894437916976895

// The Math.random() function is used to return a floating - point pseudo - random number between range
// [0, 1) , 0(inclusive) and 1(exclusive).This random number can then be scaled according to the desired  range.

// Syntax:

Math.random();
// Parameters: This function does not accepts any parameter.

// Return Value: The math.random() function returns a floating-point, pseudo-random number between
// range[0, 1) , 0(inclusive) and 1(exclusive).

// More codes for the above method are as follows:

// Program 1: Math.random() can be used to get a random number between two values.The returned value
// is no lower than min and may possibly be equal to min, and it is also less than and not equal to
// max.For getting a random number between two values the math.random() function can be executed in the
// following way:

var min = 4;
var max = 5;
var random = Math.random() * (+max - +min) + +min;
document.write("Random Number Generated : " + random);
// Output:

// Random Number Generated : 4.991720937372939

// Program 2: Math.random() can be used to get an integer between two values.The returned value is no
// lower than min or it is the next integer greater than min if min isn’t an integer.It is also less
// than but not equal to max.For getting a random integer between two values the Math.random() function
//   can be executed in the following way:

var min = 4;
var max = 5;
var random = Math.floor(Math.random() * (+max - +min)) + +min;
document.write("Random Number Generated : " + random);
// Output:

// Random Number Generated : 4

// Program 3: Math.random() can be used to get an integer between a minimum and a maximum value,
//   including not only the minimum, but also the maximum.For getting a random integer between two
//    values the Math.random() function can be executed in the following way:

var min = 20;
var max = 60;
var random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
document.write("Random Number Generated : " + random);

// Output:

// Random Number Generated : 60