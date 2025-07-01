## Lesson 1: introduction
route: Noun: a way or course taken in getting from a starting point to a destination.
route: Verb: send or direct along a specified course.

Asynchronous: Adjective: (of two or more objects or events) not existing or happening at the same time.
Asynchronous: Adjective: COMPUTING, TELECOMMUNICATIONS of or requiring a form of computer control timing  
protocol in which a specific operation begins upon receipt (receiving) of an indication (signal) that the  
preceding (previous) operation has been completed. 
___

by the end you will be able to :
- Set up a Node and Express environment to develop a web application on your local machine
- Set up a server and route data through a web app
- Integrate an external API into a web app and data routes
- Use HTTP POST & GET requests to create persistent data in your app
- Use the JavaScript Fetch API to update the UI based on HTML input forms and external API data  
___
server: receives requests => precesses them => and turn a response 
routes: are used to handel these requests 
the two most common of requests are (GET-POST)
GET: which gets data , POST: which sends data securely
___
## Lesson 2: Node & Express Environment
**Using Node**  
One of the most useful features of Node is that it comes pre-installed with a standard package manager called **NPM**.  
NPM started as an easier way to download and manage dependencies of Node.js packages, but now it is also used as a  
tool in front-end JavaScript as well.  

A package in Node.js contains all the files you need for a module. **Modules** are JavaScript libraries you can include 
in your project. There are hundreds of thousands of Node.js packages and NPM gives you easy access to all of them!  
For the purposes of this course we will make heavy use of the Node package called **Express**, as well as packages  
called **CORS** which allows for communication across the web, and **Body-Parser** (which is considered in the category 
of Middleware) which will allow us to parse the data we eventually will be passing through routes on our server.

The following are true about Node and NPM. Check all that apply: 

- Node allows developers to write server-side code
- NPM is a package manager for Node that allows for easy inclusion of dependencies in a project
- To include a Node package already installed via the terminal, the require() function is used

First we include express in our project and then we instantiate an instance of the app we are going to build in a  
file called server.js. Once we have created an instance of our app using Express, we can connect the other packages  
we have installed on the command line to our app in our code with the .use() method. Express version 4 and above  
require extra middle-ware layer to handle a POST request. This middle-ware is called as bodyParser. This used to be  
an internal part of Express framework, but now you have to install it separately. Below is an example of how the  
body-parser and cors packages discussed earlier could be connected to the app instance.

The following is features associated with Express:  
- Express is used to setup a server environment to create a webapp locally
- Express can connect middleware such as a data parser to a web app.
- Express allows you to use HTTP routes and requests with easy handlers.

local server : receive requests => process them => return a response
```js
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
```
**What's an arrow function?**
Arrow functions are a shorter, more efficient way to write functions.

Here's another example of a regular function and then we'll write it as an arrow function:

*Regular Function*
```js
function addition(number){ return 4 + number }
// addition(4);  
```

*Arrow Function*
```js
const addition = number => 4 + number
// addition(4);
```

As you can see, there is less need for parenthesis and return statements, allowing the syntax to be much more compact.  
Both are acceptable ways of writing functions, and best practice would be for you to be consistent in how you write  
your code. Even if you choose not to write your code with arrow functions, you should still be aware of how they are written.
Curly brackets aren’t required if only one expression is present, and parentheses are optional if there is only one  
parameter.  

**Steps to creating a local server**  
Set your variables
In this example, we set our variable to port 8000.
```js
const port = 8000;
```
Utilize (use) the .listen() method
Set your variable named server, and pass the listen method with two arguments port and listening.
```js
const server = app.listen(port, listening);
```
The port argument refers to the port variable we set above. The listening argument refers to a callback function we create.

**The listening function**  
This function will run when we execute the listen method to let you know that the server is running and on which  
port by logging messages to the console.
```js
function listening(){
     console.log("server running"); 
     console.log(`running on localhost: {$port}`);
}
```
Glossary : an alphabetical list of terms or words found in or relating to this lesson  
Below is the summary of all the keywords in this lesson:  

- Server-side: It refers to operations performed by the server in a network. In web development, we used the Server-side  
scripting technique to employ scripts on a web server that produces a response for each user's request.
- Client-side: It refers to operations performed at the client or user's end.
- Package: It is a file or directory defined by a package.json. The npm registry contains many packages which are  
node modules or include node modules.
- Module: Any file or directory in the node_modules directory that can be loaded by the Node.js require() function  
is known as a module.
- Arrow function: An arrow function is a compact alternative to a traditional function expression.
___
## Lesson 3: HTTP Requests & Routes  

