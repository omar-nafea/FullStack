# JavaScript Strict Mode

## Introduction

Strict mode is a way to opt in to a restricted variant of JavaScript. By invoking strict mode, you opt into a more restrictive version of JavaScript that helps you write safer code and avoid common coding mistakes. It changes previously accepted "bad syntax" into real errors.

## Invoking Strict Mode

### For entire scripts

To invoke strict mode for an entire script, add the exact statement `"use strict";` (or `'use strict';`) before any other statements.

```javascript
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### For functions

To invoke strict mode for a function, put the exact statement `"use strict";` (or `'use strict';`) in the function body before any other statements.

```javascript
function strict() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return "Hi! I'm a strict mode function! " + nested();
}

function notStrict() {
  return "I'm not strict.";
}
```

### For modules and classes

All code within ECMAScript modules and classes is automatically in strict mode, with no statement needed to initiate it.

```javascript
// In a module or class, strict mode is applied automatically
export function strict() {
  // Already in strict mode by default
  return "I'm in strict mode!";
}
```

## Changes in Strict Mode

### Converting mistakes into errors

Strict mode changes some previously-accepted mistakes into errors. JavaScript was designed to be easy for novice developers, and sometimes it allows operations that should be errors to instead silently fail or do something unexpected. Strict mode treats these mistakes as errors so they're discovered and promptly fixed.

#### Prevents accidental global variables

In normal JavaScript, mistyping a variable in an assignment creates a new property on the global object. In strict mode, this will throw an error.

```javascript
"use strict";
// Assuming no global variable 'mistypedVariable' exists
mistypedVariable = 17; // Throws ReferenceError
```

#### Makes assignments that would otherwise silently fail throw exceptions

In non-strict mode, assignments to non-writable properties, getters-only properties, and non-existent properties on non-extensible objects fail silently. In strict mode, they throw an error.

```javascript
"use strict";
const obj = {};
Object.defineProperty(obj, "readOnly", { value: 17, writable: false });
obj.readOnly = 42; // Throws TypeError
```

#### Throws error on deleting undeletable properties

In strict mode, attempting to delete undeletable properties throws an error.

```javascript
"use strict";
delete Object.prototype; // Throws TypeError
```

#### Requires function parameter names to be unique

In strict mode, duplicate parameter names in function declarations are not allowed.

```javascript
"use strict";
// Syntax error
function sum(a, a, c) {
  return a + a + c; // Error
}
```

#### Forbids octal syntax

In strict mode, octal syntax is not allowed.

```javascript
"use strict";
const octal = 010; // Syntax error
```

However, the newer octal literal syntax is allowed with the `0o` prefix:

```javascript
"use strict";
const octal = 0o10; // Okay, decimal 8
```

#### Forbids setting properties on primitive values

In strict mode, you cannot set properties on primitive values.

```javascript
"use strict";
false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

### Simplifying variable uses

Strict mode simplifies how variable names map to variable definitions in the code.

#### Prohibits `with` statements

The `with` statement is forbidden in strict mode.

```javascript
"use strict";
const x = 17;
with (obj) {
  // Syntax error
  x; // Would refer to obj.x if 'with' were allowed
}
```

#### Prevents `eval` from creating variables in the calling scope

In strict mode, `eval` doesn't create new variables in the surrounding scope.

```javascript
"use strict";
eval("const x = 5;");
console.log(x); // ReferenceError
```

### Making `eval` and `arguments` simpler

#### Forbids deleting plain names

In strict mode, you can't delete plain names with `delete`.

```javascript
"use strict";
let x = 17;
delete x; // Syntax error
```

#### Restricts `arguments` and `eval` usage

In strict mode, `arguments` and `eval` cannot be used as variable names or property names.

```javascript
"use strict";
const eval = 17; // Syntax error
const arguments = "hello"; // Syntax error
const obj = { eval: 17 }; // Syntax error
```

### 'Securing' JavaScript

Strict mode makes it easier to write secure JavaScript by restricting certain features.

#### `this` in functions called as functions

In strict mode, the value of `this` is not coerced to an object. Functions called without an explicit `this` value will have `this` as `undefined`.

```javascript
"use strict";
function showThis() {
  return this;
}
console.log(showThis()); // undefined
```

#### No more `arguments.callee`

In strict mode, `arguments.callee` is no longer supported.

```javascript
"use strict";
function factorial(n) {
  return n < 2 ? 1 : n * arguments.callee(n - 1); // TypeError
}
```

#### No automatic access to the global object via `this`

In browsers, the global scope's `this` value is the window object. In strict mode, global functions cannot automatically reference the global object.

```javascript
"use strict";
const global = Function("return this;")();
console.log(global === window); // true in browsers
```

## Browser Support and Compatibility

Most modern browsers fully support strict mode. It's widely adopted in professional JavaScript development and is considered a best practice.

## Tips for Using Strict Mode

### Transitioning to Strict Mode

When transitioning to strict mode, beware that existing code might rely on behaviors that are forbidden in strict mode.

### Testing Both Modes

When developing libraries that will be used by others, you might want to test your code in both strict and non-strict modes.

### Concatenating Scripts

Be careful when concatenating strict and non-strict scripts, as this may cause unexpected behavior. Consider using module bundlers that properly handle strict mode.

## Conclusion

Using strict mode is highly recommended for modern JavaScript development. It helps avoid common pitfalls, makes your code more maintainable, and prepares you for future ECMAScript versions that might introduce breaking changes for non-strict code.
