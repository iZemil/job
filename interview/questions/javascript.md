---
sidebar_position: 1
title: Javascript
---

# Javascript Questions

### What is JavaScript and what is it used for?

JavaScript is a programming language that is commonly used to create interactive elements on websites. It is a client-side language, which means that the code is executed by the user's web browser rather than on a server. JavaScript can be used to create a wide variety of effects and features on a website, such as drop-down menus, form validation, and interactive maps. It is an essential component of modern web development and is supported by all major web browsers.

### Tell about JS types

In JavaScript, there are six primitive types:

1.  `Number` represents numeric values. In JavaScript, all numbers are considered to be floating-point values.
2.  `String` represents a sequence of characters, or text. Strings can be enclosed in single or double quotes.
3.  `Boolean` represents a logical value, either true or false.
4.  `null` represents a null value, which indicates an absence of a value or a null reference.
5.  `undefined` represents an undefined value, which indicates that a variable has been declared but has not been assigned a value.
6.  `Symbol` represents a unique, immutable value. Symbols are used as a way to create unique, hidden keys for object properties.
    In addition to these primitive types, JavaScript also has a number of object types, including arrays, functions, and objects. Objects are a collection of properties, each of which has a name and a value, and can represent a wide variety of data types, including strings, numbers, and other objects. Functions are a special type of object that can be invoked to perform a specific task, and arrays are objects that can store a collection of values.

### What is NaN? What type? How to define NaN value?

`NaN` is a special value that represents "Not a Number". It is used to indicate that a value is not a valid number, usually as the result of an invalid mathematical operation.

`NaN` is a type of value known as a "primitive value", along with other values such as `null`, `undefined`, and boolean values (`true` and `false`).

You can check if the value of a variable is `NaN` using the `isNaN()` function, which is a global function in JavaScript that returns `true` if the value is `NaN` and `false` if it is a valid number.

### Tell about JS type converting

In JavaScript, type conversion refers to the process of converting a value from one data type to another. There are direct and indirect type conversion. The direct conversion is performed using the methods: String(), Number(), Boolean, parseInt(), parseFloat(), etc. And the indirect one is performed when we try to operate with different data types or with boolean converting without strict equity, example below:

```js
1 + '1';
'1' - true;
if (0)
	// never
	'true' == true;
```

### Tell about JS Operators

-   Arithmetic operators: `+, -, *, /`
-   Assignment operators: `=, +=, -=, \*=, /=`
-   Logical operators: `&&, ||, !, ??, ternary ? true : false`
-   Logical Assignment operators: `&&=, ||=, ??=`
-   Comparison operators: `==(=), !=(=)`
-   Others: `in, delete, typeof, instanceof, void`

### Tell about var vs. let vs. const

-   `var`: is used to declare a variable. Variables declared with `var` are function-scoped, which means that they are only accessible within the function in which they are declared or within the global scope if they are declared outside of any function. Variables declared with `var` can be **reassigned** and **redeclared** within their scope.
-   `let`: Like `var`, `let` declares a variable, but it is block-scoped, which means that it is only accessible within the block in which it is declared. Variables declared with `let` can be **reassigned**, but they **cannot be redeclared** within their scope.
-   `const`: is similar to `let`, but it declares a constant variable, which means that the value **cannot be reassigned**.
    In general, it is recommended to use `const` whenever possible to declare variables that will not be reassigned, and to use `let` for variables that will be reassigned.

### What is the difference between undefined and is not defined?

In JavaScript, `undefined` is a value that indicates that a variable or property has not been assigned a value.

On the other hand, "is not defined" is a reference error that occurs when a variable or property is accessed before it has been declared or assigned a value. This error occurs because the variable or property is not defined in the current scope, and it cannot be accessed.

Here is an example that illustrates the difference between `undefined` and "is not defined":

```js
let x;
console.log(x); // logs "undefined"

console.log(y); // throws "ReferenceError: y is not defined"
```

### What is hoisting in JavaScript?

Hoisting is the behavior of moving declarations to the top of a script or a function before code execution.

```js
console.log(x); // logs "undefined"
var x = 1;

console.log(y); // throws "ReferenceError: y is not defined"
let y = 2;
```

### What is this?

