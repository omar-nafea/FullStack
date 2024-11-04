# Functions of Data type in JS

### Math object cheat sheet

JavaScript has handy built-in objects. One of these popular built-in objects is the Math object. 

##### Number constants

Here are some of the built-in number constants that exist on the Math object:

- PI: `Math.PI` approximately `3.14159`
- Euler's: `Math.E` approximately `2.718`
- natural logarithm of 2: `Math.LN2` approximately `0.693`

##### Rounding methods

- `Math.ceil()` - rounds up to the closest integer
- `Math.floor()` - rounds down to the closest integer
- `Math.round()` - rounds up to the closest integer if the decimal is `.5` or above; otherwise, rounds down to the closest integer
- `Math.trunc()` - trims the decimal, leaving only the integer

##### Arithmetic and calculus methods

Here's some common arithmetic and calculus methods that exist on the Math object:

- `Math.pow(2,3)` - calculates the number 2 to the power of 3, the result is 8
- `Math.sqrt(16)` - calculates the square root of 16, the result is 4
- `Math.cbrt(8)` - finds the cube root of 8, the result is 2
- `Math.abs(-10)` - returns the absolute value, the result is 10
- Logarithmic methods: `Math.log()`, `Math.log2()`, `Math.log10()`
- Return the minimum and maximum values of all the inputs: 
```js
Math.min(9,8,7) // 7 
Math.max(9,8,7) // 9
```
- Trigonometric methods: `Math.sin()`, `Math.cos()`, `Math.tan()`, etc.

### String cheat sheet

properties and methods available on strings

- `charAt()`
- `concat()`
- `indexOf()`
- `lastIndexOf()`
- `split()`
- `toUpperCase()`
- `toLowerCase()`

All strings have at their disposal several built-in properties, but there's a single property that is really useful: the length property, which is used like this:

```js
var greet = "Hello, ";
greet.length; // 7
```
To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:

```js
var greet = "Hello, ";
greet.charAt(0); // 'H'
```
The `concat()` method joins two strings:

```js
"Wo".concat("rl").concat("d"); // 'World'
```

The indexOf returns the location of the first position that matches a character:

```js
"ho-ho-ho".indexOf("h"); // 0
"ho-ho-ho".indexOf("o"); // 1
"ho-ho-ho".indexOf("-"); // 2
```

The lastIndexOf finds the last match, otherwise it works the same as indexOf.  
The split method chops up the string into an array of sub-strings:

```js
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
```

There are also some methods to change the casing of strings. For example:

```js
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "
```
### Object Methods

We can add new key-value pairs to existing objects using the dot notation and the assignment operator.
```js
var car = {};
car.color = "red"; //update the value of a property of the car objject
```
These are known as properties, and can take many data types, including functions.
```js
var car = {};
car.color = "red";
```
add a method to the car object so that it can be called as car.turnkey()
```js
car.turnKey = function () {
  console.log("engine running");
};
```

This is a function that can be accessed only through the JavaScript object that it is a member of. 
**For example, the log method, which belongs to the console object, can only be accessed through the console object. `console.log('Hello world');`.**

I will create an object using something known as the constructor function.
```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
// { mileage: 98765, color: 'red' }
```
I want now to add a method to my car object. And this method, when called, will do some action.  
I add another property to my car object. **After all, a method is just another property of the car object.** It's just another key-value pair that the car object holds. What's unique is that the value I'm assigning to it is a function.

```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
// { mileage: 98765, color: 'red' }
car.turnTheKey = function () {
  console.log("The engine is running");
};
console.log(car);
// { mileage: 98765, color: 'red', turnTheKey: [Function (anonymous)] }
```

**Remember that all the key-value pairs in an object are referred to simply as properties.**
However, if I want to differentiate between the properties that can be executed, then I refer to such properties as methods.

So, now I want to add another method to the car object. I'll name this one lightsOn.
```js
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car); 
// {mileage: 98765, color: 'red'}
car.turnTheKey = function () {
  console.log("The engine is running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log(car);  
// {mileage: 98765, color: 'red', turnTheKey: ƒ, lightsOn: ƒ}
```

