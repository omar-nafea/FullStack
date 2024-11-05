# Props and children

You learned to pass props to and within a component. But there is also a special prop called props.children, which is automatically passed to every component.

To understand the concept of props.children, consider the following real-life situation: you have a couple of apples, and you have a couple of pears. You'd like to carry the apples some distance, so obviously, you'll use a bag.

It's not a "bag for apples", and it's not a "bag for pears." It's just a bag. Nothing about this bag makes it such that it needs to be referred to as a bag in which you'd only and always carry apples, nor a bag in which you'd only and always carry pears.

In a way, the bag "doesn't care" if it is used to carry apples or pears. Nothing about the bag changes. There are no changes in the bag's material, size, shape, or color - because it can handle apples or pears being carried inside, without issues.

Now, consider the following component
```js
function Apples(props) {
  return (
    <div className="promo-section">
        <div>
            <h2>These apples are: {props.color}</h2>
            </div>
            <div>
            <h3>There are {props.number} apples.</h3>
        </div>
    </div>
  )
}
export default Apples

function Pears(props) {
  return (
    <h2>I don't like pears, but my friend, {props.friend}, does</h2>
  )
}
```
Now, the question is this: Let's say you want a Bag component, which can be used to "carry" Apples or Pears. How would you do that?

This is where props.children comes in. You can define a Bag component as follows:
```js
function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag
```
So, what this does in the Bag component is: it adds a wrapping div with a specific styling, and then gives it props.children as its content.

But what is this props.children? Consider a very simple example:

```jsx
<Example>
    Hello there
</Example>
```
The Hello there text is a child of the Example JSX element. The Example JSX Element above is an "invocation" of the Example.js file, which, in modern React, is usually a function component.

This Hello there text can be passed as a named prop when rendering the Example component.

Here's what that would look like:
```js
<Example children="Hello there" />
```

There are two ways to perform this action. But this is just the beginning, What if you, say, wanted to surround the Hello there text in an h3 HTML element, Obviously, in JSX, that is easily achievable

```jsx
<Example children={<h3>Hello there</h3>} />
```

What if the `<h3>Hello there</h3>` was a separate component, for example, named Hello, In that case, you'd have to update the code like this:
```js
<Example children={<Hello />} />
// You could even make the Hello component more dynamic, by giving it its own prop:
<Example children={<Hello message="Hello there" />} />
```
So, how can you make the Bag, Apples, and Pears examples from the beginning of this reading work?

Here's how you'd render the Bag component with the Apples component as its props.children:
1
```js
<Bag children={<Apples color="yellow" number="5" />} />
// And here's how you'd render the Bag component, wrapping the Pears component:
<Bag children={<Pears friend="Peter" />} />
```
While the above syntax might look strange, it's important to understand what is happening. Effectively, the above syntax is the same as the two examples below.
```js
Bag>
    <Apples color="yellow" number="5" />
</Bag>

<Bag>
    <Pears friend="Peter" />
</Bag>
```
You can even have multiple levels of nested JSX elements, or a single JSX element having multiple children, such as, for example:
```jsx
<Trunk>
    <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
    </Bag>
</Trunk>
```
So, in the above structure, there's a Trunk JSX element, inside of which is a single Bag JSX element, holding an Apples and a Pairs JSX element.
Before the end of this reading, consider this JSX element again:
```js
<Bag>
    <Apples color="yellow" number="5" />
</Bag>
```
What is Apples to Bag in the above code?

In the above code, Apples is a prop of the Bag component. To explain further, the Bag component can wrap the Apples component, or any other component, because I used the {props.children} syntax in the Bag component function declaration. In other words, just like in the real world, when you take a bag to a grocery store, you can “wrap” a wide variety of groceries inside the bag, you can do the same thing in React: wrap a wide variety of components inside the Bag component, using the children prop to achieve this.

It's crucial to understand this when working with React.

Before the end of this reading, there's another important concept that you need to be aware of: finding the right amount of modularization. What does this mean? Imagine, for example, that you had a number of small bags, and that each bag could only carry a single apple or pear. You'd have to wrap each "apple" inside a "bag". That doesn't make much sense. You can think about components making your layouts modular in a similar way. You don't want to have an entire layout contained in a single component, because that would be very difficult to work with. On the flip side, if you made each HTML element in your layout a separate component, it would be very hard to work with, although such layout would be modular. So it's all about moderation. You need to organize your layouts by splitting them into meaningful areas of the page, and then code those meaningful areas as separate components. that would constitute the right amount of modularity. To reinforce this point, It might help to think of how a person would describe a website: a menu, a footer, a shopping cart, etc.

In conclusion, when you see a JSX element wrapping another JSX element, you can easily understand that it's all just props.children in the background.


### Styling JSX elements

You’ve observed that JSX is incredibly versatile, and can accept a combination of JavaScript, HTML and CSS.  In this reading, you'll learn some approaches for styling JSX elements and doing so in a way that achieves both a functional and visual aspect within an app.

There are various ways to style JSX elements.

Probably the simplest way to do this is using the link HTML element in the head of the index.html file in which your React app will mount.

The href attribute loads some CSS styles, probably with some CSS classes, and then, inside the function component's declarations, you can access those CSS classes using the className attribute.
```js
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```
In CSS:
```css
.promo-section {
    font-weight: bold;
    line-height: 20px;
}
```

Another way to add CSS styles to components is using inline styles.

The syntax of inline styles in JSX is a bit custom.

