## Explain the uses and purpose of React hooks, Detail the concept and nature of state and state change. 

In this reading, you will learn how to use objects as state variables when using useState. You will also discover the proper way to only update specific properties, such as state objects and why this is done. This will be demonstrated by exploring what happens when changing the string data type to an object.

An example of holding state in an object and updating it based on user-generated events. When you need to hold state in an object and update it, initially, you might try something like this:

```js
import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting({ greet: "Hello, World-Wide Web" });
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}
```

While this works, it's not the recommended way of working with state objects in React, this is because the state object usually has more than a single property, and it is costly to update the entire object just for the sake of updating only a small part of it.

The suggested approach for updating the state object in React when using useState is to copy the state object and then update the specific key-value pair property.

This usually involves using the spread operator (...). Keeping this in mind, here's the updated code:
```js
import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    const newGreeting = { ...greeting };
    newGreeting.greet = "Hello, World-Wide Web";
    setGreeting(newGreeting);
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}
```

**Incorrect ways of trying to update the state object**

To prove that a copy of the old state object is needed to update state, let’s explore what happens when you try to update the old state object directly:
```js
import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    greeting = { greet: "Hello, World-Wide Web" };
    setGreeting(greeting);
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}
```

The above code does not work because it has a TypeError hiding inside of it. Specifically, the TypeError is: "Assignment to constant variable". In other words, you cannot reassign a variable declared using const, such as in the case of the useState hook's array destructuring:

```js
const [greeting, setGreeting] = useState({ greet: "Hello, World" });
```

Another approach you might attempt to use to work around the suggested way of updating state when working with a state object might be the following:

```js
import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    greeting.greet = "Hello, World-Wide Web";
    setGreeting(greeting);
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}
```

The above code is problematic because it doesn't throw any errors; however, it also doesn't update the heading, so it is not working correctly. This means that, regardless of how many times you click the "Update greeting" button, it will still be "Hello, World".

To reiterate, the proper way of working with state when it's saved as an object is to:

- Copy the old state object using the spread (...) operator and save it into a new variable and
- Pass the new variable to the state-updating function

Updating the state object using arrow functions

Now, let’s use a more complex object to update state. The state object now has two properties: greet and location.

The intention of this update is to demonstrate what to do when only a specific property of the state object is changing, while keeping the remaining properties unchanged:

```js
import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState({
    greet: "Hello",
    place: "World",
  });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting((prevState) => {
      return { ...prevState, place: "World-Wide Web" };
    });
  }

  return (
    <div>
      <h1>
        {greeting.greet}, {greeting.place}
      </h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}
```

The reason this works is because it uses the previous state, which is named prevState, and this is the previous value of the greeting variable. In other words, it makes a copy of the prevState object, and updates only the place property on the copied object. It then returns a brand-new object:

```js
return { ...prevState, place: "World-Wide Web" };
```

Everything is wrapped in curly braces so that this new object is built correctly, and it is returned from the call to setGreeting.

**Conclusion**

You have learned what happens when changing the string data type to an object, with examples of holding state in an object and updating it based on user-generated events. You also learned about correct and incorrect ways to update the state object in React when using useState, and about updating the state object using arrow functions.

## Use the State hook to declare, read and update the state of a component. 

### Using useState Hook

Let's explore how to build a goals app with the described requirements in react using the `useState` hook in a component and updating the state.\
The code itself consists of three separate components.

* **GoalForm**, which captures a new goal using a form,
* **ListOfGoals**, which loops over all the previously added goals and displays them as an unordered list of list items and the
* **App component**, which puts those two components together and allows me to render them, as well as pass the functions that they'll be working with through their props.

First is the `changeHandler` function which accepts an `e` parameter. This `e` parameter is a readily available event object. In other words, I don't have to pass this object from my `changeHandler`. It's provided to me by a mechanism outside of React.

Even in plain JavaScript, whenever an event is fired, this creates an event object with many different pieces of data related to the event. I can then use this event object by simply assigning it a custom name such as `e`, `evt`, or Even `event`. I'm using the letter `e` here to keep my code concise.

In the body of the `changeHandler` function, I update the state of my `formData` variable by invoking the previously Destructured state-setting variable of a `setFormData`, which was Destructured from a call to the `useState` hook. The `setFormData` function accepts a shallow clone of the previous value of the `formData` variable. That's the `formData` variable with the spread operator before it.

