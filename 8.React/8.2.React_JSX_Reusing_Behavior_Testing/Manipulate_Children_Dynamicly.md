React has APIs that allow developer to manipulate children they are:

`React.cloneElement` is part of the react top-level API and it's used to manipulate and transform elements. Top-level API refers to the way you would `import` those functions from the react package. You can either `import` react as a global object and the top of your file and access them as methods on that object.
```js
import React from 'react'
React.cloneElement(...)
```
Or alternatively as a named import.
```js
import { cloneElement } from 'react'
cloneElement(...)
```
Recall that elements are just plain JavaScript objects. The react uses internally to describe what you want to appear on the screen.
```js
{
    type: SubmitButton,
    props: {
        color: 'blue',
        children: 'Submit'
    }
}
```
`React.cloneElement` effectively clones and returns a new copy of a provided element. The first argument is the react element you would like to clone, and the second argument is the prompts that will be added and merged with the original props passed into the component.
```js
React.cloneElement(element, [props])
```
**Remember that prompts in react are immutable objects. You must create a copy of the element first and perform the transformation in the copy.**

That's exactly what React.cloneElement allows you to achieve. This API is useful to allow a parent to perform the following operations;

* modify children properties,
* add to children properties and
* extend the functionality of children components.

```js
const buttonElement = {
    type: SubmitButton,
    props: {
        color: 'blue',
        children: 'Submit'
    }
}
const output = React.cloneElement(buttonElemen, {disabled: false})
```
For example you could add another prop dynamically to the submit button element illustrated before.
```js
{
    type: SubmitButton,
    props: {
        color: 'blue',
        children: 'Submit',
        disabled: false,
    }
}
```
Another important top-level API useful for children manipulation is react.children, which provides utilities for dealing with the props.children data structure. The most important method is the map function.
```js
React.Children.map(children, callback)
```
React.children.map is very similar to the map function from arrays and **invokes a function in every child contained within its children prop, performing a transformation and returning a new element**
```js
const Row = ({ children }) => {
  return (
    <div className="Row">
        {children}
    </div>
  );
};

function LiveOrders() {
  return (
    <div className="App"> <Row spacing={32}>
      <p>Pizza Margarita</p>
      <p>2</p>
      <p>30$</p>
      <p>18:30</p>
      <p>John</p>
    </Row>
    </div>
    );
}
export default LiveOrders;
```
use the `children.map` function to iterate through each child. I will create a new prop called spacing. Now that the style is defined, I need to attach it as the style prop in each element. In the map function callback, **I'll return a new copy of the element using `React.cloneElement`.** 

The second argument is what lets you specify the new props. In this case, I'd like to add a new style prop that will merge the previous style. If the element is not the first child, then I'll also merge the child style object that contains the margin left statement. 
```js
const Row = ({ children, spacing }) => {

    const childStyle = {
        marginLeft: `${spacing}px`,
    }
  return (
    <div className="Row">
        {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                style: {
                    ...child.props.style,
                    ...(index > 0 ? childStyle : {}),
                }
            })
        })}
    </div>
  );
};
```
Mapping over Children:

- `React.Children.map` is used to iterate over all children. It ensures that even if children are not an array (e.g., a single child), it handles them uniformly.
- `React.cloneElement`: For each child, it creates a new React element based on the original child, adding or modifying its props (in this case, adding or merging the style prop).

Style Merging:

- The component checks the index of each child.
- For the first child `(index === 0)`, no additional margin is applied.
- For subsequent children `(index > 0)`, childStyle is merged into the existing style prop of the child.

The style object of each child is merged to retain any pre-existing styles while adding the new marginLeft property:
```js
style: {
  ...child.props.style, // Existing styles (if any)
  ...(index > 0 ? childStyle : {}), // Add marginLeft only for subsequent children
}
```

### Build a Radio Group Component

```js
import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
}; 
```

Step 1

The API for the `RadioGroup` component is defined as two props: `selected`, which is a string that matches one of the `RadioOption` values and `onChange`, which is the event that gets called whenever a selection changes, providing the new value as an argument.
```js
<RadioGroup onChange={setSelected} selected={selected}> 
 <RadioOption value="social_media">Social Media</RadioOption> 
 <RadioOption value="friends">Friends</RadioOption> 
 <RadioOption value="advertising">Advertising</RadioOption> 
 <RadioOption value="other">Other</RadioOption>
</RadioGroup> 
```

Step 2

The `RadioOptions` variable should be assigned to the return value of `React.Children.map`, which will be a new React element. The first argument passed to the map function should be the children prop, and the second is a function that gets invoked in every child contained within the children property. Recall that a children prop is a special prop all React components have and that it presents a special data structure, similar to arrays, where you can perform iterations. However, they are not exactly instances of JavaScript arrays. That’s why to iterate over all siblings you should use the special `React.children.map` API provided by React.

Inside the map projection function, you should first clone the element using `React.cloneElement`, passing as first argument the target child element and as a second argument a configuration with all new props. The resulting element will have the original element’s props with the new props merged in.

`onChange` can be passed to each child (`RadioOption`) as it is and checked is the property the `RadioOption` uses to determine if the underlying radio input is selected. Since `RadioGroup` receives a selected property, which is a string pointing to the value of the option that has been selected, checked will be only true for one of the options at any point in time. This is guaranteed by performing an equality check, comparing the `RadioOption` value prop with the `selected` value.

Finally, the `RadioGroup` component returns the new `RadioOptions` elements by wrapping them in curly braces.

Step 3

The `RadioOption` component now receives two new props implicitly, `onChange` and `checked`, that `RadioGroup` is injecting via children manipulation, as seen in the previous section.

The `value` prop is already provided explicitly inside the `App.js` component and children represents the label text for the radio input. 

You have to connect the props `value`, `checked` and `onChange` correctly. First, both value and checked props should be passed to the `radio` input as is. Then, you should use the `onChange` event from the `radio` input, retrieve the value property from the `event target object` and pass it to the `onChange` prop as the argument. 
