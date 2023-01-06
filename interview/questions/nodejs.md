---
sidebar_position: 4
title: NodeJS
---

# NodeJS Questions

### What is NodeJS?

Node.js is a runtime environment for executing JavaScript code outside a browser. Node.js is built on top of the Google Chrome V8 JavaScript engine. It allows developers to run JavaScript on the server side with creating server-side applications.

### Pros and Cons of NodeJS?

**Pros:**

-   Event-driven architecture and non-blocking I/O model make it easy to build high-performance servers that can handle many concurrent connections with a small number of threads - good performance for real-time applications (sockets, streams, video)
-   Easy scalability of using microservices and NPM packages as ready-made solutions library
-   Single language for frontend and backend development
-   Single language for cross-platform development (web, desktop, mobile)

**Cons:**

-   Reduces performance when handling Heavy Computing Tasks
-   Frequent changes of main NodeJS API

### What is libuv?

libuv is a cross-platform C library and the foundation of the NodeJS runtime that provides support for asynchronous I/O, based on event loops.

### What is an Event Loop?

In Node.js, the event loop is the mechanism that handles the execution of JavaScript code. It is the core of the Node.js runtime and is responsible for scheduling asynchronous operations, such as I/O operations and timers.

The event loop works by continuously monitoring a queue of callback functions that are waiting to be executed. When an event occurs that triggers one of these callback functions, the event loop pushes the callback onto the call stack and executes it. Once the callback has finished executing, the event loop continues to process the next callback in the queue.

This process continues until there are no more callbacks left to be executed, at which point the event loop enters a "waiting" state, waiting for new events to occur. This allows Node.js to perform non-blocking I/O operations and to handle many concurrent connections with a small number of threads.

Overall, the event loop is what enables Node.js to be efficient and lightweight, making it well-suited for building scalable network applications.

### List down the various timing features of NodeJS

Node.js provides a Timers module which contains various functions for executing the code after a specified period of time.

Below I have listed down the various functions provided by this module:
-   `setTimeout/clearTimeout` – schedule code execution after a designated amount of milliseconds
-   `setInterval/clearInterval` – execute a block of code multiple times every specified time period
-   `setImmediate/clearImmediate` – execute code at the end of the current event loop cycle
-   `process.nextTick` – schedule a callback function that needs to be invoked in the next iteration of the Event Loop

```js
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('I run immediately'));
process.nextTick(() => console.log('But I run before that'));
console.log('current event loop');

> current event loop
> But I run before that
> timeout
> I run immediately
```

### What is the diff process.nextTick vs setImmediate

The process.nextTick function waits for the execution of action till the next pass around in the event loop or once the event loop is completed only then it will invoke the callback function.

On the other hand, setImmediate() is used to execute a callback method on the next cycle of the event loop which eventually returns it to the event loop in order to execute the I/O operations.

### What is the diff synchronous vs asynchronous code?

Synchronous code is executed in a blocking manner, meaning that the program will pause at each synchronous line of code until the operation is complete.

Asynchronous code is executed in a non-blocking manner, allowing the program to continue running while the asynchronous operation is being performed.

### What is the package.json?

package.json is a file that is used to define the properties of a Node.js package. It is typically located in the root directory of a project, and it contains information such as the package's name, version, dependencies, scripts, and other metadata.

The package.json file serves several purposes:
-   It helps other developers understand what your package does, how it is structured, and how to use it.
-   It allows you to specify the dependencies that your package needs in order to function. When someone installs your package, npm (the Node.js package manager) will automatically install all of the dependencies listed in package.json.
-   It allows you to specify scripts that can be run to perform various tasks, such as testing, building, or deploying your package.

To create empty package.json you can use `npm init -y`

### What is the role of the package-lock.json?

It stores and guarantees the exact same version of every package.

-   `npm install` re-generates the lock file with installing updates
-   `npm ci` installs locked dependencies

### What are tilde(~) and caret(^) in package.json?

-   `~version` - Approximately equivalent to version, i.e., only accept new **patch** versions
-   `^version` - Compatible with version, i.e., accept new **minor and patch** versions
-   `version` - Must match version exactly
-   `>version` - Must be greater than version (same logic with `>=version`, `<version`, `<=version`)
-   `1.2.x` - 1.2.0, 1.2.1, etc., but not 1.3.0
-   `*` - Matches any version
-   `latest` - Obtains latest release

### Explain REPL in the context of NodeJS

REPL stands for "Read-Eval-Print Loop". It is a simple, interactive programming environment that allows you to execute code snippets and see the results immediately.

In the context of Node.js, the REPL provides a way to try out Node.js code snippets quickly and easily. It is built into the Node.js runtime and can be accessed by running the `node` command in a terminal or command prompt.

When you start the REPL, you will see a command prompt, where you can enter Node.js code snippets. When you press Enter, the REPL will evaluate the code snippet and print the result to the console. You can then enter more code snippets and see the results immediately.

The REPL is a useful tool for experimenting with Node.js code and testing out small code snippets. It is also a good way to learn the Node.js API and explore the various built-in objects and functions that are available.

### What is a middleware in NodeJS?

In the context of Node.js, middleware refers to functions that have access to the request and response objects, and the next middleware function in the application's request-response cycle. These functions can perform tasks such as logging requests, parsing request bodies, adding response headers, and handling errors.

Middleware functions are used to modify the request and response objects, or to perform additional tasks before or after the primary logic of the application. They are typically organized into a chain, with each middleware function being passed to the next function in the chain.

