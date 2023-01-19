# What is the diff between spawn and fork methods?

The `spawn()` and `fork()` methods in Node.js are both used to create new child processes, but they work in slightly different ways:

-   The `spawn()` method launches a new process and returns a ChildProcess object, which allows you to communicate with the child process using standard input, output, and error streams. The `spawn()` method is generally used for running long-running processes, such as command-line utilities, and it is well-suited for streaming large amounts of data between the parent and child processes.
-   The `fork()` method is similar to `spawn()`, but it is specifically designed to spawn new Node.js processes. It works by creating a new instance of the Node.js runtime, which allows you to execute a new instance of your application in a separate process. The `fork()` method is well-suited for scenarios where you want to run multiple instances of your application, or where you want to take advantage of multiple CPU cores.

Overall, the `spawn()` method is generally more flexible and powerful, while the `fork()` method is easier to use and better optimized for Node.js applications. Which method you choose will depend on your specific needs and requirements.
