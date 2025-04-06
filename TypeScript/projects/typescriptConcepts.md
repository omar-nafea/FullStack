# TypeScript Concepts

## Assertions

In TypeScript, there is a technique that is so-called Assertions.
Generally, it is better to avoid using assertion because it forces the TypeScript type system to write its type over. However, there are some situations it is reasonable to use assertion to make your code work as you expect. In this article, I will share assertions and how to use assertions in your project.
Type Assertions

When you use certain methods, it may return something that you did not expect. Here is an example.
```ts
const originalArray = ["hello", "world"];
// const originalArray: string[]

const jsonString = JSON.stringify(originalArray);
// const jsonString: string

const parsedArray = JSON.parse(jsonString);
// const parsedArray: any

console.log(parsedArray);
// [LOG]: ["hello", "world"]
```
In this example, the type of parsedArray becomes any though we can retrieve the data we want. This is a good use case of type assertion because the JSON.parse method always returns any.
```ts
(method) JSON.parse(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any
```
That is why, we will have to use assertion to notify the TypeScript type system of the actual type of the returned value. Here is an updated code.
```ts
const originalArray = ["hello", "world"];
// const originalArray: string[]

const jsonString = JSON.stringify(originalArray);
// const jsonString: string

const parsedArray = JSON.parse(jsonString) as string[];
// const parsedArray: any

console.log(parsedArray);
// [LOG]: ["hello", "world"]
```
Perfect! You can avoid unexpected runtime errors by using assertions properly
Let me give you another example.
```ts
const element = document.getElementById('myElement');

console.log(element.innerText);
// type error: 'element' is possibly 'null'.
```
In this above example, you will encounter the type error, "'element' is possibly 'null'.". That is because `document.getElementById` returns union type, HTMLElement | null. Therefore, it will be good to cast the HTMLElement type if you are 100% sure that it is not null.
```ts
const element = document.getElementById('myElement') as HTMLElement;
console.log(element.innerText); // OK
```
Please note that type assertion is not the only solution in this scenario. You may be able to use **type guard** instead like below:
```ts
const element = document.getElementById('myElement');

if (element) {
  console.log(element.innerText); // OK
}
```
**Non-Null Assertions**

Speaking of the document.getElementById method, you may be able to use Non-null assertion if it is enough to tell the TypeScript type checker that the type of the returned value is NOT null.
By adding a ! instead of as type, you can just notify the type checker that the returned value will never be null. Here is an example:
```ts
const element = document.getElementById('myElement')!;

console.log(element.innerText); // OK
```

**Const Assertions**

Finally, let me introduce const assertions that work differently from other assertions.
When you use the const assertions, values affected by the const assertion will freeze.
For example, if a value is Array, it will be a readonly tuple that is an immutable array. If a value is Number or String, the type of the value becomes literal instead of the general primitive. If you use it for an object, the properties of the object will be readonly.
Here is an example:
```ts
// Readonly tuple (immutable array)
const coordinates = [1, 2, 3] as const;
// coordinates: readonly [1, 2, 3]

// The following line will cause a TypeScript error because
// the array is now a readonly tuple and cannot be modified.
// coordinates[0] = 5;

// Literal types
const age = 30 as const;
// age: 30

// The following line will cause a TypeScript error because
// age is now a literal type and cannot be assigned a new value.
// age = 31;

const student = "John" as const;
// student: "John"

// The following line will cause a TypeScript error because
// him is now a literal type and cannot be assigned a new value.
// student = "Jane";

// Readonly properties for objects
const person = {
  firstName: "Alice",
  lastName: "Smith",
} as const;
// person: { readonly firstName: "Alice"; readonly lastName: "Smith" }

// The following line will cause a TypeScript error because
// person.firstName is now a readonly property and cannot be modified.
// person.firstName = "Bob";
```
In this example, I have used const assertions to create readonly tuples, literal types, and readonly properties for objects. Notice how trying to modify these values causes TypeScript errors, since const assertions make them immutable.

## Record Type in TypeScript: A Quick Intro

