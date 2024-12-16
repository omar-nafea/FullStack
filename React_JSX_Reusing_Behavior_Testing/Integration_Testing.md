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

This function does not need to be imported since Jest injects it automatically in all your test files. The first step is to render the app component in the artificial DOM environment. Secondly, I used the `screen` object to create a query against the `document.body`. In this case, I am using the `getByText` utility to ask the body tag of the document if it can find an element inside with a string called `Little Lemon Restaurant`, and store the result of that finding in the `linkElement` object. If the search is successful, `getByText` will return the found element. Otherwise, it will return `null`.
```js
test("render a link that point to Little Lemon webpage", () => {
    render(<App />)
    const linkElement = screen.getByText("Little Lemon Resturent")
    expext(linkElement).toBeInTheDocument()
})
```
Finally, to complete the test, I perform an assertion asking whether the link element from the query above is present in the document, meaning whether it's currently visible on the screen. For that, the global expect function is used. This is another utility that Jest incorporates globally without the need for an explicit import. The expect function receives the result of a query and appends the specific matcher. In this example, the matcher refers to an element visible in the whole document. If I run the test, it fails. 

Let's check the output logs to try to understand what has gone wrong. It states that "it was unable to find an element with a text, Little Lemon Restaurant". Let's go ahead and check the `app.js` component again. I had made a mistake and typed *orange* instead of *lemon*, something that the test was able to catch. That's exactly where you want to see when a failure occurs. Also, you might have noticed how straightforward it is to write your test assertions. Everything you see in code translates nicely to how a real user would interact with your app and responds with the behavior that you would expect. 
```js
// App.js
function App() {
    return (
        <div className="App">
            <a href="https://littlelemon.com" className="App-link">Little orange Resturent</a>
        </div>
    )
}
```

The test next scenario is checking that users are prevented from submitting the form right away if the score is lower than five and there is either no additional feedback or it's too short.

First, I create a new mock function with jest, recall that a mock function is a special function that allows you to track how a particular function is called by external code. When the feedback form calls the function you provide as the on-submit prop, you will be able to explore the argument passed in the call. 

Then, I render the `FeedbackForm` and pass the mock function as the on-submit prop. The following steps are needed to locate the `rangeInput` and fill it with a value, notice that to find the input I'm using the `screen.getByLabelText` and passing a regular expression to match against. 

Screen is a utility object from react testing library that represents the whole page which basically translates to asking the root document to find a label tag whose text contains the word score and then return the input element associated with that label.

```js
describe("Feedback Form", () => {
    test("Submission is disabled if score is lower than 5 and there is no feedback", () => { 
        const handleSubmit = jest.fn();
        render(<FeedbackForm onSubmit={handleSubmit} />);

        const rangeInput = screen.getByLabelText(/Score: /);
        fireEvent.change(rangeInput, {target: { value: "4" } });

        const submitButton = screen.getByRole("button"); 
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    });
});
```
To fill the input with the value you have to use the fireEvent utility from React testing library and call the change function. While React-controlled components update their state via the onchanged prop, React testing library follows a slightly different convention, removing the on part and having the update method as lower case. 

To simulate the form, submission I have to locate the button element, observe how I'm using a different query method. `GetByRoll` which looks at elements with a specific role attribute. This will work well since the HTML button already has the button role internally set, 

To simulate the event I need to provide two arguments. First, the input element in question and second the browser event object which holds the new value as target.value.

To perform a button click I have to use `fireEvent.click`. It follows the same convention as before removing the on-site of the prop and having everything in lower case. 

Great. The final two statements are the assertions of the test. The first one illustrates an example of an expect matter that wants to check the opposite by pre-pending the not before calling the final matter. What it's asserting is that the function that handles the submission of the form has not been called,

which is what I'm expecting when an additional comment has been omitted. Furthermore, I have added the second assertion to make sure the submit button is indeed disabled by using the to have attributes matter.   

```js
import "./App.css";
import { useState } from "react";

function FeedbackForm({onSubmit}) {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score, comment});
  };
```
When the submit button is clicked, the handle submit function will be called.
This function itself calls the prop function provided by the parent with the corresponding form values.
```js
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <label htmlFor="score">Score: {score} ⭐</label>
            <input
              id="score"
              value={score}
              onChange={(e) => {
                setScore(e.target.value);
              }}
              type="range"
              min="0"
              max="10"
            />
          </div>
          <div className="Field">
            <label htmlFor="comment">Comments:</label>
            <textarea
              id="comment"
              placeholder={textAreaPlaceholder}
              name="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default FeedbackForm;

```

**Exercise**

```js
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});

```

Steps

Step 1

The first test scenario has the following specification:

User is able to submit the form if the score is lower than 5 and additional feedback is provided

The test scenario already contains some initial code that acts as boilerplate before getting to the bulk of the test, in particular:

- Two variables that hold the desired state of the form, a score of 3 and an additional comment.

- A mock function that is called when submitting the form.

- The rendering of the form component.

- The final assertion that should make the test pass.

If you run as it is, the test will fail stating that the mock function has not been called at all. That is because no interactions have occurred yet and it’s your task to write those.

