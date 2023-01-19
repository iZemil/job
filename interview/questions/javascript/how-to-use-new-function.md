# How to use `new Function()`?

It is used to create a new function by passing a string containing the function's code as an argument:
```js
const add = new Function("a", "b", "return a + b;");
console.log(add(5,7)); // 12
```
