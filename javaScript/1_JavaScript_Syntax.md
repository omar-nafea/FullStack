# Introduction to Programming

All programs are called software and are in one way or another. Running on physical machines which are referred to as hardware.

Programming is simply the process of writing the steps a computer needs to take to complete a certain task. To program these instructions, we use programming languages.

A programming language is sort of like a **bridge** that we use to facilitate communication between computers and people.

For a computer to understand a programming language, it needs to save it somewhere in its random access memory. RAM or on a disk **In binary code**, which is represented by a series of zeros and ones.

_The binary code is a representation of machine language._ That a computer can understand all of the zeros and ones in binary language represent electrical switches.

Finally, a computer's central processing unit, or CPU can comprehend these binary electrical signals and update itself accordingly.

This machine language, with its series of zeros and ones, is known as a _low level language_ because it's closer to being understood by a computer's CPU.

There are also _high level languages_ such as JavaScript, that needs to be **interpreted**, that is converted to binary code that a CPU will be able to work with. So we might think of JavaScript and other high level languages as a tool that helps us to communicate with the CPU.

# JavaScript Syntax

##### Comments

```js
// to write a single line of comment in js prefix it with //

/*
if you want to write multiple line comment
in JavaScript add /* at the beginning and at the ending add */
```

##### Print

```js
// to print anything in js
console.log(anything);
```

### Variables

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

**It's necessary to know when a variable does not contain a value.**

- null  

has the value null and represents the absence of value.

- undefined  

can only hold the value undefined and usually refers to a variable that has not yet been assigned a value.

**ES6 new Data types**

- BigInt  

is an extra large box that can accommodate a much greater range of numbers than the number data type.

- symbol  
 
can be used as a unique identifier. Think of it as having multiple boxes with the same label and using different serial numbers to avoid mixing them up.

## Operators

Assignment operators which you can use to perform simple arithmetic.

##### Arithmetic operators

| Operator |    Meaning     | Example |
| :------: | :------------: | ------: |
|    +     |    Addition    |   2 + 3 |
|    -     |  Subtraction   |   3 - 2 |
|    /     |    Division    |  35 / 5 |
|    \*    | Multiplication |  7 \* 4 |
|    %     |     Module     |  13 % 6 |

##### Comparison operators

| Operator |          Meaning           |   Example |
| :------: | :------------------------: | --------: |
|    >     |        Greater than        |     9 > 3 |
|    <     |         Less than          |     1 < 2 |
|    ==    |          Equal to          |    5 == 5 |
|    !=    |        Not equal to        |    7 != 4 |
|   ===    |  strict equality operator  |   2 === 2 |
|   !==    | strict inequality operator | 2 !== "2" |

##### Logical operators

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
### Precedence and associativity

Consider an expression describable by the representation below, where both OP1 and OP2 are fill-in-the-blanks for OPerators.

a OP1 b OP2 c

The combination above has two possible interpretations:

(a OP1 b) OP2 c
a OP1 (b OP2 c)

Which one the language decides to adopt **depends on the identity of OP1 and OP2**.

If OP1 and OP2 have different precedence levels (see the table below), the operator with the higher precedence goes first and associativity does not matter. Observe how multiplication has higher precedence than addition and executed first, even though addition is written first in the code.
js

console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

**Within operators of the same precedence, the language groups them by associativity. Left-associativity (left-to-right) means that it is interpreted as (a OP1 b) OP2 c, while right-associativity (right-to-left) means it is interpreted as a OP1 (b OP2 c). *Assignment operators are right-associative,* so you can write:**

```js
a = b = 5; // same as writing a = (b = 5);
```

with the expected result that a and b get the value 5. This is because the assignment operator returns the value that is assigned. First, b is set to 5. Then the a is also set to 5 — the return value of b = 5, a.k.a. right operand of the assignment.

As another example, the unique exponentiation operator has right-associativity, whereas other arithmetic operators have left-associativity.
```js

const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...
```
Operators are first grouped by precedence, and then, for adjacent operators that have the same precedence, by associativity. So, when mixing division and exponentiation, the exponentiation always comes before the division. For example, 2 ** 3 / 3 ** 2 results in 0.8888888888888888 because it is the same as (2 ** 3) / (3 ** 2).

Operator precedence and associativity

Operator precedence is a set of rules that determines which operator should be evaluated first.

Consider the following example:
1

The result of the above code is 5, because the multiplication operator has precedence over the addition operator.

Operator associativity determines how the precedence works when the code uses operators with the same precedence.

There are two kinds: 

- left-to-right associativity

- right-to-left associativity

For example, the assignment operator is right-to-left associative, while the greater than operator is left-to-right associative:

```js
var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`
```

##### Equality operator

has two equal signs and it checks only for value. Additionally, there's also the strict equality operator that has three equal signs and it checks for both the value and type.
```js
100 == "100"; // true
100 === "100"; // false
```
It is false because although the value is the same, the type is not. The number 100 does not have the same type as the string 100. 
```js
1 != 1; // false
```
Additionally, just like there's the strict equality operator, there's also its opposite in the form of the strict inequality operator. This operator is an exclamation mark with two equal signs.
```js
1 !== "1"; // true
```
##### Falsy

A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

| Value        | Type      | Description   |
|--------------|-----------|--------------|
| null         | Null      | The keyword null — the absence of any value.               |
| undefined    | Undefined | undefined — the primitive value.         |
| false        | Boolean   | The keyword false.  |
| NaN          | Number    | NaN — not a number. |
| 0            | Number    | The Number zero, also including 0.0, 0x0, etc.         |
| -0         | Number    | The Number negative zero, also including -0.0, -0x0, etc.   |
| 0n           | BigInt    | The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n. |
| ""           | String    | Empty string value, also including '' and ``.  |
| document.all | Object    | The only falsy object in JavaScript is the built-in document.all.|


##### Truthy

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`, and `document.all`.

Here are examples of truthy values

```js
if (true)      // true
if ({})        // true
if ([])        // true
if (42)        // true
if ("0")       // true
if ("false")   // true
if (new Date())  // true
if (-42)       // true
if (12n)       // true
if (3.14)      // true
if (-3.14)     // true
if (Infinity)  // true
if (-Infinity) // true
```

**Using the `+` operators on strings and numbers**

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
```
converting the previous if-else example with switch-case
```js
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

**JavaScript as a language is not a completely separate, stand-alone entity. It only exists as an implementation. This implementation is known as a JavaScript engine.**


##### Conditional (ternary) operator

```js
condition ? exprIfTrue : exprIfFalse
```

**Its Parameters**

- `condition`: An expression whose value is used as a condition.
- `exprIfTrue`: An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true).
- `exprIfFalse`: An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).

**Description**

Besides false, possible falsy expressions are: `null`, `NaN`, `0`, `""`, and `undefined`. If condition is any of these, the result of the conditional expression will be the result of executing the expression exprIfFalse.

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

##### Handling null values
One common usage is to handle a value that may be null:

```js
function greeting(person) {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
}
console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger" 
```

## Loops

##### For loops

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

##### While loops

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

##### Nested loops

```js
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(firstNum + ", " + secondNum);
  }
}
```
```js
//nested loops - one inside another
for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j);
  }
}
```
### vim tip
how to navigate to the next word that is identical to what I'm stantding on in vim
`*` goes to the next matching word and `#` goes to the previous matching word. 