```js
function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
}
```

**Remember that you should not work with the `formData` variable directly which is why, I'm making a copy. This is because of how React optimizes its virtual DOM. Keeping state immutable makes it possible to compare a previous version of the virtual DOM with the updated version more efficiently and cost effectively.**

Next, I update this new copy of the `formData` object by adding this code, it reads the `e.target.name` using the bracket notation. Then sets the value of this property to whatever is inside that `e.target.value` property of the instance of the event object, which was built when that specific event was fired. The reason why this works with the brackets notation is that it allows me to set the value of the `e` target named dynamically. In other words, it allows me to set it as `goal`, If the user typed into the input with the `name` attributes set to `goal` or to set it as `by`, If the user typed into the input with the `name` attributes set to `by`.

Second, I declare a `submitHandler` function which also accepts the event attribute. The `GoalForm` component receives the prop named `onAdd`, and I'm giving the function `addGoal` to it as the props value. But it's not just any function.

```js
function GoalForm(props) {
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }
}
```

It's actually a function that's declared inside the app component itself. This `addGoal` function accepts a goal entry and updates the value of `allGoals` state variable that's kept inside the app function. It does this by adding this `goal` entry to the list of previous goals saved and tracked inside the `allGoal` state variable of the app component. The update of any state variable must go through the previously Destructured state updating function. In the case of the app component, the state updating function is the `updateAllGoals` function. That's why I'm invoking the state updating function inside the `addGoal` function.

```js
export default function App() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }
  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListofGoals allGoals={allGoals} />
    </div>
  );
}
```
The `allGoals` state is just an array that holds objects which are `formData` object that has `goal` and `by` keys and the job of this `allGoals` array is to hold all the previous objects that been added to show it on list at the final in `ListOfGoals` component 
```c
(2) [{…}, {…}]
[ 0: {goal: 'grocery', by: '3:50 PM'}
1: {goal: 'Do leetCode problem', by: 'Today'} ]
length: 2
[[Prototype]]: Array(0)
```
To make it all work, I also need to pass the `addGoal` function definition to the `GoalForm` JSX element in the app component's return statement. That's why the `addGoal` function is now available as a prop named `onAdd` inside the `GoalForm` function and that's why I can now use it inside the `submitHandler` function, Back in the `goalForm` function declaration. Once the `props.onAdd` function is invoked, it receives the `formData` variable, which triggers the update of the `allGoals` state variable in the app component as described previously.

I still have the form showing the values that the user entered. To deal with this, I need to reset the `formData` state variable to an empty string, both on the `goal` property of the `formData` state object and the `by` property of the `formData` state object. This now brings me to the return statement of the `GoalForm` function.

```js
function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function GoalForm(props) {
    function submitHandler(e) {
      props.onAdd(formData);
      setFormData({ goal: "", by: "" });
    }
  }

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="goal"
          name="goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="by"
          value={formData.by}
          onChange={changeHandler}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
```

I want you to focus on the `form` element that has the `onSubmit` event handling attribute set to the `submitHandler` function. The first and second inputs both follow the same structure of having the type, name, placeholder, value, and onChange attributes, which hook into the previously described functionality.

```js
function ListofGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}
```

Moving on to the `ListofGoals` component, this component receives the `allGoal` state variable as a prop from its parent app component. The purpose of this is to map over the `allGoals` array of objects where each object holds the two properties that describe a single `goal` as explained earlier. By mapping over the all goals array of objects, I now output this unordered list with a list item entry for each individual goal.

## Use the Effect hook to perform side-effects within a React component. 

**what is a side effect**

A side effect is something that makes a function impure. pure functions don't have side effects. And impure functions do  

A pure function should receive specific input. That is a specific parameter will always return the exact same output. No matter how many times it gets invoked.

```js
function EstablishedYear(props) {
  return <h1>Established year: {props.year}</h1>
}
export default function App() {
  return <EstablishedYear year={2003} />
}
```
As long as the value of the year prop is 2003. Regardless of how many times the established year function is invoked or it is rendered from the app component, the output will remain unchanged.

This is an example of a pure function. The `EstablishedYear` function has no side effects.

