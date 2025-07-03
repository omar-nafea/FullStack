# Advanced JavaScript Features
- De-structure
- For of loop
- Template literals
- Data Structures
- Spread and rest operator
## De-structuring arrays and objects

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
It defines which values to unpack from the sourced variable.
```js
let {PI} = Math.PI
console.log(PI === Math.PI)
PI = 1
console.log(PI === Math.PI)

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```
Similarly, you can destructure objects on the left-hand side of the assignment.
```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

## For of loops and objects

In this reading, you'll learn how the for of loop works conceptually.

To begin, it's important to know that a for of loop cannot work on an object directly, **since an object is not iterable.** For example:
```js
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
// Running the above code snippet will throw the following error:  
// Uncaught TypeError: car is not iterable
```
Contrary to objects, arrays are iterable. For example:  
```js
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
// red
// orange
// yellow
```
There are three built-in methods to iterate over Objects: `Object.keys()`, `Object.values()`, and `Object.entries()`.

### Built-in methods

**The `Object.keys()` method**  

The `Object.keys()` method receives an object as its parameter. Remember, this object is the object you want to loop over. for now, focus on the returned array of properties when you call the `Object.keys()` method.

Here's an example of running the `Object.keys()` method on a brand new `car2` object:
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
```
So, when I run `Object.keys()` and pass it my `car2` object, the returned value is an array of strings, where each string is a property key of the properties contained in my `car2` object.

**The `Object.values()` method**  

```js
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
```

**The `Object.entries()` method**  

Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values.  
```js
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
```
What gets returned from the invocation of the Object.entries() method is the following:  
```js
[ ['speed', 400], ['color', 'magenta'] ]
```
This time, the values that get returned are 2-member arrays nested inside an array. In other words, you get an array of arrays, where each array item has two members, the first being a property's key, and the second being a property's value.  

You now have all the ingredients that you need to loop over any object's own property keys and values. Here's a very simple example of doing just that:
```js
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
```
The trickiest part to understand in this syntax is probably the `clothingItem[key]`.  
Lets have an example:  
```js
function testBracketsDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }
    var drone = {
        speed: 15,
        color: "orange"
    }
    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
``` 

If you run the `testBracketsDynamicAccess()` function a few times, you'll notice that sometimes the value that gets output is `15`, and sometimes it's `orange`, although I'm always accessing the `drone[dynamicKey]` key. Since the value of the `dynamicKey` is populated on the `Math.random()` invocation, sometimes that expression evaluates to `drone["speed"]`, and other times that expression evaluates to `drone["color"]`.  

### For of loops vs For in loops on objects

**Unlike for...of, which works on values, for...in works on keys of objects or indices of arrays.**  

- **For..in** loops iterate over NOT only the specified object, but also its prototype.(Iterating over object AND its prototype)
- **For..of** loops Iterating over object's **OWN PROPERTIES** only

```js
const car = {
    engine: true,
    steering: true,
    speed: "slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar); // {speed: 'fast'}
console.log('---for-in is unreliable -----');
for (prop in sportsCar) {
    console.log(prop); // speed // engine // steering
}
console.log("Iterating over object AND its prototype!");
console.log('---for-of is reliable ---');
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]); // speed: fast
}
console.log('', "Iterating over object's OWN PROPERTIES only!");
```


```js

const car = {
    engine: true
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sports Car object: ", sportsCar); // {speed: 'fast'}
for (prop in sportsCar) {
    console.log(prop); // speed // engine
}
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]); // speed: fast
}
```

the sports car object only has one single property `speed`, which is `fast`. Then the `for..in` loop displays `speed` and `engine`,   
**because `engine` belongs to the *prototype* of the sports car object and not the sports car object itself.**  
Finally, the `for..of` loop outputs looping over only the sports `car` object properties, which in this case is only the property fast.  
Just to sum it up, the `speed` and `engine` properties are from the `for..in` loop because it draws from the prototype of the `sportsCar` object as well as the object itself. The `speed: fast` property, however, comes from the `for..of` loop, since that iterates over the `sportsCar` objects property only. 


## Template literals examples

Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:
'Hello, World!'
"Hello, World!"


Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  
`Hello, World!`

The above code snippet is an example of a template string, which is also known as a template literal.

With template literals, an expression can be embedded in a placeholder. A placeholder is represented by `${}`, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string:  

**Differences between a template and regular string**

There are several ways in which a template string is different from a regular string.

