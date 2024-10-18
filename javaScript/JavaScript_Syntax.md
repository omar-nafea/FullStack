# Introduction to Programming

All programs are called software and are in one way or another.
Running on physical machines which are referred to as hardware.

Programming is simply the process of writing the steps a computer
needs to take to complete a certain task.
To program these instructions, we use programming languages.

A programming language is sort of like a **bridge** that
we use to facilitate communication between computers and people.

For a computer to understand a programming language,
it needs to save it somewhere in its random access memory.
RAM or on a disk **In binary code**, which is represented by a series of zeros and ones.

_The binary code is a representation of machine language._
That a computer can understand all of the zeros and
ones in binary language represent electrical switches.

Finally, a computer's central processing unit, or
CPU can comprehend these binary electrical signals and update itself accordingly.

This machine language, with its series of zeros and ones, is known as a
_low level language_ because it's closer to being understood by a computer's CPU.

There are also _high level languages_ such as JavaScript, that needs to be
**interpreted**, that is converted to binary code
that a CPU will be able to work with. So we might
think of JavaScript and other high level languages
as a tool that helps us to communicate with the CPU.

# JavaScript Syntax

### Comments

```js
// to write a single line of comment in js prefix it with double /

/*
if you want to write multiple line comment
in JavaScript add /* at the beginning and at the ending add */
```

### Print

```js
// to print anything in js
console.log(anything);
```

## Variables

```js
// to declare a variable precede it with one of those keywords
var x = 2;
let bool = true;
const name = "omar";

console.log("Hello, ", name);
```

## Data types

There are seven **primitive data types** in JavaScript.

- string
- number
- Boolean

it's necessary to know when a variable does not contain a value.

- null  
  has the value null and represents the absence of value.

- undefined  
   can only hold the value undefined and usually refers to a variable
  that has not yet been assigned a value.

ES6 new Data types

- BigInt  
  is an extra large box that can
  accommodate a much greater range of numbers than the number data type.
- symbol  
  can be used as a unique identifier.
  Think of it as having multiple boxes with the same label and
  using different serial numbers to avoid mixing them up.

## Operators

Assignment operators which you can use to perform simple arithmetic.

#### Arithmetic operators

| Operator |    Meaning     | Example |
| :------: | :------------: | ------: |
|    +     |    Addition    |   2 + 3 |
|    -     |  Subtraction   |   3 - 2 |
|    /     |    Division    |  35 / 5 |
|    \*    | Multiplication |  7 \* 4 |
|    %     |     Module     |  13 % 6 |

#### Comparison operators

| Operator |          Meaning           |   Example |
| :------: | :------------------------: | --------: |
|    >     |        Greater than        |     9 > 3 |
|    <     |         Less than          |     1 < 2 |
|    ==    |          Equal to          |    5 == 5 |
|    !=    |        Not equal to        |    7 != 4 |
|   ===    |  strict equality operator  |   2 === 2 |
|   !==    | strict inequality operator | 2 !== "2" |

#### Logical operators

|   Operator    |                   Meaning                    |        Example         |
| :-----------: | :------------------------------------------: | :--------------------: |
|      &&       |    Checks for both conditions to be ture     |      a>5 && a<10       |
| &#124; &#124; | Checks for at least one condition to be true | a>5 &#124; &#124; a>10 |
|       !       |     Returns false if the reslut is ture      |         !(a>5)         |

```js
console.log(2 + 2); // 4
console.log(13 % 2); // this a reminder from divide regular nums. // 1
console.log(21 - 7); // 14
console.log(2 * 13); // 26
console.log(12 / 2); // 6
console.log(3 > 2); // true
console.log(2 > 3); // false
console.log(10 == 10); // true
let a = 7;
console.log(a > 5 && a < 10); // true
console.log(a > 5 || a > 10); // true
console.log(!(a > 5)); // false
```

#### Equality operator

has two equal signs and it checks only for value.
Additionally, there's also
the strict equality operator that has
three equal signs and it checks for
both the value and type.

```js
100 == "100"; // true
100 === "100"; // false
/*
It is false because although
the value is the same, the type is not.
The number 100 does not have
the same type as the string 100. 
*/
1 != 1; // false
/* Additionally, just like there's
the strict equality operator,
there's also its opposite in
the form of the strict inequality operator.
This operator is an exclamation mark
with two equal signs.
*/
1 !== "1"; // true
```

