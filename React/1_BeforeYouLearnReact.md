# Introduction to React Components

### Before you learn React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

React apps are built using modern JavaScript features, which are commonly known as ES6. Developers use React to develop Single Page Applications.

Users need to be able to interact with elements on a web page. This means that an HTML document must be represented in a way that JavaScript code can query and update it. And that's the function of the DOM. It's a model of the objects in your HTML file. And web developers interact with the DOM through JavaScript to update content, set up events and animate HTML elements.


JavaScript topics that you need to be comfortable with before you begin your journey learning React.

- Data types 
- Using var, let and const 
- Conditionals and Loops 
- Using objects, arrays and functions 
- ES6 Arrow functions 
- In-built functions such as map(), forEach() and promises. 
- Destructuring Arrays and Objects 
- Error Handling 

You will need to add other packages to your React application. A package in JavaScript contains all the files needed for a module. To install these packages effectively and manage their dependencies you can use a package manager like NPM (Node Package Manager). You can install npm by installing Node.js, which will then automatically install npm

### JavaScript modules, imports - exports

#### JavaScript Modules

In JavaScript, a module is simply a file.  
The purpose of a module is to have more modular code, where you can work with smaller files, and import and export them so that the apps you build are more customizable and have more composable parts.  
```js
function addTwo(a, b) {
    console.log(a + b);
}
```

Say that you have a file named addTwo.js that contains only the above code.
How would you make this file a JavaScript module?
All that you would need to do to make it a JavaScript module is use the export syntax.

in JavaScript Modules are standalone units of code that you can reuse again and again. Being standalone means that you can add them to your programs, remove them, and replace them with other modules and everything will still work. Well, in React, you can make use of this JavaScript feature to separate your components by placing them in their own file. Then you can use the `import` and `export` statements to make the false communicate with each other. 

The export statement is used to make a module available to another module. It helps to think of every JavaScript file as a module. Then in order to make the functions and variables available to other files, you need to export them, which makes them available by the import statement.  

In JavaScript, there are two types of exports, default exports and named exports. The default export is used when the function name is the same as the file name and named exports are used when you want the function name to be different from the file name. 

#### Module Exports

There is more than one way to export a module in JavaScript.
While all the various syntactical differences are not listed, here are a few examples that will cover all the ways that the importing and exporting of JavaScript modules will be done in this course.

In general, there are two ways to export modules in JavaScript:

- Using default exports 
- Using named exports 

##### Default Exports**

You can have **one default export** per JavaScript module. Using the above addTwo.js file as an example, here are two ways to perform a default export:

```js
export default function addTwo(a, b) {
    console.log(a + b);
}
```
So, in the above example, you’re adding the export default keywords in front of the addTwo function declaration. Here's an alternative syntax:
```js
function addTwo(a, b) {
    console.log(a + b);
}

export default addTwo;
```

##### Named Exports

Named exports are a way to export only certain parts of a given JavaScript file.

In contrast with default exports, you can export as many items from any JavaScript file as you want.

In other words, there can be only one default export, but as many named exports as you want. For example:

```js
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}
```
If you want to export both the addTwo and the addThree functions as named exports, one way to do it would be the following:
```js
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c) {
    console.log(a + b + c);
}
```
Here's another way you could do it:
```js
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

export { addTwo, addThree };
```

##### Importing Modules

Just like when exporting modules in JavaScript, there are several ways to import them. The exact syntax depends on how the module was exported. Say that you have two modules in a folder. The first module is `addTwo.js` and the second module is `mathOperations.js`.

You want to import the `addTwo.js` module into the `mathOperations.js` module. Importing a Module that was Exported as Default Consider the previous example of exporting the addTwo function as a default module:

```js
// addTwo.js module:
function addTwo(a, b) {
    console.log(a + b);
}

export default addTwo;
```
To import it into the `mathOperations.js` module, you could use the following syntax:
```js
import addTwo from "./addTwo";
// the rest of the mathOperations.js code goes here
```
So, you could start this import with the `import` keyword, then the name under which you’ll use this imported code inside the `mathOperations.js` file. You would then type the keyword `from`, and finally the location of the file, without the `.js` extension.

Contrast the above `import` of the **default** `addTwo export` with the different import syntax if the `addTwo` function was instead a **named** `export`:
```js
import { addTwo } from "./addTwo";
// the rest of the mathOperations.js code goes here
```

### introduction to functional components

