# What is Function Composition?

Function composition is a technique that involves combining multiple functions to create a new function.  It can help to make the code more modular, composable, and reusable.

```js
const compose = (f, g) => x => f(g(x));

const add = x => x + x;
const multiply = x => x * x;
const addAndMultiply = compose(add, multiply);

addAndMultiply(5); // 50
```
