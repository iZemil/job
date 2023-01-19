---
sidebar_position: 1
title: Javascript
---

# Javascript Questions

### What is JavaScript?

JavaScript is a programming language that is commonly used to create interactive elements on websites. It is a client-side language, which means that the code is executed by the user's web browser rather than on a server. JavaScript can be used to create a wide variety of effects and features on a website, such as drop-down menus, form validation, and interactive maps.

JavaScript is an object-oriented programming language, which means that it uses objects and their properties and methods to represent and manipulate data. It also supports other programming paradigms, such as functional programming.

### What do Javascript types exist?

In JavaScript, there are **six primitive types**:

1.  `Number` represents numeric values.
```js
// different representions of value 256:
const num1 = 256; // integer Number
const num2 = 256.00; // float Number
const num3 = 0x100; // hexadecimal Number
const num4 = 2.56e2; // exponential Number

// with methods:
const num5 = Number('256');
const num6 = parseInt('256.123');
const num7 = parseFloat('256.00');

// special values:
const NAN = NaN;
const INFINITY = Infinity; // 1 / 0

// it's also valid syntax:
const oneMillion = 1_000_000;

typeof num1; // 'number'
```
2.  `String` represents a sequence of characters, or text. Strings can be enclosed in single or double quotes.
```js
const str1 = 'string';
const str2 = `${str1}`;
const str3 = String(true);

typeof str1; // 'string'
```
3.  `Boolean` represents a logical value, either true or false.
```js
const bool = true;

// all values are false:
const bool1 = false;
const bool2 = !bool;
const bool3 = !!bool1;
const bool4 = Boolean(0);
const bool5 = Boolean('');
const bool6 = Boolean(undefined);
const bool7 = Boolean(null);

typeof bool; // 'boolean'
```
4.  `null` represents a null value, which indicates an absence of a value or a null reference.
```js
const NULL = null;

typeof NULL; // 'object'
```
5.  `undefined` represents an undefined value, which indicates that a variable has been declared but has not been assigned a value.
```js
const UNDEFINED = undefined;

typeof UNDEFINED; // 'undefined'
```
6.  `Symbol` represents a unique, immutable value. Symbols are used as a way to create unique, hidden keys for object properties.
```js
const sym1 = Symbol('key');
const sym2 = Symbol('key');

sym1 !== sym2; // true

typeof sym1; // 'symbol'
```

In addition to these primitive types, JavaScript also has a number of object types, including arrays, functions, and objects.
```js
const arr = [];
const fn = () => {};
const obj = {};

typeof arr; // 'object'
typeof fn; // 'function'
typeof obj; // 'object'
```

### What is NaN and how to define NaN value?

`NaN` is a special value that represents "Not a Number". It is used to indicate that a value is not a valid number, usually as the result of an invalid mathematical operation.

`NaN` is a type of value known as a "primitive value", along with other values such as `null`, `undefined`, and boolean values (`true` and `false`).

You can check if the value of a variable is `NaN` using the `isNaN()` function, which is a global function in JavaScript that returns `true` if the value is `NaN` and `false` if it is a valid number.

```js
const NAN = NaN;
const alsoNan = 'string' / 10;

NAN === alsoNan; // false
isNaN(NAN); // true
isNaN(alsoNan); // true
```

### Explain type converting in JS

In JavaScript, type conversion refers to the process of converting a value from one data type to another. _There are explicit and implicit type conversions._

Examples of explicit type conversion, also known as type casting:
```js
console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(String(5)); // "5"
console.log(String(false)); // "false"

const num = 3.14159;
console.log(num.toString()); // "3.14159"
console.log(num.toFixed(2)); // "3.14"
console.log(num.toPrecision(4)); // "3.142"

const obj = {name: 'John', age: 30};
const jsonStr = JSON.stringify(obj); // "{name: 'John', age: 30}"
console.log(JSON.parse(jsonString)); // {name: 'John', age: 30}
```

