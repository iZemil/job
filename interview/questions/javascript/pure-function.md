# What is a pure function?

A **pure function** is a function which:

1. The same input, always returns the same output
2. Produces no side effects and they does not depend on any state or data outside of its scope and does not modify any state or data outside of its scope

Code explanation of pure functions:
```js
const double = (x) => x * 2; // pure function

const doubleWithSideEffect = (x) => {
	console.log('start doubling:', x);
	return x * 2;
}; // impure function

const random = () => Math.random(); // impure because different outputs

const log = (x) => console.log(x); // impure, side effect + must have `return` statement
```