Consider a starting Promo component, containing code that you encountered earlier:
```js
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Promo;
```

Now you can add some inline styles to it:
```js
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Promo;
```
You can start updating the Promo component by adding the JavaScript expression syntax:
```js
<h1 style={}>
```

As explained previously, this means that whatever code you add inside these opening and closing curly braces is to be parsed as regular JavaScript. Now let’s add a style object literal inside of these curly braces:
```js
<h1 style={{color:"tomato",fontSize:"40px"}}>
```

You can then re-write this object literal:
```js
{
    color: "tomato",
    fontSize: "40px"
}
```

So, there's nothing special about this object, except for the fact that you’ve inlined it and placed it inside a pair of curly braces. Additionally, since it's just JavaScript, those CSS properties that would be hyphenated in plain CSS, such as, for example, `font-size:40px`, become *camelCased*, and the value is a string, making it look like this: `fontSize:"40px"`.

Besides inlining a style object literal, you can also save it in a variable, and then use that variable instead of passing an object literal.

That gives you an updated Promo component, with the styles object saved as a JavaScript variable:
```js
function Promo(props) {

const styling = {
    color: "tomato",
    fontSize: "40px"
}

return (
        <div className="promo-section">
            <div>
                <h1 style={styling}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```
Using this approach makes your components more self-contained, because they come with their own styles built-in, but it also makes them a bit harder to maintain.


### JSX syntax and the arrow function

##### Components as Function Expressions

Up to this point, you’ve likely only observed ES5 function declarations used to define components in React. However, this is not the only way to do it.

In this reading, you learn about some alternative approaches, specifically by using function expressions and arrow functions.

##### Function Expressions

Let’s start with a function declaration used as a component in React:
```js
function Nav(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```
This component's code returns a list item containing the value of the ‘first’ prop.

Now, let's change this function declaration to a function expression:
```js
const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

The component is, for the most part, the same. The only thing that's changed is that you’re now using an anonymous (nameless) function, and assigning this anonymous function declaration to a variable declared using the const keyword, and the name Nav. The rest of the code is identical.

Changing a component from a function declaration to a function expression doesn't change its behavior, or how you write the code to render the Nav component. It's still the same:
```jsx
<Nav first="Home" />
```

You can also take this concept a step further, using arrow functions.

##### Components as Arrow Functions

Arrow functions are a core feature of the ES6 version of JavaScript.

One of the main benefits of using arrow functions is its shorter syntax.

Consider the Nav function expression written as an arrow function:
```js
const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```
So, the way to think about this is the following:

- The arrow itself can be thought of as the replacement for the function keyword. 
- The parameters that this arrow function accepts are listed before the arrow itself. 

To reiterate, take the smallest possible anonymous ES5 function:
```js
const example = function() {}
```

And then observe how this is written as an arrow function:
```js
const example = () => {}
```

Another important rule regarding arrow functions is that using the parentheses is optional if there's a single parameter that a function accepts.

In other words, another correct way to write the previous Nav arrow function component would be to drop the parentheses around ‘props’:
```js
const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
```

In all other cases, when you write arrow functions, for any number of parameters other than a single parameter, using parentheses around parameters is compulsory.

For example, if your Nav component wasn't accepting any parameters, you'd code it with empty parentheses:
```js
const Nav = () => {
    return (
        <ul>
            <li>Home</li>
        </ul>
    )
}
```
Another interesting thing about arrow functions is the implicit return. However, it only works if it's on the same line of code as the arrow itself. In other words, the implicit return works if your entire component is a single line of code.

To demonstrate how this works, let’s re-write the Nav component as a one-liner:

```
const Nav = () => <ul><li>Home</li></ul>
```

Note that with the implicit return, you don't even have to use the curly braces that are compulsory function body delimiters in all other cases.
Using Arrow Functions in Other Situations

In React, just like in plain JavaScript, arrow functions can be used in many different situations. One such situation is using it with, for example, the forEach() built-in array method.

For example:
```js
[10, 20, 30].forEach(item => item * 10)
```

The output of the above vanilla JavaScript line of code would be three number values:

**100**
**200**
**300**

As a side-note, the term "vanilla JavaScript" is often used to describe the plain, regular JavaScript language syntax, without any framework-specific or library-specific code. For example, React is a library, so in this context, saying that a piece of code is "vanilla JavaScript" means that it doesn't need any special library to run. It can run in "plain" JavaScript without any additional dependencies.

You could also write this code in ES5 syntax:
```js
[10, 20, 30].forEach(function(item) {
        return item * 10
    }
)
```

Regardless of how you write it, the forEach() method can be run on an array. The forEach() method accepts a single parameter: an anonymous function. If you write this anonymous function in ES5 syntax, then it would contain a return statement:
```js
function(item) {
    return item * 10
}
```

If you write it as an ES6 function instead, it can be simplified as one line:
```js
item => item * 10
```

Both these functions perform the exact same task. Only the syntax is different. The ES6 function is a lot shorter because:

- The arrow function has a single parameter, so you do not need to add parentheses around the item parameter (to the left of the arrow) 
- Since the arrow function fits on one line of code, you don’t need to use curly braces around the function body, or the return keyword; it's implicit 

Arrow functions are used extensively in JSX in React, and getting used to their syntax and being able to "mentally parse" it as you read it is an important skill to have and helps you get better at writing React apps.

Now that you have completed this reading, you’ve learned about some alternative approaches, specifically by using function expressions and arrow functions.