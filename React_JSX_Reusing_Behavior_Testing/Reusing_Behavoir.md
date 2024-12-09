### Cross-cutting concerns in react

##### What are Higher-Order Functions (HOFs) in React?

In JavaScript, Higher-Order Functions (HOFs) are functions that either:

- Take another function as an argument.
- Return a new function.

When applied in React, HOFs are used to enhance the behavior of components or manage logic outside the core component structure. They are a fundamental concept enabling reuse, abstraction, and better separation of concerns.

React embraces HOFs to manage repetitive logic or to implement patterns like Higher-Order Components (HOCs), custom hooks, or render props.

This concept translates to React in various patterns.

### Higher-Order Components (HOCs)

HOCs are functions that take a component as input and return a new, enhanced component.
Structure of an HOC
```js
const withEnhancement = (WrappedComponent) => {
  return (props) => {
    // Add additional logic or props
    return <WrappedComponent {...props} enhancedProp="value" />;
  };
};
```
The `!!` operator in JavaScript (and by extension, in React) is a way to convert a value to its **boolean equivalent**. It’s not a unique operator but rather two negation operators (`!`) used in sequence.

Here’s how it works:

- The first `!` converts the value to its logical negation (truthy becomes false, falsy becomes true).
- The second `!` negates it again, effectively converting it to its boolean equivalent (true or false).


### What are Higher-Order Components (HOCs) in React?

Higher-Order Components (HOCs) are a React pattern where a function takes a component as input and returns a new component that wraps or "enhances" the original. HOCs are commonly used to share logic between components, abstract repetitive tasks, or enhance functionality without modifying the component directly.

**HOC Definition:**

```js
const withEnhancement = (WrappedComponent) => {
  return (props) => {
    // Add extra functionality or data
    return <WrappedComponent {...props} enhancedProp="value" />;
  };
};
```

**Why Use HOCs?**

HOCs provide a way to reuse component logic efficiently. They allow you to:

- Abstract Repetitive Logic:
    - For example, authentication, authorization, or fetching data.
- Enhance Component Behavior:
    - Dynamically modify props, state, or lifecycle behavior.
- Reduce Code Duplication:
    - Centralize logic used across multiple components.

### How HOCs Work

Basic Example
```js
const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log("Component rendered with props:", props);
    return <WrappedComponent {...props} />;
  };
};

// Usage
const MyComponent = (props) => <div>Hello, {props.name}!</div>;
const EnhancedComponent = withLogging(MyComponent);

// Render
<EnhancedComponent name="Alice" />;

```

In this example:

- `withLogging` is the HOC.
- It wraps `MyComponent` to add logging functionality.
- The `EnhancedComponent` behaves like `MyComponent` but with additional features.

**Practical Use Cases**

1. Authentication/Authorization

```js
const withAuthentication = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = !!localStorage.getItem("token");
    if (!isAuthenticated) {
      return <div>Please log in to access this page.</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

// Usage
const Dashboard = () => <div>Welcome to the Dashboard!</div>;
const ProtectedDashboard = withAuthentication(Dashboard);

```

**When to Use HOCs**

- Enhancing Third-Party Components:
    - HOCs are ideal for adding logic to components you don’t control (e.g., from a library).

- Cross-Cutting Concerns:
    - Tasks like theming, logging, and authorization are good candidates.

- Class Component Logic Reuse:
    - Custom hooks are not compatible with class components, so HOCs can be a fallback.

---

So far you have seen that custom hook which encapsulate logic is one of the solutions however, that introduces the issue of having to alter the implementation of each component that needs that data and thus making all of them stateful. How could you define the subscription logic in a single place? Share it across many components and keep them unchanged and stateless. Well, this is where higher-order components are a perfect solution.

A higher-order component also known as a HOC is an advanced pattern that emerges from React's compositional nature. Specifically, a higher-order component is a function that takes a component and returns a new component. Whereas a component transforms props into UI, a higher-order components transforms a component into another component. In other words, it enhances or extends the capabilities of the component provided.

```js
const withSubscription = (WrappedComponent, selectData) => {
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const handleChange = () => {
        const newData = selectData(DataSource, props);
        setData(newData)
      }
      DataSource.addListener(handleChange)

      return () => {
        DataSource.removeListener(handleChange)
      }
    }, []);

    return <WrappedComponent data={data} {...props} />
  }
}
```

`WithSubscription` returns a new component that renders the provided component and supplies a new prop to it called `data` that will contain the most recent list of items from the `DataSource` of interest. It also passes other prompts through to the `WrappedComponent` , which is a convention in HOCs.

