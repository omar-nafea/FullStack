## Why React Testing Library

The first is that your tests need to avoid including implementation details of your components. React is just a tool, and your final users will have no notion that React exists at all. Rather than dealing with instances of rendered React components, your tests should work with actual DOM nodes.

Secondly, the more you test resemble the way your software is used, the more confidence they can give you. Finally, you also want your tests to be maintainable in the long term. As long as you're not changing functionality, any changes in the implementation of the component won't break your tests and slow you and your team down.

### Jest and the React Testing Library

Jest is a JavaScript test runner that lets you access an artificial DOM called JSDOM. While JSDOM is only an approximation of how the browser works, it is often good enough for testing React components. Jest provides a good iteration speed combined with powerful features like mocking modules, so you can have more control over how the code executes. Recall that mocking refers to something made as an imitation, and enables you to replace complex functions from your code with others that are simpler and simulate the same behavior. Mocking features can be used to make sure that your unit testing is standalone. 

The second tool is React Testing Library, which is a set of utilities that let you test React components without relying on their implementation details. React Testing Library has been designed to fulfill all the best practices highlighted before, so that you get a well-configured testing environment out of the box, and are able to focus on the business logic your tests need to run assertions on. 

When you start a new project with Create React app, you already get both Jest and React testing library pre-installed by default. Plus both tools are already pre-configured, and there's an example test file in your root folder called app.test.js. 

```js
import { render, screen }from "@testing-library/react"
```
The first thing I need to do is to import both `render` and `screen` from the React Testing Library. The `render` function is used to render the component you would like to test and perform assertions against. Because querying the entire `document.body` is very common, React Testing Library also exports a `screen` object, which is a reference to that `object`, and has every query prebound to it, meaning that it will automatically ask the whole document when running a search. 

Now, to wrap the test scenario, just provides the global test function, which takes a text description as the first argument, and a function to compose all the steps your test needs to go through as a second argument. 

```js
test("render a link that point to Little Lemon webpage", () => {
    render(<App />)
    const linkElement = screen.getByText("Little Lemon Resturent")
    expext(linkElement).toBeInTheDocument()
})
```
This function does not need to be imported since Jest injects it automatically in all your test files. The first step is to render the app component in the artificial DOM environment. Secondly, I used the screen object to create a query against the document.body. In this case, I am using the `getByText` utility to ask the body tag of the document if it can find an element inside with a string called Little Lemon Restaurant, and store the result of that finding in the link element object. If the search is successful, getByText will return the found element. Otherwise, it will return null.

Finally, to complete the test, I perform an assertion asking whether the link element from the query above is present in the document, meaning whether it's currently visible on the screen. For that, the global expect function is used. This is another utility that Jest incorporates globally without the need for an explicit import. The expect function receives the result of a query and appends the specific matcher. In this example, the matcher refers to an element visible in the whole document. If I run the test, it fails. 
```js
// App.js
function App() {
    return (
        <div className="App">
            <a href="https://littlelemon.com" className="App-link">Little Lemon Resturent</a>
        </div>
    )
}
```

Let's check the output logs to try to understand what has gone wrong. It states that "it was unable to find an element with a text, Little Lemon Restaurant". Interesting. Let's go ahead and check the `app.js` component again. I had made a mistake and typed *orange* instead of *lemon*, something that the test was able to catch. That's exactly where you want to see when a failure occurs. Also, you might have noticed how straightforward it is to write your test assertions. Everything you see in code translates nicely to how a real user would interact with your app and responds with the behavior that you would expect. 