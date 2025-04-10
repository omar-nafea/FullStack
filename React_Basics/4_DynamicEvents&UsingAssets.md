# Dynamic Events and How to handle them
### Type of Events
in JSX click handling that is equevilent to html `onclick` is `onClick` is camelCase 
There are many events supported in React, which can be divided into several groups. Those groups include: 
- clipboard events,
- composition Events, 
- keyboard events, 
- Mouse events, 
- Selection events, 
- Touch events, 
- Wheel events, 
- Animation events, 
and more

these events are not specific to React Also keep in mind that many of these events are related to specific use cases. 

```jsx
function Btn() {
    const clickHandler = () => {
        console.log('clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>submit</button>
        </div>
    );
}
```
### Eventful issues

You’re now aware that React can work with most of the same events found in HTML, although React handles them differently.  
This means that you may encounter unfamiliar errors when you run your event-driven React code. However, in this reading, you’ll learn about some of the most common errors associated with events and how you can deal with them.

##### Event Errors

When you work in any programming environment, language, or framework, you are bound to write code that throws errors, for a variety of reasons.  
Sometimes it's just about writing the wrong syntax. Other times it's about not thinking of all the possible scenarios and all the possible ways that things can go wrong in your code. Regardless of what causes them, errors are a part of everyday life for a developer.  
The JavaScript language comes with a built-in error handling syntax, the try...catch syntax. Let’s examine an example of an error in JavaScript:
```js
(5).toUpperCase()
```
Obviously, you cannot uppercase a number value, and thus, this throws the following error:
```sh
Uncaught TypeError: 5.toUpperCase is not a function
```
To handle this TypeError, you can update the code with a try...catch block that instructs the code to continue running after the error is encountered:
```js
try {
    (5).toUpperCase();
} 
catch(e) {
    console.log(`Oops, you can't uppercase a number. 
        Trying to do it resulted in the following`, e);
}
// Oops, you can't uppercase a number. Trying to do it resulted in the following TypeError: 5.toUpperCase is not a function
```
Here's an example of a simple error in a React component:
```jsx
function NumBillboard(props) {
    return (
      <>
        <h1>{prop.num}</h1>
      </>
    )
  }
export default NumBillboard;
```
In React, an error in the code, such as the one above, will result in the error overlay showing in the app in the browser.

In this specific example, the error would be:
- ReferenceError
- prop is not defined

Since event-handling errors occur after the UI has already been rendered, all you have to do is use the error-handling mechanism that already exists in JavaScript – that is, you just use the try...catch blocks.

### syntax of handlers

```html
<button id="js-btn" onclick="clickHandler()">click me!</button>
```
```js
const jsBtn = document.getElementById('js-btn')
jsBtn.addEventListener('click', function() {
    console.log('clicked')
})
```
In React. The rule is to avoid manipulating the DOM directly as much as possible. You should set everything up declaratively, meaning that you describe updates to React and let it figure out the rest. 

_**But note that there is no function invocation syntax in event handling attribute in React.**_   
In other words, while in plain JavaScript, you would need to pass an invocation to an event handling function as a value to the on click events.  
In React, you should not invoke a function. Instead, you just pass a reference to the event handling function without invoking it. To illustrate that point, let's compare the syntax of an HTML click handler event and it's reactor JSX equivalent. 

```html
<button id="js-btn" onclick="clickHandler()">click me!</button>
```
```jsx
<button onClick={clickHandler}>Click me!</button>
```
**only using React is the passing of function declarations as props.** 
```jsx
return (
    <Counter onClick={clickHandler}/>
)
```
### Event handling and embedded expressions
##### Handling events using inline anonymous ES5 functions

This approach allows you to directly pass in an ES5 function declaration as the onClick event-handling attribute’s value:
```jsx
<button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button>
```
Although it's possible to write your click handlers using this syntax, it's not a common approach and you will not find such code very often in React apps.

##### Handling events using inline anonymous ES6 functions (arrow functions)

With this approach, you can directly pass in an ES6 function declaration as the onClick event-handling attribute’s value:
```js
<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>
```
This approach is much more common then the previous one. If you want to keep all your logic inside the JSX expression assigned to the onClick attribute, use this syntax.

##### Handling events using separate function declarations

With this approach, you declare a separate ES5 function declaration, and then you reference its name in the event-handling onClick attribute, as follows:
```js
function App() {
    function thirdExample() {
        console.log('third example');
    };
    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    );
};
export default App;
```

This syntax makes sense to be used when your onClick logic is too complex to easily fit into an anonymous function. While this example is not really showing this scenario, imagine a function that has, for example, 20 lines of code, and that needs to be ran when the click event is triggered. This is a perfect use-case for a separate function declaration.

##### Handling events using separate function expressions

Tip: A way to determine if a function is defined as an expression or a declaration is: if it does not start the line with the keyword function, then it’s an expression.

In the following example, you’re assigning an anonymous ES6 arrow function to a const variable – hence, this is a function expression.

You’re then using this const variable’s name to handle the onClick event, so this is an example of handling events using a separate function expression.
```js
function App() {
    const fourthExample = () => console.log('fourth example');

    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
  );
};
export default App;
```
The syntax in this example is very common in React. It uses arrow functions, but also allows us to handle situations where our separate function expression spans multiple lines of code.

```jsx
function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;
```

# Using Assets