Examples of implicit type conversion, also known as type coercion:
```js
// operator `+` to concat strings, numbers
console.log(5 + '5'); // "55"

// operator `==` to compare values of different types
console.log("5" == 5); // true
console.log("5" === 5); // false

// to boolean
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true

// to number
console.log(parseInt("123")); // 123
console.log(parseFloat("3.14")); 3.14
console.log('5' * 2); // 5
```

:::caution

It is important to note that type coercion can sometimes lead to unexpected behavior, so it's a good idea to be aware of it when working with JavaScript.

:::

### Tell about JS Operators

Most useful operators:
- Arithmetic operators: `+, -, *, /`
- Assignment operators: `=, +=, -=, \*=, /=`
- Logical operators: `&&, ||, !, ??, ternary ? true : false`
- Logical Assignment operators: `&&=, ||=, ??=`
- Comparison operators: `==(=), !=(=)`
- Others: `in, delete, typeof, instanceof, void`
- Also there are binary operators

### What is the difference between undefined and is not defined?

In JavaScript, `undefined` is a value that indicates that a variable or property has not been assigned a value.

On the other hand, "is not defined" is a reference error that occurs because the variable or property is not defined in the current scope, and it cannot be accessed.

Here is an example that illustrates the difference between `undefined` and _is not defined_:
```js
let x;
console.log(x); // logs "undefined"

console.log(y); // throws "ReferenceError: y is not defined"
```

### Explain difference var vs let vs const

- `var` is used to declare a variable. Variables declared with `var` are function-scoped, which means that they are only accessible within the function in which they are declared or within the global scope if they are declared outside of any function. Variables declared with `var` can be **reassigned** and **redeclared** within their scope.
- `let` - like `var`, `let` declares a variable, but it is block-scoped, which means that it is only accessible within the block in which it is declared. Variables declared with `let` can be **reassigned**, but they **cannot be redeclared** within their scope.
- `const`is similar to `let`, but it declares a constant variable, which means that the value **cannot be reassigned**.

Examples of the different variable declarations:
```js
v0; // ReferenceError: v0 is not defined
v1; // undefined, because hoisting
var v1 = 'var 1';
v1 = 1; // 1

// Task 1:
var v2 = 'var 2';
function fn1() {
	v2 = 'var fn1';
}
fn1();
v2; // ?; try to guess


l1; // ReferenceError: Cannot access 'l0' before initialization
let l1 = 'let 1';
l1 = 1; // 1

// Task 2:
let l2 = 'let 2';
function fn2() {
	let l2 = 'let fn2';
}
fn2();
l2; // ?; try to guess

const c1 = 'const 1';
c1 = 1; // TypeError: Assignment to constant variable
```

:::tip

In general, it is recommended to use `const` whenever possible to declare variables that will not be reassigned, and to use `let` for variables that will be reassigned.

:::

### What is hoisting in JavaScript?

Hoisting is the behavior of moving declarations to the top of a script or a function before code execution.

```js
fn1(); // 1
function fn1 () {
	return 1;
}

console.log(x); // undefined
var x = 1;

console.log(y); // ReferenceError: y is not defined
let y = 2;

new Person(); //  ReferenceError: Person is not defined
class Person {}
```

### Explain the difference between null, undefined and undeclared

`null` and `undefined` are both values that can be assigned to variables, while `undeclared` refers to a variable or property that has not yet been declared or defined. Additionally, `null` and `undefined` are values that can be compared and tested for equality, while `undeclared` is a reference error that cannot be handled or tested for.

### Explain Mutable and Immutable values

Mutable can be changed or added to where immutable means something that cannot be changed or added.

Primitive values in JavaScript cannot have anything added upon to them, they can only be re-assigned, and hence all primitive values in JavaScript are immutable.

