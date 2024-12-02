## Explain the uses and purpose of React hooks.  

### Working with complex data in useState

In this reading, you will learn how to use objects as state variables when using useState. You will also discover the proper way to only update specific properties, such as state objects and why this is done. This will be demonstrated by exploring what happens when changing the string data type to an object.
**An example of holding state in an object and updating it based on user-generated events**

When you need to hold state in an object and update it, initially, you might try something like this:
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

**The correct way to update the state object in React when using useState**

The suggested approach for updating the state object in React when using useState is to copy the state object and then update the copy.

This usually involves using the spread operator (...).

Keeping this in mind, here's the updated code:
```js
import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting}; 
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
    greeting = {greet: "Hello, World-Wide Web"}; 
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
The above code does not work because it has a TypeError hiding inside of it.

Specifically, the TypeError is: "Assignment to constant variable".

In other words, you cannot reassign a variable declared using const, such as in the case of the useState hook's array destructuring:
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

Now, let’s use a more complex object to update state.

The state object now has two properties: greet and location.

The intention of this update is to demonstrate what to do when only a specific property of the state object is changing, while keeping the remaining properties unchanged:
```js
import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
```
The reason this works is because it uses the previous state, which is named prevState, and this is the previous value of the greeting variable. In other words, it makes a copy of the prevState object, and updates only the place property on the copied object. It then returns a brand-new object: 
```js
return {...prevState, place: "World-Wide Web"} 
```

Everything is wrapped in curly braces so that this new object is built correctly, and it is returned from the call to setGreeting.

**Conclusion**

You have learned what happens when changing the string data type to an object, with examples of holding state in an object and updating it based on user-generated events. You also learned about correct and incorrect ways to update the state object in React when using useState, and about updating the state object using arrow functions.

### Using useState Hook

Let's explore how to build a goals app with the described requirements in react using the `useState` hook in a component and updating the state.   
The code itself consists of three separate components.  
- **GoalForm**, which captures a new goal using a form,   
- **ListOfGoals**, which loops over all the previously added goals and displays them as an unordered list of list items and the   
- **App component**, which puts those two components together and allows me to render them, as well as pass the functions that they'll be working with through their props.

First is the `changeHandler` function which accepts an `e` parameter. This `e` parameter is a readily available event object. In other words, I don't have to pass this object from my `changeHandler`. It's provided to me by a mechanism outside of React.

Even in plain JavaScript, whenever an event is fired, this creates an event object with many different pieces of data related to the event. I can then use this event object by simply assigning it a custom name such as `e`, `evt`, or Even `event`. I'm using the letter `e` here to keep my code concise.  

In the body of the `changeHandler` function, I update the state of my `formData` variable by invoking the previously Destructured state-setting variable of a `setFormData`, which was Destructured from a call to the `useState` hook. The `setFormData` function accepts a shallow clone of the previous value of the `formData` variable. That's the `formData`  variable with the spread operator before it.
```js
function GoalForm(props){
    const [formData, setFormData ] = useState({goal: "", by: ""})
    
    function changeHandler(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

}
```
**Remember that you should not work with the `formData` variable directly which is why, I'm making a copy. This is because of how React optimizes its virtual DOM. Keeping state immutable makes it possible to compare a previous version of the virtual DOM with the updated version more efficiently and cost effectively.**  

Next, I update this new copy of the `formData` object by adding this code, it reads the `e.target.name` using the bracket notation. Then sets the value of this property to whatever is inside that `e.target.value` property of the instance of the event object, which was built when that specific event was fired. The reason why this works with the brackets notation is that it allows me to set the value of the `e` target named dynamically. In other words, it allows me to set it as `goal`, If the user typed into the input with the `name` attributes set to `goal` or to set it as `by`, If the user typed into the input with the `name` attributes set to `by`. 

Second, I declare a `submitHandler` function which also accepts the event attribute. The `GoalForm` component receives the prop named `onAdd`, and I'm giving the function `addGoal` to it as the props value. But it's not just any function.  
```js
function GoalForm(props){
    function submitHandler(e){
        e.preventDefault()
        props.onAdd(formData)
        setFormData({goal: "", by: ""})
    }
}
```
It's actually a function that's declared inside the app component itself. This `addGoal` function accepts a goal entry and updates the value of `addGoal` state variable that's kept inside the app function. It does this by adding this `goal` entry to the list of previous goals saved and tracked inside the `allGoal` state variable of the app component. The update of any state variable must go through the previously Destructured state updating function. In the case of the app component, the state updating function is the `updateAllGoals` function. That's why I'm invoking the state updating function inside the `addGoal` function.
```js
export default function App() {
    const [allGoals, updateAllGoals] = useState([])

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal])
    }
    return (
        <div>
            <GoalForm onAdd={addGoal}  />
            <ListofGoals allGoals={allGoals} />
        </div>
    )
}
```
To make it all work, I also need to pass the `addGoal` function definition to the `GoalForm` JSX element in the app component's return statement. That's why the `addGoal` function is now available as a prop named `onAdd` inside the `GoalForm` function and that's why I can now use it inside the `submitHandler` function, Back in the `goalForm` function declaration. Once the `props.onAdd` function is invoked, it receives the `formData` variable, which triggers the update of the `allGoals` state variable in the app component as described previously.  
```js
function GoalForm(props){
    const [formData, setFormData ] = useState({goal: "", by: ""})
    function GoalForm(props){
        function submitHandler(e){
            props.onAdd(formData)
            setFormData({goal: "", by: ""})
        }
    }
}
```
I still have the form showing the values that the user entered. To deal with this, I need to reset the `formData` state variable to an empty string, both on the `goal` property of the `formData` state object and the `by` property of the `formData` state object. This now brings me to the return statement of the `GoalForm` function.
```js
function GoalForm(props){
    const [formData, setFormData ] = useState({goal: "", by: ""})
    return (
        <>
            <h1>My Little Lemon Goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="goal" name="goal" value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="by" value={formData.by} onChange={changeHandler} />
                <button type="submit">submit</button>
            </form>
        </>
    )
}
```
I want you to focus on the `form` element that has the `onSubmit` event handling attribute set to the `submitHandler` function. The first and second inputs both follow the same structure of having the type, name, placeholder, value, and onChange attributes, which hook into the previously described functionality.  
```js
function ListofGoals(props){
    return (
        <ul>
            {props.allGoals.map((g) => (
                <li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            ))}
        </ul>
    )
}
```
Moving on to the `ListofGoals` component, this component receives the `allGoal` state variable as a prop from its parent app component. The purpose of this is to map over the `allGoals` array of objects where each object holds the two properties that describe a single `goal` as explained earlier. By mapping over the all goals array of objects, I now output this unordered list with a list item entry for each individual goal. 

### Detail the concept and nature of state and state change. 

