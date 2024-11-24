# Props and children

You learned to pass props to and within a component. But there is also a special prop called props.children, which is automatically passed to every component.

### what is `props.children`

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

There are two ways to perform this action. But this is just the beginning, What if you, say, wanted to surround the Hello there text in an `h3` HTML element.

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
```js

<Bag children={<Apples color="yellow" number="5" />} />
// And here's how you'd render the Bag component, wrapping the Pears component:
<Bag children={<Pears friend="Peter" />} />
```
**While the above syntax might look strange, it's important to understand what is happening. Effectively, the above syntax is the same as the two examples below.**
```js
<Bag>
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

### What is Apples to Bag in the above code?

Apples is a prop of the Bag component. To explain further, the Bag component can wrap the Apples component, or any other component, because I used the `{props.children}` syntax in the Bag component function declaration. In other words, just like in the real world, when you take a bag to a grocery store, you can “wrap” a wide variety of groceries inside the bag, you can do the same thing in React: wrap a wide variety of components inside the Bag component, using the children prop to achieve this.

It's crucial to understand this when working with React.
There's another important concept that you need to be aware of:  

finding the right amount of modularization. What does this mean? Imagine, for example, that you had a number of small bags, and that each bag could only carry a single apple or pear. You'd have to wrap each "apple" inside a "bag". That doesn't make much sense. You can think about components making your layouts modular in a similar way. You don't want to have an entire layout contained in a single component, because that would be very difficult to work with. On the flip side, if you made each HTML element in your layout a separate component, it would be very hard to work with, although such layout would be modular. So it's all about moderation. You need to organize your layouts by splitting them into meaningful areas of the page, and then code those meaningful areas as separate components. that would constitute the right amount of modularity. To reinforce this point, It might help to think of how a person would describe a website: a menu, a footer, a shopping cart, etc.

In conclusion, when you see a JSX element wrapping another JSX element, you can easily understand that it's all just props.children in the background.


### Styling JSX elements

You’ve observed that JSX is incredibly versatile, and can accept a combination of JavaScript, HTML and CSS.  In this reading, you'll learn some approaches for styling JSX elements and doing so in a way that achieves both a functional and visual aspect within an app.

There are various ways to style JSX elements.

Probably the simplest way to do this is using the link HTML element in the head of the index.html file in which your React app will mount.

The `href` attribute loads some CSS styles, probably with some CSS classes, and then, inside the function component's declarations, you can access those CSS classes using the `className` attribute.
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

As explained previously, this means that whatever code you add inside these opening and closing curly braces is to be parsed as regular JavaScript.  
**Now let’s add a style object literal inside of these curly braces**:
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

So, there's nothing special about this object, except for the fact that you’ve inlined it and placed it inside a pair of curly braces. Additionally, since it's just JavaScript, those CSS properties that would be hyphenated in plain CSS, such as, for example, `font-size:40px`, become **camelCased**, and the value is a string, making it look like this: `fontSize:"40px"`.

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

