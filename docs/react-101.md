# React 101

These are just my notes about [ReactJS](https://reactjs.org/).

# Basic concepts
React is a Javascript library for building component-based Web UIs.

Components are reusable UI elements that 
 - can be reused in other components
 - can be nested
 - can be styled with CSS
 - can pass model data using `props` from parent to child components
 - use **JSX**, which also allows for binding expressions using `{expression}` syntax

JSX is just syntactic sugar to avoid calling the React library directly, like this:
```javascript
import React from 'react';
// ...

function MyComponent() {
    return React.createElement('div', {}, 
        React.createElement('h2', {}, 'Let\'s get started'),
        React.createElement(Expenses, {data: expenses})
    );
}
```
Note that modern project setups don't require importing React library directly because it used under the hood -
nothing bad will happen if you do, anyway :)

# Build 