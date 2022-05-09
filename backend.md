# Backend nodejs interview

-   [Junior level](#Junior-level)
-   [Middle level](#Middle-level)
-   [Senior level](#Senior-level)

## Junior level

### var, let, const

### В чем прикладное отличие Node.js от других платформ серверной разработки (Под какие задачи подходит, а под какие не подходит)?

-   +Good perfomance for realtime applications (sockets, streams, video)
-   +Easy scalability of using microservices and npm packages
-   +One language for client and backend sides (Backend for frontend development)
-   +Cross-platforming (web, desktop, mobile)
-   -Reduces performance when handling Heavy Computing Tasks
-   -Frequent changes of main nodejs API

### What is async\sync operations and threading what is difference?

### What is Node.js and how it works?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It uses libuv to handle asynchronous events.

## Middle level

### SPA vs MPA

### Object.assign vs Spread

### Public\private\protected

### What is an event-loop in Node JS?

The mechanism of how nodejs javascript handle operations. JS has one single thread so only one thing can happen at a time. Also js has the call stack where all operations go. Operations may be blocking and non-blocking or sync and async. All blocking operations are handled one by one, top to bottom. But non-blocking/async operations are handled by the message queue or job queue (for promises). The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.

### What is node.js streams?

### What is an Event Emitter in Node.js?

## Senior level

### DB Transactions and ACID

### SQL Exercises

https://pgexercises.com/questions/basic/where4.html

### Child process in nodejs

### Clustering NodeJS