A few ways to create and use immutable objects in JavaScript:
1.  Use the `Object.freeze()` method: The `Object.freeze()` method can be used to create an immutable object by freezing the object's state. A frozen object cannot be modified, and any attempts to modify it will be ignored. However, it is important to note that the `Object.freeze()` method only freezes the top-level properties of the object, and it does not recursively freeze the object's nested properties.
2.  Use the `Object.seal()` method: The `Object.seal()` method can be used to create a sealed object, which is an object that cannot be modified or extended, but whose properties can be modified. A sealed object is similar to a frozen object, but it is not completely immutable.
3.  Use a library or framework: There are several libraries and frameworks that provide tools for creating and working with immutable objects in JavaScript. For example, the `Immutable.js` library provides a set of data structures that are designed to be immutable, and it provides a set of methods for working with these data structures.
4.  Use object copy pattern with spread operator, Object.assign, etc.

:::tip
In general, it is a good practice to use immutable values whenever possible, as they can help to make the code more predictable and easier to understand.
:::

### Why is it better to leave the global scope "as is" and not touch it?

The global scope in JavaScript is the default scope that is available to all scripts and functions, and it is represented by the global object (e.g., `window` in the browser).

Modifying the global scope by adding or modifying variables and functions can lead to potential conflicts with existing variables and functions, as well as with future code that may depend on the original values of these variables and functions.

Additionally, modifying the global scope can make the code more difficult to understand and maintain, as it can be harder to track the source and purpose of variables and functions that are added to the global scope.

To avoid these problems, it is generally a good practice to use a local scope for variables and functions, and to avoid modifying the global scope whenever possible. This helps to keep the code organized, maintainable, and less prone to conflicts and errors.

### How do you handle errors in JavaScript?

In JavaScript, there are a few ways to handle errors:

1. Try-catch statement: The try-catch statement is a built-in feature of JavaScript that can be used to handle errors in the code. The try-catch statement consists of a try block that contains the code that may throw an error, and a catch block that contains the code that handles the error.
2. Throwing custom errors: In JavaScript, you can throw custom errors by using the `throw` keyword and an instance of the `Error` class. This can be useful if you want to create and throw specific types of errors in the code.
3. Using the `onerror` event handler: The `onerror` event handler is a built-in event handler that can be used to handle errors in JavaScript. It is called whenever an error occurs in the code, and it can be used to display an error message or to log the error.

:::info

Handling errors helps to prevent the code from breaking and to ensure that the code runs smoothly and efficiently. Also it allows you to provide meaningful feedback to the users of your code, and to identify and fix problems in the code.

:::

### What tools do you use when debugging?

There are a number of tools and techniques that can be used when debugging JavaScript code. Some common tools and techniques include:

1. The JavaScript console
2. The debugger statement: The debugger statement is a built-in feature of JavaScript that can be used to pause the execution of code and inspect the current state of the program.
3. Debugger tools.
4. Linting tools: Linting tools are tools that analyze the code and check for potential errors, such as syntax errors, style issues, and logical errors.
5. Automated tests for the code.

## What is a function?

A function is a block of code that can be executed when it is called. Functions are used to perform specific tasks and can be reused throughout a program, making it more organized and efficient.
```js
function hello() {
	console.log("Hello World!");
}
```

### What are function arguments?

Function arguments are the values that are passed to a function when it is called. These values are used as inputs to the function.

```js
function double(num) {
	return 2 * num;
}
double(4); // 8
```

### Explain  arguments object

The arguments object is **a local variable available within all non-arrow functions**. You can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0.

```js
function sum() {
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

sum(1, 2, 3, 4, 5); // 15
```

### What is a callback function?

Callback function is a function that can be used as arguments.

```js
function cb() {
	console.log('some cb');
}

[1, 2, 3].forEach(cb);
setInterval(cb, 1000);
```

### How to use `new Function()`?

It is used to create a new function by passing a string containing the function's code as an argument:
```js
const add = new Function("a", "b", "return a + b;");
console.log(add(5,7)); // 12
```

### What is a higher-order function?

A higher-order function is a function that takes one or more functions as arguments, and/or returns a function as its result. In other words, a higher-order function is a function that operates on or with other functions.

```js
function logResult(fn) {
	return () => console.log(fn());
}

const helloFn = () => 'Hello World';
const logFn = logResult(helloFn);
logFn();
```

### What is Function Composition?

Function composition is a technique that involves combining multiple functions to create a new function.  It can help to make the code more modular, composable, and reusable.

