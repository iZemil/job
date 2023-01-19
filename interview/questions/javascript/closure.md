# What is a closure in JavaScript?

In JavaScript, a closure is a function that has access to the variables and scope of its outer function, even after the outer function has returned.

Closures allow a function to "remember" the context in which it was created, and to continue to access and manipulate variables from that context even after the parent function has finished executing.

Here is an example of a closure in JavaScript:

```js
function outer() {
	let x = 0;
	function inner() {
		x += 1;
		return x;
	}
	return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
```

Closures are often used to create private variables and methods, which can only be accessed by the functions that have a closure over them. They are also used to create function factories, where a function is used to generate and return other functions with specific functionality. Try to write this code by yourself!

:::caution

It's important to note that, closures can also cause memory leaks if they hold references to variables that are no longer in use

:::