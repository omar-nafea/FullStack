# What is React

React is focused on working with components, which makes it simple to build functional user interfaces on web and mobile.

Developers use React to develop single page applications and you can also develop mobile applications with React native. Consider user interface and the navigation and how the app will request data from a web server.

Therefore React is used in conjunction with other JavaScript libraries during development. What makes React so useful is that it allows developers to write less code to create functionality.

This in turn makes it easier to maintain code in the long term and simplifies testing. Because it is so central to front end development, there are many tools that you can use with the React.

These tools can help you understand how React is running your code and how you can improve performance.

### Reacts components

The key concept behind React is that it allows you to define components that you can combine to build a web application.

A component is basically a small piece of user interface, such as a music player or photo gallery.

This component model allows you to do several things

- Isolated Development
- Isolated Testing
- Re-useing components

Let's explore an example. Most Web applications have user profiles with pictures.Normally several parts of the application use a version of this profile picture, such as in the navigation bar beside the user's name.

It could also show in a user search result along with several other user pictures and the user picture might also display an instant message notifications.  

![profile](./Pics/profile.gif)  

Instead of programming the logic for every instance of a user profile picture React allows you to create a user icon component that displays a version of a profile picture every time it is used. You can then reuse this component throughout the application. There are many open source libraries that provide pre made components. for example: 

- to add a video player to your website.
- to embed a map.

You can then reuse this component throughout the application.

# Case Study: Why did Facebook engineers create React?

There are a lot of JavaScript Model-View-Controller (MVC) frameworks out there.  
Why did we build React and why would you want to use it?
React isn’t an MVC framework.

React is a library for building composable user interfaces.
It encourages the creation of reusable UI components which present
data that changes over time. React doesn’t use templates.

Traditionally, web application UIs are built using templates or HTML directives.  
These templates dictate the full set of abstractions that you are allowed to use to build your UI.

React approaches building user interfaces differently by breaking them into **components**.
This means React uses a real, full-featured programming language to render views,
which we see as an advantage over templates for a few reasons:

- _JavaScript is a flexible, powerful programming language_ with
  **the ability to build abstractions**. This is incredibly important in large applications.
- By unifying your markup with its corresponding view logic,
  React can actually make views easier to extend and maintain.
- By baking an understanding of markup and content into JavaScript,
  there’s no manual string concatenation and therefore less surface area for XSS vulnerabilities.