The first user interaction that needs to happen is to set the score as 3. The following code achieves that:
```js
const rangeInput = screen.getByLabelText(/Score:/);
fireEvent.change(rangeInput, { target: { value: score } });
```
The first line grabs a reference to the range input component by using the global screen object from react-testing-library and the query `getByLabelText` to find a label that contains the exact text Score:

Then, a change event is simulated on the input, passing as the event an object with the value property set to the variable score: event.target.value = score

After that, a second user interaction is required to set the additional comment. This is the code that accomplishes that:
```js
const textArea = screen.getByLabelText(/Comments:/);
fireEvent.change(textArea, { target: { value: comment } });
```
No further explanation is needed regarding those two lines, since they mimic the same interaction as with the range input.

Last but not least, a submission of the form should be simulated by calling the below two lines:
```js
const submitButton = screen.getByRole("button");
fireEvent.click(submitButton);
```

In this particular instance, the button is referenced by using a different query on the global screen object, getByRole. This query looks for an element whose role attribute is set to “button”, which is inherent in all button HTML tags.

The form is finally submitted via firing a click event on the button instance.

If you run the command npm test in your terminal, the test should pass now.

Let’s now cover the second scenario.

User is able to submit the form if the score is higher than 5, without additional feedback

The below represents the code you need to write to make the test pass.

```js
const rangeInput = screen.getByLabelText(/Score:/);
fireEvent.change(rangeInput, { target: { value: score } });

const submitButton = screen.getByRole("button");
fireEvent.click(submitButton);
```

This test is simpler and there is nothing new besides skipping any interaction with the text area, since no additional feedback is required when the score provided is higher than 5, being 9 in this scenario.

## Introduction to continuous integration 

Continuous Integration (CI) is a software development technique in which developers use a version control system, like Git, and push code changes daily, multiple times a day. Instead of building out features in isolation and integrating them at the end of the development cycle, a more iterative approach is employed.

Each merge triggers an automated set of scripts to automatically build and test your application. These scripts help decrease the chances that you introduce errors in your application.

If some of the scripts fail, the CI system doesn't progress to further stages, issuing a report that developers can use to promptly assess what was wrong and resolve the problem.

This reading will teach you why embracing a CI tool is essential for your software development process. You will also explore a typical development workflow that you can integrate into your CI system and some of the main benefits of using CI. 

### Why do we need CI?

In new product development, the time to figure everything out up front is limited. Taking smaller steps helps estimate more accurately and validate more often. Having a shorter feedback loop involves more iterations. This number of iterations, not the number of hours invested, drives the process forward.

Working in long feedback loops is risky for software development teams, increasing the chances of introducing errors. Integrating new changes is also time-consuming.

By automating all integration steps and having small controlled changes, developers avoid repetitive work and minimize human errors. The CI tool monitors the central code repository and prevents people from deciding when and how to run tests. Every time there is a new commit, it runs all automated tests.

Based on the outcome, it either accepts the commit if all tests passed successfully or reject it if there was a failure.

### CI Pipeline

Below is a graphical representation of a typical CI process as a pipeline. When new code enters one end, a new version of the app gets built automatically, and a suite of automated tests is run against it. 

Continuous Integration is a small part of a more significant process called Continuous Delivery. However, that's outside the scope of the purpose of this lesson, and you can check more information in the additional resources section.

![](../Pics/CIpipelines.png)

### A typical development workflow

Here is a simplified CI workflow that companies often embrace daily as part of their software development process:

- A developer from the team creates a new branch of code in Github, performs changes in the code, and commits them. 

- When the developer pushes its work to GitHub, the CI system builds the code on its servers and runs the automated test suite. 

- Suppose the CI system detects any error in the CI pipeline. In that case, the developer who pushed the code gets a notification, for example, via email, and the status of CI changes to red. The developer is responsible for analyzing what went wrong and fixing the problem. 

- Otherwise, if the status is green and all goes well, the pipeline moves to its next stage, which usually involves deploying a new version of the application to a staging server. This new version can be used internally by the Quality Assurance (QA) team to verify the changes in a production-like environment. 

### Benefits of continuous integration 

Some of the benefits for your software development teams are:

- Improved developer productivity: CI frees developers from manual tasks and the pain of integrating their code with other system parts. They can instead focus on programming the logic that delivers the business's desired features. 

- Deliver working software more often: CI is a way for your team to build and test every source code change automatically. This fast CI feedback loop delivers more value to customers than teams that rely on manual integrations of each other's work. This foundation enables a software delivery process to be efficient, resilient, fast, and secure. 

- Find bugs earlier, and fix them faster: The automated testing process can include different checks, like verifying code correctness, validating application behavior, or making sure the coding style follows industry-standard conventions. A CI tool provides instant feedback to developers on whether the new code they wrote works or introduces bugs or regression in quality. Mistakes that are caught early on are the easiest to fix. 

**Conclusion**

In this reading, you have had an introduction to continuous Integration and why embracing a CI tool is important for your software development process. 

You also learned about a typical development workflow that can be integrated into your CI system and explored some of the main benefits of using CI.