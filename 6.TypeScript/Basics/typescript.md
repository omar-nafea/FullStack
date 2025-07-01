## Introduction to TS

TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

### Types by Inference

TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.
```ts
let helloWorld = "Hello World";
// typescript assign the type of helloWorld: string
```

By understanding how JavaScript works, TypeScript can build a type-system that accepts JavaScript code but has types. **This offers a type-system without needing to add extra characters to make types explicit in your code.** That’s how TypeScript knows that `helloWorld` is a string in the above example.

You may have written JavaScript in Visual Studio Code, and had editor auto-completion. Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.

### Defining Types

You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript language, which offers places for you to tell TypeScript what the types should be.

For example, to create an object with an inferred type which includes `name: string` and `id: number`, you can write:

```ts
const user = {
  name: "Hayes",
  id: 0,
};
```
You can explicitly describe this object’s shape using an interface declaration:
```ts
interface User {
  name: string;
  id: number;
}
```
You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like `:TypeName` after a variable declaration:
```ts
const user: User = {
  name: "Hayes",
  id: 0,
};
```
If you provide an object that doesn’t match the interface you have provided, TypeScript will warn you:
```ts
interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",
// Warnning: Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
```

Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:
```ts
interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);
```
You can use interfaces to annotate parameters and return values to functions:
```ts
function deleteUser(user: User) {
  // ...
}
 
function getAdminUser(): User {
  //...
}
```
There is already a small set of primitive types available in JavaScript: `boolean`, `bigint`, `null`, `number`, `string`, `symbol`, and `undefined`, which you can use in an interface. TypeScript extends this list with a few more, such as `any` (allow anything), `unknown` (ensure someone using this type declares what the type is), `never` (it’s not possible that this type could happen), and `void` (a function which returns undefined or has no return value).

You’ll see that there are two syntaxes for building types: `Interfaces` and `Types`. You should prefer interface. Use type when you need specific features.

### Composing Types

With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: **unions** and **generics**.

**Unions**  

With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either `true` or `false`:
```ts
type MyBool = true | false;
```
Note: If you hover over `MyBool` above, you’ll see that it is classed as boolean. That’s a property of the Structural Type System. More on this below.

A popular use-case for union types is to describe the set of `string` or `number` literals that a value is allowed to be:
```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```
Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```
For example, you can make a function return different values depending on whether it is passed a string or an array:
to check whether the vairable is array or not:
```js
let a = [3,2]
Array.isArray(a) // true
```
```ts
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
// (parameter) obj: string
  }
  return obj;
  // (parameter) obj: string[]
}
```
### Generics

Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```
You can declare your own types that use generics:
```ts
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
 
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
 
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
 
// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
// Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Structural Type System

One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.
In a structural type system, if two objects have the same shape, they are considered to be of the same type.
```ts
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

The `point` variable is never declared to be a `Point` type. However, TypeScript compares the shape of `point` to the shape of `Point` in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object’s fields to match.
```ts
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
 
const color = { hex: "#187ABF" };
logPoint(color);
// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  // Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
```
There is no difference between how classes and objects conform to shapes:
```ts
class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```
If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.
## Making Generics Types Optional

In this issue, I wanted to explore how we can make a generic Type optional by providing a default for the Type variable, that can be used when no Type is passed in and Typescript cannot infer the Type. Before we can look at generics, let’s draw some parallels with functions and how defaults work values for functional arguments.

Let’s take the following simple example.

```ts
function doSomething(input: string) {
    // do something
}
```
In the above example, the function input parameter is required. In some cases, we want to provide a fallback value, that will be used if the function is called without a value. For functions, the syntax to achieve this is the one shown below:  
![optionalGenericType1.png](../Pics/optionalGenericType1.png)  

In the above example, we are simply telling Javascript that if the input parameter isn’t provided or undefined, use default-value as the value for the variable. This makes the input string optional, and not required.

While Typescript will type-check the function’s input parameter if provided an incorrect Type or if we simply don’t provide it, it also means that we need to provide the input every time we call the function.