all component names in React must be capitalized. Why is this? Well, because React treats lowercase components as regular HTML elements. Capitalizing a component name helps React to distinguish JSX elements from HTML elements.

The function name must also be declared using a capital letter for the first letter of the function. 


The jsx syntax instructs React to render the heading HTML element with whatever text value that is stored within the variable named title. This rendering happens behind the scenes because of something called transpiling. You can think of transpiling as a process of converting JSX to HTML

Transpiling: interpreting a programming language and translating it to a specific target language

Transpiling JSX
By the end of this reading, you will have learned how a component is built.
Introduction

Components are a nice way to build websites in React because they allow you to build more modular apps. However, how do you build components using React, JSX, and JavaScript? You'll learn how this works in this lesson item.
A browser cannot understand JSX syntax.

This means that making a browser understand React code requires a lot of supporting technologies.

An example of such a technology is a transpiler.

A transpiler takes a piece of code and transforms it into some other code.

To understand why this is done, here is an example of an ES6 variable declaration:
```js
const PI = 3.14
```

This is perfectly valid ES6 syntax.

However, if you were using a very old computer, that computer will have an old browser. Perhaps that browser was built before ES6 came out in 2015.

This means that the JavaScript engine that is built into your old computer's browser is likely to be an ES5 JavaScript engine.

In ES5, the only way to declare a variable is the following:
```js
var pi = 3.14
```

What this means is that for this old browser to understand the ES6 code, the only way to do it is by transpiling it.

If you feel like it, you can try transpiling ES6 to ES5 code yourself, using the es6console website
Now, let's move the focus to another example of transpiling. Let's say that you want to use a brand new, most modern ECMAScript syntax in an app. The only problem is that this new syntax is currently not supported by any browser; even an up-to-date browser.

However, by transpiling the new most-modern JavaScript syntax into something that modern browsers can understand, it is able to convert some code that the browser cannot comprehend, into code that it can comprehend, run, and produce a result from.

Likely the most popular site that shows off how this works is Babel As the heading of the website reads, "Babel is a JavaScript Compiler".

This finally brings you to the point of this discussion about transpiling JavaScript code.

What Babel does is this: it allows you to transpile JSX code (which cannot be understood by a browser) into plain JavaScript code (which can be understood by a browser).

This is where React and JSX come in.

For React code to be understood by a browser, you need to have a **transpiling step** in which the JSX code gets converted to plain JavaScript code that a modern browser can work with.

To demonstrate how this works, let's use the Heading component from the previous lesson.

Add the JSX code into the online Babel repl Repl stands for "read-eval-print loop" and it accepts code you write, evaluates it, and produces some result. In the specific case of the online Babel repl that result is some transpiled code. Here's a more detailed explanation.

If you've visited the above-linked URL, you'll find a web page that has two panels. On the left, there's source JSX code:
```jsx
function Heading(props) {
    return <h1>{props.title}</h1>
}
```
... and on the right, there's the transpiled, plain JavaScript code. However, ensure that you select the classic runtime for React in the left sidebar.
```jsx
function Heading(props) {
    return /*#__PURE__*/React.createElement("h1", null, props.title);
}
```
If you now analyze the difference between the source JSX code and the transpiled, plain JavaScript code, dis-regarding the comment, here's the body of the Heading function:
```jsx
React.createElement("h1", null, props.title);
```
So, here you have a React object, and this object has a createElement() method on it. The method is invoked with three arguments:

- `"h1"` 
- `null` 
- `props.title` 

The first argument is the DOM element to render - in this case, an h1 element. The second property is any HTML attribute that should be added, and there's a null here - meaning, there should be an object with some data, but there isn't any data so instead of the object there's the null value. The third property is the contents of the inner HTML of the DOM element specified as the first argument - in this case, the contents of the inner HTML of the h1 element.

Now let's use Babel again, and this time transpile the **render** syntax for the `Heading` component:
```html
<Heading title="This is the heading text!"></Heading>
```

Again using the Babel repl the output of the tranpilation is the following code. Ensure that you select the **classic** runtime for React in the left sidebar.
```jsx
/*#__PURE__*/
React.createElement(Heading, {
    title: "This is the heading text!"
});
```
Again, you have the `React.createElement()` method call, and this time, the first item to render is `Heading`, and then you have an object as the second argument (instead of a null that you had in the previous transpilation example).

This brings me to an interesting question: What is the minimum code that a component must have to be able to show something on the screen when rendered?

