# JSX syntax

## Arrow function

Let’s start with a function declaration used as a component in React:
```js
function Nav(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```
This component's code returns a list item containing the value of the 'first' prop. Now, let's change this function declaration to a function expression:
```js
const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

The component is, for the most part, the same. The only thing that's changed is that you’re now using an anonymous (nameless) function, and assigning this anonymous function declaration to a variable declared using the const keyword but The rest of the code is identical.

Changing a component from a function declaration to a function expression doesn't change its behavior, or how you write the code to render the Nav component. It's still the same:
```jsx
<Nav first="Home" />
```
You can also take this concept a step further, using arrow functions.

### Components as Arrow Functions

Arrow functions are a core feature of the ES6 version of JavaScript.
One of the main benefits of using arrow functions is its shorter syntax.
Consider the Nav function expression written as an arrow function:
```js
const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```
So, the way to think about this is the following:

- The arrow itself can be thought of as the replacement for the function keyword. 
- The parameters that this arrow function accepts are listed before the arrow itself. 

To reiterate, take the smallest possible anonymous ES5 function:
```js
const example = function() {}
```
And then observe how this is written as an arrow function:
```js
const example = () => {}
```

Another important rule regarding arrow functions is that using the parentheses is optional if there's a single parameter that a function accepts. In other words, another correct way to write the previous Nav arrow function component would be to drop the parentheses around ‘props’:
```js
const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

In all other cases, when you write arrow functions, for any number of parameters other than a single parameter, using parentheses around parameters is compulsory. For example, if your Nav component wasn't accepting any parameters, you'd code it with empty parentheses:
```js
const Nav = () => {
    return (
        <ul>
            <li>Home</li>
        </ul>
    )
}
```
Another interesting thing about arrow functions is the implicit return. However, it only works if it's on the same line of code as the arrow itself. In other words, the implicit return works if your entire component is a single line of code.

To demonstrate how this works, let’s re-write the Nav component as a one-liner:

```jsx
const Nav = () => <ul><li>Home</li></ul>
```

Note that with the implicit return, you don't even have to use the curly braces that are compulsory function body delimiters in all other cases.

### Using Arrow Functions in Other Situations

In React, just like in plain JavaScript, arrow functions can be used in many different situations. One such situation is using it with, for example, the `forEach()` built-in array method.

For example:
```js
[10, 20, 30].forEach(item => item * 10)
// The output of the above vanilla JavaScript line of code would be three number values:
100
200
300
``` 
As a side-note, the term "vanilla JavaScript" is often used to describe the plain, regular JavaScript language syntax, without any framework-specific or library-specific code. For example, React is a library, so in this context, saying that a piece of code is "vanilla JavaScript" means that it doesn't need any special library to run. It can run in "plain" JavaScript without any additional dependencies.  
You could also write this code in ES5 syntax:
```js
[10, 20, 30].forEach(function(item) {
        return item * 10
    }
)
```

Regardless of how you write it, the `forEach()` method can be run on an array.  
**The `forEach()` method accepts a single parameter: an anonymous function.**  
If you write this anonymous function in ES5 syntax, then it would contain a return statement:
```js
function(item) {
    return item * 10
}
```

If you write it as an ES6 function instead, it can be simplified as one line:
```js
item => item * 10
```

Both these functions perform the exact same task. Only the syntax is different. The ES6 function is a lot shorter because:

- The arrow function has a single parameter, so you do not need to add parentheses around the item parameter (to the left of the arrow) 
- Since the arrow function fits on one line of code, you don’t need to use curly braces around the function body, or the return keyword; it's implicit 

Arrow functions are used extensively in JSX in React, and getting used to their syntax and being able to "mentally parse" it as you read it is an important skill to have and helps you get better at writing React apps.

Now that you have completed this reading, you’ve learned about some alternative approaches, specifically by using function expressions and arrow functions.

## Embedded expressions

Embedded expressions allow developers to insert the values of JavaScript variables into the HTML of the resulting React elements. Embedded expressions can also embed the outputs of functions. 