In JavaScript, `this` is a keyword that refers to the current context of a function or method. It is used to access and modify properties of the current context, and its value is determined by how a function or method is called.

For example, in the global context, `this` refers to the global object (e.g., `window` in the browser).

### Why is the result of comparing two similar objects false?

In JavaScript, the result of comparing two similar objects using the `==` or `===` operator is typically `false`, because these operators compare the references to the objects, rather than the contents of the objects themselves.

### What is an arguments object?

The arguments object is **a local variable available within all non-arrow functions**. You can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0 .

### What is the difference between null, undefined and undeclared?

`null` and `undefined` are both values that can be assigned to variables, while `undeclared` refers to a variable or property that has not yet been declared or defined. Additionally, `null` and `undefined` are values that can be compared and tested for equality, while `undeclared` is a reference error that cannot be handled or tested for.

### What is the difference between const person = Person() and const person = new Person()?

```js
function Person() {}

const person = Person(); // declare variable with value of fn execution

const person = new Person(); // declare variable with instance of Person object
```

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

1.  The JavaScript console
2.  The debugger statement: The debugger statement is a built-in feature of JavaScript that can be used to pause the execution of code and inspect the current state of the program.
3.  Debugger tools.
4.  Linting tools: Linting tools are tools that analyze the code and check for potential errors, such as syntax errors, style issues, and logical errors.
5.  Automated tests for the code.

### Explain the difference between mutable and immutable values

Mutable can be changed or added to where immutable means something that cannot be changed or added.

Primitive values in JavaScript cannot have anything added upon to them, they can only be re-assigned, and hence all primitive values in JavaScript are immutable.

A few ways to create and use immutable objects in JavaScript:

1.  Use the `Object.freeze()` method: The `Object.freeze()` method can be used to create an immutable object by freezing the object's state. A frozen object cannot be modified, and any attempts to modify it will be ignored. However, it is important to note that the `Object.freeze()` method only freezes the top-level properties of the object, and it does not recursively freeze the object's nested properties.
2.  Use the `Object.seal()` method: The `Object.seal()` method can be used to create a sealed object, which is an object that cannot be modified or extended, but whose properties can be modified. A sealed object is similar to a frozen object, but it is not completely immutable.
3.  Use a library or framework: There are several libraries and frameworks that provide tools for creating and working with immutable objects in JavaScript. For example, the `Immutable.js` library provides a set of data structures that are designed to be immutable, and it provides a set of methods for working with these data structures.
4.  Use object copy pattern with spread operator, Object.assign, etc.

In general, it is a good practice to use immutable values whenever possible, as they can help to make the code more predictable and easier to understand.

### What is an event loop? What is the difference between a call stack and a task queue?

In JavaScript, the event loop is a mechanism that is used to execute code asynchronously. It is a loop that continuously checks for and processes events that are added to the event queue.

The event loop works in conjunction with the call stack and the task queue. The call stack is a data structure that is used to store the execution context of the code that is currently being executed. It is a stack of frames, with the most recently called function at the top of the stack.

The task queue is a data structure that is used to store tasks that are waiting to be executed. Tasks are added to the task queue when they are created, and they are removed from the task queue and added to the call stack when they are ready to be executed.

The event loop is responsible for checking the task queue and adding tasks to the call stack when they are ready to be executed. It runs continuously, and it processes tasks in the order in which they are added to the task queue.

### What is a higher-order function?

-   takes other functions as arguments.
-   returns a function as its result

### What is Function Composition?

Function composition is a technique that involves combining multiple functions to create a new function. Function composition allows you to create complex behavior by combining simple, reusable functions, and it can help to make the code more modular, composable, and reusable.

### What are Map and Set objects?

`Map` is a collection of keyed values.
`Set` is a collection of unique values.
Iteration over `Map` and `Set` is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.

### What are WeakMap and WeakSet objects?

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

### What is a callback function?

Callback functions are fns that can be used as arguments (common examples: forEach, map, setTimeout)

### What is an arrow function and its specifics?

-   Do not contain their own this context, but use the value of this surrounding context.
-   Do not have their own arguments object, so arguments in the body of arrow functions will refer to a variable in the surrounding area.
-   Cannot be used as a constructor and will cause an error when used with new.
-   The yield keyword cannot be used in the body of an arrow function. As a consequence, arrow functions cannot be used as generators.