Assets are any file that application needed like image, audio, video, text file or any other file the app count on it during running process.  
**The general rule for asset storage is that if your app can compile without it, you can keep it in the public folder.**   
you create the assets folder in the React application. The pictures arrive and you place them inside the assets folder so they can be added to your components. To add an asset file to a component, you first need to import it. This can be done with an `import` statement.   
```js
import cat from './assets/images/cat.jpg'
```
`cat` is the name you want to give your asset. You can call this almost anything you like. But it's best to stick to something descriptive that describes your assets. 
```js
<>
<img src={cat} alt="Cat image" />
</>
```
Alternatively, instead of the asset name, you can reference the path to the assets folder relative to the component. 
```js
<>
<img src={require('./assets/image/cat.jpg')} 
alt="Cat image" />
</>
```
You can do this with the `require` keyword as well as curly braces that encase the JSX Expression and act as delimiters.  It's important to know that with this method, you no longer need the `import` statement. This is because you're using the required syntax right inside the JSX Expression that's assigned to the `src` JSX attribute. 

### Bundling assets

Let's talk about the advantages and disadvantages of embedding assets, including examples of client/server-side assets. and the trade-offs inherent in using asset-heavy apps.

The app’s files will likely be bundled when working with a React app. Bundling is a process that takes all the imported files in an app and joins them into a single file, referred to as a **bundle**. Several tools can perform this bundling. Since, in this course, you have used the `create-react-app` to build various React apps, you will focus on webpack. This is because webpack is the built-in tool for the `create-react-app`.

Let’s start by explaining what webpack is and why you need it. Simply put, webpack is a module bundler. Practically, this means that it will take various kinds of files, such as SVG and image files, CSS and SCSS files, JavaScript files, and TypeScript files, and it will bundle them together so that a browser can understand that bundle and work with it.

When building websites, you could probably do without webpack since your project's structure might be straightforward: you may have a single CSS library, such as Bootstrap, loaded from a CDN (content delivery network). You might also have a single JavaScript file in your static HTML document. If that is all there is to it, you do not need to use webpack in such a scenario.

However, modern web development can get complex. Here is an example of the first few lines of code in a single file of a React application:
```js
import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import { DragDropContext } from 'react-beautiful-dnd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import data from './data';
import Loading from './components/Loading';
```
The `imports` here are from fictional libraries and resources because the specific libraries are not necessary. All these different imports can be of various file types: `.js`, `.svg`, `.css`, and so on. In turn, all the imported files might have their own imported files, and even those might have their imports.

This means that depending on other files, all of these files can create a **dependency graph**. The order in which all these files are loading is essential. That dependency graph can get so complex that it becomes almost impossible for a human to structure a complex project and bundle all those dependencies properly.

This is the reason you need tools like webpack. So, webpack builds a dependency graph and bundles modules into one or more files that a browser can consume. While it is doing that, it also does the following: 

- It converts modern JS code - which can only be understood by modern browsers - into older versions of JavaScript so that older browsers can understand your code. This process is known as transpiling. For example, you can transpile ES6 code to ES5 code using webpack.  
- It optimizes your code to load as quickly as possible when a user visits your web pages. 
- It can process your SCSS code into the regular CSS, which browsers can understand. 
- It can build source maps of the bundle's building blocks  
- It can produce various kinds of files based on rules and templates. This includes HTML files, among others. 

Another significant characteristic of webpack is that it helps developers create modern web apps. It helps you achieve this using two modes: production mode or development mode.

In **development mode**, webpack bundles your files and optimizes your bundles for updates - so that any updates to any of the files in your locally developed app are quickly re-bundled. It also builds source maps so you can inspect the original file included in the bundled code.

In **production mode**, webpack bundles your files so that they are optimized for speed. This means the files are minified and organized to take up the least amount of memory. So, they are optimized for speed because these bundles are fast to download when a user visits the website online.

Once all the source files of your app have been bundled into a single bundle file, then that single bundle file gets served to a visitor browsing the live version of your app online, and the entire app’s contents get served at once.

This works great for smaller apps, but if you have a more extensive app, this approach is likely to affect your site’s speed. The longer it takes for a web app to load, the more likely the visitor will leave and move on to another unrelated website. There are several ways to tackle this issue of a large bundle.

One such approach is **code-splitting**, a practice where a module bundler like webpack splits the single bundle file into multiple bundles, which are then loaded on an as-needed basis. With the help of code-splitting, you can lazy load only the parts that the visitor to the app needs to have at any given time. This approach significantly reduces the download times and allows React-powered apps to get much better speeds. 

There are other ways to tackle these problems. An example of a viable alternative is SSR (Server-side rendering). With SSR, React components are rendered to HTML on the server, and the visitor downloads the finished HTML code. An alternative to SSR is client-side rendering, which downloads the index.html file and then lets React inject its own code into a dedicated HTML element (the root element in create-react-app). In this course, you’ve only worked with client-side rendering. Sometimes, you can combine client-side rendering and server-side rendering. This approach results in what’s referred to as isomorphic apps.

### Media packages

You’ll learn how to install the reactjs-media npm package: https://www.npmjs.com/package/react-player

To install this package you'll need to use the following command in the terminal:
```sh
npm install react-player
```
There are a few ways that you can import and use the installed package. For example, to get the entire package's functionality, use the following import:
```js
import ReactPlayer from "react-player";
```
If you are, for example, only planning to use videos from a site like YouTube, to reduce bundle size, you can use the following import:
```js
import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};
const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  );
};
export default App;
```
