---
sidebar_position: 99
title: Common
---

# Common Programming Questions

### What is code refactoring?

### What are the pros and cons of monolithic vs microservice architectures?

A monolithic architecture means that your app is written as one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources.

A microservice architecture means that your app is made up of lots of smaller, independent applications capable of running in their own memory space and scaling independently from each other across potentially many separate machines.

Monolithic Pros: The major advantage of the monolithic architecture is that most apps typically have a large number of cross-cutting concerns, such as logging, rate limiting, and security features such audit trails and DOS protection.

When everything is running through the same app, it’s easy to hook up components to those cross-cutting concerns.

There can also be performance advantages, since shared-memory access is faster than inter-process communication (IPC).

Monolithic cons: Monolithic app services tend to get tightly coupled and entangled as the application evolves, making it difficult to isolate services for purposes such as independent scaling or code maintainability.

Monolithic architectures are also much harder to understand, because there may be dependencies, side-effects, and magic which are not obvious when you’re looking at a particular service or controller.

Microservice pros: Microservice architectures are typically better organized, since each microservice has a very specific job, and is not concerned with the jobs of other components. Decoupled services are also easier to recompose and reconfigure to serve the purposes of different apps (for example, serving both the web clients and public API).

They can also have performance advantages depending on how they’re organized because it’s possible to isolate hot services and scale them independent of the rest of the app.

Microservice cons: As you’re building a new microservice architecture, you’re likely to discover lots of cross-cutting concerns that you did not anticipate at design time. A monolithic app could establish shared magic helpers or middleware to handle such cross-cutting concerns without much effort.

In a microservice architecture, you’ll either need to incur the overhead of separate modules for each cross-cutting concern, or encapsulate cross-cutting concerns in another service layer that all traffic gets routed through.

Eventually, even monolthic architectures tend to route traffic through an outer service layer for cross-cutting concerns, but with a monolithic architecture, it’s possible to delay the cost of that work until the project is much more mature.

Microservices are frequently deployed on their own virtual machines or containers, causing a proliferation of VM wrangling work. These tasks are frequently automated with container fleet management tools.

Good to hear:

- Positive attitudes toward microservices, despite the higher initial cost vs monolthic apps
- Aware that microservices tend to perform and scale better in the long run.

Practical about microservices vs monolithic apps. Structure the app so that services are independent from each other at the code level, but easy to bundle together as a monolithic app in the beginning. Microservice overhead costs can be delayed until it becomes more practical to pay the price.

Red flags:

- Unaware of the differences between monolithic and microservice architectures.
- Unaware or impractical about the additional overhead of microservices.
- Unaware of the additional performance overhead caused by IPC and network communication for microservices.

Too negative about the drawbacks of microservices. Unable to articulate ways in which to decouple monolithic apps such that they’re easy to split into microservices when the time comes.

Underestimates the advantage of independently scalable microservices.

## What is SOLID?

SOLID is a set of five principles of object-oriented software design. These principles were first proposed by Robert C. Martin in the early 2000s and have since become a widely accepted set of best practices for designing maintainable, scalable, and flexible software systems.

**The five principles of SOLID are:**
1.  Single Responsibility Principle (SRP): This principle states that a class should have only one reason to change, and that it should have a single, well-defined responsibility.
2.  Open-Closed Principle (OCP): This principle states that a class should be open for extension, but closed for modification. This means that it should be easy to add new functionality to a class, but the existing code should not need to be modified.
3.  Liskov Substitution Principle (LSP): This principle states that a subclass should be able to be used as a substitute for its superclass, without altering the correctness of the program.
4.  Interface Segregation Principle (ISP): This principle states that a client should not depend on interfaces it does not use. This means that a class should not be forced to implement unnecessary methods.
5.  Dependency Inversion Principle (DIP): This principle states that high-level modules should not depend on low-level modules, but rather both should depend on abstractions. This helps to decouple the modules and makes them more flexible and maintainable.

:::info  
By following the SOLID principles, developers can design software systems that are easier to understand, maintain, and extend over time.
:::

### Single Responsibility Principle
A class should be responsible for only one thing. If a class is responsible for several tasks, its subsystems, which implement these tasks, are related to each other. Changes in one such subsystem lead to changes in another.

Below is an example that does not conform to the single responsibility principle:
```js
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

Try to refactor the code before seeing a solution

<details>
<summary>Example Solution</summary>

```js
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

class TodoDBManager {
	saveToFile(data, filename) {
		fs.writeFileSync(filename, data.toString());
	}
	loadFromFile(filename) {
		// Some implementation
	}
}
```
</details>

### Open-Closed Principle
Program entities (classes, modules, functions) must be open for extension, but not for modification.

Let's continue with `TodoList` class, check code below and try to refactor it according open-closed principle:

```ts
enum EStatus {
	pending,
	progress,
	completed,
}

interface ITodo {
	status: EStatus;
	// ...other todo fields
}

class TodoList {
	items: ITodo[];

	processTodos(status: EStatus) {
		for (const todo of this.items) {
			if (todo.status === EStatus.pending) {
				// ...logic1
			}
			if (todo.status === EStatus.progress) {
				// ...logic2
			}
			if (todo.status === EStatus.completed) {
				// ...logic3
			}
		}
	}
}
```

<details>
<summary>Example Solution</summary>

```ts
class TodoList {
    processTodos(status, cb) {
		for (const todo of this.items) {
			if (todo.status === status) {
				cb();
			}
		}
    }
}
```
</details>

### Liskov Substitution Principle
If you have a function, that works for a base type, it should work for a derived type.

```ts
class TodoList {
	items: ITodo[];

	getAllItems() {
		return this.items;
	}

}

class PendingTodoList extends TodoList {
	constructor() {
		super();
	}
}
```

<details>
<summary>Example Solution</summary>

```ts
class PendingTodoList extends TodoList {
	getAllItems() {
		return this.items.filter(it => it.status === EStatus.pending);
	}
}
```
</details>

### Interface Segregation Principle
Create highly specialized interfaces designed for a specific client. Customers should not be dependent on interfaces that they do not use.
```ts
interface ITodoList {
	items: ITodo[];
}

interface IWeatherList extends ITodoList {
	getWeather: () => void;
	getWeekForecast: () => void;
}

class TodoList implements IWeatherList {
	constructor(items: ITodo[]) {
		this.items = items;
	}
}
```

<details>
<summary>Example Solution</summary>

```ts
class TodoList implements ITodoList {}
```
</details>

### Dependency Inversion Principle
- Top-level modules should not depend on lower-level modules. Both types of modules should depend on abstractions.
- Abstractions should not depend on parts. Parts should depend on abstractions.

```ts
interface ITodo {}

abstract class DB {
	data: ITodo[];
	save: (data: ITodo[]) => void;
}

class LocalDB {
	saveTodos(items: ITodo[]) {
	    // ...logic
	}
}

class ExternalDB {
	saveTodos(items: ITodo[]) {
	    // ...logic
	}
}

class TodoListDB extends DB {
	data: ITodo[];

	save(db) {
		db.saveTodos(this.items);
	}
}
```

<details>
<summary>Example Solution</summary>

```ts
abstract class DB {
	save: <T>(data: T[]) => void;
}

class LocalDB extends DB {
	save(data) {
	    // logic
	}
}

class ExternalDB extends DB {
	save(data) {
	    // logic
	}
}

class TodoList {
	saveTodos(db: DB) {
		db.save(this.items);
	}
}
```
</details>