The usual way to define a type of an object in TypeScript is using an object type:
```ts
interface SalaryInterface {
  annual: number
  bonus: number
}

const salary: SalaryInterface = { annual: 56000, bonus: 1200 } // OK
```
or an index signature:
```ts
type NumericObject = {
  [key: string]: number
}

const salary: NumericObject = { annual: 56000, bonus: 1200 } // OK
```
These are good ways to define object types.

But `Record<K, V>`, the third approach, has the benefit of being shorter and more readable. Let's see how to use it in your code.

### Record type

`Record<K, V>` is a generic type that represents an object type which keys are `K` and values are `V`.

For example, `Record<string, number>` is an object type with string keys and number values:
```ts
type NumericRecord = Record<string, number>

const salary: NumericRecord = { annual: 56000, bonus: 1200 } // OK
```
`Record<string, number>` is permissive regarding the object structure, as long as the keys are strings and values are numbers:
```ts
type NumericRecord = Record<string, number>

const salary1: NumericRecord = { annual: 56000 } // OK
const salary2: NumericRecord = { monthly: 8000 } // OK
const salary3: NumericRecord = { }               // OK
const salary4: NumericRecord = { foo: 0, bar: 1, baz: -2 } // OK
```
But Record<string, number> throws a type error if the value of a prop is a string:
```ts
type NumericRecord = Record<string, number>

const salary2: NumericRecord = { annual: '56K' } // Type error!
```
There are 2 simple rules to remember regarding the allowed types of the keys and values. In Record<K, V>:

- the key type K is restricted to number, string, symbol, including their literals
- but there is no restriction on the value type V

Let's see some valid record types:
```ts
type T1 = Record<string, string>           // OK
type T2 = Record<number, number>           // OK
type T3 = Record<string, () => void>       // OK
type T4 = Record<number | 'key1', boolean> // OK
type T5 = Record<'key1' | 'key2', boolean> // OK

type T6 = Record<string, Record<string, number>> // OK
type T7 = Record<string, { payment: number }>    // OK
```
Types like boolean, object, Function, etc. are not accepted as keys:
```ts
type T1 = Record<boolean, number> // Type error!
type T2 = Record<object, number>  // Type error!
```
### Record with union key

As seen above, `Record<string, number>` permits any key names in the object. But quite often you need to annotate objects with a fixed set of keys.

The record type accepts a union type as a key, which is useful to fixate the keys.

A union of string literals is a common way to define the key type:
`type Keys = 'key1' | 'key2' | 'keyN'`

For example, `Record<'annual' | 'bonus', number>` represents an object which can have only annual and bonus keys:
```ts
type Salary = Record<'annual' | 'bonus', number>

const salary1: Salary = { annual: 56000, bonus: 1200 } // OK
```
Using less than necessary or keys than aren't in the union is prohibited:
```ts
type Salary = Record<'annual' | 'bonus', number>

const salary1: Salary = { annual: 56000 } // Type error!
const salary2: Salary = { bonus: 1200 }   // Type error!
const salary3: Salary = { }               // Type error!
const salary4: Salary = { monthly: 8000 } // Type error!
```
The record type with union keys is equivalent to the regular object type. The record type has the benefit of not repeating the value type (like the regular object does):
```ts
type Salary = Record<'annual' | 'bonus', number>
// is equivalent to
type SalaryObj = {
  annual: number
  bonus: number
}
```
**Record benefits**