### Falsy

> A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/en-US/docs/Glossary/Null">null</a></td>
      <td>Null</td>
      <td>The keyword <a href="/en-US/docs/Web/JavaScript/Reference/Operators/null"><code>null</code></a> — the absence of any value.</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Glossary/Undefined">undefined</a></td>
      <td>Undefined</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> — the primitive value.</td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td>Boolean</td>
      <td>The keyword <a href="/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words"><code>false</code></a>.</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Glossary/NaN">NaN</a></td>
      <td>Number</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"><code>NaN</code></a> — not a number.</td>
    </tr>
    <tr>
      <td><code>0</code></td>
      <td>Number</td>
      <td>The <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a> zero, also including <code>0.0</code>, <code>0x0</code>, etc.</td>
    </tr>
    <tr>
      <td><code>-0</code></td>
      <td>Number</td>
      <td>The <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a> negative zero, also including <code>-0.0</code>, <code>-0x0</code>, etc.</td>
    </tr>
    <tr>
      <td><code>0n</code></td>
      <td>BigInt</td>
      <td>The <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"><code>BigInt</code></a> zero, also including <code>0x0n</code>, etc. Note that there is no <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"><code>BigInt</code></a> negative zero — the negation of <code>0n</code> is <code>0n</code>.</td>
    </tr>
    <tr>
      <td><code>""</code></td>
      <td>String</td>
      <td>Empty <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">string</a> value, also including <code>''</code> and <code>``</code>.</td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/API/Document/all"><code>document.all</code></a></td>
      <td>Object</td>
      <td>The only falsy object in JavaScript is the built-in <a href="/en-US/docs/Web/API/Document/all"><code>document.all</code></a>.</td>
    </tr>
  </tbody>
</table>

### Truthy

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
All values are truthy unless they are defined as falsy. That is,
all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

Here are examples of truthy values

```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

**Using the + operators on strings and numbers**

The addition assignment operator, +=

```js
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9
```

The concatenation assignment operator, +=

```js
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."
```

## Conditional comparison

| if-else statement | switch statement |
| :---------------: | :--------------: |

```js
let light = "red"

if(light == "green")
console.log("Drive")
} else if (light == "orange") {
console.log("Get ready")
} else if (light == "red") {
console.log("Dont' drive")
} else {
//this block will run if no condition matches
console.log("The light is not green, orange, or red");
}

//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
    console.log("Drive");
    break;
    case 'orange':
    console.log("Get ready");
    break;
    case 'red':
    console.log("Don't drive");
    break;
    default:
    //this block will run if no condition matches
    console.log('The light is not green, orange, or red');
    break;
    }
```

### Conditional (ternary) operator

    condition ? exprIfTrue : exprIfFalse

**Parameters**

`condition`

An expression whose value is used as a condition.

`exprIfTrue`

An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true).

`exprIfFalse`

An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).

**Description**

Besides false, possible falsy expressions are: null, NaN, 0, the empty string (""), and undefined.
If condition is any of these, the result of the conditional expression will be the result of executing the expression exprIfFalse.

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

<!---->
<!-- ### Handling null values -->
<!---->
<!-- One common usage is to handle a value that may be null: -->
<!---->
<!-- ```js -->
<!-- const greeting = (person) => { -->
<!--   const name = person ? person.name : "stranger"; -->
<!--   return `Howdy, ${name}`; -->
<!-- }; -->
<!---->
<!-- console.log(greeting({ name: "Alice" })); // "Howdy, Alice" -->
<!-- console.log(greeting(null)); // "Howdy, stranger" -->
<!-- ``` -->
<!---->

## Loops

For loops

```js
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("Counting completed!");

for (var i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Countdown finished!");
```

While loops

```js
var i = 1;
while (i < 6) {
  console.log(i);
  i++;
}
console.log("Counting completed!");

var i = 1;
while (i < 6) {
  console.log(i);
  i++;
}
console.log("Counting completed!");
```

Nested loops

```js
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(firstNum + ", " + secondNum);
  }
}

/*
0, 0
0, 1
0, 2
0, 3
0, 4
0, 5
0, 6
0, 7
0, 8
0, 9
1, 0
1, 1
1, 2
1, 3
1, 4
1, 5
1, 6
1, 7
1, 8
1, 9
*/

