---
sidebar_position: 1
---

# Javascript

### What is Javascript?

JavaScript is a programming language that is commonly used to create interactive elements on websites. It is a client-side language, which means that the code is executed by the user's web browser rather than on a server. JavaScript can be used to create a wide variety of effects and features on a website, such as drop-down menus, form validation, and interactive maps. It is an essential component of modern web development and is supported by all major web browsers.

### JS types

In JavaScript, there are six primitive types:

1.  Number: represents numeric values. In JavaScript, all numbers are considered to be floating-point values.
2.  String: represents a sequence of characters, or text. Strings can be enclosed in single or double quotes.
3.  Boolean: represents a logical value, either true or false.
4.  Null: represents a null value, which indicates an absence of a value or a null reference.
5.  Undefined: represents an undefined value, which indicates that a variable has been declared but has not been assigned a value.
6.  Symbol: represents a unique, immutable value. Symbols are used as a way to create unique, hidden keys for object properties.

In addition to these primitive types, JavaScript also has a number of object types, including arrays, functions, and objects. Objects are a collection of properties, each of which has a name and a value, and can represent a wide variety of data types, including strings, numbers, and other objects. Functions are a special type of object that can be invoked to perform a specific task, and arrays are objects that can store a collection of values.

### Type converting

In JavaScript, type conversion refers to the process of converting a value from one data type to another. There are direct and indirect type conversion. The direct conversion is performed using the methods: String(), Number(), Boolean, parseInt(), parseFloat(), etc. And the indirect one is performed when we try to operate with different data types or with boolean converting without strict equity, example below:

```js
1 + '1'
'1' - true
if (0) // never
'true' == true
```

### JS Operators
-   Arithmetic operators: `+, -, *, /`
-   Assignment operators: `=, +=, -=, \*=, /=` 
-   Logical operators: `&&, ||, !, ??, ternary ? true : false`
-   Logical Assignment operators: `&&=, ||=, ??=`
-   Comparison operators: `==(=), !=(=)`
-   Others: `in, delete, typeof, instanceof, void`

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

### Tell about var vs. let vs. const
-   `var`: is used to declare a variable. Variables declared with `var` are function-scoped, which means that they are only accessible within the function in which they are declared or within the global scope if they are declared outside of any function. Variables declared with `var` can be **reassigned** and **redeclared** within their scope.
-   `let`: Like `var`, `let` declares a variable, but it is block-scoped, which means that it is only accessible within the block in which it is declared. Variables declared with `let` can be **reassigned**, but they **cannot be redeclared** within their scope.
-   `const`: is similar to `let`, but it declares a constant variable, which means that the value **cannot be reassigned**.
In general, it is recommended to use `const` whenever possible to declare variables that will not be reassigned, and to use `let` for variables that will be reassigned.

```js
var a = 2;
foo(); // works because `foo()` declaration is "hoisted"

function foo() {
	a = 3;
	console.log(a); // 3
	var a; // declaration is "hoisted" to the top of `foo()`
}
console.log(a); // 2
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

## Promises

### Promise.all use cases
```js
Promise.all([new Promise(), new Promise(), new Promise()]);
```

## OOP

### Explain methods and properties
OOP has object way of describing, so Objects have properties (like color, length, value, etc) that store states and methods (like run, read, update, etc) that can change properties of the object or other objects and execute other methods.

### Purpose of «new» keyword?
It is used to create an instance of an object

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

