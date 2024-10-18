# Introduction to programming paradigms

## The functional programming paradigm

"There are actually several styles of coding, also known as paradigms.

In functional programming, we use a lot of functions and variables.

```js
function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
```

```js
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
```

In functional programming, functions return new values and then use those values\
somewhere else in the code.

```js
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!
```

Another style is object-oriented programming (OOP).\
In this style, we group data and functionality as properties and methods inside objects.

For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:

```js
var virtualPet = {
  sleepy: true,
  nap: function () {},
};
```

In OOP, methods update properties stored in the object instead of generating new return values.

```js
//creating an object
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false
```

OOP helps us model real-life objects. It works best when the grouping of properties\
and data in an object makes logical sense - meaning, the properties and methods\
"belong together".

To summarize this point, we can say that the Functional Programming paradigm works\
by keeping the data and functionality separate. It's counterpart, OOP, works by\
keeping the data and functionality grouped in meaningful objects.

There are many more concepts and ideas in functional programming:

* First-class functions
* Higher-order function
* Pure functions and side-effects

### First-class functions

It is often said that functions in JavaScript are “first-class citizens”.\
It means that a function in JavaScript is just another value that we can:

* pass to other functions
* save in a variable
* return from other functions

In other words, a function in JavaScript is just a value - from this vantage point,\
almost no different then a string, a number or an object .

For example, in JavaScript, it's perfectly normal to pass a function invocation\
to another function. To explain how this works, consider the following program.

```js
function addTwoNums(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());
```

### Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

* It accepts other functions as arguments
* It returns functions when invoked

There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

Continuing from the previous section, consider the following code, in which I'm re-defining the addTwoNums() function so that it is a higher-order function:

```js
function addTwoNums(getNumber1, getNumber2) {
  console.log(getNumber1() + getNumber2());
}
```

You can think of the above function declaration of addTwoNums as describing\
how it will deal with the getNumber1 and getNumber2 inputs: once it receives them\
as arguments, it will then attempt invoking them and concatenating the values returned\
from those invocations.

For example:

```js
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
```

### Pure functions and side-effects

A pure function returns the exact same result as long as it's given the same values.

An example of a pure function is the addTwoNums() function from the previous section:

```js
function addTwoNums(a, b) {
  console.log(a + b);
}
```

This function will always return the same output, as long as you give it the same input. For example, as long as we give it a specific value, say, a = 5, and a = 6:
`addTwoNums(5,6); // 11`
the output will always be the same.

Another rule for a function to be considered pure is that it should not have side-effects.

A side-effect is any instance where a function makes a change outside of itself.

This includes:

* changing variable values outside of the function itself, or even relying on outside variables
* calling a Browser API (even the console itself!)
* calling Math.random() - since the value cannot be reliably repeated

## Scoping

Block scope states that a variable declared in a block of code is only accessible inside that block.

> All the other code outside of the code block cannot access it.\
> Block scope is built when you declare variables using let or const. They become immediately scoped to the code block they were created in.\
> The scope of these variables is contained within curly braces.

```js
let color = "red"; // Global scope

if (color == "red") {
  let color = "blue"; // Local scope
}
```

### Var

The var keyword is very lenient. Let's outline some characteristics of variables that are declared with var:

* You can use it in your code even before it is declared.
* You can redeclare the same variable when you use VAR.
* The variables are scoped to a function or if they are declared outside the function their scope is global.

```js
console.log(user);

// we can declare and redeclare the same var variable without errors

var user = "marry";
var user = "john";
var user = "mark";

console.log(user);
// mark
```

With ES6, the suggested way to declare
variables is to use the let or const keywords.

### Let

1- we cannot access a let varaible before we declare it\
2- we can declare an unassigned variable with let\
3- we cannot re-declare a let variable\
4- but we can re-assign it

```js
//let keyword

// we cannot access a let varaible before we declare it
console.log(user); // ReferenceError: Cannot access `user` before
// initialization
let user;

// we can declare an unassigned variable with let
let user;
console.log(user);

// we cannot re-declare a let variable
let user = "Anna"; // SyntaxError identifier 'user' has already been declared

// but we can re-assign it
user = "Anna";
console.log(user);
```

### Const

1- The const variable must be initialized
2- we cannot access the const variable before initialization
3- we cannot redeclare a const variable

