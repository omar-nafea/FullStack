## Create appropriate custom hooks in React. 

### When to choose useReducer vs useState

The `useState` hook is best used on less complex data.

While it's possible to use any kind of a data structure when working with `useState`, it's better to use it with primitive data types, such as strings, numbers, or booleans.

The `useReducer` hook is best used on more complex data, specifically, arrays or objects.

While this rule is simple enough, there are situations where you might be working with a simple object and still decide to use the `useState` hook.

Such a decision might stem from the simple fact that working with useState can sometimes feel easier than thinking about how the state is controlled when working with `useReducer`.

It might help conceptualizing this dilemma as a gradual scale, on the left side of which, there is the `useState` hook with primitive data types and simple use cases, such as toggling a variable on or off.

At the end of this spectrum, there is the `useReducer` hook used to control state of large state-holding objects.

There's no clear-cut point on this spectrum, at which point you would decide: "If my state object has three or more properties, I'll use the `useReducer` hook".

Sometimes such a statement might make sense, and other times it might not.

What's important to remember is to keep your code simple to understand, collaborate on, contribute to, and build from.

One negative characteristic of `useState` is that it often gets hard to maintain as the state gets more complex.

On the flip side, a negative characteristic of `useReducer` is that it requires more prep work to begin with. There's more setup involved. However, once this setup is completed, it gets easier to extend the code based on new requirements.

**Conclusion**

You learned about the decision-making process when choosing between `useReducer` and `useState` for working with different types of data.
```js
const reducer = (state, action) => {
  if (action.type === 'sell food') return {money: state.money + 10}
  if (action.type === 'but ingrediants') return {money: state.money - 50}
  if (action.type === 'have celebrity') return {money: state.money + 500}
  return new Error()
}
export default function App() {
  const initialState = {money: 100}
  const [state, dispatch] = useReducer(reducer, initialState)
    return (
    <div>
    <h1>Little Lemon account: {state.money}</h1>
      <button onClick={() => dispatch({type: 'sell food'})}> new customer</button>
      <button onClick={() => dispatch({type: 'but ingrediants'})}> Refill tank</button>      
      <button onClick={() => dispatch({type: 'have celebrity'})}> Refill tank</button>
    </div>
        )
}
```

### useRef to access underlying DOM

```js
export default function App() {
    return (
        <div>
            <h1></h1>
            <input type="text" />
            <button onClick={focusInput}>Focus Input</button>
    )
}
```
Now, I need to define the `focusInput` function to handle the button clicks. For the sake of simplicity, my click handler only accesses the `formInputRef` object, and then it accesses the `focus` method on the `current` property which exist on the `formInputRef` object.

This object is the return value of invoking the `useRef` hook. So in this update to my function, I'm invoking the React User a function, and I'm saving a Ref object, that is the value returned from that function invocation to a variable named `formInputRef`.  

Then setting the JSX expression of `formInputRef` as the value of the `ref` attribute on the input element. React will create the input elements DOM node and render it on the screen. This DOM node is assigned as the value of the `current` property of the `ref` object. This makes it possible to access the input DOM node and all its properties and values using the syntax `formInputRef.current`. 
```js
export default function App() {
    const formInputRef = useRef(null)
    const focusInput = () => {
        focusRef.current.focus()
    }

    return (
        <div>
            <h1></h1>
            <input ref={formInputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
    )
}
```
Since I want to access the `focus` function on the input elements DOM node, I'm using the syntax `formInputRef.current.focus()`. This allows me to move the focus to the input field so that it is ready to be typed into without the user having to click tap or tap into it. This is now triggered on a button click. 

### Custom hooks

React has some built-in hooks, such as the `useState` hook, or the `useRef` hook, which you learned about earlier. However, as a React developer, you can write your own hooks. So, why would you want to write a custom hook?

In essence, hooks give you a repeatable, streamlined way to deal with specific requirements in your React apps. For example, the `useState` hook gives us a reliable way to deal with state updates in React components.

A custom hook is simply a way to extract a piece of functionality that you can use again and again. Put differently, you can code a custom hook when you want to avoid duplication or when you do not want to build a piece of functionality from scratch across multiple React projects. By coding a custom hook, you can create a reliable and streamlined way to reuse a piece of functionality in your React apps.

To understand how this works, let's explore how to build a custom hook. To put this in context, let's also code a very simple React app.

The entire React app is inside the App component below:
```js
import { useState } from "react"; 
 
function App() { 
  const [count, setCount] = useState(0); 
 
  function increment() { 
    setCount(prevCount => prevCount + 1) 
  } 
 
  return ( 
    <div> 
      <h1>Count: {count}</h1> 
      <button onClick={increment}>Plus 1</button> 
    </div> 
  ); 
} 
 
export default App; 
```