//nested loops - one inside another
for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j);
  }
}
/*
100 divided by 10 equals 10
divided by 5 equals 20
divided by 10 equals 9
divided by 5 equals 18
divided by 10 equals 8
divided by 5 equals 16
divided by 10 equals 7
divided by 5 equals 14
divided by 10 equals 6
divided by 5 equals 12
divided by 10 equals 5
divided by 5 equals 10
divided by 10 equals 4
divided by 5 equals 8
divided by 10 equals 3
divided by 5 equals 6
divided by 10 equals 2
divided by 5 equals 4
*/
```

# Functions & Arrays

Arrays

> Values in an array are all part of a group

> Values are set in a specific sequence

> Values can be accessed with their index numbers

```js
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "red") {
      console.log(i * 100, "tomato!");
    } else {
      console.log(i * 100, arr[i]);
    }
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

/*
0 'tomato!'
100 'orange'
200 'yellow'
300 'green'
400 'blue'
500 'purple'
600 'pink'
*/
```

```js
//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);

/*
0 'red'
1 'orange'
2 'yellow'
3 'green'
4 'blue'
5 'purple'
6 'pink'
*/
```

# Introduction to objects

Object literals and the dot notation

One of the most common ways of building an object in JavaScript is using the object literal syntax: {}.

To be able to access this object literal, it is very common to assign it to a variable, such as:

`var user = {}; //create an object`

Now an object literal is assigned to the variable user, which means that the object it is bound to can be extended and manipulated
in a myriad of ways.

Sometimes, an entire object can be immediately built, using the object literal syntax, by specifying the object's properties,
delimited as key-value pairs, using syntax that was already covered in an earlier lesson item in this lesson.

Here's one such previously built object:

```js
//creating an object with properties and their values
var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitious",
  greeting: "Let's make some money",
};
```

The beauty of this syntax is that it's so easily readable.

It essentially consists of two steps:

1. Declaring a new variable and assigning an object literal to it - in other words, this: var assistantManager = {}

2. Assigning the values to each of the object's keys, using the assignment operator, =

Notice that it's very easy to build any kind of an object in JavaScript using this example syntax.

For example, here's a table object:

```js
var table = {
  legs: 3,
  color: "brown",
  priceUSD: 100,
};
```

To access the table object, I can simply console log the entire object:

`console.log(table);//display the object in the developer console`

The returned value is the entire table object:
`{legs: 3, color: 'brown', priceUSD: 100}`

Additionally, I can console log any individual property, like this:
`console.log(table.color); // 'brown'`

Now that I have this "syntax recipe", I can build any other object in a similar way:

```js
var house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
};

// An alternative approach of building objects
// is to first save an empty object literal to a variable,
// then use the dot notation to declare new properties on the fly,
// and use the assignment operator to add values to those properties;

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

// Additionally, nothing is preventing me from combining the two approaches. For example:

console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

// This flexbility additionally means that I can update already existing properties,
// not just add new ones:
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
```

### Object Literals and the Brackets Notation

There is an alternative syntax to the dot notation I used up until this point.

This alternative syntax is known as the brackets notation.

To understand how it works, it's best to use an example,
so I'll go through the process of coding the house2 object again,
in the same way that I did with the dot notation, only this time, I'll use the brackets notation.

```js
var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
```

Note that using the brackets notation, I essentially just wrap each property's key as a string, inside either the single or double quotes - just like with regular strings.

Then I wrap the entire property key into an opening and a closing square bracket.

That's essentially all there is to it.

I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both, like in the following example:

```js
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}
```

For the time being, this is probably enough information on object creation.

Before I discuss the topic of arrays and objects, let me just give you another important piece of information about the brackets notation.

With the brackets notation, I can add space characters inside property names, like this:

`car["number of doors"] = 4;`  
`console.log(car); // {color: 'green', speed: 100, number of doors: 4}`

Additionally, I can add numbers (as the string data type) as property keys:

`car["2022"] = 1901;`  
`console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 4}`

However, doing this is discouraged, due to obvious reasons of having a property key as a number string not really conveying a lot of useful information.

Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions.

To understand what that means, consider the following example:

```js
var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]]);
}
```

The above code will result in the following output:

`100`  
`200`  
`red`

Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object.

This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this:

- The value of i was 0

