## Preprocessors: sass, scss

CSS preprocesses are special compilers used to create a CSS file that can be referenced by an HTML document. They are generally used to reduce the amount of CSS you need to write and allow you to re-use values across multiple rules. 

Preprocessors provide audit functionality on top of the CSS features already present. Some of the features of preprocessors include the option to create variables, loops, and if else statements.   
The use of these preprocessors requires the installation of a compiler on top of your web server.

### SASS and SCSS

Syntactically Awesome Style Sheets (SASS) is a scripting language that CSS compiles and interprets into CSS. SCSS, which stands for Sassy CSS is the syntax for SASS and can be seen as an advanced version of both SASS and CSS. The difference between SASS and SCSS is best explained by the SASS documentation, which states:

"There are two syntaxes available for Sass. The first, known as SCSS (Sassy CSS) and used throughout this reference, is an extension of the syntax of CSS. This means that every valid CSS stylesheet is a valid SCSS file with the same meaning. This syntax is enhanced with the Sass features described below. Files using this syntax have the .scss extension.

The second and older syntax, known as the indented syntax (or sometimes just “Sass”), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate the nesting of selectors and newlines rather than semicolons to separate properties. Files using this syntax have the .sass extension."

This example highlights these differences.

Regular CSS:

```css
body { 
    font: 100% Arial; 
    color: lightblue; 
}
```

This is the SCSS:

```scss
$font-stack: Arial; 
$primary-color: lightblue; 

body { 
  font: 100% $font-stack; 
  color: $primary-color; 
}
```

SASS for the same block:

```
$font-stack: Arial 
$primary-color: lightblue 

body 
  font: 100% $font-stack 
  color: $primary-color
```

The variables have been defined at the top with labels such as `$font-stack` and `$primary-color`. This is done with the `$` suffix. The result for both will be the same, and it is not hard to imagine how much time this can save for the developer in complex code blocks where there are a number of occurrences of `lightblue` color. These variables are placed at the top of the SCSS page.

In the case of SASS, the variation has mainly removed the curly brackets and semi-colons from the code.

The nesting of selectors and separation of properties here is done by means of indentation. You should note that all this syntax is valid and will produce the same output.

For someone familiar with programming concepts, these preprocessors also allow the usage of math and other functions that can be utilized for adding rules conditionally.

Another important functionality in SASS is the use of directives. Let us explore a couple of directives called `@mixin` and `@include`.

```scss
@mixin *name* {
*property*: *value*;
*property*: *value*;
  ...
}
```
```scss
@mixin some-rules { 
    color: lightblue; 
    font-size: 25px; 
    font-weight: bold; 
}
div { 
    @include some-rules; 
}
```

There are two directives `@mixin` and `@include`, that are used here. In the first step, you will add properties that you want to reuse inside `@mixin`.

In the second step, you use the second directive `@include` and add the mixin identifier that you have created using the `@mixin` directive.

Similar to these, there are a couple of other directives that are also used. `@import` allows the import of rules from another file, and `@extend` allows all the rules from a specific selector to be added inside another selector.

### Stylus CSS

Now that you know how preprocessors behave let us explore one more of their type, called Stylus. If you continue to use the example above, the code for Stylus will look like this:

```
body 
  font 100% Arial 
  color lightblue
```

It is not hard to miss the simplicity of the code without the colons, brackets or semicolons. But you should note that it is still allowed to use all of them in Stylus without any error. Similarly, you can also use ‘$’ or any other symbol before variables, but you are not ‘required’ to do so.

For someone unfamiliar with programming, functions are a block of self-contained code that consists of steps designed to accomplish and obtain the desired output. The preprocessors, as mentioned, allow the use of functions. Here is an example of this using Stylus.

```
add(a, b) 
  a + b 
div 
  margin add(10px, 20px)
```
There are other features available for preprocessors too. And, just like any programming language, the space of CSS preprocessors is also competitive, and by no means are these the only options available.

### Debugging the front-end


One of the best practices you can apply to avoid common errors is using shorthand. A code with four properties can be written using one property instead. 

Another best practice is applying specificity. Understanding specificity while writing code can also help you to avoid errors 


Over specificity can lead to increase loading time for browsers because they need to apply specific rules. A good practice in programming is to apply the rules as broadly as possible. 

For example, where possible applied over a container instead of to the content inside it. While the errors and practices mentioned are by no means exhaustive, the best way to learn is by designing more web pages and integrating good practices into your code as you go. 

You should also avoid the redundancy of rules, selectors, and properties to prevent confusion. When using different selectors, you can end up applying rules more than once to target the same element. 

Another good practice is performing a CSS reset using a universal selector before you begin writing your code. 

You may have come across websites that have misaligned or overflowing text, broken web links or websites that take too much time to load. While the front-end and back-end both contribute to faulty web pages, visible styling is primarily concerned with the front-end. 

CSS is a styling language, unlike conventional programming languages such as Python and Java, that has controls and follows a logical structure. This can make it difficult to find the exact root of the problem. Additionally, as you know, CSS does not flag errors, and most of the ‘bugs’ that you see in CSS are aesthetic in nature and need human intervention to solve.  The task of debugging the front-end is more about experience than knowledge.   

