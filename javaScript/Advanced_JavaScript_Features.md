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


## Data Structures

JavaScript is somewhat limited in the types of data structures available compared to other programming languages, such as, Java or Python. However, some of the most common that you will encounter are `objects`, `arrays`, `maps` and `sets`.
Now you may recall that an **object is unaltered(not able to be modified), noniterable collection of key value pairs** and
you use objects when you need to store and later access a value under a key. 

Similarly, you may also recall an array which is an ordered iterable
collection of values.
Likewise, you use arrays when you need to store and
later access a value under an index.
And remember, we do not specify the index, JavaScript does this automatically.
You only use the index to access the specific value stored in the array. 



The next data structure is map which is like an array because it's iterable.
However, it consists of key value pairs.
It's important not to confuse a map with an object.
With maps any value can be used as a key.
With objects, keys can only be strings or symbols. 

Finally, the last data structure I want you to know about is a set.
This is another collection where each item in the collection must be unique.
For example, if you try to add a non unique item to a set,
this operation will simply not be run.
In other words, no errors will be thrown and no updates will be made to a set. 

### Data Structures examples

In this reading, you'll learn about some of the most common examples of data structures.

The focus will be on working with the Object, Array, Map and Set data structures in JavaScript, through a series of examples.

Note that this reading will not include a discussion of some data structures that exist in some other languages, such as Queues or Linked Lists.  Although these data structures (and other data structures too!) can be custom-coded in JavaScript, the advanced nature of these topics and the difficulty with implementing related exercises means they are beyond the scope of this reading. 
Working with arrays in JavaScript

Previously, you've covered a lot of concepts related to how to work with JavaScript arrays.

However, there are still a few important topics that can be covered, and one of those is, for example, working with some built-in methods.

In this reading, the focus is on three specific methods that exist on arrays:

- forEach 
- filter
- map

 Let's explore these methods.
##### The forEach() method

Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 

Here's the basic syntax:
```js
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

/* 
The result of running the above code is this:  

0. kiwi
1. mango
2. apple
3. pear
*/
```
To explain the syntax, the `forEach()` method accepts **a function that will work on each array item**. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
```js
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
```

This makes for more compact code, but perhaps somewhat harder to read. To increase readability, sometimes arrow functions are used. 


##### The filter() method
Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.

Here's an example:
```js
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// Here's the returned array value:  
[30,40,50]
```
Similar to the forEach() method, the filter() method also accepts a function and that function performs some work on each of the items in the array.
##### The map method

Finally, there's a very useful map method. 

This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

For example:
```js
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

// The return value from the above code is:  
[0,1,2,3,4,5]
```
As already discussed, choosing a proper data structure affects the very code that you can write. This is because the data structure itself comes with some built-in functionality that makes it easier to perform certain tasks or makes it harder or even impossible without converting your code to a proper data structure.

Now that you've covered the methods, let's explore how to work with different built-in data structures in JavaScript.

### Working with Objects in JavaScript

A lot of the information on how to work with objects in JavaScript has already been covered in this course.

The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:
```js
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

// This is the result of executing the above code:  
['speed',100,'color','yellow']
```
Although this is possible and works, having to do something like this might mean that you haven't chosen the correct data structure to work with in your code.

On the flip side, sometimes you don't get to pick the data structure you're working with. Perhaps that data comes in from a third-party data provider and all you can do is code your program so that it consumes it. You'll learn more about the interchange of data on the web when you learn about JSON (JavaScript Object Notation).

### Working with Maps in JavaScript

To make a new Map, you can use the Map constructor:  
`new Map();`

A map can feel very similar to an object in JS.

However, **it doesn't have inheritance. No prototypes! This makes it useful as a data storage.**

For example:
```js
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); 
// Here's the console output:  
Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

// To get a specific value, you need to use the get() method. For example:  
bestBoxers.get(1); // 'The Champion'
```
Another Example be like
```js
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
```
### Working with Sets in JavaScript

A set is a collection of unique values.

To build a new set, you can use the Set constructor:  
`new Set();`

The Set constructor can, for example, accept an array.

This means that we can use it to quickly filter an array for unique members.
```js
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// The above code outputs the following in the console:  
{'apple', 'pear', 'plum'}
```
### Other data structures in JavaScript

Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.

These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.

Some more advanced data structures that have not been covered include:

- Queues
- Linked lists (singly-linked and doubly-linked)
- Trees
- Graphs

### Spread operator

> Tool used to spread array items and join objects together.

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
With this syntax, I extracted the contents of the top7 array,
into four variables, 
- the variable first, with the value of "The Colosseum".
- The variable second, with the value of "The Roman Forum", 
- the variable third, with the value of "The Vatican".
- And then I include the variable secondVisit, that is a sub array, of the rest of the items, in the original top7 array. 



If I inspect secondVisit, an array of the four remaining attractions,
Trevi Fountain, the Pantheon, Piazza Venezia, and the Palatine Hill,
are all saved as string primitives. 

The rest operator, therefore,
gives us what is left over of the source array, as a separate sub array.
The rest operator is also useful in functions too, in fact,
I can use a rest parameter, to quickly multiply values. 
```js
function addTaxToPrices(taxRate, ...itemBought){
    return itemBought.map(item => taxRate * item)
}
let shoppingCart = addTaxPrices(1.1,46,89,35,79)
```

I create a function, to add the tax rate to prices, I name it, addTaxToPrices, and give it two parameters, the tax rate and the rest operator, with the items bought.  
The function returns each item with the tax rate, in the addToTaxPrices, parameters, the rest parameter gives me an array, so I can use array methods, on items bought, using the map method.  

It's important to know, that the rest parameter, must be the last parameter in the function definition. This means, that adding any other parameter, to my addTaxToPrices function, after the rest operator, and the items bought would result in an error.

#### Using Spread and Rest

In this reading, you'll learn how to join arrays, objects using the rest operator. You will also discover how to use the spread operator to:

- Add new members to arrays without using the push() method,
- Convert a string to an array and
- Copy either an object or an array into a separate object 

Recall that the push() and pop() methods are used to add and remove items from the end of an array.

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
##### Add new members to arrays without using the push() method

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
const car 2 = {...car1}
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
Note that the spread operator only performs a shallow copy of the source array or object. 
