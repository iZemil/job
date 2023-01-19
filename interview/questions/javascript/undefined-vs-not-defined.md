# What is the difference between undefined and is not defined?

In JavaScript, `undefined` is a value that indicates that a variable or property has not been assigned a value.

On the other hand, "is not defined" is a reference error that occurs because the variable or property is not defined in the current scope, and it cannot be accessed.

Here is an example that illustrates the difference between `undefined` and _is not defined_:
```js
let x;
console.log(x); // logs "undefined"

console.log(y); // throws "ReferenceError: y is not defined"
```
