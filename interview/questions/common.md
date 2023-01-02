---
sidebar_position: 99
title: Common
---

# Common Programming Questions

### What is code refactoring?

### What is CORS?

CORS (Cross-Origin Resource Sharing) is a security mechanism that is used to restrict or allow the communication between web pages and servers that are hosted on different domains. It consists of a set of rules and headers that are used to specify the conditions under which a web page is allowed to make requests to a server, and to allow or deny the responses of the server to be accessed by the web page.

CORS is implemented by the browser, and it is based on the HTTP headers that are sent with the requests and the responses. The browser checks the headers of the requests and the responses, and it compares the origin of the requests (the domain of the web page) with the origin of the responses (the domain of the server). If the origins match, the browser allows the requests and the responses to be sent and received, and if the origins do not match, the browser blocks the requests and the responses, and it sends an error message to the web page.

CORS is used to prevent web pages from making requests to servers that are hosted on different domains, and to prevent servers from sending responses to web pages that are hosted on different domains. It is used to protect the privacy and the security of the users, and to prevent web pages from making malicious or unauthorized requests to servers.

CORS is an important security mechanism in web development, and it is important to understand how it works and how to use it properly in your web applications. It is also important to be aware of the limitations and the potential issues that CORS can cause, and to know how to troubleshoot and debug CORS errors in your web applications.

### SPA vs MPA

Single Page Applications (SPAs) and Multiple Page Applications (MPAs) are two different architectures for building web applications.

Single Page Applications (SPAs) are web applications that are designed to work as a single page. They are built using client-side technologies such as HTML, CSS, and JavaScript, and they are loaded in the browser as a single HTML document. SPAs use a combination of client-side rendering, data binding, and AJAX (Asynchronous JavaScript and XML) to update the content and the layout of the page without reloading the page. SPAs are fast and responsive, and they offer a seamless and immersive experience to the users.

Multiple Page Applications (MPAs) are web applications that are built using server-side technologies such as PHP, ASP.NET, or Java, and that are composed of multiple pages that are served by the server. MPAs use a combination of server-side rendering, templates, and server-side logic to generate and update the content and the layout of the pages. MPAs are slower and less responsive than SPAs, as they require the reloading of the page to update the content and the layout.

Here are some guidelines on when to use SPAs or MPAs:

-   Use SPAs when you need fast and seamless navigation: SPAs are suitable for web applications that require fast and seamless navigation, such as online stores, social networks, or collaboration tools. SPAs offer a fast and responsive experience to the users, and they allow the users to navigate and interact with the web application without reloading the page.   
-   Use MPAs when you need complex server-side logic or data processing: MPAs are suitable for web applications that require complex server-side logic or data processing, such as enterprise applications, reporting tools, or data-intensive applications. MPAs allow you to use server-side technologies and languages to process and manipulate data, and to generate and update the content and the layout of the pages. 
-   Use SPAs when you need to optimize the performance and the scalability of the web application: SPAs are suitable for web applications that need to optimize the performance and the scalability, as they require fewer server resources and bandwidth, and they offer a faster and more efficient experience to the users. SPAs use client-side rendering and data binding to update the content and the layout of the page, and they use AJAX to communicate with the server asynchronously, without reloading the page.
-   Use MPAs when you need to support legacy systems or technologies: MPAs are suitable for web applications that need to support legacy systems or technologies, as they allow you to use server-side technologies and languages to integrate with the legacy systems and the APIs. MPAs allow you to use server-side rendering and templates to generate and update the content and the layout of the pages, and they allow you to use server-side logic to manipulate and process data.

### What is Memoization?

Memoization is an optimization technique which passes a complex function to be memoized. In memoization, the result is “remembered” when the same parameters are passed-in subsequently.

### What is monolithic architecture?

A monolithic architecture means that your app is written as one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources.

**Benefits of Monolithic Architecture:**
-  Simple to develop.
-  Simple to test. For example you can implement end-to-end testing by simply launching the application and testing the UI with Selenium.
-  Simple to deploy. You just have to copy the packaged application to a server.
-  Simple to scale horizontally by running multiple copies behind a load balancer.