```js
const compose = (f, g) => x => f(g(x));

const add = x => x + x;
const multiply = x => x * x;
const addAndMultiply = compose(add, multiply);

addAndMultiply(5); // 50
```

### What is an arrow function and its specifics?

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

### What is a pure function?

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

### What is a closure in JavaScript?

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

### What is a Generator function?

A generator function is a special kind of function, that can be used to create an iterator, which is an object that produces a sequence of values one at a time, on demand. Generator functions are identified by the `*` symbol in their definition, and they use the `yield` keyword to produce values.

> Generator functions are useful for creating custom iterators, as well as for implementing the iterator and generator patterns. They can be used to create lazy sequences of values, where the values are only computed when they are needed, which can be more efficient and easier to work with than precomputing and storing all of the values in memory.

Here is an example of a generator function that produces a sequence of numbers:

```js
function* range(start, end) {
	for (let i = start; i <= end; i++) {
		yield i;
	}
}

for (let i of range(1, 5)) {
	console.log(i);
}
// logs: 1, 2, 3, 4, 5
```

Here is an example of a generator function that generates the Fibonacci sequence:

```js
function* fibonacci() {
  let a = 0, b = 1;
  
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let sequence = fibonacci();
sequence.next().value; // 0
sequence.next().value; // 1
sequence.next().value; // 1
sequence.next().value; // 2
```

## What is an object?

In JavaScript, an object is a collection of key-value pairs that represent a single entity (where key is the name of a property or method). Objects are used to store and organize data, and to represent real-world entities in code.

```js
const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  // object method
  say(text) {
	  return `${this.name} said: ${text}`
  }
};

person.name; // John Doe, the same with person['name'];
person.say('hi'); // John Doe said: hi
```

### Why is the result of comparing 2 similar objects `false`?

Objects in JavaScript are also known as "reference types", which means that when you assign an object to a variable, you are not creating a copy of the object, but a reference to the object. This means that multiple variables can refer to the same object in memory, and modifying the object through one variable will affect all variables that reference the same object.

```js
const a = {},
	  b = {};
a === b; // false
```

In JavaScript, the result of comparing two similar objects using the `==` or `===` operator is typically `false`, because these operators compare the references to the objects, rather than the contents of the objects themselves.

### What is `this`?

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

### How to use bind, apply and call?

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

### Why to use `new` keyword?

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

### How do object prototypes work?

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

### How to clone an object?

In JavaScript, a "clone" is a copy of an object or an array. There are two main types of cloning: **shallow cloning** and **deep cloning**.

**Shallow cloning** creates a new object or array that contains the same values as the original object or array, but the new object or array does not contain copies of the nested objects or arrays. Instead, _it contains references to the original nested objects or arrays_. This means that if you modify a nested object or array in the cloned object or array, it will also be modified in the original object or array.

An example of shallow cloning:

```js
const original = {
	a: 1,
	b: { c: 3 }
};
const clone = Object.assign({}, original);
// const clone = { ...original }; // the same with spread;
clone.b.c = 4; // also modifies original.b.c

const arr = [{}, {}];
const arrClone = [...arr];
arr[0] === arrClone[0]; // the same reference to index 0
```

**Deep cloning** creates a completely new object or array that contains copies of all the nested objects and arrays, as well as the top-level object or array. This means that **if you modify a nested object or array in the cloned object or array, it will not be modified in the original object or array**.

An example of deep cloning:

```js
const original = {
	a: 1,
	b: { c: 3 }
};
const clone = JSON.parse(JSON.stringify(original));
clone.b.c = 4; // does not modify original.b.c

const arr = [{}, {}];
const arrClone = JSON.parse(JSON.stringify(arr));
arr[0] !== arrClone[0]; // different object references
```

:::caution

You should be careful using this way, because it can cause to lose data such as functions, Date, Infinity and other values. A better way to implement deep cloning is to use external libraries (for example, `lodash.cloneDeep`, or other recursive way of deep cloning libs).

:::

### What are `Map` and `Set` objects?

