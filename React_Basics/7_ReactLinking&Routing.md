# Linking and Routing

there are common design or patterns of design when it comes to web page designing these are fixed components like: Navigation bar, Side bar, Footer

If you compare the navigation of websites built with React against HTML and CSS, you will likely find no visual difference. While visually everything looks the same, in the code, React navigation works a bit differently. This is because the entire app is loaded inside a single div. You're not actually visiting different pages like you would with hyperlinks and HTML files.  
```js
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
```html
<div id="root">
    <!-- This element's contents will be replaced with 
     your components -->
</div>
```
Instead, the content of that single div is controlled by React, and it's based on changes to the virtual DOM. It either updates the existing view or loads a completely new view, giving the user the impression of visiting a completely different URL. 


Recall that with HTML, developers can use a list to make a navigation menu. 
```html
<ul>
    <li> <a href="index.html"/>Home</li>
    <li> <a href="about.html"/>About</li>
    <li> <a href="contact.html"/>Contact</li>
</ul>
```
To help illustrate how React's navigation works, think about how the buttons on the inside of an elevator work. Pressing the button will take you to the selected floor. Similarly, each link on a website takes you to a different page.  

![](../Pics/ReactNavigation.gif)  

If however, you're in a React elevator, It says if the elevator never moves. Instead, when you press a button in this React's elevator, the entire construction of that given flaw is injected into a single floor of this impossible building.  
That means that React by itself only takes care of the visuals of a single page but has no notion about navigaiton between pages.  
However, this functionality is not available to developers from the React's library itself. In order to achieve this illusion of a multi-page website, you need to add the React router library to your React projects. Once again, you add this using the `import` statements
```js
import { BrowserRouter } from 'react-router-dom'
```
## Navigation

In this reading, you’ll learn about the differences between traditional web pages and React-powered web pages (SPAs – single page applications).

Once you understand the difference between these two ways of building web pages, you will be able to understand the necessary difference between how navigation works in traditional web apps versus how it works in modern SPA websites.

##### Before Single-Page Apps

Before the advent of modern JavaScript frameworks, most websites were implemented as multi-page applications. That is, when a user clicks on a link, the browser navigates to a new webpage, sends a request to the web server; this then responds with the full webpage and the new page is displayed in the browser.

This can make your application resource intensive to the Web Server. CPU time is spent rendering dynamic pages and network bandwidth is used sending entire webpages back for every request. If your website is complex, it may appear slow to your users, even slower if they have a slow or limited internet connection. To solve this problem, many web developers develop their web applications as Single Page Applications.

##### Single-Page Apps

You’re using many Single Page Applications every day. Think of your favorite social network, or online email provider, or the map application you use to find local businesses. Their excellent user experiences are driven by Single Page Applications.

A Single Page Application allows the user to interact with the website without downloading entire new webpages. Instead, it rewrites the current webpage as the user interacts with it. The outcome is that the application will feel faster and more responsive to the user.

### How Does a Single-Page App Work?

When the user navigates to the web application in the browser, the Web Server will return the necessary resources to run the application. There are two approaches to serving code and resources in Single Page Applications.

- When the browser requests the application, return and load all necessary HTML, CSS and JavaScript immediately. This is known as **bundling**. 
- When the browser requests the application, return only the minimum HTML, CSS and JavaScript needed to load the application. Additional resources are downloaded as required by the application, for example, when a user navigates to a specific section of the application. This is known as **lazy loading** or **code splitting**. 

Both approaches are valid and are used depending on the size, complexity and bandwidth requirements of the application. If your application is complex and has a lot of resources, your bundles will grow quite large and take a long time to download – possibly ending up slower than a traditional web application!  
Once the application is loaded, all logic and changes are applied to the current webpage.  
| SSR | SPA |
|:---:|:---:|
|![](../Pics/traditionalWebPage.jpeg) |![](../Pics/SPApageLifecycle.jpeg)| 

### An Example of a Single-Page App  

Imagine there is a webpage that has a Label and a Button. It will display a random movie name when the button is clicked.

- In a traditional website, when the button is clicked, the browser will send a POST request to the web server. The web server will return a new web page containing the button and movie name, and the web browser renders the new page.
- In a Single Page Application, when the button is clicked, the browser will send a POST request to a web server. The web server will return a **JSON object**. The application reads the object and updates the Label with the movie name.

But what if we need to have multiple pages with different layouts in our application?

### Practical Differences Between Single-Page Apps and Multi-Page Apps

|Single Page Application diagram with multiple templates loaded into a single page| Traditional page application with multiple pages to be loaded |
|--|--| 
|![](../Pics/singlePageApplications.jpeg) | ![](../Pics/traditionalPageApplication.jpeg) | 
You have a web application that has a navigation bar on top and two pages. One page shows the latest news, and the other shows the current user’s profile page. The navigation bar contains a link for each page.

- In a traditional website, when the user clicks the Profile link, the web browser sends the request to the web server. The web server generates the HTML page and sends it back to the web browser. The web browser then renders the new web page.

- In a Single Page Application, different pages are broken into templates (or views). Each view will have HTML code containing variables that can be updated by the application. The web browser sends the request to the web server, and the web server sends back a JSON object. The web browser then updates the web page by inserting the template with the variables replaced by the values in the JSON object.

### Anchor Tag Elements in Single-Page Elements

A single-page application can’t have regular anchor tag elements as a traditional web app can. 

The reason for this is that the default behavior of an anchor tag is to load another HTML file from a server and refresh the page. This page refresh is not possible in a SPA that's powered by a library such as React because a total page refresh is not the way that a SPA works.

Instead, a SPA comes with its own special implementation of anchor tags and links, which only give an illusion of loading different pages to the end user.   
They simply load different components into a single element of the real DOM into which the virtual DOM tree gets mounted and updated.
### Navbar Links

```bash
npm i react-router-dom
```
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
```
```js
// App.js
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import {
    Routes,
    Route,
    Link
} from 'react-router-dom'

function App() {
    return ( 
        <div>
            <nav>
                <Link to="/">HomePage</Link>
                <Link to="/about-me">AboutMe</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-me" element={<AboutMe />} />
           </Routes>
        </div>
    )
}
export default App
```

