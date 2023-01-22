# What is an Event Emitter in NodeJS?

The `EventEmitter` class is a built-in class in Node.js that allows objects to emit events and register listeners for those events. It is a useful way to implement a publish-subscribe pattern, where an object can publish events to which other objects can subscribe.

Here is an example of how to use the `EventEmitter` class in Node.js:

```js ee.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const ee = new MyEmitter();

ee.on('ping', () => console.log('pong'));
ee.on('start', (start, end) => console.log(`started from ${start} to ${end}`));
ee.emit('start', 1, 100);
```

Try to experiment with the file into REPL with command: `node -i -e "$(< ./ee.js)"` (the command starts input-output loop with injected file).

-   **.emit()** - this method in event emitter is to emit an event in module
-   **.on()** - this method is to listen to data on a registered event in node.js
-   **.once()** - it listen to data on a registered event only once.
-   **.addListener()** - it checks if the listener is registered for an event.
-   **.removeListener()** - it removes the listener for an event.