`Map` is a collection of keyed values.
`Set` is a collection of unique values.

Iteration over `Map` and `Set` is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.

```js
const map = new Map([['key', 1], ['key2', 'value']]);
const set = new Set([1, 2, 2, 3]);
```

### What are `WeakMap` and `WeakSet` objects?

`WeakMap` is `Map` like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

`WeakSet` is `Set` like collection that stores only objects and removes them once they become inaccessible by other means.

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

```js
let obj = { value: 0 };
const list = [obj];
obj = null;
list[0]; // => saved obj in memory and not garbage collected

// but
let obj1 = { value: 0 };
const weakSet = new WeakSet(obj1);
obj1 = null; // weakSet obj1 will be garbage collected
```

### What is the `Proxy` object used for?

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

## What is a Promise?

Promises are a language feature that allows developers to write asynchronous code in a synchronous style. They provide a way to handle asynchronous operations in a way that is easier to read.

```js
function delayedFn(ms) {
	return new Promise((resolve, reject) => {
		console.log('Running a promise with status: pending')
	
		if (ms < 1000) {
			reject('Too little time - It must be more than 1000 ms!');
		} else {
			setTimeout(() => resolve(ms), ms);
		}
	});
}

delayedFn(900)
	.then((ms) => console.log(`Promise with status: fulfilled; after: ${ms} ms!`))
	.catch(err => console.error('Promise with status: rejected and error', err))
	.finally(() => console.log('Always works!'))
```

### What is promise chaining

Promises can be chained together using the `then`, `catch`, `finally` methods, which allow developers to write sequential asynchronous code in a more readable and concise way.

```js
// pseudo code
fetch('https://google.com')
	.then(parseResult)
	.then(saveResult)
	.then(someOtherOperation)
	.catch(logError)
	.finally(logOperation);
```

### Explain `async` and`await` keywords

The `async` and `await` keywords are a newer syntax introduced in ECMAScript 2017 that allow developers to write asynchronous code in a synchronous style. They are based on promises and make it easier to write asynchronous code that is easier to read and understand.

```js
const returnNum = (num) => num;

async function asyncSum(a, b) {
	const result1 = await returnNum(a);
	const result2 = await returnNum(b);

	return result1 + result2;
}

asyncSum(1, 2); // Promise with result 3
```

### How to handle promise errors?

Promises have a built-in mechanism for handling errors, known as the `rejection handler`. This allows developers to specify a separate callback function for handling rejected promises, rather than having to use the second argument of the `then()` method as a catch-all error handler.

```js
// promise way with .catch method
function delayedFn(ms) {
	return new Promise((resolve, reject) => {
		console.log('Running a promise with status: pending')
	
		if (ms < 1000) {
			reject('Too little time - It must be more than 1000 ms!');
		} else {
			setTimeout(() => resolve(ms), ms);
		}
	});
}

delayedFn(900)
	.then((ms) => console.log(`Promise with status: fulfilled; after: ${ms} ms!`))
	.catch(err => console.error('Promise with status: rejected and error', err))
	.finally(() => console.log('Always works!'))

// try catch way:
async function handleDelayedFn(ms) {
	try {
		const result = await delayedFn(ms);
		
		console.log(`Promise with status: fulfilled; after: ${ms} ms!`);
	} catch(err) {
		console.error('Promise with status: rejected and error', err);
	} finally {
		console.log('Always works!');
	}
}
handleDelayedFn(900);
```

### How to handle multiple asynchronous requests?

There are several ways to handle multiple asynchronous requests in JavaScript:

