# How do object prototypes work?

Prototypes are the mechanism by which JavaScript objects inherit features from one another.

Every object in JavaScript has a built-in property, which is called its **prototype**. The prototype is itself an object, so the prototype will have its own prototype, making what's called a **prototype chain**.

```js
// the latest prototy chain item is null
Object.getPrototypeOf(Object.getPrototypeOf({})); // null
```

Class property `prototype` includes all props and methods for the class instance:

```js
function Person(name) {
	this.name = name;
}

const personPrototype = {
	greet() {
		console.log(`hello, my name is ${this.name}!`);
	},
};

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

const jack = new Person('Jack');
jack.greet(); // hello, my name is Jack!
```

Properties that are defined directly in the object, like `name` here, are called **own properties**, and you can check whether a property is an own property using the static `Object.hasOwn()` method:

```js
const emil = new Person('Emil');

Object.hasOwn(emil, 'name'); // true
Object.hasOwn(emil, 'greet'); // false
// or
emil.hasOwnProperty('greet'); // false
```

Difference between class and prototype notations:

```js
class Person {
	constructor(name) {
		this.name = name;
		this.say = function (text) {
			return `${this.name} said: ${text}`;
		};
	}

	greet() {
		return `Hello, my name is ${this.name}!`;
	}

	static random() {
		return Math.random();
	}
}

function Person(name) {
	// own properties
	this.name = name;
	this.say = function (text) {
		return `${this.name} said: ${text}`;
	};
}
// extend Person prototype with method:
Person.prototype.greet = function () {
	return `Hello, my name is ${this.name}!`;
};
// add static method:
Person.random = function () {
	return Math.random();
};

const emil = new Person('Emil');
// iterate all properties of the instance
for (let key in emil) {
	if (Object.hasOwn(emil, key)) {
		// get only own properties: name, say
		console.log(key);
	}
}
```

And prototype inheritance example:

```js
function Student(name) {
	// Call the parent constructor
	Person.call(this, name);
}
// extend Student as a subclass of Person
Object.setPrototypeOf(Student.prototype, Person.prototype);
// inherited parent static properties
Object.setPrototypeOf(Student, Person);

// replace the parent method
Student.prototype.greet = function () {
	return `Hi, I'm ${this.name} and I am a student`;
};
```

:::caution

It is not advisable to use setPrototypeOf() instead of extends due to performance and readability reasons.

:::