server: receives requests => precesses them => and turn a response  
routes: are used to handel these requests  
the two most common of requests are (GET-POST)  
GET: which gets data , POST: which sends data securely  
Express provides methods that define routing and these methods are correspond directly to HTTP methods  

Example of basic express get route

```js 
const express = require("express");
const app = express();
// app.get is an express method to handle the HTTP GET request
// take two arguments first "/" which sets it to root
// the second argument is function has also two arguments which are request and response
// respond with "hello world" when a GET request is made to the homepage
app.get("/", fuction(req, res) {
     res,send("hello world");
});
// or 
app.get('/all', (request, response)=> {
     response.send(projectData);
});
```
app.get() is used to make a GET request, the first parameter is the particular URL -- in this case our project home  
page, and a callback function to execute. Inside the callback function a response is sent using .send(), and in this  
case the response is a string that says 'hello world'. The real life execution of this code would mean that whenever  
the project home URL is visited in the browser, there will be a GET request made to the server, and the response will  
be shown in the browser, so the words 'hello world' would appear on the screen.

**Request and Response Parameters**  
The req parameter signifies the "request" from the client to the server. The res parameter signifies the "response"  
from the server to the client.
___
*More Powerful GET Requests*
Hello world is all well and good, but suppose we wanted to make a GET request for some more useful data. GET requests  
can return all kinds of data, for example, imagine we wanted a JavaScript object to hold user data for us.

At the top of the demo code we just looked at, we could create an empty JavaScript object with the code  
const appData  = {}. The variable appData now acts as the endpoint for all our app data. Later we will learn how to  
POST data to the app endpoint, but first let's add the line of code that will return our JavaScript object when the  
GET request is made.
```js
var express = require('express')
var app = express()
// Create JS object
const appData = {}
// Respond with JS object when a GET request is made to the homepage
app.get('/all', function (req, res) {
  res.send(appData)
})
```
In this example, we created a new route named '/all', so that the route 'localhost:3000/all' will now trigger the  
GET request, which will return the JavaScript object as laid out in the server code above.

Notice, the callback function of the GET request takes two parameters, arbitrarily named req and res in this example.  
Every GET request produces a request, which is the data provided by the GET request, and a response, which is the data  
returned to the GET request.  

**Routes: POST Requests**  
One way to collect and store user data so that you can access it later is through making an HTTP POST request.  
Analogous to the .get() Express method, there is also a .post() method to handle HTTP POST requests. An HTTP POST  
request sends data to the project's endpoint, where it is stored and can be accessed through a GET request, which we  
covered in the last lesson. Here is what a simple POST request could look like using the Express method .post():
```js
// POST method route
app.post('/', function (req, res) {
  res.send('POST received')
})
```
First, Create an array to hold data:
```js
const data = []
```
Then, create post() with a url path and a callback function:
```js
app.post('/addMovie', addMovie )
```
In the callback function, add the data received from request.body. This is the key piece of information we are  
interested in from that long stretch of data we saw previously that the request (req) argument returns.
```js
function addMovie (req, res){
   console.log(req.body)
   data.push(req.body)
}
```
the following are true about Express Routes and HTTP Requests

Express routes are setup in the server code

Express provides handlers that directly correspond to HTTP requests, such as GET and POST.


GET and POST requests are used to retrieve and save data between APIs and servers.

**Client Side, Server Side**
server: set up in the beggining to handle anything outside what browsers do,  
ex: is to save data produced while someone's within the app
client: represents all your code that the browser executes and all the code that the user will see the end of product

