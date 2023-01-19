# How to use bind, apply and call?

These methods apply to work with different context for given function.

-   `bind` - return the function with changed context
-   `apply` - executes the function with array argument
-   `call` - executes the function with arguments sequence

```js
function greet(a = '', b = '') {
	return `Hello, my name is ${this.name}${a}${b}`;
}
const person = { name: 'John' };

// greet has global context
greet(); // Hello, my name is undefined

// bind greet fn with context of obj person
const personGreetFn = greet.bind(person);
personGreetFn('...'); // Hello, my name is John...

greet.apply(person, [' A.', 'B.']); // Hello, my name is John A.B.

greet.call(person, ' and', 'that\'s all.'); // Hello, my name is John andthat's all.
```
