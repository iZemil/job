# How do you handle errors in a NodeJS application?

An error is any problem given out by the program due to a number of factors such as logic, syntax, timeout, etc. An error in Node.js is any instance of the Error object. Common examples include built-in error classes, such as ReferenceError, RangeError, TypeError, URIError, EvalError, and SyntaxError.

User-defined errors can also be created by extending the base Error object, a built-in error class, or another custom error. In general, Node.js errors are divided into two distinct categories: operational errors and programmer errors.

**1. Operational Errors:**

Operational errors represent runtime problems. These errors are expected in the Node.js runtime and should be dealt with in a proper way. Here's a list of common operational errors:

-   failed to connect to server
-   failed to resolve hostname
-   invalid user input
-   request timeout
-   server returned a 500 response
-   socket hang-up
-   system is out of memory

**2. Programmer Errors:**

Programmer errors are what we call bugs. They represent issues in the code itself. Here's a common one for Node.js, when you try reading a property of an undefined object. It's a classic case of programmer error. Here are a few more:

-   called an asynchronous function without a callback
-   did not resolve a promise
-   did not catch a rejected promise
-   passed a string where an object was expected
-   passed an object where a string was expected
-   passed incorrect parameters in a function

## Error handling

In Node.js, errors can be handled using try-catch blocks or by listening for the 'error' event on an event emitter. It is also a good practice to use a global error-handling middleware function to catch unhandled errors.

Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.

```
process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});
```

Process is a global object that provides information about the current Node.js process. Process is a listener function that is always listening to events.

Few events are :
1. `exit`
2. `disconnect`
3. `unhandledException`
4. `rejectionHandled`