Let's focus in on the actual POST request, which is an object passed as the second parameter to fetch(). The First  
parameter is the URL we want to make the POST request to.
```js
const postData = async(url = '', data = {}) => {
        console.log(data);
        const response = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
```
The credentials ( a qualification, achievement, personal quality, or aspect of a person's backgroundand ) and headers  
are pretty boilerplate(smooth), but necessary for a successful POST request. The most important  
thing to notice is that Content-Type is set to json because we will be handling our data with JSON, for the most part.  

Now we get to the juicy parts: the method is set to POST because we are accessing the POST route we setup in server.js.  
If we wanted to make a GET request from the client side, the method would be GET. The body of the request is the part  
we are most interested in because this is how we will access the data on the server side. When sending data to a web  
server, the data has to be a string. We can convert a JavaScript object into a string using the JavaScript method  
JSON.stringify(), which turns JavaScript objects and JSON data into a string for our server to receive the information.  
In this example, we are turning the JavaScript object passed in the data parameter into a string.  

Back on the server side code we should now be able to receive the data answer:42. Remember in the last example, we  
attached our data to the body of our POST request, so to receive that data and make it actionable we can use request.body.

Here is an example where we set a variable named data to hold the value of request.body, and then print data to see what we received.
```js
app.post('/add', function (request, response) {
    let data = request.body;
    console.log(data);
});
```
The output of this would display in ther terminal: {answer:42}

But we don't just want to see the data we received, to complete our POST request we must assign the data we received  
to our project endpoint, the JS object in our server code named projectData. We can simply make a new entry in our  
JS object using the syntax:

projectData["x"] = y  

This code would create a new entry in our JS object API endpoint where the value of a string "x" is y. So if the data  
received from the POST request was {intelligence:100}, we could create a new entry in our endpoint with the code:
```js
let data = request.body;  
projectData["intelligence"]= data.intelligence;
```
Notice that we manually set the string for the key of the new JS object entry as "intelligence", and then to access  
the property we want to set as its value we use data.intelligence  
```js
const data = [{animal:"elephant", score: 10},{animal:"kangaroo",score:3}]
function makeData(request){}
makeData({body:{animal:"turtle", score:7}})
```
Given the above code, which code block inside the functionmakeData would correctly use the input data to add a new  
JS object to the data array, following the same structure as the entries already present?
```js
let newData = request.body;
let newEntry = {
    animal: newData.animal,
    score: newData.score
    }    
data.push(newEntry)
```
Let's look at another scenario: a client-side POST request written in a function, postData(). Assume postData()  
sent a POST request to your server with the data: {answer:42}. Complete the server-side code to add the request body  
directly to the project endpoint, named projectData.

```js
projectData = [];
app.post('/add', function(request, response){
  // Your code goes here   
}) 
projectData.push(request.body);
```
**Recap**
In this lesson we have learned how server side and client side code work together to route data through a web app.  
We learned how to setup a POST request in the server side code, and then execute a POST request via that path on the  
client side code. We also covered how to structure and add POST request data to a project API endpoint. In the next  
lesson we will learn more about asynchronous functions in JavaScript and you will learn more in depth about some of  
the syntax used in these demos, including async, await, try, and catch .  
**Glossary**  
Below is the summary of all the keywords in this lesson:

HTTP Request: It is an action to be performed on a resource identified by a given request-url. Some HTTP request  
methods are GET, POST, PUT, DELETE, etc.
GET: GET is an HTTP request method used to request data from a specified resource.
POST: POST is an HTTP request method that requests the webserver to accept the data enclosed in the body of the  
request message.
___
## Lesson 4: Asynchronous JavaScript
Asynchronous JavaScript
JavaScript is a single threaded programming language, which means for the most part it will be run as a single  
process in your computer (essentially writing and running it top to bottom).

To be an effective web developer you have to be comfortable writing async code when the situation calls for it.  
For those times JavaScript does have a few async tricks up its sleeve. One of the most common is setTimeout() which  
allows you to break out of the inherent JS behavior of executing code line by line starting at the top. 
```js
/*SYNC REVIEW*/

setTimeout(function(){ console.log('third') }, 3000);

function sync(){
console.log('first')
}

sync()
console.log('second')
```


Async Promises
While there have always been some async work arounds in JS, including setTimeout(), and AJAX, more recently a tool  
called Promises has been introduced natively to JavaScript, and Promises are now the accepted best practice for  
writing asynchronous functions in JavaScript.

You can think of Promises as a special function that either satisfy (resolve) or fail (reject) to execute a task,  
and then executes the corresponding actions, usually another task with the returned data in the case of 'resolved'  
and usually throw an error in the case of 'reject'.

Here is the basic anatomy of a Promise:

```js
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```
There are many methods to handle asynchronous work already, however Promises are the recommended option because they  
give you flexibility, intuitive syntax, and easy error handling. Promises are an amazing development in JavaScript,  
but until ES2017 (ES8) they still required extra boilerplate code, called generators, to run asynchronously. Now  
however, with the addition of native async functions to JavaScript, we can easily apply the async keywords to a  
Promise to execute asynchronous JavaScript code.

To make a fetch() call, or any other methods inside of a function, asynchronous we must use the keywords provided by  
JavaScript. Here is an example of an asynchronous fetch function using JavaScript keywords:
```js
const postData = async ( url = '', data = {})=>{

      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

      try {
        const newData = await response.json();
               return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }
```
  postData('/addMovie', {movie:' the matrix', score: 5})
postData is an async arrow function that is called with parameters on the last line of code. It is asynchronous because  
of the keyword async placed before its parameters.
```js
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),      
    });
...
}
```
Once you mark a function as 'async' you have access to the keywords await, try, and catch.
```js
   try {
        const newData = await response.json();
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
```
The keywords try and catch mirror the Promise functionality of resolving or rejecting to execute a task. In this case.  
if andelseare replaced with the keywordstryandcatch. a condition Theawait` keyword is used in places where the next  
actions requires data from the current action so we want to tell our program to wait until the data has been received  
before continuing with the next steps-- this is the magic of ASYNC JavaScript.

Async Promises
While there have always been some async work arounds in JS, including setTimeout(), and AJAX, more recently a tool called Promises has been introduced natively to JavaScript, and Promises are now the accepted best practice for writing asynchronous functions in JavaScript.

You can think of Promises as a special function that either satisfy (resolve) or fail (reject) to execute a task, and then executes the corresponding actions, usually another task with the returned data in the case of 'resolved' and usually throw an error in the case of 'reject'.

Here is the basic anatomy of a Promise:
Syntax
```js
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```
There are many methods to handle asynchronous work already, however Promises are the recommended option because they give you flexibility, intuitive syntax, and easy error handling. Promises are an amazing development in JavaScript, but until ES2017 (ES8) they still required extra boilerplate code, called generators, to run asynchronously. Now however, with the addition of native async functions to JavaScript, we can easily apply the async keywords to a Promise to execute asynchronous JavaScript code.

To make a fetch() call, or any other methods inside of a function, asynchronous we must use the keywords provided by JavaScript. Here is an example of an asynchronous fetch function using JavaScript keywords:
```js
const postData = async ( url = '', data = {})=>{

      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

      try {
        const newData = await response.json();
               return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }
```
  postData('/addMovie', {movie:' the matrix', score: 5})
postData is an async arrow function that is called with parameters on the last line of code. It is asynchronous because of the keyword async placed before its parameters.
```js
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),      
    });