I prefer record type instead of index signature most of the time. Record syntax is shorter and more readable (altought it's also a matter of taste).

For example, the record parameter is a bit easier to grasp than the index signature parameter:
```ts
function logSalary1(salary: Record<string, number>) {
  console.log(salary)
}
function logSalary2(salary: { [key: string]: number }) {
  console.log(salary)
}
```
Compared to record type, the index signature doesn't accept literals or a union as key type:
```ts
type Salary = {
  [key: 'annual' | 'bonus']: number // Type error!
}
```
**Conclusion**

`Record<K, V>` is an object type with key type `K` and value type `V`.

The key type K can be only number, string, or symbol, including their literals. On the value type V is no restriction.

To limit the keys to a specific set, you can use a union of string literals Record<'key1' | 'key2', V> as the key type.

### Understanding TypeScript’s Powerful Type Assertions Through Practical Examples

TypeScript, a statically typed superset of JavaScript, offers a myriad of features that can be harnessed to write robust and maintainable code. One such feature is TypeScript’s type assertion, which allows developers to specify the type of an object more specifically than its current type. In this blog post, we will take a deep dive into a practical use case of TypeScript’s type assertion - creating an object with dynamic keys whose values have a specific type. The syntax we will be focusing on is `({} as Record<keyof T, string>)`.

**The Problem**

Imagine you’re developing a web application that displays speaker information for a conference. Each speaker has properties like id, first, last, bio, and sessionId. The data is fetched from an API, but in cases where the speaker is not found, you want to return a default object with the same keys as a valid speaker but with empty strings as values.

**The Basic Solution**

A naive approach to solve this problem would be to manually create the default object by specifying each key and setting the value as an empty string:
```ts
const defaultSpeaker = {
    id: "",
    first: "",
    last: "",
    bio: "",
    sessionId: ""
    };
```
This solution is simple, but not very scalable. If the Speaker interface changes, for example by adding new properties, you will have to manually update the default object everywhere it’s used.

**Leveraging TypeScript**

To create a more maintainable and scalable solution, we can use TypeScript’s Record utility type along with keyof keyword.

**Breaking Down the Syntax**

Let’s dissect the syntax (`{} as Record<keyof Speaker, string>`):


- `{}` - This represents an empty JavaScript object.
- `Record` - A TypeScript utility type that creates an object type with specified keys and the same type of values.
- `keyof` - A TypeScript keyword that creates a union type of all the keys of a given type.
- `as` - A TypeScript keyword used for type assertions. It tells TypeScript to treat one type as if it were another type.

**Combining the Elements**

By combining these elements, `Record<keyof Speaker, string>` creates an object type where the keys are the keys of the Speaker interface and the values are of type string. The type assertion as `Record<keyof Speaker, string>` then tells TypeScript to treat the empty object {} as if it were of this new object type.
```ts
interface Speaker {
    id: string;
    first: string;
    last: string;
    bio: string;
    sessionId: string;
    }

const defaultSpeaker = {} as Record<keyof Speaker, string>;
```
**Caveats and Runtime Reality**

It’s crucial to understand that the above syntax doesn’t actually create properties on the object at runtime. The resulting object is still empty. It’s TypeScript’s type system that allows you to treat it as if it had these properties.

In scenarios where you need the properties to exist at runtime with default values, you will have to create them explicitly. However, if your code is prepared to handle an object without these properties (such as by using optional chaining), this syntax can provide a more maintainable and dynamic solution.

## Index Signatures in TypeScript

You have 2 objects that describe the salary of 2 software developers:
```ts
const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000
};

const salary2 = {
  contractSalary: 110_000
};
```
You want to implement a function that returns the total remuneration based on the salary object:
```ts
function totalSalary(salaryObject: ???) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}

console.log(totalSalary(salary1)); // => 120_000
console.log(totalSalary(salary2)); // => 110_000
```
How would you annotate `salaryObject` parameter of `totalSalary()` function to accept objects with key as string and value as number?

The answer is to use an index signature!

### Why index signature

The idea of the index signatures is to type objects of unknown structure when you only know the key and value types.

An index signature fits the case of the salary parameter: the function should accept salary objects of different structures — just make sure that object values are numbers.

Let's annotate the salaryObject parameter with an index signature:
```ts
function totalSalary(salaryObject: { [key: string]: number }) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}

console.log(totalSalary(salary1)); // => 120_000
console.log(totalSalary(salary2)); // => 110_000
```
`{ [key: string]: number }` is the index signature, which tells TypeScript that salaryObject has to be an object with string type as key and number type as value.

Now the `totalSalary()` accepts as arguments both salary1 and salary2 objects, since they are objects with number values.

However, the function would not accept an object that has, for example, strings as values:
```ts
const salary3 = {
  baseSalary: '100 thousands'
};

// Type error:
// Argument of type '{ baseSalary: string; }' is not assignable to parameter of type '{ [key: string]: number; }'.
//   Property 'baseSalary' is incompatible with index signature.
//     Type 'string' is not assignable to type 'number'.
totalSalary(salary3);
```
### Index signature syntax

The syntax of an index signature is simple and looks similar to the syntax of a property. But with one difference: write the type of the key inside the square brackets: { [key: KeyType]: ValueType }.

Here are a few examples of index signatures.
```ts
string type is the key and value:
interface StringByString {
  [key: string]: string;
}

const heroesInBooks: StringByString = {
  'Gunslinger': 'The Dark Tower',
  'Jack Torrance': 'The Shining'
};

// The string type is the key, the value can be a string, number, or boolean:
interface Options {
  [key: string]: string | number | boolean;
  timeout: number;
}

const options: Options = {
  timeout: 1000,
  timeoutMessage: 'The request timed out!',
  isFileUpload: false
};
```
Options interface also has a field timeout, which works fine near the index signature.
The key of the index signature can only be a string, number, or symbol. Other types are not allowed:
```ts
interface OopsDictionary {
  // Type error: 
  // An index signature parameter type must be 'string', 'number', 
  // 'symbol', or a template literal type.  
  [key: boolean]: string;
}
```
### Index signature caveats

The index signatures in TypeScript have a few caveats you should be aware of.
**Non-existing properties**

What would happen if you try to access a non-existing property of an object whose index signature is `{ [key: string]: string }`?

As expected, TypeScript infers the type of the value to string. But if you check the runtime value — it's undefined:
```ts
interface StringByString {
  [key: string]: string;
}

const object: StringByString = {};

const value = object['anyNonExistingPropName'];
console.log(value); // => undefined
```
value variable is a string type according to TypeScript, however, its runtime value is `undefined`.

The index signature maps a key type to a value type — that's all. If you don't make that mapping correct, the value type can deviate from the actual runtime data type.

To make typing more accurate, mark the indexed value as string or undefined. Doing so, TypeScript becomes aware that the properties you access might not exist:
```ts
interface StringByString {
  [key: string]: string | undefined;
}

const object: StringByString = {};

const value = object['nonExistingProp'];
console.log(value); // => undefined
```
**String and number key**

Let's say you have a dictionary of number names:
```ts
interface NumbersNames {
  [key: string]: string
}

const names: NumbersNames = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  // etc...
};
```
Accessing a value by a string key works as expected:
```ts
const value1 = names['1']; // OK

// Would it be an error if you access a value by a number 1?
const value2 = names[1]; // OK
// Nope, all good!
```
JavaScript implicitly coerces numbers to strings when used as keys in property accessors (`names[1]` is the same as `names['1']`). TypeScript performs this coercion too.

### Index signature vs Record

TypeScript has a utility type Record<Keys, Values> to annotate records, similar to the index signature.
```ts
const object1: Record<string, string> = { prop: 'Value' }; // OK
const object2: { [key: string]: string } = { prop: 'Value' }; // OK
```

The big question is... when to use a Record<Keys, Values> and when an index signature? At first sight, they look quite similar!

As you saw earlier, the index signature accepts only string, number or symbol as key type. If you try to use, for example, a union of string literal types as keys in an index signature, it would be an error:
```ts
interface Salary {
  // Type error:
  // An index signature parameter type cannot be a literal type or generic type. 
  // Consider using a mapped object type instead.
  [key: 'yearlySalary' | 'yearlyBonus']: number
}
```
This behavior suggests that the index signature is meant to be generic in regards to keys.

But you can use a union of string literals to describe the keys in a Record<Keys, Values>:
```ts
type SpecificSalary = Record<'yearlySalary'|'yearlyBonus', number>
type GenericSalary = Record<string, number>

const salary1: SpecificSalary = { 
  'yearlySalary': 120_000,
  'yearlyBonus': 10_000
}; // OK
```
If you'd like to limit the keys to a union of specific strings, then Record<'prop1' | 'prop2' | ... | 'propN', Values> is the way to go instead of an index signature.

**Conclusion**

An index signature annotiation fits well the case when you don't know the exact structure of the object, but you know the key and value types.

The index signature consists of the index name and its type in square brackets, followed by a colon and the value type: { [indexName: Keys]: Values }. Keys can be a string, number, or symbol, while Values can be any type.

To limit the key type to a specific union of strings, then using the Record<Keys, Values> utilty type is a better idea. The index signature doesn't support unions of string literal types.

You can think that `[key: string]` is the same as `[key: string | number]`.