By contrast an Impure function will perform a side effect. That means it will do things such as invoke **console log**, **invoke fetch** or invoke **browsers geolocation** functionality. In this context, a side effect can be thought of as something external to or outside of a function.  

Consider the example of a `ShoppingCart` function. It is an impure function because of the line that reads `console.log(total)`. The console log call makes the function impure as it's a call to a browser, application programming interface or API. The `ShoppingCart` function now depends on something outside of itself and even outside of the react app to work properly. 
```js
function ShoppingCart(props) {
  const total = props.items * props.pricePerItem
  console.log(total)
  return <h1>Total: {total}</h1>
}
export default function App() {{
  return (
    <ShoppingCart items={5} pricePerItem={10} />
  )
}}
```
So how should you deal with the issue of impure functions in react. Well, it's all about containing the impure actions inside their own special areas. To do this and react you need to use the `useEffect` hook, let's update the `ShoppingCart` component with the `useEffect` hook to properly deal with the side effect caused by the `console.log`.
```js
import {useEffect} from 'react'

useEffect(() => {
  console.log(total)
}, [])
```
First, you need to import the `useEffect` hook from react the `useEffect` hook works by accepting two parameters. The first is a callback function. The second parameter is an array. This array can be kept empty which is perfectly valid while the syntax is valid. It's common to use an arrow function as the first argument of the invocation of the `useEffect` hook.


### What is the `useEffect` hook

You have been introduced to the primary usage of the `useEffect` hook, a built-in React hook best suited to perform side effects in your React components.

In this reading you will be introduced to the correct usage of the dependency array and the different `useEffect` calls that can be used to separate different concerns. You will also learn how you can clean up resources and free up memory in your `useEffect` logic by returning a function.

The code you place inside the `useEffect` hook always runs after your component mounts or, in other words, after React has updated the DOM.

> `mount` refers to the process by which the operating system makes files and directories on a storage device (such as hard drive, solid state drive (SSD), compact disc read-only memory (CD-ROM), or network share) accessible to the user through the system's directory tree.

In addition, depending on your configuration via the dependencies array, your effects can also run when certain state variables or props change.

By default, if no second argument is provided to the `useEffect` function, **the effect will run after every render**.
```js
useEffect(() => {
document.title = 'Little Lemon';
});
```
However, that may cause performance issues, especially if your side effects are computationally intensive. A way to instruct React to skip applying an effect is passing an array as a second parameter to `useEffect`.

In the below example, the integer variable version is passed as the second parameter. That means that the effect will only be re-run if the version number changes between renders.
```js
useEffect(() => { 
  document.title = `Little Lemon, v${version}`;
}, [version]); // Only re-run the effect if version changes 
```

If version is 2 and the component re-renders and version still equals 2, React will compare \[2] from the previous render and \[2] from the next render. Since all items inside the array are the same, React would skip running the effect.

**Use multiple Effects to Separate Concerns**

