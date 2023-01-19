# List down the various timing features of NodeJS

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
