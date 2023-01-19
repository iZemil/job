# Why to use `new` keyword?

It is used to create an instance of an object.

```js
function Person(name) {
	this.name = name;
}

class Animal {
	constructor(name) {
		this.name = name;
	}
}

// create an instance of Persont with function constructor
const john = new Person('John');

// create an instance of Animal class
const monkey = new Animal('money');
```