```js
'use strict';
var obj = {
	i: 10,
	b: () => console.log(this.i, this),
	c: function () {
		console.log(this.i, this);
	},
	d() {
		console.log(this.i, this);
	},
};
obj.b(); // prints undefined, Window {...} (или глобальный объект)
obj.c(); // prints 10, Object {...}
obj.d(); // same behavior as obj.c();
```

### What is a pure function?

A **pure function** is a function which:

-   Given the same input, always returns the same output.
-   Produces no side effects.

```js
const double = (x) => x * 2; // pure function
const doubleWithSideEffect = (x) => {
	console.log('start doubling:', x);
	return x * 2;
}; // impure function
const random = () => Math.random(); // impure because different outputs
const log = (x) => console.log(x); // impure because must return value, not void
```

### What is a closure in JavaScript? Give an example.

In JavaScript, a closure is a function that has access to the variables and scope of its outer function, even after the outer function has returned. Closures are created whenever a function is defined within the scope of another function, and they allow inner functions to retain access to the variables and scope of their outer functions even after the outer functions have completed execution.

Here is an example of a closure in JavaScript:

```js
function outerFunction() {
	let x = 5;
	function innerFunction() {
		console.log(x); // 5
	}
	return innerFunction;
}

let innerFunc = outerFunction();
innerFunc(); // logs 5
```

### Explain Proxy object and its use cases

The Proxy object in JavaScript is a special kind of object that acts as an intermediary between the original object and the code that accesses or modifies it. It allows developers to intercept and modify the behavior of property access, assignment, and method calls, as well as to define custom behavior for various operations.

Proxies are often used to add functionality to an existing object, such as logging, caching, or validation, without modifying the object itself. They can also be used to create abstractions or to implement design patterns, such as the decorator pattern or the observer pattern.

Here is an example of using a Proxy to log property accesses:

```js
let obj = { a: 1, b: 2 };
let proxy = new Proxy(obj, {
	get(target, prop) {
		console.log(`Accessing property ${prop}`);
		return target[prop];
	},
});

console.log(proxy.a); // logs "Accessing property a"
console.log(proxy.b); // logs "Accessing property b"
```

### Explain Generator function and its use cases

A generator function is a special kind of function in JavaScript that can be used to create an iterator, which is an object that produces a sequence of values one at a time, on demand. Generator functions are identified by the `*` symbol in their definition, and they use the `yield` keyword to produce values.

Generator functions are useful for creating custom iterators, as well as for implementing the iterator and generator patterns. They can be used to create lazy sequences of values, where the values are only computed when they are needed, which can be more efficient and easier to work with than precomputing and storing all of the values in memory.

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

// logs "1"
// logs "2"
// logs "3"
// logs "4"
// logs "5"
```

### How to clone an object? And Shallow Clone vs. Deep Clone

In JavaScript, a "clone" is a copy of an object or an array. There are two main types of cloning: shallow cloning and deep cloning.

Shallow cloning involves creating a new object or array that contains the same values as the original object or array, but the new object or array does not contain copies of the nested objects or arrays. Instead, it contains references to the original nested objects or arrays. This means that if you modify a nested object or array in the cloned object or array, it will also be modified in the original object or array.

Here is an example of shallow cloning in JavaScript:

```js
let original = { a: 1, b: { c: 3 } };
let clone = Object.assign({}, original); // or with spread { ...original }

clone.b.c = 4; // also modifies original.b.c
```

Deep cloning involves creating a completely new object or array that contains copies of all the nested objects and arrays, as well as the top-level object or array. This means that if you modify a nested object or array in the cloned object or array, it will not be modified in the original object or array. And example of deep cloning:

```js
let original = { a: 1, b: { c: 3 } };
let clone = JSON.parse(JSON.stringify(original));

