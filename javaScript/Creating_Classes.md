# Creating classes

You know that inheritance in JavaScript is based around the prototype object. All objects that are built from the prototype (javascript default settings) share the same functionality.

When you need to code more complex OOP relationships, you can use the class keyword and its easy-to-understand and easy-to-reason-about syntax.

Imagine that you need to code a Train class. Once you've coded this class, you'll be able to use the keyword new to instantiate objects of the Train class. you can define the Train class, using:\
`class Train {}`
So, you use the class keyword, then specify the name of your class, with the first letter capitalized, and then you add an opening and a closing curly brace. In between the curly braces, the first piece of code that you need to define is the constructor:

```js
class Train {
  constructor() {}
}
```

The constructor will be used to **build properties** on the future object instance of the Train class.\
For now, let's say that there are only two properties that each object instance of the Train class should have at the time it gets instantiated: color and lightsOn.

```js
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
}
```

**Notice: The constructor is a special function in my Train class.**

First of all, notice that there is no function keyword. Also, notice that the keyword constructor is used to define this function. You give your constructor function parameters inside an opening and closing parenthesis, just like in regular functions. The names of parameters are color and lightsOn.\
Next, inside the constructor function's body, you assigned the passed-in color parameter's value to this.color, and the passed-in lightsOn parameter's value to this.lightsOn.

**What does this `this` keyword here represent? It's the future object instance of the Train class.**
Essentially, this is all the code that you need to write to achieve two things:

* This code allows me to build new instances of the Train class.
* **Each object instance of the Train class that I build will have its own custom properties of color and lightsOn.**

Now, to actually build a new instance of the Train class, I need to use:
`new Train()`
Inside the parentheses, you need to assign values to color property and set to "red" and the lightsOn property is set to false.

And, to be able to interact with the new object built this way, you need to assign it to a variable.
`var myFirstTrain = new Train('red', false);`
Just like any other variable, you can now, for example, console log the myFirstTrain object:
`console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}`
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

* The toggleLights method uses the logical not operator, `!`. This operator will change the value stored in the lightsOn property of the future instance object of the `Train class;` hence the `!this.lightsOn`. And the `=` operator to its left means that it will get assigned to this.lightsOn, meaning that it will become the new value of the `lightsOn` property on that given instance object.
* The `lightsStatus()` method on the Train class just reports the current status of the `lightsOn` variable of a given object instance.
* The `getSelf()` method prints out the properties on the object instance it is called on.
* The `getPrototype()` console logs the prototype of the object instance of the Train class.
* **The prototype holds all the properties shared by all the object instances of the Train class.**
* To get the prototype, you'll be using JavaScript's built-in Object.`getPrototypeOf()` method, and passing it this object - meaning, the object instance inside of which this method is invoked.

```js
mySecondTrain.getPrototype()
{toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
  constructor: class Train
  getPrototype: ƒ getPrototype()
      length: 0
      name: "getPrototype"
      arguments: (...)
      caller: (...)
      [[FunctionLocation]]: [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[2]
  getSelf: ƒ getSelf()
  lightsStatus: ƒ lightsStatus()
  toggleLights: ƒ toggleLights()
  [[Prototype]]: Object
      constructor: ƒ Object()
      hasOwnProperty: ƒ hasOwnProperty()
      isPrototypeOf: ƒ isPrototypeOf()
      propertyIsEnumerable: ƒ propertyIsEnumerable()
      toLocaleString: ƒ toLocaleString()
      toString: ƒ toString()
      valueOf: ƒ valueOf()
      __defineGetter__: ƒ __defineGetter__()
      __defineSetter__: ƒ __defineSetter__()
      __lookupGetter__: ƒ __lookupGetter__()
      __lookupSetter__: ƒ __lookupSetter__()
      __proto__: (...)
      get __proto__: ƒ __proto__()
      set __proto__: ƒ __proto__()
```

Now you can build a brand new train using this updated Train class:
`var train4 = new Train('red', false);`
And now, you can run each of its methods, one after the other, to confirm their behavior:

```js
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
```

Notice The returned object is the train4 object.  
**This object gets returned only with the properties "the Data" that was build using the constructor() function of the Train class. That's because all the methods on the Train class do not "live" on any of the instance objects of the Train class - instead, they live on the prototype.**

Finally, the result of calling the getPrototype() method is the console logging of all the properties on the prototype.   
When the class syntax is used in JavaScript, this results in only shared methods being stored on the prototype, while the constructor() function sets up the mechanism for saving instance-specific values ("data") at the time of object instantiation.