You can see the answer below:
```jsx
function Example() {
    return <div>An element</div>
}
export default Example
```

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

##### Here are a few more interesting things about the syntax.

- The use of the className attribute in JSX
- The use of separate components for repetitive code
- Where are all the props?
- Why was I not using the <a> element for empty links? 


Why use the className attribute in the JSX syntax, Well, with JSX, it looks like HTML so much that it's easy to forget that it's actually JavaScript code - not HTML.

While regular HTML does indeed have a class attribute, which is used to list one or more CSS classes to be used on a given HTML element, this cannot really work in JSX. The reason is that JSX is a special kind of JavaScript syntax, and the word class is a reserved keyword in JSX. That's why the React team had to make a compromise and so className is used in JSX to list one or more CSS classes to be used on a given element or component.

But why use Intro1.js, Intro2.js, and Intro3.js? Isn't one of the tenets of coding the DRY approach - that is, the "Don't repeat yourself" approach?

Indeed, it is. However, there are still a few concepts to discuss before you learn how to re-use a single component with variations in its content. This has to do with data in components, but don't worry, we'll be getting to that later. 

The third question is about the props object. It has been mentioned before, but so far it hasn't been used. It hasn't been used in this example either.

The answer to this question has to do with the next lesson, titled Component Use and Styling. In this lesson, you'll see in practice how you can make components work better, with the help of props. The final question is about not using the <a> element for empty links in my app.

The answer here depends on whether those links are "internal" - inside an app, or "external", meaning, leading to some external link, such as https://www.coursera.org If the links are internal to the app - as they are envisioned here - using the `<a>` tag is simply not the React way of doing things. You'll learn why that is the case when discussing the use of React Router.


##### what is the difference between modules and components

since they are both essentially just JavaScript files, they have similarities, it can help to think of a component as a single part or small piece of functionality like a button. Then you can think of a module as something that's larger than just one component like a series of components.   
This technique of splitting your code into several modules is known as modular programming, and it complements the component-based architecture of React.

In React, to import a component, you use the keyword import, followed by the component name you want to import. Then you use the keyword from, to specify the location of where the component is located. You need to use a file name sequence, `./` before the file name, but the file name extension is not required. 

### Dissecting props

Recall that much like parameters in a JavaScript function which allow you to pass in values as arguments, React uses properties, or props, to pass data between components. But how exactly do they work?

In this reading, you’ll use a transpiler to break JSX code to plain JavaScript, making its purpose more understandable.

Remember first that JSX code in React is just syntactic sugar - meaning, a nicer way to write some hard-to-read code.

For the browser to understand this syntactic sugar, you need to transpile JSX down to plain JavaScript code.
```jsx
function App() {
  return <h1>Hello there</h1>
}
```
… if you used the Babel transpiler to transpile this JSX syntactic sugar code down to plain JavaScript code, you’d get back some unusual code:
```jsx
"use strict";
function App() {
    return /*#__PURE__*/React.createElement("h1", null, "Hello there");
}
```
You just want to focus on the React.createElement("h1", null, "Hello there"); part. You can ignore the rest.

This means that the createElement function receives three arguments:

- The wrapping element to render. 
- A null value (which is there to show an absence of an expected JavaScript object value). 
- The inner content that will go inside the wrapping element. 

##### The wrapping element to render

Interestingly, the inner content that will go inside the wrapping element can also be a call to the `createElement` function.

```jsx
function App() { 
  return (
    <div>
    <h1>Hello there</h1> 
    </div>
  )
}
```
… the transpiled return statement in plain JavaScript again returns two createElement functions:
```js
"use strict";
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello there"));
}
```
So now the third argument of the outer-most `React.createElement` call is another `React.createElement` call.  
This is how you can nest as many elements as you want. This means that a nested JSX structure is just a bunch of nested React.createElement calls, passed in to other React.createElement calls as their third argument.

##### The second – null – argument

The second argument of null can – in this case – be replaced with an empty object.

In that case, your code would contain a pair of curly braces instead of the word null:
```jsx
function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello there")
  );
}
```
This object is referred to as the props object. It is the main mechanism of sending data from a parent component to a child component in React.

The way this works is described in React docs using the following code:
```jsx
React.createElement(
  type,
  [props],
  [...children]
)
```
##### The third argument (...children)

This is the inner content that will go inside the wrapping element. It's what makes it possible to nest elements inside other elements, mimicking the way that HTML works.

