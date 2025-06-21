# Testing in JavaScript with Jest

## Node and NPM

JavaScript's home is in the browser. Essentially, it was a frontEnd only language. Then in 2009, a developer named Ryan Dao decided to **use Google's JavaScript V8 engine and make it work on the server.**

JavaScript became a language for both front-end and back-end. Node.js is a separate standalone environment. This means that Node.js can run in multiple settings. For example,

- on the command line,
- in a desktop application,
- on the back end of a web app.

Before the introduction of Node.js, developers had to build backends in other technologies and languages such as PHP, Python, C-sharp, Ruby, and Java.

After Node.js became available, it was possible to use JavaScript on the backend or on the server-side.

```js
var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hello World!");
  })
  .listen(8080);
```

Node.js comes with a package manager called npm, which stands for Node Package Manager. The package manager allows you to use a large number of libraries and frameworks as Node.js modules. An npm module is a standalone piece of code that has been published on the npm website.

#### why you need to run npm and node commands.

Because you use the node command to run a JavaScript file, or to directly execute JavaScript code.

You use the npm command to install any node module from the npm repository. For example, you could install the module named lowercase. Once installed, you can import this module and use its functions to transform strings to lowercase in your code.

```js
import { lowerCase, localeLowerCase } from "lower-case";
lowerCase("Word"); // 'word'
```

When you want to start a new project, first, open a folder on your machine where you want to place your project files, and type:

```bash
npm init
```

These projects can be different shapes and sizes, but they all have at least one thing in common, the `package.json` file that gets created after you run the `npm init` command. **The `package.json` file holds all the instructions on all the node modules that are pulled from the npm repository of open source modules.**