1. **Callback functions**: it can be a simple way to handle multiple requests, but it can become unwieldy if there are a large number of requests or if the requests are nested.
```js
function delayedFn(ms, callback) {
	console.log('Start');
	if (ms < 1000) {
		callback('Too little time - It must be more than 1000 ms!');
	} else {
		setTimeout(() => {
			console.log('Finish');
			callback(null, ms);
		}, ms);
	}
};

delayedFn(900, (err, ms) => {
	if (err) {
		console.error('Error', err);
	} else {
		delayedFn(ms, (err, ms) => {
			if (err) {
				console.error('Error', err);
			} else {
				// try to do third nested callback
			}
		});
	}
});
```
2. **Promises**: they allow developers to chain together asynchronous operations in a more readable and concise way, and they provide a built-in mechanism for handling errors.
```js
function delayedFn(ms) {
	return new Promise((resolve, reject) => {
		console.log('Start')
	
		if (ms < 1000) {
			reject('Too little time - It must be more than 1000 ms!');
		} else {
			setTimeout(() => {
				console.log('Finish');
				resolve(ms);
			}, ms);
		}
	});
}

delayedFn(900)
	.then(ms => delayedFn(ms))
	.catch(err => console.error(err))
```
3. **Async/await**: The `async` and `await` keywords, introduced in ECMAScript 2017, provide a way to write asynchronous code in a synchronous style. This can make it easier to handle multiple asynchronous requests in a more readable and intuitive way.
```js
(async function() {
	const ms = 900;
	
	try {
		const result1 = await delayedFn(ms);
		const result2 = await delayedFn(result1);
	} catch(err) {
		console.error(err);
	}
})()
```
4. **Parallel execution**: If multiple requests can be made in parallel and the order of their completion does not matter:
 - `Promise.all()` function can be used to execute a group of promises in parallel and wait for all of them to complete. If one of them fullfills with error it will be a error:
	```js
(async function() {
	try {
		const [result1, result2] = await Promise.all([
			delayedFn(900),
			delayedFn(1000),
		]);

		console.log(`result1: ${result1.status} and result2: ${result2.status}`);
	} catch(err) {
		console.error(err);
	}
})()
```
- `Promise.allSettled()` - similiar with `Promise.all()` but returns all results and all errors:
```js
(async function() {
	const [result1, result2] = await Promise.allSettled([
		delayedFn(900),
		delayedFn(1000),
	]);

	console.log(`result1: ${result1.status} and result2: ${result2.status}`);
})()
```
- `Promise.race()`: fulfills when any of the promises fulfills; **rejects when any of the promises rejects**. It returns one promise.
```js
(async function() {
	try {
		const quickest = await Promise.race([
			delayedFn(900),
			delayedFn(1000),
		]);

		console.log(`quickest value: ${quickest}`);
	} catch(err) {
		console.error(err);
	}
})()
```
- `Promise.any()`: fulfills when any of the promises fulfills; **rejects when all of the promises reject**. It returns one promise.
```js
(async function() {
	try {
		const quickest = await Promise.any([
			delayedFn(900),
			delayedFn(1000),
		]);

		console.log(`rquickest value: ${quickest}`);
	} catch(err) {
		console.error(err);
	}
})()
```

### What are promise common pitfalls?

There are some common pitfalls that developers can encounter when working with promises, such as _forgetting to handle rejected promises_ or accidentally _creating infinite loops with chained promises_. Understanding these pitfalls can help developers write more robust and maintainable code.

### What do you know about AJAX?

AJAX stands for "Asynchronous JavaScript and XML". It is a technique for making web pages more interactive by allowing them to request data from a server asynchronously (in the background) without needing to reload the entire page.

AJAX is implemented using a combination of JavaScript and XML (although other formats, such as JSON, are often used in place of XML). It works by using the XMLHttpRequest (XHR) object to send and receive data from a server, allowing a web page to update a part of itself without needing to refresh the entire page.

**Here are some key points about AJAX:**

- AJAX allows web pages to make requests to a server asynchronously, without needing to refresh the page. This can make web pages more responsive and interactive.
- AJAX uses the XMLHttpRequest (XHR) object to send and receive data from a server. The XHR object is supported by most modern browsers.
- AJAX can be used to request and receive data from a server in a variety of formats, including XML, HTML, JSON, and plain text.
- AJAX can be used to update only a part of a web page, rather than needing to refresh the entire page. This can make web pages feel more responsive and improve the user experience.
- AJAX is often used in conjunction with modern JavaScript frameworks, such as AngularJS, React, and Vue.js, to build interactive web applications.