# JavaScript in the browser

## JavaScript modules

#### What modules are in JavaScript and how they work:

JavaScript modules are standalone units of code that you can reuse again and again.
Being standalone means that you can

- add them to your program,
- remove them and
- replace them with other modules

And everything will still work. But before we continue, let's explore what things were like before modules entered the picture.
In all versions of JS, all functions that are defined on the window object are global.
While useful for simple projects, this created some issues
when third party libraries or multiple developers became involved.

#### Describe limitations of javaScript modules.

For example, a global function from one script could override a function from another one using the same variable name, techniques were developed to bypass these issues but they were not without flaws.  
And so for a long time, JavaScript lacked built in natively supported module functionality.

An engineer at Mozilla named Kevin Bangor tried to fix this through a project called Server JS which was later renamed to Common JS. CommonJS is designed to specify how modules should work outside of the browser environment.  
It is mostly used on server side JavaScript namely node.js a downside of CommonJS is that browsers don't understand its syntax.  
That is certain keywords that CommonJS relies on, such as require and module.exports don't work as expected in browsers.

#### How to use simple ES6 modules in a browser.

how we can use ES6 modules in a browser
script type equals module.
I then imported a module called greeting.js.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <script type="module">
      import { informalGreeting } from "./greeting.js";
      informalGreeting("Jane");
    </script>
    <script type="module">
      import { informalGreeting, formalGreeting } from "./greeting.js";
      formalGreeting("John");
      greeting();
    </script>
  </body>
