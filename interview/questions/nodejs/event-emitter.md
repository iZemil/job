# What is an Event Emitter in NodeJS?

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
