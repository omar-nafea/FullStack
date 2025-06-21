## Object Oriented Programming principles

There are many benefits to using the object-oriented programming (OOP) paradigm.

OOP helps developers to mimic the relationship between objects in the real world. In a way, it helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also: Allows you to write modular code, Makes your code more flexible, Makes your code reusable.

### The Principles of OOP

The four fundamental OOP principles are

* Inheritance,
* Encapsulation,
* Abstraction,
* Polymorphism.


_**The thing to remember about Objects is that they exist in a hierarchal structure. Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method. to create or instansiate objects of our classes.**_

A more common method of creating objects from classes is to use the `new` keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.

```js
class Animal { /_ ...class code here... _/ }
var myDog = new Animal()
console.log (Animal)
```

### OOP Principles: Inheritance

Inheritance is one of the foundations of object-oriented programming. It works like:

* There is a base class of a "thing".
* There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
* There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

***Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.***

All of this might sound a bit "computer-sciency", so here's a more practical example:

* There is a base class of `Animal`.
* There is another class, a sub-class inheriting from "Animal", and the name of this class is `Bird`.
* Next, there is another class, inheriting from `Bird`, and this class is `Eagle`.

Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are **separate blueprints** for specific object instances that can be constructed as needed.

To setup the inheritance relation between classes in JavaScript, I can use the `extends` keyword, as in class B extends A. Here's an example of an inheritance hierarchy in JavaScript:

```js
class Animal { /_ ...class code here... _/ }
class Bird extends Animal { /_ ...class code here... _/ }
class Eagle extends Bird { /_ ...class code here... _/ }
```

### OOP Principles: Encapsulation

In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code. For example, when I run the following code:  `"abc".toUpperCase();`

I don't really need to worry or even waste time thinking about how the `toUpperCase()` method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation of the `toUpperCase()` method changes - as long as it doesn't break my code. I don't have to worry about what it does in the background, or even how it does it.

### OOP Principles: Abstraction

Abstraction is all about writing code in a way that will make it more generalized. The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry. It helps to think of it in the following terms:
* An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept.
* Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

### OOP Principles: Polymorphism

Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

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
At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for. Now, to make this code truly polymorphic, I will add another function declaration:

```js
function ringTheBell(thing) {
  console.log(thing.bell());
}
```

Now I have declared a `ringTheBell()` function. It accepts a thing parameter which I expect to be an object, namely, either the bicycle object or the door object. So now, if I call the ringTheBell() function and pass it the bicycle as its single argument, here's the output:
```js
ringTheBell(bicycle); 
// Ring, ring! Watch out, please!
```
However, if I invoke the `ringTheBell()` function and pass it the door object, I'll get the following output:
```js
ringTheBell(door); 
// "Ring, ring! Come here, please!"
```
You've now seen an example of the exact same function producing different results, based on the context in which it is used.   
Here's another example,the concatenation operator, used by calling the built-in `concat()` method.

If I use the `concat()` method on two strings, it behaves exactly the same as if I used the `+` operator.
```js
"abc".concat("def"); // 'abcdef'
```
I can also use the `concat()` method on two arrays. Here's the result:
```js
["abc"].concat(["def"]); // ['abc', 'def']
```
Consider using the `+` operator on two arrays with one member each:
```js
["abc"] + ["def"]; // ["abcdef"]
```
This means that the `concat()` method is exhibiting polymorphic behavior since it behaves differently based on the context - in this case, based on what data types I give it.

To reiterate, polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name, which behave exactly the same. However, at the same time, you can override some parts of the shared functionality or even the complete functionality, in some other parts of the OOP structure.
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

The Penguin and Eagle sub-classes both inherit from the Bird super-class. 
The Eagle sub-class inherits the `useWings()` method from the Bird class, but extends it with an additional console log. 
The Penguin sub-class doesn't inherit the `useWings()` class - instead, it has its own implementation, 
Although the Penguin class itself does extend the Bird class.



## Creating classes

You know that inheritance in JavaScript is based around the prototype object. **So All objects that are built from the prototype (javascript default settings) share the same functionality.**