...
}
```
Once you mark a function as 'async' you have access to the keywords await, try, and catch.
```js
   try {
        const newData = await response.json();
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
```
The keywords try and catch mirror the Promise functionality of resolving or rejecting to execute a task. In this case.  
if andelseare replaced with the keywordstryandcatch. a condition Theawait` keyword is used in places where the next  
actions requires data from the current action so we want to tell our program to wait until the data has been received  
before continuing with the next steps-- this is the magic of ASYNC JavaScript.

QUIZ QUESTION
Which of these amazing ‘facts’ are also true about asynchronous JavaScript






In the next lesson we will learn how to pair JavaScript async fetch functions with Web APIS to unleash the dynamic power  
of front-end programming.

More on Async JS
For a more detailed overview on Promises and why they matter, read the article here.


Here is the client side code that would make a GET request to the animal info API:
```js
let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('animal').value;
getAnimal(baseURL,newAnimal, apiKey)

}
const getAnimal = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
```

  /* WEB API WITH FETCH DEMO--  */
  let baseURL = 'http://api.animalinfo.org/data/?animal='
  let apiKey = '&appid=9f15e45060...';
  const newAnimal =  document.getElementById('animal').value;

  document.getElementById('generate').addEventListener('click', performAction);

  function performAction(e){  
    getAnimalDemo(baseURL,newAnimal, apiKey)
  }


  const getAnimalDemo = async (baseURL, animal, key)=>{
  // 1.
    const res = await fetch(baseURL+animal+key)
  // 2. Call Fake API
    // const res = await fetch('/fakeAnimalData')
    try {

      const data = await res.json();
      console.log(data)
      // 1. We can do something with our returned data here-- like chain promises!

      // 2. 
      // postData('/addAnimal', data)
    }  catch(error) {
      // appropriately handle the error
      console.log("error", error);
    }
  }
As you continue to work with Promises and Async JavaScript it will start to feel more natural to do so. In the  
meantime, you can keep checking back against the keywords and making sure you are using async await try and catch  
to lead you to async dreamland.

QUESTION 1 OF 2
Which of the steps below are associated with working with Web APIs asynchronously?






Async Fetch w/ Web APIs Quiz 2
Create a dynamic URL for a web api with the base url www.api.com/data? where the variable holding the user input  
you are interested in is named holder, and your API key is the number 68.

Enter your response here
'www.api.com/data?='+holder+68



Notice we have set up a helper function to use fetch to make an async GET request for a route that is made to  
simulate the Animal Info Web API we are using as an example.

Inside .then() we could call another async function to make a POST request to store this data in our app. Assuming  
a POST route has been setup on the server side to add data it received to the app endpoint, we could simply call the  
function we have been using to create POST requests on the client side and pass it the POST route url and the data we want to save to our app. The only tricky part (which can also be fun!), is that we need to use the returned data, and data that we retrieve from a DOM element to create the structure for our POST request.

As a reminder, the postData() function takes a URL, and a data object as parameters. To build the data object using  
data received from the previous fetch call we can use dot notation. So we could set our first elements like this:

postData('/addAnimal', {animal:data.animal, fact: data.fact} )

But we also want to include the users favorite thing about the animal, which we can add using the variable name  
which selects the textarea where the users response is. So our final code for creating a POST route to save the  
data to our app would look like this:

postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} )

