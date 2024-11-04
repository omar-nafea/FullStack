# complex Data Type in JS

### Arrays 

- Values in an array are all part of a group   
- Values are set in a specific sequence   
- Values can be accessed with their index numbers  

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


### Introduction to objects

Object literals and the dot notation One of the most common ways of building an object in JavaScript is using the object literal syntax: `{}`

To be able to access this object literal, it is very common to assign it to a variable, such as:  

```js
var user = {}; //create an object
```

Now an object literal is assigned to the variable user, which means that the object it is bound to can be extended and manipulated in a myriad of ways.

Sometimes, an entire object can be immediately built, using the object literal syntax, by specifying the object's properties, delimited as key-value pairs, using syntax that was already covered in an earlier lesson item in this lesson. Here's one such previously built object:

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
here's a table object:
```js
var table = {
  legs: 3,
  color: "brown",
  priceUSD: 100,
};
```
To access the table object, I can simply console log the entire object:
```js
console.log(table); 
//display the object in the developer console
// The returned value is the entire table object:
{legs: 3, color: 'brown', priceUSD: 100}
// Additionally, I can console log any individual property, like this:  
console.log(table.color); // 'brown'
```
An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties;
```js
var house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
};
```
Additionally, nothing is preventing me from combining the two approaches. This flexbility additionally means that I can update already existing properties, not just add new ones
 
```js
console.log(house);  
// {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house);  
// {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
``` 
##### Object Literals and the Brackets Notation

This alternative syntax is known as the brackets notation. 

```js
var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2);  
// {rooms: 4, color: 'pink', priceUSD: 12345}
```
Note that using the brackets notation, I essentially just wrap each property's key as a **string**, inside either the single or double quotes - just like with regular strings.

I can both access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both, like in the following example:

```js
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}
```

With the brackets notation, I can add space characters inside property names:
```js
car["number of doors"] = 4;  
console.log(car);  
// {color: 'green', speed: 100, number of doors: 4}
```
Additionally, I can add numbers (as the string data type) as property keys:
```js
car["2022"] = 1901;  
console.log(car);  
// {2022: 1901, color: 'green', speed: 100, number of doors: 4}
```

##### Bracket vs Dot notation

Finally, there's one really useful thing that bracket notation has but is not available in the dot notation: **It can evaluate expressions**. To understand what that means, consider the following example:

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
```
100  
200  
red
```

Using the fact that brackets notation can evaluate expressions, I accessed the `arrOfKeys[i]` property on the drone object. This value changed on each loop while the for loop was running Specifically, the first time it ran, it was evaluated like this:

- The value of `i` was `0`
- The value of `arrOfKeys[i]` was `arrOfKeys[0]`, which was `"speed"`
- Thus, `drone[arrOfKeys[i]]` was evaluated to `drone["speed"]` which is equal to `100`

This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys.


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

