# Functions of Data type in JS

### Array

In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the `push()` and the `pop()` methods. To add new items to an array, I can use the `push()` method:

```js
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push("pear"); // ['apple', 'pear']
// To remove the last item from an array
// I can use the pop() method:
fruits.pop();
console.log(fruits); // ['apple']
```

Tying into some earlier lessons in this course, I can now build a function that takes all its arguments and pushes them into an array, like this:

```js
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  console.log(arr);
}
```

I can now call the arrayBuilder() function, for example, like this:

```js
arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']
```
Even better, I don't have to console log the newly built array. Instead, I can return it:

```js
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
```
Additionally, I can save this function call to a variable. I can name it anything, but this time I'll use the name: simpleArr.

```js
var simpleArr = arrayBuilder("apple", "pear", "plum");
console.log(simpleArr); // ['apple','pear','plum']
```

### Math object cheat sheet

JavaScript has handy built-in objects. One of these popular built-in objects is the Math object. By the end of this reading, you'll be able to:

- Outline the built-in properties and methods of the Math object

##### Number constants

Here are some of the built-in number constants that exist on the Math object:

- The PI number: `Math.PI` which is approximately `3.14159`
- The Euler's constant: `Math.E` which is approximately `2.718`
- The natural logarithm of 2: `Math.LN2` which is approximately `0.693`

##### Rounding methods

These include:

- `Math.ceil()` - rounds up to the closest integer
- `Math.floor()` - rounds down to the closest integer
- `Math.round()` - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer
- `Math.trunc()` - trims the decimal, leaving only the integer

##### Arithmetic and calculus methods

Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object:

- `Math.pow(2,3)` - calculates the number 2 to the power of 3, the result is 8
- `Math.sqrt(16)` - calculates the square root of 16, the result is 4
- `Math.cbrt(8)` - finds the cube root of 8, the result is 2
- `Math.abs(-10)` - returns the absolute value, the result is 10
- Logarithmic methods: `Math.log()`, `Math.log2()`, `Math.log10()`
- Return the minimum and maximum values of all the inputs: `Math.min(9,8,7)` returns 7, `Math.max(9,8,7)` returns 9.
- Trigonometric methods: `Math.sin()`, `Math.cos()`, `Math.tan()`, etc.

### String cheat sheet


In this cheat sheet, I'll list some of the most common and most useful properties and methods available on strings. For all the examples, I'll be using either one or both of the following variables:

```js
var greet = "Hello, ";
var place = "World";
```

Note that whatever string properties and methods I demo in the following examples, I could have ran it on those strings directly, without saving them to a variable such as the ones I named greet and place.

In some of the examples that follow, for the sake of clarity, instead of using a variable name, I'll use the string itself.

All strings have at their disposal several built-in properties, but there's a single property that is really useful: the length property, which is used like this:

```js
greet.length; // 7
```
To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:

```js
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

The lastIndexOf finds the last match, otherwise it works the same as indexOf. The split method chops up the string into an array of sub-strings:

```js
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
```

There are also some methods to change the casing of strings. For example:

```js
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "
```

Here's a list of all the methods covered in this cheat sheet:

- `charAt()`
- `concat()`
- `indexOf()`
- `lastIndexOf()`
- `split()`
- `toUpperCase()`
- `toLowerCase()`

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

This is a function that can be accessed only through the JavaScript object that it is a member of. For example, the log method, which belongs to the console object, can only be accessed through the console object. `console.log('Hello world');`.

Let's explore this further now. I will create an object using something known as the constructor function.

```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
// { mileage: 98765, color: 'red' }
```

First, I'll build a new object literally named car. I type var, space, car, space, equal sign, space, followed by a set of curly braces, and finally a semicolon.

Now, I'll extend the car object by assigning it a property named mileage. When I inspect the object, I can confirm that it contains a mileage property set to 98765.

I want to add another property to the car object. This time, I will add a property named color and set it to the value of "red". I can inspect the object again by typing its name into the browser console. So now, when I type console.log(car), I get an object with two properties: the mileage property, which is set to `98765`, and the color property, set to "red".

Great, now I've added two properties to my object. Next, I want to add a method to my car object. And this method, when called, will output some text to the console.

So, once again, I add another property to my car object. After all, a method is just another property of the car object. It's just another key-value par that the car object holds. What's unique is that the value I'm assigning to it is a function.

```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function () {
  console.log("The engine is running");
};
console.log(car);
// { mileage: 98765, color: 'red' }
// { mileage: 98765, color: 'red', turnTheKey: [Function (anonymous)] }
```

So, I begin by typing car dot turnTheKey, equals, and then I type the code for my function. So function, open-close parentheses. Then the two curly braces where I will place my code. Finally, inside the curly braces, I type the console dot log followed by the message "The engine is running".

Now I can inspect my car object again by typing its name into the console log method. This time, it displays that the car object contains three properties; the color property, the mileage property, and the turnTheKey property.

Remember that all the key-value pairs in an object are referred to simply as properties. However, if I want to differentiate between the properties that can be executed, then I refer to such properties as methods.

So, now I want to add another method to the car object. I'll name this one lightsOn.

Once again, I type car.lightsOn, and then I add an equals sign, and again since it's a method, I'm assigning it to a function. This function will also have a console log in its body, and I'm just logging the string with the text "The lights are on".

```js
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car); // {mileage: 98765, color: 'red'}
car.turnTheKey = function () {
  console.log("The engine is running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log(car); // {mileage: 98765, color: 'red', turnTheKey: ƒ, lightsOn: ƒ}

car.turnTheKey(); // The engine is running
car.lightsOn(); // The lights are on.
```

Ok, so now I have added four properties to my object. And two of those are methods.

I've already ensured that I'm getting the correct mileage and color from my car object. Now, I'll try executing the turnTheKey and the lightsOn methods.

First, I'll invoke the turnTheKey method.

Remember that this method can be accessed only through the car object, so I first need to type the name of the object that holds the turnTheKey method. In other words, I need to type the word car, followed by a dot, and then the name of my method, which is turnTheKey.

Remember that this property is a method. So, to run it, I need to append an opening and a closing parenthesis so that the JavaScript engine can process my JavaScript code.

Notice that this results in the "The engine is running" string logged to the console.

Now I'll test the other method. Once again, I need to access it through the car object, so I type car.lightsOn, and again, I need to add those parentheses to invoke the lightsOn method. I press the ENTER key and notice the text displays in the console.

**Success! It's important to remember that when the JavaScript engine runs this line of code, it locates the car object in its memory. Then, it finds the lightsOn method on the car object. It reads the function declaration that's saved on this property and runs it, line by line.(Interpretation)**

### Syntax, logical and runtime errors

By the end of this reading, you'll be able to:

- Recognize common types of errors in JavaScript

Here are some of the most common errors in JavaScript:

- ReferenceError
- SyntaxError
- TypeError
- RangeError

There are some other errors in JavaScript. These other errors include:

- AggregateError
- Error
- InternalError
- URIError

However, in this reading I'll focus on the Reference, Syntax, Type, and Range errors.

### ReferenceError

A ReferenceError gets thrown when, for example, one tries to use variables that haven't been declared anywhere.

An example can be, say, attempting to console log a variable that doesn't exist:  
`console.log(username);`

If the variable named username hasn't been declared, the above line of code will result in the following output:
Uncaught ReferenceError: username is not defined

### SyntaxError

Any kind of invalid JavaScript code will cause a SyntaxError.

For example:  
`var a "there's no assignment operator here";`

The above line of code will throw the following error:  
Uncaught SyntaxError: Unexpected string

There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the try-catch block.

### TypeError

A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

A simple example is attempting to run the pop() method on a string:  
`"hello".pop() // Uncaught TypeError: "hello".pop is not a function`

The array-like behavior of strings was already covered in an earlier lesson in this course.

However, as can be confirmed by running the above line of code,
strings do not have all the array methods readily available to them,
and trying to use some of those methods will result in a TypeError being thrown.

### RangeError

A RangeError is thrown when we're giving a value to a function,
but that value is out of the allowed range of acceptable input values.

Here's a simple example of converting an everyday Base 10 number
(a number of the common decimal system) to a Base 2 number(i.e binary number).

For example:  
`(10).toString(2); // '1010'`

The value of 2 when passed to the toString() method, is like saying to JavaScript:
"convert the value of 10 of the Base 10 number system, to its counter-part in the Base 2 number system".

JavaScript obliges and "translates" the "regular" number 10 to its binary counter-part.

Besides using Base 2 number system, I can also use the Base 8, like this:  
`(10).toString(8); // 12`

I get back the value 12, which is the plain number 10, writen in Base 8 number system.

However, if I try to use a non-existing number system, such as an imaginary Base 100,
since this number system effectively doesn't exist in JavaScript, I will get the RangeError,
because a non-existing Base 100 system is out of range of the number systems that are available to the toString() method:  
`(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36`

# try-catch statement

```js
try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("continue");
}
console.log("test is done");
```

### Exercise: Defensive programming

Defensive programming is all about assuming that all the arguments a
function will receive are of the wrong type, the wrong value or both.

In other words, you are assuming that things will go wrong and you are proactive in thinking
about such scenarios before they happen, so as to make your function less likely to cause errors
because of faulty inputs.

How would you then refactor the function given below with defensive programming in mind?

For this exercise, let's make sure that both of the arguments that are passed in satisfy
the following criteria:

- The length of the word parameter cannot be less than 2.
- The length of the match parameter must be 1.
- The type of both the word and the match parameters must be string.

You will use the code below to complete your task:

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

- Just above the for loop in the letterFinder function definition,
  declare a variable named condition1 and assign to it the following
  code: typeof(word) == 'string' && word.length >= 2.
- Declare a variable named condition2 on the next line and assign to it and assign to
  it a check that makes sure that the type of match is a string AND that the
  length of the match variable is equal to 1.
- Write an if statement on the next line that checks that condition1 is true, and condition2 is true
- Move the rest of the function's body into the if statement you wrote in the previous step.
- Code an "else" block after the "if" condition and console.log the following:
  "Please pass correct arguments to the function.".
- As a failing test, run the letterFinder function and pass it with any two numbers as arguments.
- As a passing test, run the letterFinder function and pass it with correct arguments,
  such as: letterFinder("cat", "c").

```js
function letterFinder(word, match) {
  if (word.length() < 2 || match.length() !== 1) {
    throw new RangeError();
  }
  if (typeof word !== "string" && typeof match !== "string") {
    throw new TypeError();
  }
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

or

```js
function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
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