I've already ensured that I'm getting the correct mileage and color from my car object. Now, I'll try executing the turnTheKey and the lightsOn methods. First, I'll invoke the turnTheKey method.
```js
car.turnTheKey(); // The engine is running
car.lightsOn(); // The lights are on.
```
Remember that this method can be accessed only through the car object.

_**It's important to remember that when the JavaScript engine runs this line of code, it locates the car object in its memory. Then, it finds the lightsOn method on the car object. It reads the function declaration that's saved on this property and runs it, line by line. (Interpretation)**_

### Syntax, logical and runtime Errors

Most common errors in JavaScript:

- ReferenceError
- SyntaxError
- TypeError
- RangeError

There are some other errors in JavaScript. These other errors we won't discuss here:

- AggregateError
- Error
- InternalError
- URIError


### ReferenceError

A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere. An example can be, attempting to console log a variable that doesn't exist:  
```js
console.log(username);
```
If the variable named username hasn't been declared, the above line of code will result in the following output:
```bash
Uncaught ReferenceError: username is not defined
```

### SyntaxError

Any kind of invalid JavaScript code will cause a SyntaxError.
```js
var a "there's no assignment operator here";
```
The above line of code will throw the following error:  
```bash
Uncaught SyntaxError: Unexpected string
```

### TypeError

A TypeError is thrown when, for example, trying to run a method on a non-supported data type.
```js
"hello".pop() 
// Uncaught TypeError: "hello".pop is not a function`
```
as can be confirmed by running the above line of code, strings do not have all the array methods readily available to them, and trying to use some of those methods will result in a TypeError being thrown.

### RangeError

A RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.

Here's a simple example of converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number(i.e binary number).

```js
(10).toString(2); 
// '1010'
```

The value of 2 when passed to the `toString()` method, is like saying to JavaScript:
```
convert the value of 10 of the Base 10 number system, 
to its counter-part in the Base 2 number system.
```
Besides using Base 2 number system, I can also use the Base 8, like this:  
```js
(10).toString(8); 
// 12
```
However, if I try to use a non-existing number system, such as an imaginary Base 100, since this number system effectively doesn't exist in JavaScript, I will get the RangeError, because a non-existing Base 100 system is out of range of the number systems that are available to the `toString()` method:  
```js
(10).toString(100); 
// Uncaught RangeError: toString() radix argument must be between 2 and 36`
```

## try-catch statement

```js
try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("continue");
}
console.log("test is done");
```

##### Exercise: Defensive programming

Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type, the wrong value or both.
In other words, you are assuming that things will go wrong and you are proactive in thinking about such scenarios before they happen, so as to make your function less likely to cause errors because of faulty inputs.

let's make sure that both of the arguments that are passed in satisfy the following criteria:

- The length of the word parameter cannot be less than 2.
- The length of the match parameter must be 1.
- The type of both the word and the match parameters must be string.

```js
function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //if the current character at position i in the word is equal to the match
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
```
Here are the tasks to complete:

- Just above the `for` loop in the `letterFinder` function definition, declare a variable named `condition1` and assign to it a check that makes sure that the type of word is a string AND that the length of the match variable is greater than or equal to 2.
- Declare a variable named `condition2` on the next line and assign to it and assign to it a check that makes sure that the type of match is a string AND that the length of the match variable is equal to 1.
- Write an if statement on the next line that checks that `condition1` is `true`, and `condition2` is `true`
- Move the rest of the function's body into the if statement you wrote in the previous step.
- Code an `else` block after the `if` condition and `console.log("Please pass correct arguments to the function")`
- As a failing test, run the `letterFinder` function and pass it with any two numbers as arguments.
- As a passing test, run the `letterFinder` function and pass it with correct arguments, such as: `letterFinder("cat", "c")`.


```js
function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;  
  //if the word is a string and the length is greater than or equal to 2
  var condition2 = typeof match == "string" && match.length == 1; //if the match is a string and the length is equal to 1
  if (condition1 && condition2) {
    //if both condition matches
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //check if the character at this i position in the word is equal to the match
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    //if the requirements don't match
    console.log("Please pass correct arguments to the function");
  }
}
letterFinder([], []);
letterFinder("cat", "c");
```
