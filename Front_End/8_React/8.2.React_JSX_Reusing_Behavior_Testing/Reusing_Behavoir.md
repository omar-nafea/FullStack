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

### Create a HOC for cursor position

```js
const PanelMouseLogger = ({mousePosition}) => {
  if (!mousePosition) {
    return null
  }
  return (
    <div className="BasicTracker">
      <p>Mouse Position:</p>  
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  )
}

const PointMouseLogger = ({mousePosition}) => {
  if (!mousePosition){
    return null
  }

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  )
}

function App() {
  return (
    <div className="App">
      <header className="Header">
      Little Lemon Resturent</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  )
}

export default App
```

They both expect a mouse position prop and will return null if that prop is not provided. That's why at the moment they don't render anything at all. You could implement the mouse tracking logic in each component but recall that it would incur code repetition and duplication of the same logic in two different places. That's why the recommended approach is to use one of the techniques that React provides for encapsulating cross-cutting concerns. 

I call this HOC `withMousePosition`. The `with` part of the name is a general convention recommended by React since it expresses the enhancing nature of the technique, like providing a component with something else. Recall that an HOC is essentially a function that takes a component and returns a new component. Let's complete the initial scaffold and return a component that will render the wrapped component provided to the function without forgetting to spread the props it receives, so that they will pass-through.

```js
const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    })

    return <WrappedComponent {...props} />
  }
}
```

Great. Now to track the position of the cursor, I would need to define a new piece of local state, which I'll call mouse position for the data and set mouse position for the state setter.

X equals 0 and y equals 0, represents the top-left corner of the screen.  
Next, I would need to set a global listener in the window object for the mouse move events. Since this is a side-effect, I need to perform the subscription and unsubscription logic inside use effects.


For the call back, I will name the function handleMousePositionChange. That for now, doesn't do anything. It's important to remove any subscription when your component unmounts. The way to do that is by returning a function from use effect and then performing any cleanup needed. In this case, I would have to use the window.removeEventListener passing as arguments, the mouse move event and the same callback function as before. 
```js
useEffect(() => {
  const handleMousePositionChange = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })

  }
  window.addEventListener("mouseover", handleMousePositionChange)

  return () => {
    window.removeEventListener("mouseover", handleMousePositionChange)
  }
})
```
To complete the logic and set the state with current mouse position, I need to read that information from the browser event object, which is passed as an argument to the callback. That event object contains two properties that define the coordinates, clients X and client Y. I will assign both of them to the corresponding dimension.

Finally, the last step to complete the implementation is to set a new prop called mouse position in the rapt component to pass that information down to all components that are interested in that data.
```js
const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

function App() {
  return (
    <div className="App">
      <PanelMouseTracker />
      <PointMouseTracker />
  )
}
```   
To enhance the two components previously defined panel mouse logger and point mouse logger, I will use the HOC to create two new component versions that will be aware of the mouse position data and I'll call them panel mouse tracker and point mouse tracker respectively. Finally, I will use the enhanced versions in the rendering part of the app component.

## Render props

For Example, There are various ways to define the fetching logic like a higher order component. However, render props is also a powerful technique you can leverage to reuse common code. The render props technique is so appropriately named that it's almost self explanatory. It's about using a prop called render with a particular attribute that it has to be a function. To be more precise, a component with a render prop takes a function that returns a react element and calls that function inside its render logic. 

```js
<MealProvider render={data => (
  <p>Ingredients: {data.ingredients}</p>
)} />
```

A higher order component enhanced a component by providing new props into it with render props. However the new props are injected dynamically as the parameter of the function. The end goal is the same to enhance components without modifying their original implementation. 

The logic for fetching data is one example of a cross cutting concern. Multiple components may depend on data that lives somewhere else but you don't want to implement the same fetching logic over and over in every component that needs it. Right this is a good place to use the render props pattern to abstract this functionality

I have created a component called DataFetcher whose only purpose is to fetch data based on a URL. This is one of its props but it's the second one that should catch your attention and that's the render prop. I'm not fetching real data in this example but I have created a mock if else statement that will return either a list of all desserts or drinks available based on the URL.

```js
const DataFetcher = ({render, url}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (url.include("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"])
    } else {
      setData(["water", "soda", "juice"])
    }
  }, [])
  
  return render(data)
}
```
Path as usual. This fetching logic is a side effect that should be placed inside use effect. Finally let's move to the return statement. This is the unusual part. The component is returning the result of calling the render function and has no other rendering business. This is what makes it very flexible. DataFetcher only has one purpose fetching data and the way they receive it is via the argument in the render function which is the local state used to store the list of desserts or drinks.   
It's then up to the developers to decide how they would like to present that data on the screen. 

```js
const DessertCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}/>
  )
}

const DrinkCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}/>
  )
}

function App() {
  return (
    <h1>Little Lemon Resturent</h1>
    <DrinkCount />
    <DessertCount />
  )

}
```
Finally, let's explore the two presentational components. I have defined to show the number of desserts and drinks available in the menu. The desserts count component uses a particular endpoint to fetch desserts and uses a paragraph element as the render prop, displaying the number of desserts as a single text. The same applies to the drinks count component with the difference being that he utilizes another URL. And instead shows a header element reflecting the number of drinks. 

```js
import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
          x: e.clientX,
          y: e.clientY,
        })
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  // return null;
  return render({ mousePosition });
};
// This component should not receive any props
const PanelMouseLogger = ({}) => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
      </div>
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = ({}) => {
  // The below if statement can be removed after the render props pattern is implemented
  // if (!mousePosition) {
  //   return null;
  // }
  return (
    // <p>
    //   ({mousePosition.x}, {mousePosition.y})
    // </p>
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  )
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
```

