# React Essensial Hooks
## What is useReducer?

`useReducer` is a hook that allows you to manage state using a reducer function. It's similar to how Redux manages state, but it's built into React for use within components. The reducer function takes the current state and an action, and returns a new state based on the action type.
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```
- `reducer`: A function that determines the next state based on the current state and an action.
- `initialState`: The initial state value.
- `state`: The current state.
- `dispatch`: A function to send actions to the reducer.

**When to Use useReducer**

- Complex State Logic: When state logic involves multiple sub-values or when the next state depends on the previous state.
- Centralized State Management: When you want to manage state transitions in a single place, making it easier to debug and test.

**Real-Life Coding Examples**
Example 1: Counter Component  
A simple example to demonstrate the basics of useReducer is a counter component:
```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Counter;
```
In this example, the reducer function handles the logic for incrementing and decrementing the counter. The dispatch function is used to send actions to the reducer.

**Example 2: Todo List**  

A more complex example is managing a todo list. This involves adding, removing, and toggling the completion status of todos:
```jsx
const [text, setText] = useState(''); 
    
  return (
      <div>
          <form
              onSubmit={e => {
                  e.preventDefault()
                  console.log(text) 
                  setText('')}
              }>
                <input value={text} onChange={e => setText(e.target.value)}></input>    
              <button type="submit">add</button>  
          </form>

          <ul>
          </ul>
      </div>
  )
```
we have this simple jsx code that take value from input and store it in text state and log it on submit.

Now lets add useReducer to this so we can store the state to an object additional to an id and completed property 

the idea here we pass the id of each item to action object so we can control it via reducer function
```jsx
import React, { useReducer, useState } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error();
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'add', text });
          setText('');
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
        // the action obj is { type: "add", text: "omar" }
        // the state array is [{ id: 1744385838157, text: "omar", completed: false }]
      </form>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => dispatch({ type: 'toggle', id: todo.id })}
            >
              {todo.text}
            </span>
            // action { type: "toggle", id: 1744385906965 }
            // state [{ id: 1744385838157, text: "omar", completed: false }, { id: 1744385906965, text: "welcome", completed: true }]

            <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>
              Remove
            </button>
            // action { type: "remove", id: 1744385906965 }
            // state [{ id: 1744385838157, text: "omar", completed: false }, { id: 1744385906965, text: "welcome", completed: false }]
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```
In this example, the reducer function handles the logic for adding, toggling, and removing todos. The `useReducer` hook provides a clear and predictable way to manage the state transitions of the todo list.

**Example 3: Form Management**

Managing the state of a complex form can be simplified with useReducer:
```jsx
import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateField':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: 'updateField',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log(state);
    dispatch({ type: 'reset' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={state.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
```
Here, the reducer function manages the state of each form field and handles the form reset action. This approach ensures that form state management is centralized and easy to maintain.
Conclusion

The useReducer hook in React provides a robust way to manage state, particularly when dealing with complex state logic. By using a reducer function to determine state transitions, you can keep your state management logic clear and predictable. The real-life examples provided here illustrate how useReducer can be effectively used in different scenarios, from simple counters to complex form management.

Whether you are managing a simple state or a complex application, useReducer can help you handle state transitions in a clean and efficient manner, making your React applications more maintainable and scalable.

## useEffect