You would define two different components configured with custom parameters, all without having to repeat the subscription implementation in either `liveOrders` and `userList` making this a much more efficient solution. There's still one more pattern for cross-cutting concerns that you will learn about soon called render prompts.
```js
const LiveOrdersListWithSubscription = withSubscription( LiveOrders, 
() => DataSource.getOrders());

const UsersSubscribedWithSubscription =
withSubscription( UserList, 
() => DataSource.getSubscribers() );
```
***

In a previous lesson, you learned about Higher-order components (HOC) as a pattern to abstract shared behavior, as well as a basic example of an implementation.

Let's dive deeper to illustrate some of the best practices and caveats regarding HOCs.

These include never mutating a component inside a HOC, passing unrelated props to your wrapped component, and maximizing composability by leveraging the `Component => Component` signature.

1. **Don’t mutate the original component**

One of the possible temptations is to modify the component that is provided as an argument, or in other words, mutate it. That's because JavaScript allows you to perform such operations, and in some cases, it seems the most straightforward and quickest path. Remember that React promotes immutability in all scenarios. So instead, use composition and turn the HOC into a pure function that does not alter the argument it receives, always returning a new component.

```js
const HOC = (WrappedComponent) => {
  // Don't do this and mutate the original component
  WrappedComponent = () => {
    
  }; 
 …
}
```

2. **Pass unrelated props through to the Wrapped Component**

HOC adds features to a component. In other words, it enhances it. That's why they shouldn't drastically alter their original contract. Instead, the component returned from a HOC is expected to have a similar interface to the wrapped component.

HOCs should spread and pass through all the props that are unrelated to their specific concern, helping ensure that HOCs are as flexible and reusable as possible, as demonstrated in the example below:

```js
const withMousePosition = (WrappedComponent) => {
  const injectedProp = {mousePosition: {x: 10, y: 10}};

  return (originalProps) => {
    return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
  };
};
```

3. **Maximize composability**

So far, you have learned that the primary signature of a HOC is a function that accepts a React component and returns a new component.

Sometimes, HOCs can accept additional arguments that act as extra configuration determining the type of enhancement the component receives.

```js
const EnhancedComponent = HOC(WrappedComponent, config)
```

The most common signature for HOCs uses a functional programming pattern called **"currying"** to maximize function composition. This signature is used extensively in React libraries, such as React Redux, which is a popular library for managing state in React applications.

```js
const EnhancedComponent = connect(selector, actions)(WrappedComponent);
```

This syntax may seem strange initially, but if you break down what's happening separately, it would be easier to understand.

```js
const HOC = connect(selector, actions);
const EnhancedComponent = HOC(WrappedComponent);
```

`connect` is a function that returns a higher-order component, presenting a valuable property for composing several HOCs together.

Single-argument HOCs like the ones you have explored so far, or the one returned by the connect function has the signature `Component => Component`. It turns out that functions whose output type is the same as its input type are really easy to compose together.

```js
const enhance = compose(
  // These are both single-argument HOCs
  withMousePosition,
  withURLLocation,
  connect(selector)
);

// Enhance is a HOC
const EnhancedComponent = enhance(WrappedComponent);
```

Many third-party libraries already provide an implementation of the compose utility function, like lodash, Redux, and Ramda. Its signature is as follows:

`compose(f, g, h) is the same as (...args) => f(g(h(...args)))`

**Caveats**

Higher-order components come with a few caveats that aren’t immediately obvious.

Don't use HOCs inside other components: always create your enhanced components outside any component scope. Otherwise, if you do so inside the body of other components and a re-render occurs, the enhanced component will be different. That forces React to remount it instead of just updating it. As a result, the component and its children would lose their previous state.

```js
const Component = (props) => {
  // This is wrong. Never do this
  const EnhancedComponent = HOC(WrappedComponent);
  return <EnhancedComponent />;
};

// This is the correct way
const EnhancedComponent = HOC(WrappedComponent);
const Component = (props) => {
  return <EnhancedComponent />;
};
```

Refs aren’t passed through: since React refs are not props, they are handled specially by React. If you add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component. To solve this, you can use the 
!(https://reactjs.org/docs/forwarding-refs.html)  

**Conclusion**

And in summary, you have examined higher-order components in more detail. The main takeaways are never mutating a component inside a HOC and passing unrelated props to your wrapped component.

You also learned how to maximize composability by leveraging the Component => Component signature and addressed some caveats about HOC.
