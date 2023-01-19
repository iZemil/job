# What is the `Proxy` object used for?

The Proxy object in JavaScript is a special kind of object that acts as an intermediary between the original object and the code that accesses or modifies it.

It allows developers to intercept and modify the behavior of property access, assignment, and method calls, as well as to define custom behavior for various operations.

Proxies are often used to add functionality to an existing object, such as logging, caching, or validation, without modifying the object itself. They can also be used to create abstractions or to implement design patterns, such as the decorator pattern or the observer pattern.

Here is an example of using a Proxy to log property accesses:

```js
const obj = {
	a: 1,
	b: 2
};
const proxy = new Proxy(obj, {
	get(target, prop) {
		console.log(`Accessing property ${prop}`);
		return target[prop];
	},
});

proxy.a; // logs "Accessing property a"
proxy.b; // logs "Accessing property b"
```
