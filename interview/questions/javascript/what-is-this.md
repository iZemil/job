# What is `this`?

In JavaScript, `this` is a keyword that refers to the current context of a function or method. It is used to access and modify properties of the current context, and its value is determined by how a function or method is called.

For example, in the global context, `this` refers to the global object (e.g., `window` in the browser).

```js
const obj = {
	value: 1,
	getObj() {
		return this;
	}
}
obj.getObj() === obj; // true

function fn() {
	return this;
}
fn() === this; // true; this - global context
```