Then on the server side to actually add the sent data to our app, we would use this code:
```js
app.post('/addAnimal', addAnimal);

function addAnimal(req,res){

  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  console.log(animalData)
}
```

Here is what it would look like to use chained GET and POST requests to retrieve information from our animal Web API,  
and then update DOM elements accordingly:

```HTML

<label for="animal">Enter the name of your favorite animal</label>
<input id="animal" name="animal">
<textarea id="favorite" placeholder="Enter your favorite thing about your favorite animal" rows="9" cols="50"></textarea>
<button id = "generate">GO</button>
JS
```
```js
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newAnimal =  document.getElementById('animal').value;
  const favFact =  document.getElementById('favorite').value;

  getAnimal('/animalData',)
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
  })
  .then(
    updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}
```
Notice how calling the function to update the UI is the last thing we do -- this is because the update UI function  
depends on data from each of the other functions, so each Promise must be resolved successfully before we can update  
the UI. This demonstrates why native Promises and the Fetch API are such powerful tools for Asynchronous JavaScript.

Which are the three steps to updating the UI of an app dynamically...




Updating UI Elements Quiz 2
Assume you have a div with the id: score. Assume you also have the data object below returned from a fetch()  
call-- what line of code would you write to assign the innerHTML property of <div id=”score”></div> to the value of  
the key returnedScore .

data = {
  name: ‘who cares’,
  returnedScore: 6
}
Enter your response here
And that’s it! Now you have learned how to create an Asynchronous App that uses Web APIs with routes and requests  
using Express! Hooray!

Real-world examples of Asynchronous Javascript
Before asynchronous JavaScript with promises, if you wanted to query a database to retrieve information, such as a  
user's password and login name, you would need to write a long series of callback functions and if anything in your  
code failed, the entire process would stop. For example, if a program tried to access the database to get the user  
password, but it wasn't able to, instead of continuing to attempt to retrieve the login, the program would just stop  
without notice. With Asynchronous promises, the program could report an error for the password, and continue on  
retrieving the login.

In this example, moving the code from regular synchronous JavaScript to asynchronous JavaScript has 3 positive  
effects:

The asynchronous code will be much cleaner and shorter.
If there is an error in one part of the code, it will not block other portions of the code.
Debugging the code will be much easier because you will get much more specific and generally more helpful error  
messages from asynchronous code.
Here's another quick example to illustrate asynchronous JavaScript in the real world. Imagine you were making an  
application that converted international currency. The application would let a user enter a dollar amount in U.S.  
currency and select another country's currency to convert to. Without asynchronous JavaScript, programming this  
application could be a nightmare because there are so many dependent parts, such as the APIs you would need to get  
the conversion rates for every currency, the equations needed to transform the original dollar amount into the new  
currency, and the code to hold everything together. Asynchronous JavaScript can organize this code into discrete  
parts that can fail or succeed on their own without breaking the rest of the program. Additionally, asynchronous  
JavaScript lets you wait until one command is completed before executing the next.

In this example, that means your code can wait until it has received the information from the API about a specific  
currency, before trying to make the calculations of conversion. Without asynchronous JavaScript, a program would  
fail because it would take too long to retrieve the information from the API, and there would be no way to tell the  
program to wait until the previous action was finished before taking on the next command.

From this example, we can add a fourth feature of asynchronous Javascript which is that it allows you to complete  
one line of code, regardless of how long it takes, before moving on to the next line of code.

In Summary
Based on these examples, four features of asynchronous JavaScript in the real world are:

Clean and Concise Syntax
Better error handling
Easier Debugging
Ability to add timing to code