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

### What are WeakMap and WeakSet objects?

### What is callback function?
Callback functions are fns that can be used as arguments (common examples: forEach, map, setTimeout)

### Arrow functions: what is and specifics

-   Стрелочные функции не содержат собственный контекст this, а используют значение this окружающего контекста.
-   Стрелочные функции не имеют собственного объекта arguments, поэтому в теле стрелочных функций arguments будет ссылаться на переменную в окружающей области.
-   Стрелочные функции не могут быть использованы как конструктор и вызовут ошибку при использовании с new.
-   Ключевое слово yield не может быть использовано в теле стрелочной функции. Как следствие стрелочные функции не могут быть использованы как генераторы.

```js
'use strict';
var obj = {
	i: 10,
	b: () => console.log(this.i, this),
	c: function () {
		console.log(this.i, this);
	},
};
obj.b(); // prints undefined, Window {...} (или глобальный объект)
obj.c(); // prints 10, Object {...}
```


### var vs. let vs. const

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

### Explain methods and properties

OOP has object way of describing, so Objects have properties (like color, length, value, etc) that store states and methods (like run, read, update, etc) that can change properties of the object or other objects and execute other methods.

### Purpose of «new» keyword?

It is used to create an instance of an object

### How to execute string as function

```js
const scriptStr = "console.log('hey');";

eval(scriptStr);

new Function(scriptStr)();
```

### what is the result

```js
var funcs = [];
for (var i = 0; i < 3; i++) {
	funcs[i] = function () {
		console.log('My value: ' + i);
	};
}

for (const f of funcs) {
	f();
}
```

And classical solution with closure:

```js
var funcs = [];
function createfunc(i) {
	return function () {
		console.log('My value: ' + i);
	};
}

for (var i = 0; i < 3; i++) {
	funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
	// and now let's run each one to see
	funcs[j]();
}
```

### Pure functions

### Inheritance instanceof

```js
class Person {}

class Chief extends Person {}

class Programmer extends Person {}

const programmer = new Programmer();

console.log(programmer instanceof Person);
console.log(programmer instanceof Programmer);
console.log(programmer instanceof Object);
console.log(programmer instanceof Chief);
```

### Heap data structure

A heap is a tree-based data structure which is an almost complete tree that satisfies the heap property.

There are two types of heaps, based on the heap property — MinHeap and MaxHeap.

MinHeap: The parent node is always less than the child nodes.
MaxHeap: The parent node is always greater than or equal to the child nodes.

Heaps is primarily used for getting the minimum or the maximum value present in a heap in O(1) time.

```js
// Heap can be represent as arrays:
const minHeap = [1, 20, 30, 24, 26, 32, 39];
const maxHeap = [100, 80, 60, 77, 75, 58, 51];
```

### Как создать приватную переменную в Javascript:

```js
function func() {
	const priv = 'secret code';
	return function () {
		return priv;
	};
}
var getPriv = func();
```

### Counter function as below

```js
const counter = Counter();
counter.inc();
counter.dec();

function Counter() {
	let count = 0;

	return {
		inc() {
			return (count += 1);
		},
		dec() {
			return (count -= 1);
		},
	};
}
```

### Promises vs. callback

Write wait functions based on callback and promise.

```js
const waitPromise = (delay = new Promise((res) => setTimeout(() => res(), delay)));
waitPromise(2000).then(() => console.log('finish'));

const waitCb = (delay, cb) => setTimeout(() => cb(), delay);
waitCb(2000, () => console.log('finish 2'));
```

#### Promise conditions and how to work with them:

-   pending: начальное состояние, не выполнено и не отклонено.
-   fulfilled: операция завершена успешно.
-   rejected: операция завершена с ошибкой.

#### Promise.all usecase

```js
Promise.all([new Promise(), new Promise(), new Promise()]);
```

### Work with context

```js
function fullName() {
	return 'Hello, this is ' + this.first + ' ' + this.last;
}
console.log(fullName()); // => Hello this is undefined undefined
```

Ответ

```js
// create a person object and pass its values to the fullName function
const person = { first: 'Foo', last: 'Bar' };
console.log(fullName.bind(person)()); // => Hello this is Foo Bar
```

### OOP

Basic concepts of OOP: classes and instances, inheritance, and encapsulation.

---

#### Classes and instances

In OOP, when we model a problem in terms of objects we create abstract definitions representing the types of object we want to have in our system.

---

#### Inheritance

```js
class Proffesor extends Person {}
class Student extends Person {}
```

This feature - when a method has the same name, but a different implementation in different classes - is called polymorphism. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass overrides the version in the superclass.

---

#### Encapsulation

Objects provide an interface to other code that wants to use them, but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and in general making a clear division between its public interface and its private internal state, is called encapsulation.

This is a useful feature because it enables the programmer to change the internal implementation of an object without having to find and update all the code that uses it: it creates a kind of firewall between this object and the rest of the system.

### concurrency, parallel execution, multithreading, asynchrony

https://ru.stackoverflow.com/questions/445768/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BF%D0%BE%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-vs.-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5

### Proxy object usecases

### Generators