The first step in debugging CSS is to find the root of the issue and isolate the elements involved. The majority of CSS issues will be with the layout, such as:  

- Content overflow from parent to child or container class
- Misplaced elements in relation to its container class   
- Browser and device-related inconsistencies resulting in variable viewports

### Isolation by reduced test case  

One way to deal with a problem is to replicate your code and systematically remove any code unrelated to the HTML and CSS elements that could be the source of the problem. The code should be distilled down to the least amount of code possible, and only then are suitable changes made to get the results you want. Alternatively, you can enable rules one at a time to observe their impact on the displayed elements.   
Items inside containers  

Often, isolation will not work, as the problem is the result of the relative mapping of elements. For example, with the misconfigured width of an item inside a flex layout. It’s important to check the use of suitable CSS properties in such cases. For a given item inside a grid, depending on the use case, width, grid-template-column, margin and padding can all be used to give spacing to an element. Additionally, you can also set different units that will all have their own behavior. In most cases, it helps to be familiar with the unit of measurement in relation to the container type to avoid misconfigurations.    

### Relocating items  

Similar to the isolation of elements, you can move a certain element to observe its behavior. Doing a comparison can often help you to understand the source of the problem.   

The CSS compiler reads the elements from right to left. As an example, for a selector such as div .alpha > p, the element read first will be p before moving ‘outside’. When you change the position of the p from inside the .alpha class to some other position inside your code, it is easier to debug the source of the problem. This should be done on a case-specific basis.     

### Getting familiar with the box model  

The box model is a very powerful source of information and can solve many issues with alignment. Using margin, padding and border is useful, but can be tricky and must be well understood.     
Browser issues  

Many times, the styling you have renders correctly in the IDE but misbehaves in a browser. That is because browsers have their own default CSS stylesheets called user-agent styles. While modern-day browsers are mostly compatible, you may encounter minor inconsistencies. Overriding the browser's settings can be done with universal selectors, in such cases written at the top of the code, and will include properties such as `margin: 0px;` to reset the margin values set by the browser by default.     

### Dev tools  

There are lots of user-friendly tools available today that can help debug CSS. However, the best tool you can use is the one provided by the browsers, called the developer tools, or dev tools. You can find these by right-clicking on a web page and selecting ‘Inspect Element’. option Note how every browser has its own expression when it comes to the configuration options, but fundamentally they are similar. Browsers today are very powerful pieces of software. If you spend time exploring the options, you may not need any other additional tools or software for debugging CSS and other front-end languages.     


There are responsive design modes in CSS that allow you to render your webpage to a specific browser or device. In addition to these, there are numerous ways in which you can explore and configure settings inside dev tools. 

When it comes to designing and styling CSS, if you don’t understand how it works, all issues will appear to be bugs. If you look at the fundamental structure of CSS, it consists of rulesets containing selectors and declaration blocks that contain properties and values. Micro-assessment of formatting and its validity can be done to troubleshoot the source of the problem. Practicing the creation of web pages and exploring the dev tools is the best way to get better at debugging and CSS in general.

You can use the box model to identify the outcome of the CSS rules applied to an element. This will help pinpoint if a CSS rule is incorrectly applied or has an incorrect property value. 

As new features are added to the CSS specification, compatibility issues can occur while the different browsers decide on the implementation of the new features. While all the major browsers are mostly in alignment on how CSS is implemented, there are still browser-specific differences that occur, each browser has its own default CSS properties for different HTML elements. Most browsers have their own specific engines that are used for rendering HTML and CSS. 


developers can use one of check browser-specific CSS compatibility sites to check if the rules in the CSS rule is compatible with all the different browsers. There are also websites that provide a virtual environment where you can select specific browsers and their versions. In these virtual environments, you can insert your code in the browser or run a website that you built that is already live to see how it works. It's also important to check the compatibility and rendering of websites on mobile devices that typically have different configurations than a website on a desktop.


First, I need to ensure that my CSS code is compatible with the browser. Queries require the use of media rules. These rules are used to apply different styles to different media types or devices. The webkit main device pixel ratio, or webkit device pixel ratio is a media query rule which is used to specify the density of the schemes. These webkit rules are part of the media query rule used as a non-standard way of setting parameters for aspects such as screen resolution, viewport, height of the browser, and so on. I've set the value to be zero for this example, typically the values are 0.75, 1, or 1.5. I can also set the properties for specific rules. 

If I want to configure some of the settings only for specific browsers, I can do that as well. 

CSS libraries available to help ensure that your CSS rules are consistent across browsers, such as modernizer, reset.css, and normalized.css. 


The most common strategies used during development are;
- automated user acceptance testing,
- cross-device testing, 
- and visual regression testing.

Cross-device testing involves the manual or automated use of different devices to test the layout and behavior of an application. The goal of this testing strategy is to ensure user experience consistency between different devices. Think of all the different mobile devices and their screen sizes and internal hardware, there are a lot of possibilities. 