```js
function formatName(firstName, surName); {
    return firstName + " " + surName;
}
``` 
Embedded Function output
```jsx
const result = <p>{ formatName("Jane", "Wilson")}</p>;
```
```html
<p>Jane Wilson</p>
```
Expression in Html Attribute
```jsx
const url = "photo.jpg"
const result = <img src={url}></img>;
```

Note that the double-quotes are not needed for the attribute value as JSX will automatically add these. 

## Ternary operators and functions in JSX

how to use ternary expressions to achieve a random return, as well as how to invoke functions inside of JSX expressions? 

Here is a structure of an if...else conditional 

```js
let name = 'Bob';
if (name == 'Bob') {
    console.log('Hello, Bob');
} else {
    console.log('Hello, Friend');
};
```
But there is another, different way, to effectively do the same thing, It's known as the ternary operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a `condition` followed by a question mark `?`, then an expression to execute if the condition is `truthy` followed by a colon `:`, and finally the expression to execute if the condition is `falsy`

```js
condition ? exprIfTrue : exprIfFalse
```
**Parameters**

`condition`  
An expression whose value is used as a condition.  
`exprIfTrue`  
An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true).  
`exprIfFalse`  
An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).  

so If I'd apply to our first example would be
```js
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');
```

### Using ternary expressions in JSX

Let's examine an example of a component which uses a ternary expression to randomly change the text that is displayed.

```jsx
function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};
```
Inside the `<h1>` element, the curly braces signal to React that you want it to parse the code inside as regular JavaScript.

### Using function calls in JSX

Another way to work with an expression in JSX is to invoke a function. Function invocation is an expression because every expression returns a value, and function invocation will always return a value, even when that return value is undefined.

Like the previous example, you can use function invocation inside JSX to return a random number:
```jsx
function Example2() {
    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: 
                { Math.floor(Math.random() * 10) + 1 }
            </h1>
        </div>
    );
};
```
In the `Example2` component, built-in `Math.floor()` and `Math.random()` methods are being used, as well as some number values and arithmetic operators, to display a random number between 0 and 10. You can also extract this functionality into a separate function
```jsx
function Example3() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
        </div>
    );
};
```

The `getRandomNum()` function can also be written as a function declaration, or as a function expression. It does not have to be an arrow function.

But let's observe both alternatives: the function expression and the function declaration.

Function expression:
```jsx
const getRandomNum = function() {
    return Math.floor(Math.random() * 10) + 1
} ;
```
Function declaration:
```jsx
function getRandomNum() {
    return Math.floor(Math.random() *10) + 1
};
```

## Expressions as props

You've already learned a bit about using expressions as props. These can be, among other things, ternary operators, function calls, or some arithmetic operations.

However, you can pass almost any kind of expression as a prop.
```jsx
const bool = false; 
function Example(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};
export default function App() { 
    return ( 
        <div className="App"> 
            <Example toggleBoolean={!bool} /> 
        </div> 
    ); 
};
```
In the example above, you' re using the `!bool`, that is, the NOT operator, which evaluates to true, since `!false` is true.

Also, for the `toggleBoolean` prop to be rendered on the page, you're converting its boolean value to a string using the JavaScript's built-in toString method.   
Here's an extension of the above code which shows more ways to work with expressions as props in React.
```jsx
const bool = false;
const str1 = "just";
function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};
export default function App() {
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
        </div>
    );
};
```
What is happening here is several props are being passed to the Example component, and rendering each of these props' values to the screen.

In summary, just like you can use expressions inside function components, you can also use them as prop values inside JSX elements, when rendering those function components.

### Embedding in attributes

App.js
```jsx
import avatar from './avatar.png';

function Logo(props) {
    const userPic = <img src={avatar} />;
    return userPic
}

function App() {
    return (
        <>
            <h1>Hello World!</h1>
            <Logo/>
        </>
    )
}

export default App;
```
if I were to continue building this app with more components, it would be best to extract the logo component to its own file and then import and render it as needed