By providing a default value, we made the parameter optional, but this also means we have also expanded the types from being just string to string and undefined and to consume it, we might need to narrow the type. You can learn more about type narrowing here.

However, by providing a default value, it means we don’t need to provide it, so we don’t have to do the extra step of checking if the input is string or undefined, avoiding the extra step for narrowing types, as we already have a fallback value, when undefined.

**What does this have to do with generics?**

Default Types for generics types work similarly. We can achieve the same thing we did with function parameters with Generics, where we can provide a fallback type for the type variable if not provided and cannot be inferred.

- A type variable is a special kind of variable that works on types rather than values.

Let’s look at an example. Let’s create a simple utility type. Utility types utilize generics to help you do type transformation. Typescript has some in-built utility types that you can learn more about here.

Our utility type will take two types (that are key-value objects) and merge their properties into a single Type, with the properties from both Types.

Here is an example of what our implementation looks like:  
![optionalGenericType2](../Pics/optionalGenericType2.png)  

To use our utility type, we just need to provide two object types and we get a single object with properties from both types that were passed in, as shown below:

![optionalGenericType](../Pics/optionalGenericType3.png)  

The problem is that this would work with merging 3 Types, but to work with merging two Types, we would need to provide an empty object Type, as shown below  
![optionalGenericType3](../Pics/optionalGenericType4.png)  

Wouldn’t be nice if we could skip that part, and just provide our two types? And this is where Generic type variable defaults come to the rescue.

Just like function parameters, we can provide a default Type for our Type variable and essence making them optional, as shown below:
![optionalGenericType](../Pics/optionalGenericType6.png)  
And now, our MergeObjectTypes utility type can accept either two or three Types and merge their properties into a single Type.
![optionalGenericType](../Pics/optionalGenericType5.png)
And we can go crazy now and add more type variables to merge 4, 5, or 10 even object properties while ensuring our utility types work with 2 to 10 types, and anywhere in between. 

### Rules for Default Types

Just like function parameters, there are a few rules to keep in mind for generic default Types.

- The first and most obvious one is that when you provide a default value, a Type variable is deemed as optional.
  - You are required to provide the required type variables.
  - Remember, Type inference in most cases can help you, so you don’t provide the required Type variables.
  - If you don’t provide an optional Type variable, then the default type is used, unless Typescript can infer a different type based on usage.
- And just for functions, required type variables come first, followed by optional type variables.
- If you are using a generics constraint, the default type must satisfy that constraint.

### Default Generic Type Choice:

Optional generic types in TypeScript are generic type parameters that have a default value. This means when you define a generic type, you can specify a default type so that if the user doesn’t provide a specific type argument, TypeScript will use the default.
How It Works

**Default Value for Generic Parameter:**
- When declaring a generic parameter, you can set it equal to a default type (e.g., <T = DefaultType>). This makes the generic parameter "optional" because the consumer of the function, interface, or class can omit it and still have a type assigned.

**Type Inference and Explicit Specification:**
- If you don't explicitly pass a type argument, TypeScript will fall back to the default. However, if you do provide a type, that provided type will override the default.
  
For classes and interfaces, when extending either a class or an interface, you can introduce a default for an existing Type parameter and you may also introduce a new Typer variable, as long as it’s optional (has a type variable).

You’ve used {} as the default type for your generics. While this works because you’re allowing a union with string (T | string), it’s a bit unusual. Typically, you might choose a default that more closely reflects the expected type. For example, if you expect the first parameter to be a string when no type is provided, you could use:
```ts
function showTypes<T = string, M = string, K = string>(...){ ... }
```

This can make the intent clearer.

### Union Types on Parameters:

By defining the parameters as T | string, you ensure that if no value is passed, "Nothing" is valid. However, this also means that if a user explicitly provides a value, it must conform to the union, which can be less strict than if you designed the generics to default to string and then explicitly override the type. In many cases, this isn’t a problem for simple assignments like this, but in more complex scenarios you might want more control over the allowed types.