When you need to code more complex OOP relationships, you can use the `class` keyword and its easy-to-understand and easy-to-reason-about syntax.

Imagine that you need to code a `Train class`. Once you've coded this class, you'll be able to use the keyword `new` to instantiate objects of the `Train` class.  
So, you use the `class` keyword, then specify the name of your class, **with the first letter capitalized,**  In between the curly braces, the first piece of code that you need to define is the `constructor`:

```js
class Train {
  constructor() {}
}
```

The constructor will be used to **build properties** on the future object instance of the `Train` class. 
For now, let's say that there are only two properties that each object instance of the Train class should have at the time it gets instantiated: `color` and `lightsOn`.

```js
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
}
```

**Notice: The constructor is a special function in my Train class.**

First of all, notice that there is no function keyword. Also, notice that the keyword constructor is used to define this function. You give your constructor function parameters inside an opening and closing parenthesis, just like in regular functions. The names of parameters are `color` and `lightsOn`.  

Next, inside the constructor function's body, you assigned the passed-in `color` parameter's value to `this.color`, and the passed-in `lightsOn` parameter's value to `this.lightsOn`.

What does this `this` keyword here represent? **It's the future object instance of the Train class.** Essentially, this is all the code that you need to write to achieve two things:

* This code allows me to build new instances of the `Train` class.
* **Each object instance of the `Train` class that I build will have its own custom properties of `color` and `lightsOn`.**

Now, to actually build a new instance of the `Train` class, I need to use: `new Train()`  
And, to be able to interact with the new object built this way, you need to assign it to a variable. `var myFirstTrain = new Train('red', false);`  
Just like any other variable, you can now, for example, console log the `myFirstTrain` object: `console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}`  
You can continue building instances of the Train class. Even if you give them exactly the same properties, they are still separate objects.

```js
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);
```
However, this is not all that classes can offer. You can also add methods to classes, and these methods will then be shared by all future instance objects of my Train class.

For example:

```js
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
```

Now, there are four methods on your Train class:
`toggleLights()`, `lightsStatus()`, `getSelf()` and `getPrototype()`

* The `toggleLights` method uses the logical not operator, `!`. This operator will change the value stored in the `lightsOn` property of the future instance object of the `Train class;` hence the `!this.lightsOn`. And the `=` operator to its left means that it will get assigned to `this.lightsOn`, meaning that it will become the new value of the `lightsOn` property on that given instance object.
* The `lightsStatus()` method on the `Train` class just reports the current status of the `lightsOn` variable of a given object instance.

#### important!

* The `getSelf()` method prints out the properties on the object instance it is called on.
* The `getPrototype()` console logs the prototype of the object instance of the `Train` class.
* **The prototype holds all the properties shared by all the object instances of the Train class.**
* To get the prototype, you'll be using JavaScript's built-in Object.`getPrototypeOf()` method, and passing it this object - meaning, **the object instance inside of which this method is invoked.**

Now you can build a brand new train using this updated Train class:
`var train4 = new Train('red', false);`
And now, you can run each of its methods, one after the other, to confirm their behavior:

```js
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
```

Notice The returned object is the `train4` object.  
___
**This object gets returned only with the properties "the Data" that was build using the constructor() function of the `Train` class. That's because all the methods on the `Train` class do not "live" on any of the instance objects of the `Train` class - instead, they live on the prototype.**

Finally, the result of calling the `getPrototype()` method is the console logging of all the properties on the prototype.   
When the class syntax is used in JavaScript, this results in **only shared methods being stored on the prototype**, while the `constructor() function` sets up the mechanism for saving instance-specific values ("data") at the time of object instantiation.

**Thus, in conclusion, the class syntax in JavaScript allows us to clearly separate individual object's data - which exists on the object instance itself - from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.**
___

#### 1. Instance Properties vs. Prototype Methods

When you create an object (like `train4`) from a class (like `Train`), the object has its own properties, like `color` and `lightsOn`. These are specific to that object and are set when you call the `constructor()` method of the class.
However, the methods (`toggleLights`, `lightsStatus`, `getSelf`, `getPrototype`) don’t get copied onto each new object. Instead, they live on something called the prototype. All objects created from the same class share these prototype methods, so they don’t take up extra memory on each instance.
This separation means that every Train object has its own color and light status