**Drawbacks of Monolithic Architecture:**
-  This simple approach has a limitation in size and complexity.
-  Application is too large and complex to fully understand and made changes fast and correctly.
-  The size of the application can slow down the start-up time.
-  You must redeploy the entire application on each update.
-  Impact of a change is usually not very well understood which leads to do extensive manual testing.
-  Continuous deployment is difficult.
-  Monolithic applications can also be difficult to scale when different modules have conflicting resource requirements.
-  Another problem with monolithic applications is reliability. Bug in any module (e.g. memory leak) can potentially bring down the entire process. Moreover, since all instances of the application are identical, that bug will impact the availability of the entire application.
-  Monolithic applications has a barrier to adopting new technologies. Since changes in frameworks or languages will affect an entire application it is extremely expensive in both time and cost.

Monolithic Pros: The major advantage of the monolithic architecture is that most apps typically have a large number of cross-cutting concerns, such as logging, rate limiting, and security features such audit trails and DOS protection.

When everything is running through the same app, it’s easy to hook up components to those cross-cutting concerns.

There can also be performance advantages, since shared-memory access is faster than inter-process communication (IPC).

Monolithic cons: Monolithic app services tend to get tightly coupled and entangled as the application evolves, making it difficult to isolate services for purposes such as independent scaling or code maintainability.

Monolithic architectures are also much harder to understand, because there may be dependencies, side-effects, and magic which are not obvious when you’re looking at a particular service or controller.

### What is Microservice architecture?

A microservice architecture means that your app is made up of lots of smaller, independent applications capable of running in their own memory space and scaling independently from each other across potentially many separate machines.

The idea is to split your application into a set of smaller, interconnected services instead of building a single monolithic application. The Microservice architecture pattern significantly impacts the relationship between the application and the database. Instead of sharing a single database schema with other services, each service has its own database schema. Mobile, desktop, web apps don't have direct access to services but they have access to API Gateway. It is responsible for tasks such as load balancing, caching, access control, API metering, and monitoring.

**Benefits of Microservices Architecture:**
-   It tackles the problem of complexity by decomposing application into a set of manageable services which are much faster to develop, and much easier to understand and maintain.
-   It enables each service to be developed independently by a team that is focused on that service.
-   It reduces barrier of adopting new technologies since the developers are free to choose whatever technologies make sense for their service and not bounded to the choices made at the start of the project.
-   Microservice architecture enables each microservice to be deployed independently. As a result, it makes continuous deployment possible for complex applications.
-   Microservice architecture enables each service to be scaled independently.

**Drawbacks of Microservices Architecture:**
-   Microservices architecture adding a complexity to the project just by the fact that a microservices application is a distributed system. You need to choose and implement an inter-process communication mechanism based on either messaging or RPC and write code to handle partial failure and take into account other fallacies of distributed computing.
-   Microservices has the partitioned database architecture. Business transactions that update multiple business entities in a microservices-based application need to update multiple databases owned by different services. Using distributed transactions is usually not an option and you end up having to use an eventual consistency based approach, which is more challenging for developers.
-   Testing a microservices application is also much more complex then in case of monolithic web application. For a similar test for a service you would need to launch that service and any services that it depends upon (or at least configure stubs for those services).
-   It is more difficult to implement changes that span multiple services. In a monolithic application you could simply change the corresponding modules, integrate the changes, and deploy them in one go. In a Microservice architecture you need to carefully plan and coordinate the rollout of changes to each of the services.
-   Deploying a microservices-based application is also more complex. A monolithic application is simply deployed on a set of identical servers behind a load balancer. In contrast, a microservice application typically consists of a large number of services. Each service will have multiple runtime instances. And each instance need to be configured, deployed, scaled, and monitored. In addition, you will also need to implement a service discovery mechanism. Manual approaches to operations cannot scale to this level of complexity and successful deployment a microservices application requires a high level of automation.

Microservice pros: Microservice architectures are typically better organized, since each microservice has a very specific job, and is not concerned with the jobs of other components. Decoupled services are also easier to recompose and reconfigure to serve the purposes of different apps (for example, serving both the web clients and public API).

Microservice cons: As you’re building a new microservice architecture, you’re likely to discover lots of cross-cutting concerns that you did not anticipate at design time. A monolithic app could establish shared magic helpers or middleware to handle such cross-cutting concerns without much effort.

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
