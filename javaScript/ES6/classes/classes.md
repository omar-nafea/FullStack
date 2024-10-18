# Definition: class keyword
### The special keyword class defines a class in JavaScript:
```
class User {
  // The body of class
}
```
The code above defines a class User. The curly braces { } delimit the class body. Note that this syntax is named class declaration.

You're not obligated to indicate the class name. By using a class expression you can assign the class to a variable:
```
const UserClass = class {
  // The body of class
};
```
You can easily export a class as part of an ES2015 module. Here's the syntax for a default export:
```
export default class User {
 // The body of class
}
```
And a named export:
```
export class User {
  // The body of class
}
```
The class becomes useful when you create an instance of the class. An instance is an object containing data and behavior described by the class.

![title](instances-3.avif)
The **new** operator instantiates the class in JavaScript: ``instance = new Class().``

For example, you can instantiate the User class using the new operator:
```
const myUser = new User();
```
```new User()``` creates an instance of the User class.

## Initialization: constructor()
```constructor(param1, param2, ...)``` is a special method in the body of a class that initializes the instance. That's the place where you set the initial values for the fields, or do any kind of object setup.

In the following example the constructor sets the initial value of the field name:
```
class User {
  constructor(name) {
    this.name = name;
  }
}
```
User's constructor has one parameter name, which is used to set the initial value of the field this.name.

Inside the constructor this value equals to the newly created instance.

The arguments used to instantiate the class become the parameters of the constructor:
```
class User {
  constructor(name) {
    name; // => 'Jon Snow'
    this.name = name;
  }
}
const user = new User('Jon Snow');
```
name parameter inside the constructor has the value 'Jon Snow'.

If you don't define a constructor for the class, a default one is created. The default constructor is an empty function, which doesn't modify the instance.

At the same time, a JavaScript class can have up to one constructor.
## Fields
Class fields are variables that hold information. Fields can be attached to 2 entities:

Fields on the class instance
Fields on the class itself (aka static)
The fields also have 2 levels of accessibility:

Public: the field is accessible anywhere
Private: the field is accessible only within the body of the class
3.1 Public instance fields
Let's look again at the previous code snippet:
```
class User {
  constructor(name) {
    this.name = name;
  }
}
```
The expression this.name = name creates an instance field name and assigns to it an initial value.

Later you can access name field using a property accessor:
```
const user = new User('Jon Snow');
user.name; // => 'Jon Snow'
```
name is a public field because you can access it outside of the User class body.

When the fields are created implicitly inside the constructor, like in the previous scenario, it could be difficult to grasp the fields list. You have to decipher them from the constructor's code.

A better approach is to explicitly declare the class fields. No matter what constructor does, the instance always has the same set of fields.

The class fields proposal lets you define the fields inside the body of the class. Plus, you can indicate the initial value right away:
```
class SomeClass {
  field1;
  field2 = 'Initial value';
  // ...
}
```
Let's modify the User class and declare a public field name:
```
class User {
  name;
  
  constructor(name) {
    this.name = name;
  }
}
const user = new User('Jon Snow');
user.name; // => 'Jon Snow'
```
name; inside the body of the class declares a public field name.

The public fields declared such a way is expressive: a quick look at the fields declarations is enough to understand the class's data structure.

Moreover, the class field can be initialized right away at declaration.
```
class User {
  name = 'Unknown';
  constructor() {
    // No initialization
  }
}
const user = new User();
user.name; // => 'Unknown'
```
name = 'Unknown' inside the class body declares a field name and initializes it with value 'Unknown'.

There's no restriction on access or update of the public fields. You can read and assign values to public fields inside the constructor, methods, and outside of the class.
## Private instance fields
Encapsulation is an important concept that lets you hide the internal details of a class. Someone that uses an encapsulated class depends only on the public interface that the class provides, and doesn't couple to the implementation details of the class.

Classes organized with encapsulation in mind are easier to update when implementation details change.

A good way to hide internal data of an object is to use the private fields. These are the fields that can be read and change only within the class they belong to. The outside world of the class cannot change private fields directly.

The private fields are accessible only within the body of the class.

Prefix the field name with the special symbol # to make it private, e.g. #myField. The prefix # must be kept every time you work with the field: declare it, read it, or modify it.

Let's make sure that the field #name can be set once at the instance initialization:
```
class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}
const user = new User('Jon Snow');
user.getName(); // => 'Jon Snow'
user.#name;     // SyntaxError is thrown
```
#name is a private field. You can access and modify #name within the body of the User. The method getName() (more about methods in next section) can access the private field #name.

But if you try to access the private field #name outside of User class body, a syntax error is thrown: SyntaxError: Private field '#name' must be declared in an enclosing class.

## Public static fields
You can also define fields on the class itself: the static fields. These are helpful to define class constants or store information specific to the class.

To create static fields in a JavaScript class, use the special keyword static followed by the field name: static myStaticField.

