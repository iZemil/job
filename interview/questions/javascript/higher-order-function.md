# What is a higher-order function?

A higher-order function is a function that takes one or more functions as arguments, and/or returns a function as its result. In other words, a higher-order function is a function that operates on or with other functions.

```js
function logResult(fn) {
	return () => console.log(fn());
}

const helloFn = () => 'Hello World';
const logFn = logResult(helloFn);
logFn();
```