</html>
```

But how do you make it work
Since I'm running this file locally, access to my script is blocked by
a built in browser security feature called  
**`cross origin resource sharing`**  
and I receive an error message under the console tab.  
`Failed to load resource: the server responded with a status of 404 (Not Found)`  
To eliminate this error, I need to run the html file over a server.
I can use a local server for that.

```js
export const informalGreeting = (person) => {
  console.log(`Hello, ${person}`);
};
export const formalGreeting = (person) => {
  console.log(`Good day, ${person}`);
};
const greeting = () => {
  console.log("Howdy!");
};
export default greeting;
```

my greeting.js module is being read in and
consumed by this html document script tag.
In other words, the file script tags have successfully imported the module.

## JavaScript DOM manipulation

The DOM is in the form of
a JavaScript object with
nested objects for different parts of the page.
These objects have nested objects of their own until
the entire HTML file is
mapped out in what looks like a tree structure.
The DOM is the model of the HTML file
saved as a JavaScript object in your browser's memory.
The browser automatically builds
the DOM for every webpage that it downloads.
For example, if you type
a URL into your browser's address bar,
the browser would fetch
the webpage that exists on this domain.
If the browser connects to the server and
it allows the browser to download the page,
it will receive all the HTML code
and save it in its memory.
The browser will then show the downloaded page.
It would also build that webpage's DOM a model
of the HTML document your browser has just downloaded.
you can interact with
the page's DOM to make changes to the webpage.

The entire DOM object is saved inside
the document variable and accessible via the console.
Now let me demonstrate how DOM manipulation works.
Using the document object model
allows us to manipulate live websites.
to add `h2` to local version to a web page

```js
const h2 = document.createElement("h2");
```

What I am doing here is passing
the tag names as a JavaScript string.

You may notice that the webpage on
the left has not been updated with the heading 2.
This is because although,
I now have a h2 element saved in JavaScript's memory,
I still need to attach it to the DOM structure.
Currently, it's not a part of the document object.
Additionally, my h2 element also needs some text.
Without it, even after adding
the h2 element to the document,
there would not be a visible change on
the page because the added h2 element,
although, being a part of the DOM,
would have no text inside.
In other words, it would be blank.
Let's fix these two issues now.
First, I'll make some updates to my h2 element.
I'll add some attributes and
some text using the inner text method.
I can run this on my h2 variable.

```js
h2.innerText = "This is an h2 heading";
```

Next, I want my heading 2 element to have
an ID and a class HTML attribute.
To do this, I need to use the set attribute method.

```js
h2.setAttribute("id", "sub-heading");
h2.setAttribute("class", "secondary");
```

Finally, I'm ready to append my h2 object to the DOM.
I need to run the append child method
on the document body to do this.

```js
document.body.appendChild(h2);
```

## JavaScript interactivity

JavaScript interactivity

The purpose of this reading is to introduce you to a simple explanation of web page manipulation and some examples of it.

Did you know that JavaScript's initial purpose was to provide interactivity in the browser?

In other words, it was the "set of controls" that would allow web developers to control the behavior of the webpages and even the browsers that these webpages worked on.

This is still the case today.

As the web ecosystem developed and the world became ever more digitized, so did the myriad of ways that one can use JavaScript as a web developer to manipulate websites.

Initially, in the late 1990s, there was plain JavaScript that had to be tweaked to suit individual browsers.

Then, by the mid-2000s, the jQuery library came out, with the idea of writing less code, but doing more with it. It "leveled the playing field" as it allowed developers to use a single code-base for various browsers.

This trend continued and many other frameworks such as React, Vue, Angular, D3, and more came along.

Together with npm and Node.js, the JavaScript ecosystem is not slowing down.

Even though it has gone a long way, sometimes it's good to go back to basics. JavaScript is still the king when it comes to making our websites interactive.

Although CSS has developed significantly over the years, it is still JavaScript that allows users to:

- Get their geolocation,
- Interact with maps,
- Play games in the browser,
- Handle all kinds of user-triggered events, regardless of the device,
- Verify form input before sending it to the backend of a webapp,
- and more!

## JavaScript selectors

how to use selectors in
JavaScript to quickly find specific objects in a document.

JavaScript selectors work with the document object which you can access by
typing the keyword `document`.
This returns the webpage stored in the browser's memory known as
the document object model or DOM.

to access paragraph element in html page:

```js
document.querySelector("p");
// return <p>text in it</p>
// this also work for any element
document.querySelector("a");
// this line will get me the first anchor tag in the page
```

There is a similar JavaScript selector that allows me to get all
the matches from a web page.
It's the query selector all method

```js
document.querySelectorAll("p");
// this will get me all the paragraph elements in the page
```

Another useful JavaScript selector is get element by ID which can find
objects in the dawn that match a specified html ID attributes.

For example, let's say we want to find something on a page with the id of `heading`,

```js
document.getElementById("heading");
// output: <h1 id="heading">Example Domain</h1>
```

Next, let's use a similar method that returns an element based on a specified
class name rather than ID.
We can do this by calling `document.getElementsByClassName`.

```js
document.getElementsByClassName("txt");
// output: HTMLCOLLECTION(2) [p.txt, p.txt]
```

it is important to note
that the word element is singular for ID and plural for class name

Additionally, suppose the element you're looking for
cannot be found in that case you will be returned null for IDs.
An empty collection represented by square brackets for class names.

## Event handling

Event listener is function that accept 2 parameters
and this added to an Element in the Dom  
like `body`, `h2`, `p`, `a`, etc..

- the event that you want to listen to
- the function that will be applied when the event happens
  so example:

```js
const target = document.querySelector("body");
function handleClick() {
  console.log("clicked the body");
}
target.addEventListener("click", handleClick);
// the output when I click the body(any where in the page):
// clicked the body
```

Another Example

```js
var h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";