clone.b.c = 4; // does not modify original.b.c
```

:::caution  
You should be careful using this way. A better way to implement deep cloning is to use external libraries.
:::

## What are the ways to parallelize calculations?

There are several ways to parallelize calculations in JavaScript, depending on the specific requirements of the task at hand. Some of the most common approaches include:

1.  Web Workers: Web Workers are a standard feature of modern web browsers that allow developers to run JavaScript code in a separate thread. This can be useful for parallelizing computationally intensive tasks, as it allows the main JavaScript thread to continue running without being blocked by the worker thread.
2.  Async/await: The `async` and `await` keywords, introduced in ECMAScript 2017, provide a way to write asynchronous code in a synchronous style. This can make it easier to parallelize calculations by allowing multiple asynchronous operations to be executed in parallel and waited on as needed.
3.  Promises: JavaScript promises provide a way to execute asynchronous operations and to chain them together in a more readable and concise way. Promises can be used to parallelize calculations by executing multiple asynchronous operations in parallel and waiting for all of them to complete using the `Promise.all()` function.
4.  Map/Reduce: The `map()` and `reduce()` array methods can be used to parallelize calculations by applying a function to each element of an array in parallel and reducing the results to a single value.

### What is Concurrency execution?

It is the most general term, which does not say how this concurrency will be obtained - just more than one task will be solved in a certain period of time.

### What is Parallel execution?

Parallel execution (parallel computing) implies having more than one computing device (e.g., a processor) that will perform multiple tasks simultaneously.

Parallel execution is a strict subset of competitive execution. This means that on a computer with one processor, parallel programming is impossible.

### What is Multi-threaded execution?

Multithreading is one way to implement competitive execution by abstracting a "worker thread". Threads "abstract" low-level details from the user and allow more than one job to run "in parallel".

### What is Asynchronous execution?

Asynchrony implies that an operation can be performed by someone on the side: a remote Web site, a server, or another device outside the current computing device.

The main property of such operations is that the start of such an operation requires significantly less time than the main operation. This allows many asynchronous operations to be performed simultaneously, even on a device with a small number of computing devices.

## What is a promise, and how is it used?

Promises are a language feature that allows developers to write asynchronous code in a synchronous style. They provide a way to handle asynchronous operations in a way that is easier to read and reason about than using callback functions.

### How to create promises?

A promise is created using the `Promise` constructor, which takes a function as an argument. This function is known as the "executor function", and it is responsible for starting the asynchronous operation and either resolving or rejecting the promise based on the outcome.

### What is promise chaining

Promises can be chained together using the `then()` method, which allows developers to write sequential asynchronous code in a more readable and concise way.

### How to handle promise errors?

Promises have a built-in mechanism for handling errors, known as the "rejection handler". This allows developers to specify a separate callback function for handling rejected promises, rather than having to use the second argument of the `then()` method as a catch-all error handler.

### What is async/await?

The `async` and `await` keywords are a newer syntax introduced in ECMAScript 2017 that allow developers to write asynchronous code in a synchronous style. They are based on promises and make it easier to write asynchronous code that is easier to read and understand.

### Tell about promise common pitfalls

There are some common pitfalls that developers can encounter when working with promises, such as forgetting to handle rejected promises or accidentally creating infinite loops with chained promises. Understanding these pitfalls can help developers write more robust and maintainable code.

### What do you know about AJAX?

AJAX stands for "Asynchronous JavaScript and XML". It is a technique for making web pages more interactive by allowing them to request data from a server asynchronously (in the background) without needing to reload the entire page.

AJAX is implemented using a combination of JavaScript and XML (although other formats, such as JSON, are often used in place of XML). It works by using the XMLHttpRequest (XHR) object to send and receive data from a server, allowing a web page to update a part of itself without needing to refresh the entire page.

**Here are some key points about AJAX:**

-   AJAX allows web pages to make requests to a server asynchronously, without needing to refresh the page. This can make web pages more responsive and interactive.
-   AJAX uses the XMLHttpRequest (XHR) object to send and receive data from a server. The XHR object is supported by most modern browsers.
-   AJAX can be used to request and receive data from a server in a variety of formats, including XML, HTML, JSON, and plain text.
-   AJAX can be used to update only a part of a web page, rather than needing to refresh the entire page. This can make web pages feel more responsive and improve the user experience.
-   AJAX is often used in conjunction with modern JavaScript frameworks, such as AngularJS, React, and Vue.js, to build interactive web applications.

### How to handle multiple asynchronous requests?

There are several ways to handle multiple asynchronous requests in JavaScript, depending on the specific requirements of the task at hand. Here are a few options:

1.  Callback functions: One option is to use callback functions to handle the results of individual asynchronous requests. This can be a simple way to handle multiple requests, but it can become unwieldy if there are a large number of requests or if the requests are nested.
2.  Promises: Another option is to use JavaScript promises to handle multiple asynchronous requests. Promises allow developers to chain together asynchronous operations in a more readable and concise way, and they provide a built-in mechanism for handling errors.
3.  Async/await: The `async` and `await` keywords, introduced in ECMAScript 2017, provide a way to write asynchronous code in a synchronous style. This can make it easier to handle multiple asynchronous requests in a more readable and intuitive way.
4.  Parallel execution: If multiple requests can be made in parallel and the order of their completion does not matter, the `Promise.all()` function can be used to execute a group of promises in parallel and wait for all of them to complete.

## What is OOP?

Object-oriented programming (OOP) is a programming paradigm that is based on the concept of "objects", which are data structures that contain data and behavior. In OOP, the focus is on creating objects that represent real-world entities and the relationships between them, rather than on writing code to perform specific tasks.

OOP is based on the idea of encapsulation, which means that an object's data and behavior are bundled together and hidden from the outside world. This allows objects to be self-contained and modular, and it makes it easier to reuse and maintain the code.

OOP also introduces the concepts of inheritance and polymorphism, which allow objects to inherit characteristics and behavior from other objects, and to exhibit different behavior in different contexts.

OOP is widely used in modern programming languages, and it is a powerful paradigm that can help to structure and organize the code, and to make it more modular, reusable, and maintainable.

### Explain methods and properties

OOP has object way of describing, so Objects have properties (like color, length, value, etc) that store states and methods (like run, read, update, etc) that can change properties of the object or other objects and execute other methods.

### Purpose of «new» keyword?

It is used to create an instance of an object.

### What is the difference between a class and an object?

A class is a template or blueprint for creating objects. It defines the properties and methods that objects created from the class will have, as well as the behavior of those properties and methods.

An object, on the other hand, is an instance of a class. It is a concrete representation of a class, with its own set of properties and methods. An object is created by calling a constructor function associated with a class, using the `new` keyword.

### What is Inheritance?

Inheritance is a fundamental concept in object-oriented programming (OOP) that refers to the ability of a class to inherit properties and methods from another class. It allows developers to create a new class (the "subclass") that is based on an existing class (the "superclass"), and to extend or modify the behavior of the subclass as needed.

Inheritance is a way to reuse code and to create a hierarchical structure for organizing related classes. It helps to reduce redundancy in code and to make it easier to maintain and modify.

In JavaScript, inheritance is implemented using prototypes. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from. When an object is created, it can inherit properties and methods from its prototype, and its prototype can in turn inherit from another prototype, and so on. This creates a chain of prototypes, known as the prototype chain, that determines which properties and methods an object has access to.

### What is Polymorphism?

Polymorphism is a fundamental concept in object-oriented programming (OOP) that refers to the ability of different objects to respond to the same method or property in different ways. In JavaScript, polymorphism can be achieved through a variety of techniques, including inheritance, method overriding, and function overloading.

Inheritance and method overriding allow different objects to respond to the same method in different ways at runtime. This is known as runtime polymorphism or dynamic polymorphism.

Function overloading allows multiple functions with the same name to be defined with different sets of arguments. This is known as compile-time polymorphism or static polymorphism.

### What is Encapsulation?

Objects provide an interface to other code that wants to use them, but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and in general making a clear division between its public interface and its private internal state, is called encapsulation.

This is a useful feature because it enables the programmer to change the internal implementation of an object without having to find and update all the code that uses it: it creates a kind of firewall between this object and the rest of the system.

### Explain differences between bind vs apply vs call

These methods apply to work with different context for given function.

-   `bind` - return the function with changed context
-   `apply` - executes the function with array argument
-   `call` - executes the function with arguments sequence

```js
function greet() {
	return 'Hello, my name is ' + this.name;
}

const person = { name: 'John' }; // create a person context

console.log(greet()); // => Hello, my name is undefined
console.log(greet.bind(person)(...args)); // => Hello, my name is John
console.log(greet.apply(person), [...args]); // as above
console.log(greet.call(person), ...args); // as above
```