```js
// The const variable must be initialized
console.log(user) // SyntaxError: missing initializer in const declaration
const user;

// we cannot access the const variable before initialization
console.log(user) //  ReferenceError: Cannot access `user` before
// initialization
const user = "Andrew"

// we cannot redeclare a const variable
user = "Anna"  // Error
```

* With a let or a const variable, you cannot use it in your code before you declare it.
* You can redeclare it using the variable keyword like you can with var.
* Finally, it's scoped to the block, even within if statements and loops, like the for or while loops.

Use let if the value might change in the future,
and use const if the value will never change.

## Object Oriented Programming principles

**The Benefits of OOP**

There are many benefits to using the object-oriented programming (OOP) paradigm.

OOP helps developers to mimic the relationship between objects in the real world.\
In a way, it helps you to reason about relationships between things in your software, just like you would in the real world.

Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:

* Allows you to write modular code
* Makes your code more flexible
* Makes your code reusable.

### The Principles of OOP

The four fundamental OOP principles are

* Inheritance,
* Encapsulation,
* Abstraction,
* Polymorphism.

The thing to remember about Objects is that they exist in a hierarchal structure.\
Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method.\
to create or instansiate objects of our classes.

A more common method of creating objects from classes is to use the `new` keyword.
When using a default or empty constructor method,
JavaScript implicitly calls the Object superclass to create the instance.

```js
class Animal { /_ ...class code here... _/ }

var myDog = new Animal()

console.log (Animal)
```

### OOP Principles: Inheritance

Inheritance is one of the foundations of object-oriented programming.

In essence, it's a very simple concept. It works like this:

* There is a base class of a "thing".
* There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
* There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

***Note that each sub-class inherits from its super-class.\
In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.***

All of this might sound a bit "computer-sciency", so here's a more practical example:

* There is a base class of "Animal".
* There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".
* Next, there is another class, inheriting from "Bird", and this class is "Eagle".

Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle.\
Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.

To setup the inheritance relation between classes in JavaScript, I can use the `extends` keyword, as in class B extends A.

Here's an example of an inheritance hierarchy in JavaScript:

```js
class Animal { /_ ...class code here... _/ }
class Bird extends Animal { /_ ...class code here... _/ }
class Eagle extends Bird { /_ ...class code here... _/ }
```

### OOP Principles: Encapsulation

In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

For example, when I run the following code:
`"abc".toUpperCase();`

I don't really need to worry or even waste time thinking about how the toUpperCase() method works.
All I want is to use it, since I know it's available to me.\
Even if the underlying syntax - that is, the implementation of the toUpperCase() method changes - as long as it doesn't break my code.\
I don't have to worry about what it does in the background, or even how it does it.

### OOP Principles: Abstraction

Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry. It helps to think of it in the following terms:

* An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept.
* Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

### OOP Principles: Polymorphism

Polymorphism is a word derived from the Greek language meaning "multiple forms".\
An alternative translation might be: "something that can take on many shapes".

So, to understand what polymorphism is about, let's consider some real-life objects.

* A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.
* Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:

```js
const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};
```

So, I can access the bell() method on the bicycle object

```js
bicycle.bell(); // "Get away, please"
```

And access the bell() method on the door object

```js
door.bell(); // "Come here, please"
```

At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

Now, to make this code truly polymorphic, I will add another function declaration:

```js
function ringTheBell(thing) {
  console.log(thing.bell());
}
```

Now I have declared a ringTheBell() function. It accepts a thing parameter
which I expect to be an object, namely, either the bicycle object or the door object.
So now, if I call the ringTheBell() function and pass it the bicycle\
as its single argument, here's the output:\
`ringTheBell(bicycle); // Ring, ring! Watch out, please!`

However, if I invoke the ringTheBell() function and pass it the door object, I'll get the following output:\
`ringTheBell(door); // "Ring, ring! Come here, please!"`

You've now seen an example of the exact same function producing different results, based on the context in which it is used.

Here's another example,the concatenation operator, used by calling the built-in concat() method.

If I use the concat() method on two strings, it behaves exactly the same as if I used the + operator.

```js
"abc".concat("def"); // 'abcdef'
```

I can also use the concat() method on two arrays. Here's the result:

```js
["abc"].concat(["def"]); // ['abc', 'def']
```

Consider using the + operator on two arrays with one member each:

```js
["abc"] + ["def"]; // ["abcdef"]
```

This means that the concat() method is exhibiting polymorphic behavior\
since it behaves differently based on the context - in this case, based on what data types I give it.