React doesn’t limit you in the number of effects your component can have. In fact, it encourages you to group related logic together in the same effect and break up unrelated logic into different effects.
```js
function MenuPage(props) { 
  const [data, setData] = useState([]); 

  useEffect(() => { 
    document.title = 'Little Lemon'; 
  }, []); 

  useEffect(() => { 
  fetch(`https://littlelemon/menu/${id}`) 
      .then(response => response.json()) 
      .then(json => setData(json)); 
  }, [props.id]); 

  // ... 
} 
```
Multiple hooks allow you to split the code based on what it is doing, improving code readability and modularity.

### Effects with Cleanup

Some side effects may need to clean up resources or memory that is not required anymore, avoiding any memory leaks that could slow down your applications.

For example, you may want to set up a subscription to an external data source (fetching data from internet). In that scenario, it is vital to perform a cleanup after the effect finishes its execution.

How can you achieve that? In line with the previous point of splitting the code based on what it is doing, the `useEffect` hook has been designed to keep the code for adding and removing a subscription together, since it’s tightly related.

**If your effect returns a function, React will run it when it’s time to clean up resources and free unused memory**: This refers to the cleanup function in a React effect (useEffect). When you use useEffect to set up something that needs cleanup (like event listeners, timers, or subscriptions), React allows you to return a function that handles this cleanup.

```js
React.useEffect(() => {
  const handleScroll = () => console.log("User scrolled");
  window.addEventListener("scroll", handleScroll);

  // Cleanup function to remove the event listener
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
```
**What happens**: When the component unmounts, React will call the returned function to clean up the scroll event listener, freeing up resources.
```js
function LittleLemonChat(props) { 
  const [status, chatStatus] = useState('offline'); 

  useEffect(() => { 
    LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')) 

    return () => { 
      setStatus('offline'); 
      LemonChat.unsubscribeFromMessages(props.chatId); 
    }; 
  }, []); 

  // ... 
} 
```
Returning a function is optional and it’s the mechanism React provides in case you need to perform additional cleanup in your components: If your effect does not involve any resource management or cleanup (like a simple data fetch), there is no need to return a cleanup function.

Example without cleanup:
```js
React.useEffect(() => {
  console.log("Component mounted");
}, []);
```
Returning a cleanup function is optional, but it's useful when dealing with side effects that require resource management, such as:

- Event listeners
- Intervals or timeouts
- WebSocket connections
- API subscriptions

React will automatically run the cleanup logic when it’s needed. The execution will always happen when the component **unmounts** (i.e., is removed from the DOM): 

This prevents resource leaks, such as event listeners or running timers in the background.
```js
React.useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running");
  }, 1000);

  // Cleanup: Clear interval when component unmounts
  return () => clearInterval(timer);
}, []);
```
When the component unmounts, React calls clearInterval(timer) to stop the timer, freeing resources.

If your effect depends on dynamic values and re-runs on every render (because of dependencies in the dependency array), React will clean up the previous effect before running the new one.

Example with Dependencies:
```js
React.useEffect(() => {
  const handleResize = () => console.log("Window resized");

  window.addEventListener("resize", handleResize);

  // Cleanup before the next render
  return () => window.removeEventListener("resize", handleResize);
}, [window.innerWidth]);
```
What happens: Each time the window width changes, the old `handleResize` listener is removed, and a new one is attached. This prevents multiple event listeners from accumulating and causing memory leaks or performance issues.

**Conclusion**

You learned some practical tips for using the built-in Effect hook. In particular, you were presented with how to use the dependency array properly, how to separate different concerns in different effects, and finally how to clean up unused resources by returning an optional function inside the effect.

- Returning a cleanup function from `useEffect` is optional but necessary when managing resources.
- React ensures cleanup occurs when:
  - The component unmounts.
  - The effect re-runs (based on dependency changes).
- This mechanism helps maintain performance and avoid memory leaks in your application.

### Using the `useEffect` hook

```js
function App() {
  const [toggle, setToggle] = useState(false)

  const clickHandler = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  })

  return (
    <div>
      <h1>using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
      </button>
      {toggle && <h2>welcome</h2>}
    </div>
  )
}
```
I can confirm that with every click of the button, the title on the tab is updating to one of the two specified strings. Imagine I wants the title on the document to be set on the initial component render. After that, it doesn't want it updated. This is where the dependency array comes in.  

The dependency array determines when the `useEffect` hook will be invoked. For now, I'll update my code with an empty dependency array, meaning I'm not tracking the state of any state variables. In other words, regardless of what is happening in my app, I don't want the `useEffect` hook to be invoked. This means that it'll be invoked only once. After that, no matter what happens in my app, the `useEffect` hook will no longer be run. 
```js
useEffect(() => {
  document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
}, [])
```
The dependency array is there to watch for changes to a specific variable. Based on that, execute the function that's passed in as the first argument of the `useEffect` function call. This means that if I want to run the `useEffect` hook whenever there's an update to the value stored in the `toggle` variable, I need to add the `toggle` variable to the dependencies array.  
```js
function App() {
  const [toggle, setToggle] = useState(false)

  const clickHandler = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  }, [toggle])

  return (
    <div>
      <h1>using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle message
      </button>
      {toggle && <h2>welcome</h2>}
    </div>
  )
}
```
After this change, back in the browser, the `useEffect` hook will be run every time the Toggle message button is clicked. Because the `clickHandler` updates the value of the `toggle` state variable by invoking the `setToggle` function. This in turn, triggers the `useEffect` invocation. Since the dependencies array is set to watch for changes to the `toggle` variables value. 