## Conditional rendering

### Applying conditional rendering

State is all the data your app is currently working with. With this in mind, you can decide to conditionally render specific components in your app, based on whether specific state data has specific values. To make this possible, React works with the readily available JavaScript syntax and concepts.

Consider a minimalistic productivity app. The app takes the client computer’s current datetime, and based on the data, displays one of two messages on the screen:

- For workdays, the message is: “Get it done” 
- For weekends, the message is: “Get some rest” 

There are a few ways you can achieve this in React.

One approach would include setting a component for each of the possible messages, which means you’d have two components. Let’s name them Workdays and Weekends.

Then, you’d have a `CurrentMessage` component, which would render the appropriate component based on the value returned from the `getDay()` function call. Here’s a simplified `CurrentMessage` component:
```js
function CurrentMessage() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}
```
Instead of calculating it directly, you could use some historical data instead, and perhaps get that data from a user via an input, from a parent component.
```js
function CurrentMessage(props) {
    if (props.day >= 1 && props.day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}
```
```js
function CurrentImage() {    
    const time = new Date().getHours();    
    return (  
        {hour >= 6 && hour <= 18    
            ? <Daytime />  
              : <Nighttime />  
          }  
)}
```
### Conditional rendering using the logical AND operator

Another interesting approach in conditional rendering is the use of the logical AND operator `&&`. In the following component, here's how the `&&` operator is used to achieve conditional rendering:
```js
function LogicalAndExample() {
    const val = prompt('Anything but a 0')
    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {val &&
                <h2>Yay, no 0 was typed in!</h2>
            }
        </div>
    )
}
```
There are a few things to unpack here, so here is the explanation of the `LogicalAndExample` component, top to bottom:

- First, you ask the user to type into the prompt, specifying that you require anything other than a zero character; and you save the input into the val value.
- In the return statement, an h1 heading is wrapped inside a div element, and then curly braces are used to include a JSX expression. Inside this JSX expression is a single `&&` operator, which is surrounded by some code both on its left and on its right sides; on the left side, the `val` value is provided, and on the right, a piece of JSX is provided. 

To understand what will be output on screen, consider the following example in standard JavaScript:
```js
true && console.log('This will show')
```
If you ran this command in the browser’s console, the text ‘This will show’ will be output. On the flip side, consider the following example:
```js
false && console.log('This will never show')
```
If you ran this command, the output will just be the boolean value of false.  
**In other words, if a prop gets evaluated to true, using the && operator, you can render whatever JSX elements you want to the right of the && operator**

### Conditional components

Have you ever visited a website that required a user account? To log in you click on a Log in button and once you’ve logged in, the Log in button changes to a Log out button. This is often done using something called conditional rendering.

Using these statements allows you to change the behaviour of code based on certain conditions being met. For example, you can set a variable to a different value based on the result of a condition check.
```js
let name; 
let newUser = true; 
if (Math.random() > 0.5 && newUser) { 
	name = "Mike" 
} else { 
	name = "Susan" 
} 
```
Conditional rendering is built on the same principle. By using conditions, you can return different child components. This is often done using the props that are passed into the parent component, but can also be done based on component state.

Let’s take a look at a simple example. Let’s say you have two child components called `LoginButton` and `LogoutButton`; each displaying their corresponding button.

In the parent component, named `LogInOutButton`, you can check the props passed into the parent component and return a different child component based on the value of the props.

In this example, the props contains a property named isLoggedIn. When this is set to true, the LogoutButton component is returned. Otherwise, the LoginButton component is returned.
```js
function LogInOutButton(props) {
const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
  return <LoginButton />;
}
```

Then when the LogInOutButton parent component is used, the prop can be passed in.
```js
<LogInOutButton isLoggedIn={false} />
```

This is a simple example showing how you can change what is displayed based on a condition check. You will use this often when developing React applications.

The logical AND operator is used to conditionally render some JSX elements based on whether a value to the LEFT of the AND operator evaluates to true.

```js
function LogInOutButton(props) {
return props.isLoggedIn ? <LogoutButton > : <LoginButton/>
```