#### 2. Accessing the Prototype

When you call `getPrototype()` on `train4`, it shows the methods in the class that are shared across all instances of `Train`. This is because JavaScript uses the prototype to store shared methods, allowing for memory efficiency and shared behavior.  

#### Polymorphism and Inheritance

JavaScript classes allow for polymorphism through inheritance. This means you can create a new class that inherits from the `Train` class but has its own unique methods or overrides existing ones. For example, if you create a `HighSpeedTrain` class that extends `Train`, it can use all the methods of `Train` but can also have its own version of `toggleLights` or any other method.

It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. To understand how this works, it is best to use an example.

In the code that follows, you will observe another class being coded, which is named `HighSpeedTrain` and inherits from the Train class.

This makes the Train class a base class, or the super-class of the `HighSpeedTrain` class. Put differently, the `HighSpeedTrain` class becomes the sub-class of the `Train` class, because it inherits from it.

To inherit from one class to a new sub-class, JavaScript provides the `extends` keyword, which works as follows:

```js
class HighSpeedTrain extends Train {}
```

As in the example above, the sub-class syntax is consistent with how the base class is defined in JavaScript. The only addition here is the `extends` keyword, and the name of the class from which the sub-class inherits.

Now you can describe how the `HighSpeedTrain` works. Again, you can start by defining its constructor function:

```js
class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
}
```

Notice the slight difference in syntax in the constructor of the `HighSpeedTrain` class, namely the use of the `super` keyword. In JavaScript classes, **`super` is used to specify what property gets inherited from the super-class in the sub-class.**

In this case, I choose to inherit both the properties from the `Train` super-class in the `HighSpeedTrain` sub-class. These properties are `color` and `lightsOn`.
Next, you add the additional properties of the `HighSpeedTrain` class inside its constructor, namely, the `passengers` and `highSpeedOn` properties.
Next, inside the constructor body, you use the `super` keyword and pass in the inherited `color` and `lightsOn` properties that come from the `Train` class. On subsequent lines you assign `passengers` to `this.passengers`, and `highSpeedOn` to `this.highSpeedOn`.

Notice that in addition to the inherited properties, you also **automatically** inherit all the methods that exist on the `Train` prototype, namely, the `toggleLights(),` `lightsStatus(),` `getSelf(),` and `getPrototype()` methods.

Now let's add another method that will be specific to the `HighSpeedTrain` class: the `toggleHighSpeed`() method.

```js
class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
}
```

Additionally, imagine you realized that you don't like how the `toggleLights()` method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the `HighSpeedTrain` class.

```js
class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}
```

So, how did you override the behavior of the original `toggleLights()` method? Well in the super-class, the `toggleLights()` method was defined as follows:

```js
toggleLights() {
    this.lightsOn = !this.lightsOn;
}
```

You realized that the `HighSpeedTrain` method should reuse the existing behavior of the original `toggleLights()` method, and so you used the `super.toggleLights()` syntax to inherit the entire super-class' method.  
Next, you also inherit the behavior of the super-class' `lightsStatus()` method - because you realize that you want to have the updated status of the `lightsOn` property logged to the console, whenever you invoke the `toggleLights()` method in the sub-class.  
Finally, you also add the third line in the re-implemented `toggleLights()` method, namely: `console.log('Lights are 100% operational.');`  
You've added this third line to show that I can combine the "borrowed" method code from the super-class with your own custom code in the sub-class.
Now you're ready to build some train objects.
```js
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
```
You've built the `train5` object of the `Train` class, and set its color to `"blue"` and its `lightsOn` to `false`.  
Next, you've built the `highSpeed1` object to the `HighSpeedTrain` class, setting `passengers` to `200`, `highSpeedOn` to `false`, `color` to `"green"`, and `lightsOn` to `false`.  
Now you can test the behavior of `train5`, by calling, for example, the `toggleLights()` method, then the `lightsStatus()` method:
```js
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
```