In Node.js, middleware functions are commonly used in web frameworks such as Express.js to provide additional functionality to the application. For example, you might use middleware functions to handle authentication, compression, or caching, or to add CORS headers to the response.

Here is an example of a simple middleware function in Node.js using the Express.js framework:

```js
function loggerMiddleware(req, res, next) {
	console.log(`${req.method} ${req.url}`);
	next();
}

app.use(loggerMiddleware);
```

This middleware function logs the HTTP method and URL of each request to the console. The `next` function is called to pass control to the next middleware function in the chain.

### How do you handle errors in a NodeJS application?

In Node.js, errors can be handled using try-catch blocks or by listening for the 'error' event on an event emitter. It is also a good practice to use a global error-handling middleware function to catch unhandled errors.

### What is the diff between spawn and fork methods?

The `spawn()` and `fork()` methods in Node.js are both used to create new child processes, but they work in slightly different ways:

-   The `spawn()` method launches a new process and returns a ChildProcess object, which allows you to communicate with the child process using standard input, output, and error streams. The `spawn()` method is generally used for running long-running processes, such as command-line utilities, and it is well-suited for streaming large amounts of data between the parent and child processes.
-   The `fork()` method is similar to `spawn()`, but it is specifically designed to spawn new Node.js processes. It works by creating a new instance of the Node.js runtime, which allows you to execute a new instance of your application in a separate process. The `fork()` method is well-suited for scenarios where you want to run multiple instances of your application, or where you want to take advantage of multiple CPU cores.

Overall, the `spawn()` method is generally more flexible and powerful, while the `fork()` method is easier to use and better optimized for Node.js applications. Which method you choose will depend on your specific needs and requirements.

### Explain the concept of stub in NodeJS

In Node.js, stubs are basically the programs or functions that are used for stimulating the module or component behavior. During any test cases, stubs provide the canned answers of the functions

### What is a Buffer in NodeJS?

Buffer global class is used for storing the raw data in an array of integers. But it corresponds to a raw memory allocation that is located outside the V8 heap. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it’s necessary to work with Buffers.

### What is a Stream in NodeJS?

Stream is the collection of data similar to arrays and strings. They are objects using which you can read data from a source or write data to a destination in a continuous manner. It might not be available at once and need not to have fit in the memory. These streams are especially useful for reading and processing a large set of data.

In Node.js, there are four fundamental types of streams:

1. *Readable:* for reading large chunks of data from the source.
2. *Writable:* for writing large chunks of data to the destination.
3. *Duplex:* for both the functions - read and write.
4. *Transform:* It is a duplex stream that is used for modifying the data.

### What is an Event Emitter in NodeJS?

The `EventEmitter` class is a built-in class in Node.js that allows objects to emit events and register listeners for those events. It is a useful way to implement a publish-subscribe pattern, where an object can publish events to which other objects can subscribe.

Here is an example of how to use the `EventEmitter` class in Node.js:

```js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('start', (start, end) => {
	console.log(`started from ${start} to ${end}`);
});

myEmitter.emit('start', 1, 100);
```

### How do you structure a NodeJS project?

A Node.js project should have a clear and organized file and directory structure, with a well-defined entry point (usually a file called `index.js` or `server.js`). It should also have a `package.json` file that defines the dependencies and scripts for the project.

:::tip
For advanced answer, try to discover NestJS framework architecture
:::

### How do you improve the performance of a NodeJS application?

There are several ways to improve the performance of a Node.js application, including optimizing the code, using caching, and using a load balancer to distribute incoming requests across multiple servers. It is also important to monitor the performance of the application and to profile it to identify any bottlenecks or inefficiencies.

### How do you test an application?

There are several ways to test an application, including using unit tests, integration tests, and end-to-end tests. Common testing frameworks for Node.js include Mocha, Jest, and Jasmine.

### Describe child process in NodeJS

In Node.js, the `child_process` module provides an API for creating and managing child processes. Child processes are separate instances of the Node.js runtime that can be spawned from a parent process. They can be used to run long-running tasks or processes in parallel with the parent process, or to execute command-line utilities or other external programs.

The `child_process` module provides four different methods for creating child processes:

1.  `spawn()`: Launches a new process and returns a ChildProcess object, which allows you to communicate with the child process using standard input, output, and error streams.
2.  `exec()`: Executes a command in a child process and buffers the output.
3.  `execFile()`: Executes a command in a child process, providing the option to specify the encoding for the output.
4.  `fork()`: Spawns a new Node.js process and returns a ChildProcess object, allowing the parent and child processes to communicate using inter-process communication (IPC).

### How to create a clustering in NodeJS?

Clustering in Node.js refers to the ability to create a group of child processes that can share server ports and work together to handle incoming requests. Clustering is a way to improve the performance and scalability of a Node.js application, by taking advantage of multiple CPU cores and distributing the workload across multiple processes.

To create a cluster in Node.js, you can use the `cluster` module, which is part of the Node.js core. The `cluster` module allows you to create a master process that can spawn and manage a group of worker processes. Each worker process runs a separate instance of the application, and the master process distributes incoming requests to the workers using a round-robin algorithm.

Here is an example of how to create a cluster in Node.js:

```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server
	http.createServer((req, res) => {
		res.writeHead(200);
		res.end('hello world\n');
	}).listen(8000);

	console.log(`Worker ${process.pid} started`);
}
```

In this example, the master process creates a worker process for each CPU core, and each worker process runs an HTTP server that listens on port 8000. When an incoming request is received, the master process distributes it to one of the worker processes using a round-robin algorithm. This allows the application to handle multiple requests concurrently and improve its overall performance and scalability.
