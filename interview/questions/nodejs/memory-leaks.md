# What are the types of memory leaks in NodeJS?

A memory leak is a condition that occurs when a program doesn't release the memory it allocates. For instance, the system assigns memory locations to store values for the variables that we declare inside our program.

High-level programming languages such as JavaScript utilize automatic memory management, known as garbage collection. Garbage collection allocates the memory to a variable once we declare it and reclaims the memory once it is no longer needed. Unfortunately, even though JavaScript uses a garbage collector to release the memory, sometimes determining whether to free the memory or not is undecidable.

The common causes of Memory Leaks in Node.JS are:

**1. Global variables:**

This is one of the most common causes of leaks in Node. Due to the nature of JavaScript as a language, it is very easy to add to global variables and resources. If these are not cleaned over time, they keep adding up and eventually crash the application.
```js
const http = require("http");

const requestLogs = []; // causing the memory leak
const server = http.createServer((req, res) => {
    requestLogs.push({ url: req.url, array: new Array(10000).join("*")
    res.end(JSON.stringify(requestLogs));
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");
```

**2. Closures:**

Closures memorize their surrounding context. When a closure holds a reference to a large object in heap, it keeps the object in memory as long as the closure is in use.

This implies easily ending up in situations where a closure holding such a reference can be improperly used leading to a memory leak.

**3. Timers & Events:**

The use of setTimeout, setInterval, Observers, and event listeners can cause memory leaks when heavy object references are kept in their callbacks without proper handling.

**4. Multiple references:**

If you reference the same object from multiple objects, it can lead to a memory leak if one of the references is garbage collected while the other one is left dangling.

## How to prevent memory leaks in Node.js?

Tools to help debug memory leaks:

**1. Node-heapdump:**

The `node-heapdump` module is good for postmortem debugging. It generates heap dumps on your SIGUSR2. To help catch bugs easily in a development environment, add `node-heapdump` as a dependency to your project like so:

```js
const heapdump = require("heapdump");

heapdump.writeSnapshot(function (err, filename) {
  console.log("Sample dump written to", filename);
});
```

**2. Clinic.js:**

`clinic.js` is a handy toolset to diagnose and pinpoint performance bottlenecks in your Node applications. The `clinic.js` HeapProfiler uses flame graphs to highlight memory allocations. You can use it with tools such as AutoCannon to simulate HTTP load when profiling.

**3. The process.memoryUsage method:**

The `process.memoryUsage` method provides a simple way of monitoring memory usage in your Node applications.

The method returns an object with the following properties:

-   **rss:**, or resident set size, refers to the amount of space occupied in the main memory for the process, which includes code segment, heap, and stack. If your RSS is going up, there is a likelihood your application is leaking memory
-   **heapTotal:**, the total amount of memory available for JavaScript objects
-   **heapUsed:**, the total amount of memory occupied by JavaScript objects
-   **external:**, the amount of memory consumed by off-heap data (buffers) used by Node; this is where objects, strings, and closures are stored
-   **arrayBuffers:**, the amount of memory allocation for ArrayBuffers and SharedArrayBuffers (the external memory size also includes this memory value)

```js
console.log(process.memoryUsage());

{
  rss: 4935680,
  heapTotal:1826816,
  heapUsed:650472,
  external: 49879,
  arrayBuffers: 17310,
}
```


**4. Node Inspector:**

Node Inspector is a debugger interface for Node applications. Run Node with the –inspect flag to use it, and it starts listening for a debugging client. It is one of the simplest ways of capturing heap snapshots with Chrome DevTools.

**5. Chrome DevTools:**

Chrome offers a range of tools to help debug your memory and performance issues, including allocation timelines, sampling heap profiler, and heap snapshots etc.