- First, it allows for variable interpolation:
```js
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) // Hello World !
// display both variables using template literals
```
Essentially, using template literals allows programmers to embed variables directly in between the backticks, without the need to use the + operator and the single or double quotes to delimit string literals from variables. In other words, in ES5, the above example would have to be written as follows:  
```js
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals
```
- Besides variable interpolation, template strings can span multiple lines.

For example, this is perfectly good syntax:
```js
`Hello,
World
!
`
```

Notice that this **can't** be done using string literals (that is, strings delimited in single or double quotes):  
```js
"Hello,
World"
```

The above code, when run, will throw a syntax error.  
Put simply, template literals allow for multi-line strings. 

- Additionally, the reason why it's possible to interpolate variables in template literals is because this syntax actually allows for expression evaluation. 

In other words, this:
```js
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 
```
The above example will console log the following string: `5 stars!`.

This opens up a host of possibilities. For example, it's possible to evaluate a ternary expression inside a template literal.

### Spread operator

Tool used to spread array items and join objects together. for example:

```js
let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
]

function showItinerary(place1, place2, place3){
    console.log("Visit " + place1)
    console.log("Then visit " + place2)
    console.log("Finish with a visit to " + place3)
}

showItinerary(top3[0], top3[1], top3[2])

```

if I want to increase places I want to visit I have to list all of indexes of the array when I call the function so It would be better if I use spread operator that allows me to pass all array elements into a function without having to type them all individually. 
```js
showItinerary(...top3)
```

### Rest Operator

You might already know, that a spread operator in JavaScript, is used to unpack a box, for example, to unpack an array. The rest operator, on the other hand, is used to build a smaller box, and pack items into it. 

```js
const top7 = {
"The Colosseum",
"The Roman Forum", 
"The Vatican",
"Trevi Fountain",
"The Pantheon", 
"Piazza Venezia",
"The Palatine Hill"
}
const [] = top7
const [first, second, third, ...secondVisit] = top7
```
With this syntax, I extracted the contents of the `top7` array, into four variables, 
- the variable `first`, with the value of "The Colosseum".
- The variable `second`, with the value of "The Roman Forum", 
- the variable `third`, with the value of "The Vatican".
- And then I include the variable `secondVisit`, **that is a sub array, of the rest of the items, in the original top7 array.**

If I inspect `secondVisit`, an array of the four remaining attractions,
```js
// ["Trevi Fountain", "the Pantheon", "Piazza Venezia", "the Palatine Hill"]
```

The rest operator, therefore, gives us what is left over of the source array, as a separate sub array. The rest operator is also useful in functions too, in fact, I can use a rest parameter, to quickly multiply values. 

```js
function addTaxToPrices(taxRate, ...itemBought){
    return itemBought.map(item => taxRate * item)
}
let shoppingCart = addTaxPrices(1.1,46,89,35,79)
```

The function returns each item with the tax rate, in the `addToTaxPrices` Parameters, the rest parameter gives me an array, so I can use array methods, on items using the map method.  

It's important to know, that the rest parameter, must be the last parameter in the function definition. This means, that adding any other parameter, to my `addTaxToPrices` function, after the rest operator, and the items bought would result in an error.

#### Using Spread and Rest

##### Differences between spread and rest operators

**Spread Operator**  

- **Expands** arrays, objects, or strings into individual elements or properties.
- Used for concatenation, copying, or passing arguments.

**Rest Operator**  

- **Gathers** multiple elements into a single array or object.
- Used in destructuring or collecting function arguments.

##### Join arrays, objects using the rest operator

Using the spread operator, it's easy to concatenate arrays:
```js
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// Here's the result:  
['apple', 'pear', 'plum', 'blueberry', 'strawberry']

// It's also easy to join objects:  
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}
```
##### Add new members to arrays without using the `push()` method

Here's how to use the spread operator to easily add one or more members to an existing array:
```js
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Here's the output:
['onion', 'parsley', 'carrot', 'beetroot']
```
##### Convert a string to an array using the spread operator

Given a string, it's easy to spread it out into separate array items:
```js
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']
```
##### Copy either an object or an array into a separate one

Here's how to copy an object into a completely separate object, using the spread operator.
```js
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)
// The output is 201, 200.
```
You can copy an array into a completely separate array, also using the spread operator, like this:
```js
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

// This time, the output is:
['apples'] 'not' ['apples','pears']
```
**Note that the spread operator only performs a shallow copy of the source array or object.**