**Thus, in conclusion, the class syntax in JavaScript allows us to clearly separate individual object's data - which exists on the object instance itself - from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.**

#### 1. Instance Properties vs. Prototype Methods

When you create an object (like train4) from a class (like Train), the object has its own properties, like color and lightsOn. These are specific to that object and are set when you call the constructor() method of the class.
However, the methods (toggleLights, lightsStatus, getSelf, getPrototype) don’t get copied onto each new object. Instead, they live on something called the prototype. All objects created from the same class share these prototype methods, so they don’t take up extra memory on each instance.

#### 2. Accessing the Prototype

When you call getPrototype() on train4, it shows the methods in the class that are shared across all instances of Train. This is because JavaScript uses the prototype to store shared methods, allowing for memory efficiency and shared behavior.  





#### Instance-Specific Data vs. Shared Functionality

The data for each Train object (like color and lightsOn) is stored directly on the instance (train4), while the methods (toggleLights, etc.) are stored on the prototype. This separation means that every Train object has its own color and light status, but they all use the same toggleLights method from the prototype.

#### Polymorphism and Inheritance

JavaScript classes allow for polymorphism through inheritance. This means you can create a new class that inherits from the Train class but has its own unique methods or overrides existing ones. For example, if you create a HighSpeedTrain class that extends Train, it can use all the methods of Train but can also have its own version of toggleLights or any other method.
However, this is not the whole story.

It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. To understand how this works, it is best to use an example.

In the code that follows, you will observe another class being coded, which is named HighSpeedTrain and inherits from the Train class.

This makes the Train class a base class, or the super-class of the HighSpeedTrain class. Put differently, the HighSpeedTrain class becomes the sub-class of the Train class, because it inherits from it.

To inherit from one class to a new sub-class, JavaScript provides the extends keyword, which works as follows:

```js
class HighSpeedTrain extends Train {}
```

As in the example above, the sub-class syntax is consistent with how the base class is defined in JavaScript. The only addition here is the extends keyword, and the name of the class from which the sub-class inherits.

Now you can describe how the HighSpeedTrain works. Again, you can start by defining its constructor function:

```js
class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
}
```

Notice the slight difference in syntax in the constructor of the HighSpeedTrain class, namely the use of the `super` keyword. In JavaScript classes, `super` is used to specify what property gets inherited from the super-class in the sub-class.

In this case, I choose to inherit both the properties from the Train super-class in the HighSpeedTrain sub-class. These properties are color and lightsOn.
Next, you add the additional properties of the HighSpeedTrain class inside its constructor, namely, the passengers and highSpeedOn properties.
Next, inside the constructor body, you use the super keyword and pass in the inherited color and lightsOn properties that come from the Train class. On subsequent lines you assign passengers to this.passengers, and highSpeedOn to this.highSpeedOn.

Notice that in addition to the inherited properties, you also **automatically** inherit all the methods that exist on the Train prototype, namely, the toggleLights(), lightsStatus(), getSelf(), and getPrototype() methods.

Now let's add another method that will be specific to the HighSpeedTrain class: the toggleHighSpeed() method.

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

Additionally, imagine you realized that you don't like how the toggleLights() method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the HighSpeedTrain class.

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
    super.toggleLigths();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}
```

So, how did you override the behavior of the original toggleLights() method?
Well in the super-class, the toggleLights() method was defined as follows:

```js
toggleLights() {
    this.lightsOn = !this.lightsOn;
}
```

You realized that the HighSpeedTrain method should reuse the existing behavior of the original toggleLights() method, and so you used the super.toggleLights() syntax to inherit the entire super-class' method.  
Next, you also inherit the behavior of the super-class' lightsStatus() method - because you realize that you want to have the updated status of the lightsOn property logged to the console, whenever you invoke the toggleLights() method in the sub-class.  
Finally, you also add the third line in the re-implemented toggleLights() method, namely:  
`console.log('Lights are 100% operational.');`  
You've added this third line to show that I can combine the "borrowed" method code from the super-class with your own custom code in the sub-class.
Now you're ready to build some train objects.
```js
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
```
You've built the train5 object of the Train class, and set its color to "blue" and its lightsOn to false.  
Next, you've built the highSpeed1 object to the HighSpeedTrain class, setting passengers to 200, highSpeedOn to false, color to "green", and lightsOn to false.  
Now you can test the behavior of train5, by calling, for example, the toggleLights() method, then the lightsStatus() method:
```js
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
```
Here's the entire completed code for this lesson:

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

var myFirstTrain = new Train("red", false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);

var train4 = new Train("red", false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
```

