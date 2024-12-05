# JSX Dive Deep
### JSX, Components and Element

JSX is a syntax extension to JavaScript that React uses to describe what the UI should look like. However, even though JSX looks like HTML, it's essentially a more powerful abstraction that combines both markup and business logic into an entity called a component.  

So what is really happening from the moment you write JSX in your render function until Reacts creates the desired assets for your pages? To understand all the steps involved, you need to be introduced to the concept of elements in React. By now, you already have a good understanding of components and how your entire UI is represented by a tree of them.  

You also know that the final web pages that React produces are nothing more than pure HTML, CSS, and JavaScript. When react analyzes your rendering methods from all your components, it takes the whole JSX tree, starting from the root and creates an intermediary representation.  
```js
// JSX
const buttonTitle = 'Submit';
    return (
    <button className='button button-blue'>
        <span>
            {buttonTitle}
        </span>
    </button>
    )

// Element
{
type: 'button',
props: {
    className: 'button button-blue',
    children: {
        type: 'span',
        children: 'Submit'
        }
    }
}
```
This representation is essentially another tree similar to before, but where each node instead of being JSX is a plain object describing a component instance or dom node and its desired properties. This plane object is what React defines as an element. An element is just a way to represent the final HTML output as a plain object. It consists primarily of two attributes, type and props.  

Type defines the type of node such as a button and props encompasses all the properties the component receives in a single object. Observe how the elements can be nested as in the button example via the children property. When react creates the entire element tree starting from the root, the root element specifies all the child elements as the children prop. And each child element does the same thing until it reaches the end of the tree. 

What is important about this new structure is that both child and parent elements are just descriptions and not actual instances. In other words, they don't refer to anything on the screen when you create them, they're just objects after all. But these objects are easy to traverse and of course are simpler than the actual DOM elements. 
```js
{
    type: SubmitButton,
    props: {
        color: 'blue',
        children: 'Submit'
    }
}
```
So far, you have been introduced to an example of a tree transformation with simple DOM nodes like a button. In the element tree, this is specified as the type property, but the type of an element can also be a function corresponding to a React component. Imagine you have created a component to encapsulate the traditional HTML button named Submit button. In this case, the type property of the element will point to the name of the component. 
```js
// JSX
const Logout = () => { 
    <div>
        <p>Are you sure?</p>
        <SubmitButton color="blue">Yes</SubmitButton>
    </div>
}

// Elements tree
{
type: "div",
props: {
    children: [
    {
        type: "p", 
        props: {
            children: "Are you sure?",
        },
    },
    {
        type: SubmitButton,
        props: {
            color: "blue",
            children: "Yes",
        },
      },
    ],
  },
}
```
This is the fundamental idea of React, both user defined components and dom nodes can be nested and mixed with each other in the elementary. For example, if you were creating a log out process for the Little Lemon restaurant app, you could do this with a log out component in JSX. 

In this log out component, The JSX would translate to the following tree of elements. That allows you to mix and match components and dom elements as the type property without worrying about whether Submit button renders to a button, a diff or something else entirely. This keeps components decoupled from each other, expressing their relationships through composition. 
```js
// Function Component
{
        type: SubmitButton,
        props: {
            color: "blue",
            children: "Yes",
        },
}

// Element
{
type: 'button',
props: {
    className: 'button button-blue',
    children: {
        type: 'span',
        children: 'Submit'
        }
    }
}
```
When react sees an element with a function type like the submit button, it will know to ask that component what element it renders to with the given props. So React will ask Submit button again what it renders to and it will transform that into an element. React will keep repeating this process until it knows the underlying DOM tag elements for every component on the page.


Once React finishes the process of identifying all user defined components from the tree of elements, it will convert them into DOM elements. The result is what is generally known as the virtual DOM. A JavaScript alternative representation of the real DOM. Now, what are the steps involved when there is a new change in your UI. 

First, React will take all your JSX and produce a new UI representation as a tree of elements.  

Second, it will compare it with the previous representation that is kept in memory. 

![](../Pics/diffingOperationInReact)

Third, it will calculate the difference in a tree, recall that since each node in the tree is a JavaScript object, this diffing operation is very fast.  

And finally based on that difference, it will apply the minimum number of changes to the underlying dom nodes in order to process the update, and that's it. 

You are probably starting to appreciate the beauty of the React declared of programming model. In this video, you have learned how react uses JSX to describe a UI, the differences between components and elements and the general concept behind the React declarative model. You have also seen the react transforms your JSX into an internal tree of elements, which are just JavaScript objects. 