This is a simple app with an h1 heading that shows the value of the count state variable and a button with an `onClick` event-handling attribute which, when triggered, invokes the `increment()` function.

The hook will be simple too. It will console log a variable's value whenever it gets updated.

Remember that the proper way to handle `console.log()` invocations is to use the `useEffect` hook.

So, this means that my custom hook will:

- Need to use the `useEffect` hook and 
- Be a separate file that you'll then use in the App component. 

How to name a custom hook

A custom hook needs to have a name that begins with use.

Because the hook in this example will be used to log values to the console, let’s name the hook `useConsoleLog`.
Coding a custom hook

Now's the time to explore how to code the custom hook.

First, you’ll add it as a separate file, which you can name `useConsoleLog.js`, and add it to the `root` of the `src` folder, in the same place where the `App.js` component is located.

Here's the code of the useConsoleLog.js file:
```js
import { useEffect } from "react";

function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
}

export default useConsoleLog;
```
##### Using a custom hook

Now that the custom hook has been coded, you can use it in any component in your app.

Since the app in the example only has a single component, named App, you can use it to update this component.

The `useConsoleLog` hook can be imported as follows:

`import useConsoleLog from "./useConsoleLog";`

And then, to use it, under the state-setting code, I'll just add the following line of code:

`useConsoleLog(count);`

Here's the completed code of the App.js file:
```js
import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function App() {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus 1</button>
    </div>
  );
}

export default App;
```
This update confirms the statement made at the beginning of this reading, which is that custom hooks are a way to extract functionality that can then be reused throughout your React apps

**Conclusion**

You have learned how to name, build and use custom hooks in React.

```js
import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
```
Your task was to complete the custom hook named `usePrevious` so that the `h1` heading shows both the current day and the `previous current` day before the update. 

you needed to pass two parameters as argumentsto the useEffect() function call.

The first parameter should have been an arrow function, without any arguments. Inside the arrow function's body, you should have assigned the val value to the current property on the ref object.

The second parameter needed to be the dependencies array. The dependencies array needed to list a single variable - namely, the val variable.
```js
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}
```
In React, we assign val to ref.current instead of a normal variable for several important reasons related to how React's rendering and re-rendering work:

1. **Persistence Across Renders**:

- Normal Variables: Reset on every render. React re-renders the component whenever state or props change, and any variable declared inside the function will be re-initialized.
- Refs: Persist across renders without being reset. The value in ref.current stays consistent across renders.
```js
function usePrevious(val) {
  let prevVal = val;  // Normal variable
  useEffect(() => {
    prevVal = val; // This won't persist across renders.
  }, [val]);
  return prevVal;
}
```
In the code above, prevVal will be reset every time the component re-renders, meaning the previous value would be lost.

Using useRef ensures the previous value is stored and remains available even after multiple re-renders.

2. **No Trigger of Re-renders**:

- Normal Variables and State: If you use useState, updating state causes a re-render.
- Refs: Do not cause re-renders when updated. This makes them perfect for storing values that should persist but not affect the component's rendering.
```js
function usePrevious(val) {
  const [prevVal, setPrevVal] = useState(val);  // Using state instead
  useEffect(() => {
    setPrevVal(val); // Triggers unnecessary re-renders
  }, [val]);
  return prevVal;
}
```
- This causes unnecessary re-renders, which can negatively affect performance.
- useRef avoids this issue since updating ref.current does not trigger a re-render.

3. **React’s Cleanup Mechanism**:

- useEffect can rely on ref.current without needing to deal with the complexities of state updates or unnecessary triggers.
- This is particularly useful in custom hooks like usePrevious, where the goal is simply to store a value between renders, not to interact with React's state management.

In Summary:

- Refs provide a mechanism for persistent storage across renders without causing re-renders, making them ideal for tasks like storing the previous value of a prop or state.
- Using a normal variable will not work because it will be reset on each re-render, and using state would cause unnecessary re-renders.

##### Claim

With array destructuring, you are free to give any variable name to the items that you destructure from an array. Contrary to that, when destructuring objects, you have to destructure a property of an object using that exact property's name as the name of the destructured variable.

**Array Destructuring**:

You can assign any variable name to the values you extract since it's based on position, not names.
```js
const arr = [1, 2, 3];
const [x, y, z] = arr; // x = 1, y = 2, z = 3
```
**Object Destructuring**:

You must use the exact property names unless you use an alias with the : syntax.
```js
const obj = { name: "Alice", age: 25 };
const { name, age } = obj; // name = "Alice", age = 25

// Using an alias
const { name: firstName } = obj; // firstName = "Alice"
```
In object destructuring, the property names need to match unless you explicitly rename them with :.