Notice how the toggleLights() method behaves differently on the HighSpeedTrain class than it does on the Train class.  
Additionally, it helps to visualize what is happening by getting the prototype of both the train5 and the highSpeed1 trains:  
```js
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}␍
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
```
The returned values in this case might initially seem a bit tricky to comprehend, but actually, it is quite simple:

* The prototype object of the train5 object was created when you defined the class Train. You can access the prototype using Train.prototype syntax and get the prototype object back.
* The prototype object of the highSpeed1 object is this object:
```js
{constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}.  
```
In turn this object has its own prototype, which can be found using the following syntax:  `HighSpeedTrain.prototype.__proto__.`  
Running this code returns:
```js
{constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}.
```


#### Using class instance as another class' constructor's property   
Consider the following example:

```js
class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
    this.treadmill = new Treadmill(treadmillPos, 5);
  }
}

var boxingGym = new Gym("7-22", "right corner", "left corner");

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //
```
In this example, there are three classes defined: `StationaryBike`, `Treadmill`, and `Gym`.

The `StationaryBike` class is coded so that its future object instance will have the position and gears properties. The position property describes where the stationary bike will be placed inside the gym, and the gears property gives the number of gears that that stationary bike should have.  
The Treadmill class also has a position, and another property, named modes (as in "exercise modes").
The Gym class has three parameters in its constructor function: openHrs, stationaryBikePos, treadmillPos.  
This code allows me to instantiate a new instance object of the Gym class, and then when I inspect it, I get the following information:  
- the `openHrs` property is equal to "7-22" (that is, 7am to 10pm)
- the `stationaryBike` property is an object of the StationaryBike type, containing two properties: position and gears
- the `treadmill` property is an object of the Treadmill type, containing two properties: position and modes


### Default Parameters

A useful a ES6 feature allows me to set a default parameter inside a function definition  First, .

What that means is, I'll use an ES6 feature which allows me to set a default parameter inside a function definition, which goes hand in hand with the defensive coding approach, while requiring almost no effort to implement.

For example, consider a function declaration without default parameters set:

```js
function noDefaultParams(number) {
    console.log('Result:', number * number)
}
```
Obviously, the noDefaultParams function should return whatever number it receives, squared.

However, what if I call it like this:

`noDefaultParams(); // Result: NaN`

JavaScript, due to its dynamic nature, doesn't throw an error, but it does return a non-sensical output.

Consider now, the following improvement, using default parameters:

```js
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
```
Default params allow me to build a function that will run with default argument values even if I don't pass it any arguments, while still being flexible enough to allow me to pass custom argument values and deal with them accordingly.

This now allows me to code my classes in a way that will promote easier object instantiation.

Consider the following class definition:

```js
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
```
Now I'll instantiate an object of the NoDefaultParams class, and run the calculate() method on it. Obviously, the bool1 should be set to true on invocation to make this work, but I'll set it to false on purpose, to highlight the point I'm making.

```js
var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'
```
This example might highlight the reason sometimes weird error messages appear when some software is used - perhaps the developers just didn't have enough time to build it better.

However, now that you know about default parameters, this example can be improved as follows:

```js
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6

```
This approach improves the developer experience of my code, because I no longer have to worry about feeding the WithDefaultParameters class with all the arguments. For quick tests, this is great, because I no longer need to worry about passing the proper arguments.

Additionally, this approach really shines when building inheritance hierarchies using classes, as it makes it possible to provide only the custom properties in the sub-class, while still accepting all the default parameters from the super-class constructor.

In conclusion, in this reading I've covered the following: 

- How to approach designing an object-oriented program in JavaScript 
- The role of the extends and super keywords 
- The importance of using default parameters.


## Designing an OO Program

In this reading, I will show you how to create classes in JavaScript, using all the concepts you've learned so far.

Specifically, I'm preparing to build the following inheritance hierarchy:

              Animal
             /     \
           Cat     Bird
          /   \        \
    HouseCat   Tiger   Parrot

There are two keywords that are essential for OOP with classes in JavaScript.
These keywords are extends and super.
The extends keyword allows me to inherit from an existing class.
Based on the above hierarchy, I can code the Animal class like this:

```js
class Animal {
    // ... class code here ...
}
```
Then I can code, for example, the Cat sub-class, like this:
```js
class Cat extends Animal {
    // ... class code here ...
}
```
This is how the extends keyword is used to setup inheritance relationships.
The super keyword allows me to "borrow" functionality from a super-class, in a sub-class. 

Now I can start thinking about how to implement my OOP class hierarchy.

Before I even begin, I need to think about things like: 
* What should go into the base class of Animal? In other words, what will all the sub-classes inherit from the base class? 
* What are the specific properties and methods that separate each class from others?
* Generally, how will my classes relate to one another?

Once I've thought it through, I can build my classes.

So, my plan is as follows: 

1. The Animal class' constructor will have two properties: color and energy 

2. The Animal class' prototype will have three methods: isActive(), sleep(), and getColor(). 

3. The isActive() method, whenever ran, will lower the value of energy until it hits 0. The isActive() method will also report the updated value of energy. If energy is at zero, the animal object will immediately go to sleep, by invoking the sleep() method based on the said condition. 

4. The getColor() method will just console log the value in the color property. 

5. The Cat class will inherit from Animal, with the additional sound, canJumpHigh, and canClimbTrees properties specific to the Cat class. It will also have its own makeSound() method. 

6. The Bird class will also inherit from Animal, but is own specific properties will be quite different from Cat. Namely, the Bird class will have the sound and the canFly properties, and the makeSound method too. 

7. The HouseCat class will extend the Cat class, and it will have its own houseCatSound as its special property. Additionally, it will override the makeSound() method from the Cat class, but it will do so in an interesting way. If the makeSound() method, on invocation, receives a single option argument - set to true, then it will run super.makeSound() - in other words, run the code from the parent class (Cat) with the addition of running the console.log(this.houseCatSound). Effectively, this means that the makeSound() method on the HouseCat class' instance object will have two separate behaviors, based on whether we pass it true or false. 

8. The Tiger class will also inherit from Cat, and it will come with its own tigerSound property, while the rest of the behavior will be pretty much the same as in the HouseCat class. 

9. Finally, the Parrot class will extend the Bird class, with its own canTalk property, and its own makeSound() method, working with two conditionals: one that checks if the value of true was passed to makeSound during invocation, and another that checks the value stored inside this.canTalk property.  

Now that I have fully explained how all the code in my class hierarchy should work I might start implementing it by adding all the requirements as comments inside the code structure.

At this stage, with all the requirements written down as comments, my code should be as follows:

```js
class Animal {
    // constructor: color, energy
    // isActive()
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()
    // sleep()
        // energy += 20
        // console.log energy
}
class Cat extends Animal {
    // constructor: sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound()
        // console.log sound
}
class Bird extends Animal {
    // constructor: sound, canFly, color, energy
    // makeSound()
        // console.log sound
}
class HouseCat extends Cat {
    // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
}
class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
}
class Parrot extends Bird {
    // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // if (canTalk)
            // console.log("talking!")
}
```
Now that I've coded my requirements inside comments of otherwise empty classes, I can start coding each class as per my specifications.
Coding the Animal class

First, I'll code the base Animal class.
```js
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}
```
Each animal object, no matter which one it is, will share the properties of color and energy.

Now I can code the Cat and Bird classes:

```js
class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}
```

Note: If I didn't use the super keyword in our sub-classes, once I'd run the above code, I'd get the following error: Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.

And now I can code the three remaining classes: HouseCat, Tiger, and Parrot.
```js
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}
```
Now that we've set up this entire inheritance structure, we can build various animal objects.

For example, I can build two parrots: one that can talk, and the other that can't.

```js
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
fiji.makeSound(); // 'chirp'

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180
```

Also, I can build a pet cat:
`var leo = new HouseCat();`

Now I can have leo purr:  

```js
// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow
```
Additionally, I can build a tiger:

`var cuddles = new Tiger();`

My cuddles tiger can purr and roar, or just roar:

```js
cuddles.makeSound(false); // Roar!
cuddels.makeSound(true); // purr, Roar!
```
Here's the complete code from this lesson, for easier copy-pasting:


```js
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!

```

#### how to pass value when calling as super
```js
class Animal {
      constructor(lg) {
          this.legs = lg;
      }
  }

  class Dog extends Animal {
      constructor() {
          super(4);
      }
  }

  var result = new Dog();
  console.log(result.legs); // 4


```