- The value of arrOfKeys[i] was arrOfKeys[0], which was "speed"

- Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100

This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys.

# Arrays are objects

In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.

One of the most commonly used built-in methods on arrays are the push() and the pop() methods.

To add new items to an array, I can use the push() method:

```js
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push("pear"); // ['apple', 'pear']

// To remove the last item from an array, I can use the pop() method:
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

`arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']`

Even better, I don't have to console log the newly built array.

Instead, I can return it:

```js
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}

// Additionally, I can save this function call to a variable.

// I can name it anything, but this time I'll use the name: simpleArr.

var simpleArr = arrayBuilder("apple", "pear", "plum");

// And now I can console log the values stored in simpleArr:

console.log(simpleArr); // ['apple','pear','plum']
```

### Math object cheat sheet

JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.

By the end of this reading, you'll be able to:

- Outline the built-in properties and methods of the Math object

Number constants

Here are some of the built-in number constants that exist on the Math object:

- The PI number: Math.PI which is approximately 3.14159

- The Euler's constant: Math.E which is approximately 2.718

- The natural logarithm of 2: Math.LN2 which is approximately 0.693

Rounding methods

These include:

- Math.ceil() - rounds up to the closest integer

- Math.floor() - rounds down to the closest integer

- Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer

- Math.trunc() - trims the decimal, leaving only the integer

Arithmetic and calculus methods

Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object:

- Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8

- Math.sqrt(16) - calculates the square root of 16, the result is 4

- Math.cbrt(8) - finds the cube root of 8, the result is 2

- Math.abs(-10) - returns the absolute value, the result is 10

- Logarithmic methods: Math.log(), Math.log2(), Math.log10()

- Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.

- Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.

# String cheat sheet

By the end of this reading, you'll be able to:

Identify examples of String functions and explain how to call them

In this cheat sheet, I'll list some of the most common and most useful properties and methods available on strings.

For all the examples, I'll be using either one or both of the following variables:

```js
var greet = "Hello, ";
var place = "World";
```

Note that whatever string properties and methods I demo in the following examples, I could have ran it on those strings directly, without saving them to a variable such as the ones I named greet and place.

In some of the examples that follow, for the sake of clarity, instead of using a variable name, I'll use the string itself.

All strings have at their disposal several built-in properties, but there's a single property that is really useful: the length property, which is used like this:

`greet.length; // 7`

To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:

`greet.charAt(0); // 'H'`

The concat() method joins two strings:

`"Wo".concat("rl").concat("d"); // 'World'`

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

Here's a list of all the methods covered in this cheat sheet:

- charAt()
- concat()
- indexOf()
- lastIndexOf()
- split()
- toUpperCase()
- toLowerCase()

# Object Methods

You might already be familiar with objects in JavaScript.

In this video, you will learn how to design objects as combinations of data and functionality.

As you might already know, an object consists of key-value pairs, known as properties.

We can add new key-value pairs to existing objects using the dot notation and the assignment operator.

```js
var car = {};
car.color = "red"; //update the value of a property of the car objject
```

These are known as properties, and can take many data types, including functions.

```js
var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function () {
  console.log("engine running");
};
```

If the function is a property of an object, it is then referred to as a method.

This is a function that can be accessed only through the JavaScript object that it is a member of. For example, the log method, which belongs to the console object, can only be accessed through the console object.

console.log('Hello world');

Let's explore this further now. I will create an object using something known as the constructor function.

```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);

// { mileage: 98765, color: 'red' }
```

First, I'll build a new object literally named car. I type var, space, car, space, equal sign, space, followed by a set of curly braces, and finally a semicolon.

Now, I'll extend the car object by assigning it a property named mileage.

When I inspect the object, I can confirm that it contains a mileage property set to 98765.

I want to add another property to the car object. This time, I will add a property named color and set it to the value of "red".

I can inspect the object again by typing its name into the browser console. So now, when I type console.log(car), I get an object with two properties: the mileage property, which is set to `98765`, and the color property, set to "red".

Great, now I've added two properties to my object.

Next, I want to add a method to my car object. And this method, when called, will output some text to the console.

So, once again, I add another property to my car object. After all, a method is just another property of the car object. It's just another key-value par that the car object holds.

What's unique is that the value I'm assigning to it is a function.

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

# Syntax, logical and runtime errors

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