Let's add a new field type that indicates the user type: admin or regular. The static fields TYPE_ADMIN and TYPE_REGULAR are handy constants to differentiate the user types:
```
class User {
  static TYPE_ADMIN = 'admin';
  static TYPE_REGULAR = 'regular';
  name;
  type;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}
const admin = new User('Site Admin', User.TYPE_ADMIN);
admin.type === User.TYPE_ADMIN; // => true
```
static TYPE_ADMIN and static TYPE_REGULAR define static variables inside the User class. To access the static fields, you have to use the class followed by the field name: User.TYPE_ADMIN and User.TYPE_REGULAR.

## Private static fields
Sometimes even the static fields are an implementation detail that you'd like to hide. In this regard, you can make static fields private.

To make the static field private, prefix the field name with # special symbol: static #myPrivateStaticField.

Let's say you'd like to limit the number of instances of the User class. To hide the details about instances limits, you can create the private static fields:
```
class User {
  static #MAX_INSTANCES = 2;
  static #instances = 0;
  
  name;
  constructor(name) {
    User.#instances++;
    if (User.#instances > User.#MAX_INSTANCES) {
      throw new Error('Unable to create User instance');
    }
    this.name = name;
  }
}
new User('Jon Snow');
new User('Arya Stark');
new User('Sansa Stark'); // throws Error
```
The static field User.#MAX_INSTANCES sets the maximum number of allowed instances, while User.#instances static field counts the actual number of instances.

These private static fields are accessible only within the User class. Nothing from the external world can interfere with the limits mechanism: that's the benefit of encapsulation.

## Methods
The fields hold data. But the ability to modify data is performed by special functions that are a part of the class: the methods.

The JavaScript classes support both instance and static methods.

## Instance methods
Instance methods can access and modify instance data. Instance methods can call other instance methods, as well as any static method.

For example, let's define a method getName() that returns the name in the User class:
```
class User {
  name = 'Unknown';
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const user = new User('Jon Snow');
user.getName(); // => 'Jon Snow'
```
getName() { ... } is a method inside the User class. user.getName() is a method invocation: it executes the method and returns the computed value if any.

In a class method, as well as in the constructor, this value equals to the class instance. Use this to access instance data: this.field, or even call other methods: this.method().

Let's add a new method nameContains(str) that has one parameter and calls another method:
```
class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  nameContains(str) {
    return this.getName().includes(str);
  }
}
const user = new User('Jon Snow');
user.nameContains('Jon');   // => true
user.nameContains('Stark'); // => false
```
nameContains(str) { ... } is a method of User class that accepts one parameter str. More than that, it executes another method of the instance this.getName() to get the user's name.

A method can also be private. To make the method private prefix its name with #.

Let's make getName() method private:
```
class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
  #getName() {
    return this.#name;
  }
  nameContains(str) {
    return this.#getName().includes(str);
  }
}
const user = new User('Jon Snow');
user.nameContains('Jon');   // => true
user.nameContains('Stark'); // => false
```
user.#getName(); // SyntaxError is thrown
#getName() is a private method. Inside the method nameContains(str) you call a private method such way: this.#getName().

Being private, #getName() cannot be called outside of User class body.

## Getters and setters
The getter and setter mimic regular field, but with more control on how the field is accessed and changed.

The getter is executed on an attempt to get the field value, while setter on an attempt to set a value.

To make sure that the name property of the User cannot be empty, let's wrap the private field #nameValue in a getter and setter:
```
class User {
  #nameValue;
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this.#nameValue;
  }
  set name(name) {
    if (name === '') {
      throw new Error(`name field of User cannot be empty`);
    }
    this.#nameValue = name;
  }
}
const user = new User('Jon Snow');
user.name; // The getter is invoked, => 'Jon Snow'
user.name = 'Jon White'; // The setter is invoked
user.name = ''; // The setter throws an Error
```
get name() {...} getter is executed when you access the value of the field: user.name.

While set name(name) {...} is executed when the field is updated user.name = 'Jon White'. The setter throws an error if the new value is an empty string.

## Static methods
The static methods are functions attached directly to the class. They hold logic related to the class, rather than to the instance of the class.

To create a static method use the special keyword static followed by a regular method syntax: static myStaticMethod() { ... }.

When working with static methods, there are 2 simple rules to remember:

A static method can access static fields
A static method cannot access instance fields.
For example, let's create a static method that detects whether a user with a specific name was already taken.
```
class User {
  static #takenNames = [];
  static isNameTaken(name) {
    return User.#takenNames.includes(name);
  }
  name = 'Unknown';
  constructor(name) {
    this.name = name;
    User.#takenNames.push(name);
  }
}
const user = new User('Jon Snow');
User.isNameTaken('Jon Snow');   // => true
User.isNameTaken('Arya Stark'); // => false
```
isNameTaken() is a static method that uses the static private field User.#takenNames to check for taken names.

Static methods can be private: static #staticFunction() {...}. Again, they follow the rules of privacy: you can call a private static method only within the class body.