```json
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "expressjs/express",
    "mocha": "mochajs/mocha#4727d357ea",
    "module": "user/repo#feature/branch"
  }
}
```
Examples of libraries you can install include `React`, `Webpack`, `Bootstrap`, and `Angular Core`.  
```json
{
  "name": "figure-context",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "6.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
The `package.json` file updates when you install a new package. **It keeps track of everything you need to have to install in your project.** This makes such projects easily portable.

For example, if you have built a project with a specific number of different node packages, they're all listed inside the `package.json` file. All you need to do is share this file with, for example, your co-workers. They can have the exact same setup on their machines simply by running the command npm install.

**`npm install` install command reads the contents of the `package.json` and installs all the necessary packages, also referred to as dependencies.**

## What is testing?

##### why we're just write comments

Adding comments is a step in the right direction, but it has downsides. It allows me to write anything I like, so there are no limits on ambiguity. Also, the common doesn't need to follow any set structure.

##### Why I would use testing

The test syntax itself becomes expectation documenting. When I write tests, those tests are a better alternative to comments in my source code because they specify what expectations my source code is trying to satisfy.

Tests are also callable, meaning I can execute tests to check if expectations are met. To write an expectation statement in JEST (javascript testing library):

```JS
function concatStrings(strA, strB){
    return strA + strB;
}
expect(concatStrings("abc", "def")).toBe("abcdef");
```

I can use the function that has the name `expect`. I then pass the call to the `concatStrings` function with the specific arguments. Then I add `toBe` function, which is another testing function, and I pass it the value of what I'm expecting this code to produce.

I'm essentially stating that I expect the calling `concatStrings` with "abc" and "def", will return the value "abcdef".

Testing in JavaScript lets me verify that the function is behaving in the way I intended. Testing code in this way ensures three things.

- Conciseness as it's straightforward and to the point, since there are only two function calls to explain what is the expected result.
- Clarity, because you know exactly what arguments you're providing,
- repeatability, as you can run it again and again with the same arguments each time.
Now, I could run multiple function calls using this syntax. For example:

```js
function concatStrings(strA, strB) {
  return strA + strB;
}
expect(concatStrings("123", "456")).toBe("123456");
```
And in each instance, the expectations will be correct, and the code will behave as expected. It's still possible from my code to fail an expectation. For example, if I run the expect method and pass it an invocation of the `concatStrings` function with numbers `1` and `2` as arguments, my expectation of `12` being the results will `fail`.

```js
expect(concatStrings("1", "2")).toBe("12");
```
This is because when I use the `+` operator with two values of the number type, it performs the mathematical operation of addition, instead of joining the two numbers together to form the number `12`, like it would form `abcdef`. If I gave it the arguments of "abc" and "def".

When tests fail, you see that they are red <span style="color: red">✗</span>, and when they pass, you see that they are green <span style="color: green">✔</span> If a test fails, then it's a sign that I need to write the code in such a way that it passes its test. Once my test passes, I need to improve both the app's code and the test code, but without changing the behavior of either. This is known as refactoring.

### Refactoring

Refactoring is the process in which I write my feature code so that it runs more efficiently or that it's easier to read and thus easier to understand for other programmers on the team. This is done without affecting the results that the code produces. 

The only obvious change should be perhaps the test itself taking less time to run because I've optimized my source code. You want to always write your code in a way that meets all expectations.   
It's most likely that some of your tests will be red and some of them will be green. Red tests are a guide as to how you need to improve your code to cater for unmet expectations.   
As you continue to refine your code in response to red tests, it becomes a cyclical activity. This is often described as the red-green-refactor cycle. 

This cycle is the basis of the test-driven development or TDD approach to programming.

### TDD approach

- First, you write a failing test, then you write your source code so that the previously failing test now passes.
- Finally, you optimize your source code without changing its results.

## Types of testing

There are many aspects of software testing, but for now let's think of it as the act of confirming that it works as outlined in the software's requirements. 

#### There are three types of testing 

##### End to End (e2e)

e2e testing tries to imitate how a user might interact with your app. you're testing the entire finished software product from the perspective of the end user. e2e test are the slowest and take the most time to set up and run.

##### Integration testing 

Integration testing is testing how parts of your system interact with other parts of your system. In other words, it's testing how separate parts of your apps work together. integration tests are faster and cheaper than e2e tests but not as fast or as cheap as unit testing. 

##### Unit testing. 

Unit testing is the process of testing the smallest units of your source code in isolation. A good example of this is "functions". A unit is the smallest piece of code that you can test separately from the rest of the app.   

Unit tests are self contained. They're meant to test code in isolation, preferably separate from the rest of your app. This makes unit tests fast to run and easy to write. 

## Introduction to Jest

JavaScript doesn't have built-in objects or methods that would allow for tests to be written. Therefore, many different libraries have been built to tackle the issue of testing. 

Jest is a JavaScript testing framework. It's often used for testing code like React Besides plain JavaScript and React code just allows you to test Babel, TypeScript, Node, Angular, Vue, and various other frameworks.

##### Code Coverage

Jest also supports code coverage. Code coverage is a measure of what percentage of my code is covered by tests. If I say that I have an 80 percent code coverage, that means that only one-fifth of my entire code base is not covered by tests. But even 100 percent code coverage doesn't mean that you have tested for every conceivable expectation.  

It just means that there are some expectations tested for each line of my code. Still, code coverage is a handy tool to gauge (measure) the amount of my code base that's included in tests. The higher the code coverage, the lower the chance of having unidentified bugs.   

##### Mocking

Mocking allows you to separate the code that you are testing from it's related dependencies.   
In other words, you can use the mocking features to make sure that your unit testing is stand-alone. For example, you can test the front end functionality of your web app by mocking the data as if it came back from a server when in fact it came from the client.  

Mocking is especially helpful because very often web applications are built by teams of developers. Some developers work on the backend of a feature and others work on the front end, This could result in bottlenecks. With mocking you can avoid this bottleneck. Mocks, allow you to pretend that the users are already there. The needed data comes from the mock rather than from the backend.   

In certain cases, developers can use mocking to ship features faster. Some libraries, such as sign-on, focus specifically on mocking. But the great thing about Jest is that you use it's mock functions without any additional installations.  

In Jest you use mocking by employing Jest mock functions. It's also easy to test asynchronous code in Jest. There are no difficult setups and tests are relatively easy to code even for newcomers to the framework. 

##### Snapshot Testing

Finally, Jest allows you to perform snapshot testing. Snapshot testing is used by developers to verify that there are no regressions in the DOM of our apps after some changes to the code base are made. 

## Writing tests with Jest

##### how to install jest 

I'll install Jest using only NPM, since jest needs NodeJS to run and NPM as a way to install Node modules. First type `npm init` to add a `package.json` file Now I have my `package.json` file. In other words, **I have a way to keep track of node modules that this project depends on**. Since I want to use the jest testing library, I'll need to install it locally, which means installing it for this project.
```bash
npm install --save-dev jest
```
It will add Jest as a devDependency inside `package.json`. the `package.json` file will be updated with the addition of the jest testing library. in `package.json` I need to assign jest to test 
```json
"script":{
    "test": "jest"
}
```
Now when I run the command `npm run test`, it will run the Jest command in this folder. to create a file test `addFive.test.js` and test in it would be:
```js
const {default: TestRunner} = require('jest-runner')
const addFive = require('./addFive')
```
To check, I'll use the test method with a string as a parameter that describes the test. This string will be output in the command line when I run the test along with the words pass or fail, and the function to run when I execute the NPM run test command. The function will check if my expectation is correct.  

```js
test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6)
})
```

## TDD (Test-Driven Development)

Every piece of software is built according to requirements. The purpose of the requirements is to explain, in human language the intricacies (complexities) of what the piece of software does.  
TDD for short is a streamlined process of writing code that will satisfy some requirements. 

A software development teams work consists of the following: 
- receiving requirements which will become a feature of the app that's being developed.  
- Writing a failing test for that to build feature before it gets built. 
- Making this failing test pass by coding that given feature 

In comparison with the traditional development process, that TDD approach might seem somewhat upside down. In TDD
- Receive requirements
- Write failing test
- Write code to make test pass
- Code passes test
- Improve workable code 

To understand how TDD works. Consider the following real life situation. Suppose you have to perform a task, drive your car to work. You leave your house and walk up to your car, only to find out that you don't have your car keys with you. Then you remember you left your car keys in the cabinet and you simply forgot to take them.   

_**What you did there. In this imagined scenario is the opposite of TDD.**_  You first walk to your car and only then did you check if you had your car keys if you did these things using the TDD approach, you would do the following:  

- first. You check or test if you have your keys with you. Your test fails because you don't have them. 
- They're in the cabinet. Then you perform the action of getting your keys from the cabinet.  
- Finally, you check or test if you have your keys this time you have them. So your test now passes.  

What is described here is the essence of TDD, Imagine that you need to write code in a test driven way. Since your coding the TDD way you:  

- first write the test, even before you've written any actual implementation for example:

```js
test('returns true if statusOfKeys exists', function(){
    expect(statusOfKeys).toBeDefined()
})
```
The logic of your test code is expect that the function `statusOfKeys` exists in your source code. It's important to note that one of the rules of TDD is that you should write as little code as possible to make the test pass for this test to pass, it's enough to just declare a function with the name.  

next you receive another requirement which is as follows except a keys variable, which should be set to true and console log the keys variable.   
So the requirement states the `statusOfKeys` function should accept a previously declared keys variable, which should be set to true. The `statusOfKeys` should then console log the value of the keys variable. 

```js
const statusOfKeys = require('./statusOfKeys')
const spyConsoleLog = jest.spyOn(console, 'log')
spyConsoleLog.mockImplementation(keys => keys)
test('returns true if statusOfKeys exists', function(){
    expect(statusOfKeys)toBeDefined()
})
test('test console log inside statusOfKeys', function(){
    statusOfKeys(true)
    expect(console.log).toBeCalled()
    expect(spyConsoleLog.mock.calls[0][0]).toBe(true)
    spyConsoleLog.mockReset()
    spyConsoleLog.mockRestore()
})
```
the code itself would be `statusOfKeys.js`
```js
function statusOfKeys(keys){
    console.log(keys)
}
```
Finally, you examine your function code and realize that the indentation is all wrong. There are also too many unnecessary comments. So you clean up your code and run the test again to confirm that you haven't accidentally made any errors. The test still passes, so everything is okay. That is the TDD approach in a nutshell

- First you read the new requirement.
- Next you write a failing test
- then you update your source code, So it resolves the requirement 
- After that you run a test that passes 
- Finally, you refactor your implementation.  

This process is usually explained in three words. Red, Green. Re-factor,   

- red represents the failing test.
- Green on the other hand, represents the passing test after you make updates to the source code. 
- The re-factor represents the final tweaks to the code that don't change implementation details, which can always be confirmed by running another subsequent test

##### TDD Advantages

- minimizing regressions that is accidental bugs introduced to old code by coding a new requirement
- you also have proof that your new implementation is not breaking other parts of the app.
- You can automate these tests easily and thus keep verifying again and again that the system works as expected.
- You can test your implementations with various inputs and the tests become a specific kind of documentation for the new members of your team. 