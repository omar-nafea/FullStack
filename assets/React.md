.

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

