# Common javascript questions

-   [Junior level](#Junior-level)
-   [Middle level](#Middle-level)
-   [Senior level](#Senior-level)

## Junior level

### Name base js types

1.  undefined
2.  null
3.  boolean
4.  string
5.  number
6.  bigint
7.  symbol
8.  object

### Type converting

```javascript
// 1 => '1'

// '1' => 1

// some => false

// some => true

// some => Nan, what is Nan and what its type
```

### What javascript operators you know?

-   Assignment operators
-   Comparison operators (== vs ===)
-   Arithmetic operators
-   Logical operators (&&, ||, !)
-   String operators
-   Conditional (ternary) operator
-   Others: in, delete, typeof, instanceof, void

### Use cases of Map and Set objects

### Use cases of callback fn

### var, let, const

```javascript
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

### Purpose of «new» keyword?

### Ways to loop arrays

```javascript
const arr = [1, 2, 3, 4, 5];
```

### Ways of conditions

### Arrow functions: what is and specifics

-   Стрелочные функции не содержат собственный контекст this, а используют значение this окружающего контекста.
-   Стрелочные функции не имеют собственного объекта arguments, поэтому в теле стрелочных функций arguments будет ссылаться на переменную в окружающей области.
-   Стрелочные функции не могут быть использованы как конструктор и вызовут ошибку при использовании с new.
-   Ключевое слово yield не может быть использовано в теле стрелочной функции. Как следствие стрелочные функции не могут быть использованы как генераторы.

```javascript
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

### what is the result

```javascript
for (let i = 0; i <= 2; i++) {}
console.log(i); // undefined
```

## Middle level

### Heap data structure

A heap is a tree-based data structure which is an almost complete tree that satisfies the heap property.

There are two types of heaps, based on the heap property — MinHeap and MaxHeap.

MinHeap: The parent node is always less than the child nodes.
MaxHeap: The parent node is always greater than or equal to the child nodes.

Heaps is primarily used for getting the minimum or the maximum value present in a heap in O(1) time.

```javascript
// Heap can be represent as arrays:
const minHeap = [1, 20, 30, 24, 26, 32, 39];
const maxHeap = [100, 80, 60, 77, 75, 58, 51];
```

### Как создать приватную переменную в Javascript:

```javascript
function func() {
	const priv = 'secret code';
	return function () {
		return priv;
	};
}
var getPriv = func();
```

### Counter function as below

```javascript
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

### Promises vs callback

Write wait functions based on callback and promise.

```javascript
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

```javascript
Promise.all([new Promise(), new Promise(), new Promise()]);
```

### Work with context

```javascript
function fullName() {
	return 'Hello, this is ' + this.first + ' ' + this.last;
}
console.log(fullName()); // => Hello this is undefined undefined
```

Ответ

```javascript
// create a person object and pass its values to the fullName function
const person = { first: 'Foo', last: 'Bar' };
console.log(fullName.bind(person)()); // => Hello this is Foo Bar
```

### IIFE

Immediately Invoked Function Expressions (IIFEs) — это синтаксическая конструкция, позволяющая вызвать функцию сразу же в месте ее определения.

Для чего может применяться?

-   Шаблон "модуль" с помощью IIFE и замыканий:

```javascript
var counter = (function () {
	var i = 0;

	return {
		get: function () {
			return i;
		},
		set: function (val) {
			i = val;
		},
		increment: function () {
			return ++i;
		},
	};
})();

console.log(counter.get()); // 0
counter.set(3);
console.log(counter.increment()); // 4
```

### Sort array below

```javascript
const arr = [0, 3, 2, 43, 57, 6, 23, 1, 554, 5, 45, 3, 7, 8];

arr.sort((a, b) => a - b);

function sort(arr) {}
```

### OOP

Basic concepts of OOP: classes and instances, inheritance, and encapsulation.

#### Classes and instances

In OOP, when we model a problem in terms of objects we create abstract definitions representing the types of object we want to have in our system.

#### Inheritance

```javascript
class Proffesor extends Person {}
class Student extends Person {}
```

This feature - when a method has the same name, but a different implementation in different classes - is called polymorphism. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass overrides the version in the superclass.

#### Encapsulation

Objects provide an interface to other code that wants to use them, but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and in general making a clear division between its public interface and its private internal state, is called encapsulation.

This is a useful feature because it enables the programmer to change the internal implementation of an object without having to find and update all the code that uses it: it creates a kind of firewall between this object and the rest of the system.

## Senior level

### Function overloading typescript

TypeScript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type.

```typescript
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
	return a + b;
}
```

### concurrency, parallel execution, multithreading, asynchrony

https://ru.stackoverflow.com/questions/445768/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BF%D0%BE%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-vs-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5

### Proxy object usecases

### SOLID patterns #TODO: https://coder-question.com/cq-blog/529020 and https://duncan-mcardle.medium.com/solid-principle-2-open-closed-javascript-fc49b577a377#:~:text=The%20open%2Dclosed%20principle%20says,the%20need%20to%20modify%20it.

#### What is using below?

```javascript
class TodoList {
    constructor() {
        this.items = []
    }

    addItem(text) {
        this.items.push(text)
    }

    removeItem(index) {
        this.items = items.splice(index, 1)
    }

    toString() {
        return this.items.toString()
    }

    save(filename) {
        fs.writeFileSync(filename, this.toString())
    }

    load(filename) { // Some implementation }
}
```

В данном случае это Принцип единой ответственности (Поведение класса направлено на обеспечение единой ответственности). Примерный ответ:

```javascript
class TodoList {
	constructor() {
		this.items = [];
	}
	addItem(text) {
		this.items.push(text);
	}
	removeItem(index) {
		this.items = items.splice(index, 1);
	}
	toString() {
		return this.items.toString();
	}
}

class DatabaseManager {
	saveToFile(data, filename) {
		fs.writeFileSync(filename, data.toString());
	}
	loadFromFile(filename) {
		// Some implementation
	}
}
```

#### ПРИНЦИП ОТКРЫТОСТИ/ЗАКРЫТОСТИ(программные сущности (классы, модули, функции и т. п.) должны быть открыты для расширения, но закрыты для изменения)

```javascript
class Coder {
	constructor(fullName, language, hobby, education, workplace, position) {
		this.fullName = fullName;
		this.language = language;
		this.hobby = hobby;
		this.education = education;
		this.workplace = workplace;
		this.position = position;
	}
}

class CoderFilter {
	filterByName(coders, fullName) {
		return coders.filter((coder) => coder.fullName === fullName);
	}

	filterBySize(coders, language) {
		return coders.filter((coder) => coder.language === language);
	}

	filterByHobby(coders, hobby) {
		return coders.filter((coder) => coder.hobby === hobby);
	}
}
```

The problem with CoderFilter is that if we want to filter by any other new property we have to change CodeFilter's code. Let's solve this problem by creating a filterByProp function.

```javascript
const filterByProp = (array, propName, value) => array.filter((element) => element[propName] === value);
```

### Generators