To reiterate, polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name,\
which behave exactly the same. However, at the same time, you can override some parts of the shared functionality or even the complete functionality, in some other parts of the OOP structure.

Here's an example of polymorphism using classes in JavaScript:

```js
class Bird {
  useWings() {
    console.log("Flying!");
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log("Barely flapping!");
  }
}
class Penguin extends Bird {
  useWings() {
    console.log("Diving!");
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
```

The Penguin and Eagle sub-classes both inherit from the Bird super-class. The Eagle sub-class inherits the useWings() method from the Bird class, but extends it with an additional console log.
The Penguin sub-class doesn't inherit the useWings() class - instead, it has its own implementation, although the Penguin class itself does extend the Bird class.

### Constructors

JavaScript has a number of built-in object types, such as:

`Math`, `Date`, `Object`, `Function`, `Boolean`, `Symbol`, `Array`, `Map`, `Set`, `Promise`, `JSON`, etc.

These objects are sometimes referred to as "native objects".

Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.

To use a constructor function, I must prepend it with the operator `new`.
For example, to create a new instance of the Date object, I can run: `new Date()`.\
What I get back is the current datetime, such as:

`Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time)`

However, not all the **built-in objects** come with a constructor function. An example of such an object type is the built-in Math object.

Running `new Math()` throws an Uncaught TypeError, informing us that Math is not a constructor.

Thus, I can conclude that some built-in objects do have constructors when they serve a particular purpose: to allow us to instantiate a specific instance of a given object's constructor.

The built-in Date object is perfectly suited for having a constructor because each new date object instance I build should have unique data by definition since it's going to be a different timestamp it's going to be built at a different moment in time.

Other built-in objects that don't have constructors, such as the Math object don't need a constructor. They're just static objects whose properties and methods can be accessed directly, from the built-in object itself.\
In other words, there is no point in building an instance of the built-in Math object to be able to use its functionality.

For example, if I want to use the pow method of the Math object to calculate exponential values: to get the number 2 to the power of 5, I'd run:

`Math.pow(2,5); // --> 32`

There's no need to build an instance of the Math object since there would be nothing that needs to be stored in that specific object's instance.
Besides constructor functions for the built-in objects, I can also define custom constructor functions.
Here's an example:

```js
function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}
```

Now I can make as many icecreams as I want:

```js
function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // Icecream {flavor: 'kiwi', meltIt: ƒ}flavor: "kiwi"meltIt: ƒ ()[[Prototype]]: Object
appleIcecream; // Icecream {flavor: 'apple', meltIt: ƒ}flavor: "apple"meltIt: ƒ ()[[Prototype]]: Object
appleIcecream.meltIt(); // The apple icecream has melted
```

I've just built two instance objects of Icecream type. The most common use case of new is to use it with one of the built-in object types.  
**Note that using constructor functions on all built-in objects is sometimes not the best approach. This is especially true for object constructors of primitive types, namely: String, Number, and Boolean.**

For example, using the built-in String constructor, I can build new strings:

```js
let apple = new String("apple");
apple; // --> String {'apple'}
```

The apple variable is an object of type String. Let's see how the apple object differs from the following pear variable:

```js
let pear = "pear";
pear; // --> "pear"
```

The pear variable is a string literal, that is, a primitive Javascript value. The pear variable, being a primitive value, will always be more performant than the apple variable, which is an object.

Besides being more performant, due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values are identical.
In other words, if you compare `new String('plum') === new String('plum')`, you'll get back `false`,

while `"plum" === "plum"` returns `true`. You're getting the false when comparing objects\ <span style="color: #C63; font-weight: bold;">
Because it is not the values that you pass to the constructor that are being compared, But rather the memory location where objects are saved. </span>

Besides not using constructors to build object versions of primitives,\
**You are better off not using constructors when constructing plain, regular objects. Instead of new Object, you should stick to the object literal syntax: {}.**

A RegExp object is another built-in object in JavaScript. It's used to pattern-match strings using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript.
In JavaScript, you can built an instance of the RegExp constructor using new RegExp. Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using /d/ as a pattern literal, passed-in as an argument to the match method on a string.

```js
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
```

Instead of using Array, Function, and RegExp constructors, you should use their array literal, function literal, and pattern literal varieties: \[], () {}, and /()/.

However, when building objects of other built-in types, we can use the constructor. Here are a few examples:

```js
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
```

