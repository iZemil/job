---
sidebar_position: 1
---

# Javascript

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
1 + '1'
'1' - true
if (0) // never
'true' == true
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

### TODO:  What is the difference between undefined and is not defined?

### What is hoisting in JavaScript?

### What is this?

### How does prototype inheritance work?

### What is the difference between null, undefined and undeclared?

### Explain the difference between const person = Person() and const person = new Person() in function Person(){}

### What is the difference between attributes and properties?

### Why is it better to leave the global scope "as is" and not touch it?

### What tools do you use when debugging?

### What language constructs do you use to traverse arrays and objects?

### Explain the difference between mutable and immutable values

### What is an event loop? What is the difference between a call stack and a task queue?

### What is a higher-order function?

### How do you handle errors in JavaScript?

### What are Map and Set objects?

[`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) – is a collection of keyed values.
[`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) – is a collection of unique values.
Iteration over `Map` and `Set` is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.

### What are WeakMap and WeakSet objects?

[`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) is `Map`-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

[`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) is `Set`-like collection that stores only objects and removes them once they become inaccessible by other means.

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

- Do not contain their own this context, but use the value of this surrounding context.
- Do not have their own arguments object, so arguments in the body of arrow functions will refer to a variable in the surrounding area.
- Cannot be used as a constructor and will cause an error when used with new.
- The yield keyword cannot be used in the body of an arrow function. As a consequence, arrow functions cannot be used as generators.

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
	}
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
const double = x => x * 2; // pure function
const doubleWithSideEffect = x => {
	console.log('start doubling:', x);
	return x * 2;
} // impure function
const random = () => Math.random(); // impure because different outputs
const log = x => console.log(x); // impure because must return value, not void
```

### What is a closure in JavaScript? Give an example.

In JavaScript, a closure is a function that has access to the variables and scope of its outer function, even after the outer function has returned. Closures are created whenever a function is defined within the scope of another function, and they allow inner functions to retain access to the variables and scope of their outer functions even after the outer functions have completed execution.

Here is an example of a closure in JavaScript:
```js
function outerFunction() {
  let x = 5;
  function innerFunction() {
    console.log(x);  // 5
  }
  return innerFunction;
}

let innerFunc = outerFunction();
innerFunc();  // logs 5
```

### How to clone an object? And Shallow Clone vs. Deep Clone

In JavaScript, a "clone" is a copy of an object or an array. There are two main types of cloning: shallow cloning and deep cloning.

Shallow cloning involves creating a new object or array that contains the same values as the original object or array, but the new object or array does not contain copies of the nested objects or arrays. Instead, it contains references to the original nested objects or arrays. This means that if you modify a nested object or array in the cloned object or array, it will also be modified in the original object or array.

Here is an example of shallow cloning in JavaScript:
```js
let original = {a: 1, b: {c: 3}};
let clone = Object.assign({}, original); // or with spread { ...original }

clone.b.c = 4;  // also modifies original.b.c
```

Deep cloning involves creating a completely new object or array that contains copies of all the nested objects and arrays, as well as the top-level object or array. This means that if you modify a nested object or array in the cloned object or array, it will not be modified in the original object or array. And example of deep cloning:
```js
let original = {a: 1, b: {c: 3}};
let clone = JSON.parse(JSON.stringify(original));

clone.b.c = 4;  // does not modify original.b.c
```
You should be careful using this way. A better way to implement deep cloning is to use external libraries.

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

### Explain methods and properties

OOP has object way of describing, so Objects have properties (like color, length, value, etc) that store states and methods (like run, read, update, etc) that can change properties of the object or other objects and execute other methods.

### Purpose of «new» keyword?

It is used to create an instance of an object

### What is the difference between a class and an object?

### Classes and instances

In OOP, when we model a problem in terms of objects we create abstract definitions representing the types of object we want to have in our system.

### Inheritance

```js
class Proffesor extends Person {}
class Student extends Person {}
```
This feature - when a method has the same name, but a different implementation in different classes - is called polymorphism. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass overrides the version in the superclass.

### Encapsulation

Objects provide an interface to other code that wants to use them, but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and in general making a clear division between its public interface and its private internal state, is called encapsulation.

This is a useful feature because it enables the programmer to change the internal implementation of an object without having to find and update all the code that uses it: it creates a kind of firewall between this object and the rest of the system.

### Explain differences between bind vs apply vs call

```js
function greet() {
	return 'Hello, my name is ' + this.name;
}

const person = { name: 'John' }; // create a person context

console.log(greet()); // => Hello, my name is undefined
console.log(greet.bind(person)(...args)); // => Hello, my name is John
console.log(greet.call(person), ...args); // as above
console.log(greet.apply(person), [...args]); // as above
```


### concurrency, parallel execution, multithreading, asynchrony

https://ru.stackoverflow.com/questions/445768/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BF%D0%BE%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-vs.-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5

### Explain Proxy object and its use cases

### Explain Generator function and its use cases

