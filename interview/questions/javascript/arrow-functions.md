# What is an arrow function and its specifics?

An arrow function is a shorthand syntax for defining a function in JavaScript. It was introduced in ECMAScript 6 (ES6) as a more concise way to write anonymous functions, also known as lambda functions. The have the following specifics:

1. do not have their own `this` value, instead, they inherit the `this` value from the surrounding scope.
2. do not have the `arguments` object, instead, they can access the parameters passed to them directly.
3. do not have the `new` keyword, they cannot be used as constructors.
4. cannot be used as generators.

```js
const obj = {
	value: 10,
	a: () => console.log(this.value, this), // arrow fn
	b: function () {
		console.log(this.value, this);
	},
	c() {
		console.log(this.value, this);
	},
};

obj.a(); // undefined, Window
obj.b(); // 10, obj
obj.c(); // the same as obj.c()

// try to bind context
const person = {
	name: 'Jack',
	getName: () => this.name,
}
person.getName(); // undefined

const getJackNameFn = person.getName.bind(person);
getJackNameFn(); // also undefined, because rule 1.
```