var input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener("change", function () {
  h1.innerText = input.value;
});
```

Another Example

```js
var h1 = document.querySelector("h1");
var arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
function handleClicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
  }
}
h1.addEventListener("click", handleClicks);
```

## Moving data around on the web

The modern web consists of millions and millions of web pages, connected services and databases.

There are websites communicating with other websites, getting data from data feeds and data providers, both paid and free.
All of these data flows must be facilitated with some kind of data format.
Around 2001, Douglas Crockford came up with a data interchange format based on JavaScript objects. The name given to this format was JSON, which is JavaScript Object Notation.

Before JSON, the most common data interchange file format was XML (Extensible Markup Language). However, due to XML's syntax, it required more characters to describe the data that was sent. Also, since it was a specific stand-alone language, it wasn't as easily inter-operable with JavaScript.

Thus, the two major reasons for the JSON format becoming the dominant data interchange format that it is today is two-fold:

- First, it's very lightweight, with syntax very similar to "a stringified JavaScript object". You'll learn more about the specifics of this later.
- Second, it's easier to handle in JavaScript code, since, JSON, after all, is just JavaScript.

It is often said that JSON is a subset of JavaScript, meaning it adheres to syntax rules of the JavaScript language, but it's even more strict in how proper JSON code should be formatted. In other words, all JSON code is JavaScript, but not all JavaScript code is JSON.

## JavaScript Object Notation - JSON

Besides being a data interchange format, JSON is also a file format. It's not uncommon to access some third-party data from a third-party website into our own code in the form of a json file.

For example, if you had a website with the data on stock price movements, you might want to get the data of the current stock prices from a data vendor. They might offer their data service by giving you access to the file named, say stockPrices.json, that you could access from their servers.

Once you'd downloaded that stringified JSON data into your own code, you could then convert that data to a plain JavaScript object.

That would mean that you could use your web application's code to "dig into" the third-party data-converted-to-a-JavaScript-object, so as to obtain specific information based on a given set of criteria.

For example, if the stringified JSON data was converted to an object that had the following structure:

```js
const currencyInfo = {
    [
        USD: {
            // ...
        },
        GBP: {
            // ...
        },
        EUR: {
            // ...
        }
    ]
}
```

You could then access only the data on the USD property, if that's what was needed by you app at a given point in time.

Hopefully, with this explanation, you understand, at a high level, how and why you might want to use JSON in your own code.
It's all about getting stringified JSON data from a server, converting ("parsing") that data into JS objects in your own code, working with the converted data in your own code, and perhaps even stringifying the result into JSON, so that this data is then ready to, for example, be sent back to a server after your code has processed it locally.
JSON is just a string - but there are rules that it must follow

JSON is a string, but it must be a properly-formatted string. In other words, it must adhere to some rules.

If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.

JSON can work with some primitives and some complex data types, as described below.

Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

- primitive values: strings, numbers, bolleans, null
- complex values: objects and arrays (no functions!)
- Objects have double-quoted strings for all keys
- Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code
- String properties must be surrounded in double quotes. For example:  
  `"fruits",`  
  `"vegetables"`
- Number properties are represented using the regular JavaScript number syntax; e.g  
  `5,`  
  `10,`  
  `1.2`
- Boolean properties are represented using the regular JavaScript boolean syntax, that is:
  `true`  
  and  
  `false`
- Null as a property is the same as in regular JavaScript; it's just a  
   `null`

You can use object literals and array literals, as long as you follow the above rules

What happens if you try to stringify a data type which is not accepted in JSON syntax?

For example, what if you try to stringify a function? **The operation will silently fail.**

If you try to stringify some other data types, such as a BigInt number, say 123n, you'd get the following error: `Uncaught TypeError: Do not know how to serialize a BigInt`.
Some examples of JSON strings

Finally, here is an example of a stringified JSON object, with a single key-value pair:

`{"color":"red"}`

Here's a bit more complex JSON object:

`{"color":"red", "nestedObject": { "color": "blue" } }`

The above JSON object encodes two properties:

- "color":"red"
- "nestedObject": { "color": "blue" }

It's also possible to have a JSON string encoding just an array:

`["one", "two", "three"]`

The above JSON string encodes an array holding three items, three values of the string data type. Obviously, just like objects, arrays can nest other simple or complex data structures.

For example:

`[{ "color": "blue" }, {"color: "red"}]`

In the above example, the JSON string encodes an array which holds two objects, where each object consists of a single key-value pair, where both values are strings.

To work with JSON, it is common to convert it back to a JavaScript object to
You need to use the global built in JSON object and its parse method

```js
const jsonStr = '{"greeting":"hello"}';
const aPlainObj = JSON.parse(jsonStr);
// output: >{greeting: 'hello'}
```

since JSON string is stored in a regular JavaScript object.
I can manipulate it just like any other JavaScript object.
By reassigning the value of the greeting property,

```js
aPlainObj.greeting = "hi";
// output: >{greeting: 'hi'}
```

You can also go the other way and convert a regular object to a JSON string.
Using the string of my method of the JSON object.

```js
const data = {
  firstName: "Omar",
  lastName: "Nafea",
  greeting: "Slam",
};

JSON.stringify(data);
// output: { "firstName":"Omar", "lastName":"Nafea", "greeting":"Slam"}
```
