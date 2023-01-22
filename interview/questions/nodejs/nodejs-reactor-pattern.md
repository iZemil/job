# What is Reactor Pattern?

The Reactor pattern is a design pattern used in Node.js to handle asynchronous I/O operations. It is a concurrency pattern that provides a mechanism to demultiplex and dispatch service requests that are delivered to an application by one or more clients. The pattern defines a non-blocking event-driven architecture that abstracts the handling of multiple input events through the use of a central demultiplexing mechanism, such as an event loop. The event loop waits for events to occur on a set of registered handles, and then dispatches the appropriate event handlers to handle those events.

**Reactor Pattern comprises of:**

**1. Resources:** They are shared by multiple applications for I/O operations, generally slower in executions.

**2. Synchronous Event De-multiplexer/Event Notifier:** This uses Event Loop for blocking on all resources. When a set of I/O operations completes, the Event De-multiplexer pushes the new events into the Event Queue.

**3. Event Loop and Event Queue:** Event Queue queues up the new events that occurred along with its event-handler, pair.

**4. Request Handler/Application:** This is, generally, the application that provides the handler to be executed for registered events on resources.

**An example of the Reactor pattern in Node.js** would be a server application that listens for incoming connections on a specific port. The event loop, or reactor, would register a handle for the server socket and wait for incoming connections.