## Inheritance: extends
The classes in JavaScript support single inheritance using the extends keyword.

In the expression class Child extends Parent { } the Child class inherits from Parent the constructor, fields, and methods.

For example, let's create a new child class ContentWriter that extends the parent class User.
```
class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class ContentWriter extends User {
  posts = [];
}
const writer = new ContentWriter('John Smith');
writer.name;      // => 'John Smith'
writer.getName(); // => 'John Smith'
writer.posts;     // => []
```
ContentWriter inherits from the User the constructor, the method getName() and the field name. As well, the ContentWriter class declares a new field posts.

Note that private members of a parent class are not inherited by the child class.

## Parent constructor: super() in constructor()
If you'd like to call the parent constructor in a child class, you need to use the super() special function available in the child constructor.

For example, let's make ContentWriter constructor call the parent constructor of User, as well as initialize the posts field:
```
class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class ContentWriter extends User {
  posts = [];
  constructor(name, posts) {
    super(name);
    this.posts = posts;
  }
}
const writer = new ContentWriter('John Smith', ['Why I like JS']);
writer.name; // => 'John Smith'
writer.posts // => ['Why I like JS']
```
super(name) inside the child class ContentWriter executes the constructor of the parent class User.

Note that inside the child constructor you must execute super() before using this keyword. Calling super() makes sure that the parent constructor initializes the instance.
```
class Child extends Parent {
  constructor(value1, value2) {
    // Does not work!
    this.prop2 = value2;
    super(value1);
  }
}
```
## Parent instance: super in methods
If you'd like to access the parent method inside of a child method, you can use the special shortcut super.
```
class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class ContentWriter extends User {
  posts = [];
  constructor(name, posts) {
    super(name);
    this.posts = posts;
  }
  getName() {
    const name = super.getName();
    if (name === '') {
      return 'Unknwon';
    }
    return name;
  }
}
const writer = new ContentWriter('', ['Why I like JS']);
writer.getName(); // => 'Unknwon'
```
getName() of the child class ContentWriter accesses the method super.getName() directly from the parent class User.

This feature is called method overriding.

Note that you can use super with static methods too, to access the parent's static methods.

## Object type checking: instanceof
object instanceof Class is the operator that determines if object is an instance of Class.

Let's see instanceof operator in action:
```
class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const user = new User('Jon Snow');
const obj = {};
user instanceof User; // => true
obj instanceof User; // => false
```
user is an instance of User class, user instanceof User evaluates to true.

The empty object {} is not an instance of User, correspondingly obj instanceof User is false.

instanceof is polymorphic: the operator detects a child as an instance of the parent class.
```
class User {
  name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class ContentWriter extends User {
  posts = [];
  constructor(name, posts) {
    super(name);
    this.posts = posts;
  }
}
const writer = new ContentWriter('John Smith', ['Why I like JS']);
writer instanceof ContentWriter; // => true
writer instanceof User;          // => true
```
writer is an instance of the child class ContentWriter. The operator writer instanceof ContentWriter evaluates to true.

At the same time ContentWriter is a child class of User. So writer instanceof User evaluates to true as well.

What if you'd like to determine the exact class of the instance? You can use the constructor property and compare directly with the class:
```
writer.constructor === ContentWriter; // => true
writer.constructor === User;          // => false
```
## Classes and prototypes
I must say that the class syntax in JavaScript does a great job to abstract from the prototypal inheritance. To describe the class syntax I haven't even used the term prototype.

But the classes are built on top of the prototypal inheritance. Every class is a function, and creates an instance when invoked as a constructor.

The following two code snippets are equivalent.

The class version:
```
class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
const user = new User('John');
user.getName();       // => 'John Snow'
user instanceof User; // => true
The version using prototype:

function User(name) {
  this.name = name;
}
User.prototype.getName = function() {
  return this.name;
}
const user = new User('John');
user.getName();       // => 'John Snow'
user instanceof User; // => true
```
The class syntax is way easier to work if you're familiar with the classic inheritance mechanism of Java or Swift languages.

Anyways, even if you use class syntax in JavaScript, I recommend you to have a good grasp of prototypal inheritance.

## Class features availability
The class features presented in this post are spread across ES2015 and proposals at stage 3.

At the end of 2019, the class features are split between:

Public and private instance fields are part of Class fields proposal
Private instance methods and accessors are part of Class private methods proposal
Public and private static fields and private static methods are part of Class static features proposal
The rest is part of ES2015 standard.
## Conclusion
JavaScript classes initialize instances with constructors, define fields and methods. You can attach fields and methods even on the class itself using the static keyword.

Inheritance is achieved using extends keyword: you can easily create a child class from a parent. super keyword is used to access the parent class from a child class.

To take advantage of encapsulation, make the fields and methods private to hide the internal details of your classes. The private fields and methods names must begin with #.

The classes in JavaScript become more and more convenient to use.

What do you think about using # to prefix private properties?