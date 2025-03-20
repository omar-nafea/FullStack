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
There are three built-in methods to iterate over Objects: Object.keys(), Object.values(), and Object.entries().
#### Built-in methods
##### The Object.keys() method
The `Object.keys()` method receives an object as its parameter. Remember, this object is the object you want to loop over. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the `Object.keys()` method.

Here's an example of running the Object.keys() method on a brand new car2 object:
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
```
So, when I run Object.keys() and pass it my car2 object, the returned value is an array of strings, where each string is a property key of the properties contained in my car2 object.
##### The Object.values() method
```js
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
```
##### The Object.entries() method
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
The trickiest part to understand in this syntax is probably the clothingItem[key].  
To revisit access a property name dynamically using brackets notation and show a practical demo of how that works, let's code a function declaration that randomly assigns either the string speed or the string color to a variable name, and then build an object that has only two keys: a speed key and a color key.

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

If you run the testBracketsDynamicAccess() function a few times, you'll notice that sometimes the value that gets output is 15, and sometimes it's orange, although I'm always accessing the drone[dynamicKey] key.  
Since the value of the dynamicKey is populated on the Math.random() invocation, sometimes that expression evaluates to drone["speed"], and other times that expression evaluates to drone["color"].  

### For of loops vs For in loops on objects
Unlike for...of, which works on values, for...in works on keys of objects or indices of arrays.
- For in loops iterate over not only the specified object, but also its prototype.(Iterating over object AND its prototype)
- For of loops Iterating over object's OWN PROPERTIES only

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

the sports car object only has one single property speed, which is fast. Then the for in loop displays speed and engine,   
**because engine belongs to the prototype of the sports car object and not the sports car object itself.**  
Finally, the for of loop outputs looping over only the sports car object properties, which in this case is only the property fast.  
Just to sum it up, the speed and engine properties are from the foreign loop because it draws from the prototype of the sports car object as well as the object itself. The speed fast property, however, comes from the for of loop, since that iterates over the sports car objects property only. 


## Template literals examples

Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:
'Hello, World!'
"Hello, World!"


Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:  
`Hello, World!`

The above code snippet is an example of a template string, which is also known as a template literal.

With template literals, an expression can be embedded in a placeholder. A placeholder is represented by ${}, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string:  


##### Differences between a template and regular string

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


