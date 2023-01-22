# How to measure the performance of an NodeJS app?

There are several ways to measure the performance of a Node.js app, including:

1. Profiling: using tools such as the built-in Node.js profiler or external tools like v8-profiler or node-inspector to profile the app and identify performance bottlenecks (e.g. one of the metrics [`monitorEventLoopDelay`](https://nodejs.org/api/perf_hooks.html#perf_hooks_perf_hooks_monitoreventloopdelay_options))
2. Monitoring: using tools such as Prometheus, StatsD, or New Relic to monitor key performance metrics such as memory usage, CPU usage, and response times.
3. Logging: using tools such as Winston or Bunyan to log key events and performance metrics in the app, which can be analyzed later to identify performance issues.
4. Load testing: using tools such as Apache JMeter or Gatling to simulate a high number of concurrent users and measure the app's performance under load.
5. Code analysis: using tools such as ESLint, JSHint, or JSLint to analyze the code for potential performance issues, such as memory leaks or slow loops.
6. Tracing: using tools such as OpenTracing, Zipkin, or Dapper to trace the flow of a request through the app and identify where performance bottlenecks occur.

## How to improve Node.js performance?

**1. Asynchronous Functions:**

Using asynchronous functions in an application that heavily uses I/O operations will improve it. This is because the CPU will be able to handle multiple requests simultaneously due to non-blocking I/O, while one of these requests is making an Input/Output operation.

**Example:**

```js
const fs = require('fs');
// Performing a blocking I/O
const file = fs.readFileSync('/etc/file.txt');
console.log(file);

// Performing a non-blocking I/O
fs.readFile('/etc/file.txt', (err, file) => {
    if (err) return err;
    
    console.log(file);
});
```

**2. Query Optimization:**

Basic tips to improve your database performance/optimization overview

-   **Indexing** - Indexing is an approach to optimize the performance of a database by minimizing the number of disk accesses required when a query is processed.
    
-   **Avoid SELECT** - Use the SELECT statement to query only the data you need and avoid extra fetching loads to your database.
    

```sql
-- query1
SELECT * FROM Customers

-- query2 (optimized)
SELECT FirstName, LastName, Address, City, State, Zip FROM Customers
```

-   **Use LIMIT** - LIMIT will return only the specified number of records.

```sql
SELECT FirstName, LastName, Address, City, State, Zip FROM Customers LIMIT 100
```

-   **Wildcard (%)** - Use wildcard (%) character appropriately

```sql
-- SELECT customers whose first names start with "Avi"

-- query1
SELECT FirstName from Customers where FirstName like '%avi%'

-- query2 (optimized)
SELECT FirstName from Customers where FirstName like 'avi%'
```

**3. Caching:**

Caching is one of the common ways of improving the Node Js performance. A cache is a memory buffer where frequently accessed data is temporarily stored to be accessed quicker. Cached data is then retrieved without having to access the origin. Caching will improve your app response time and even reduce some costs such as bandwidth and data volumes.

-   **Redis cache** is entirely asynchronous with optimal performance to handle cached data requests in a single thread.
-   **Memcached** stores data across different nodes. It uses a hashing schema that provides a hash table functionality. These ensure that adding, or removing a server node does not significantly change the mapping of the keys to server nodes.
-   **Node-cache** works almost like Memcached with the set, get, and delete methods. It has a timeout that deletes data from the cache when the timeout expires.
-   **Nginx** will help maintain load balance. Nginx will help cache static files, that will drastically offload the work of the application server. It offers low memory usage and high concurrency.
    

**4. Load Balancing:**

It's a typical challenge to create performant applications that can handle a huge number of incoming connections. Load balancing is the term for this method. The cluster module to allow load balancing and distribute incoming connections across all workers in an environment's numerous CPU cores using a **round-robin** technique.

Using the PM2 process manager to keep applications alive indefinitely is another option. PM2 includes a cluster feature that allows you to run numerous processes over all cores without having to worry about changing the code to use the native cluster module.

**5. Real-time Monitoring:**

Gauging the current level of performance of an application may require running different kinds of tests, such as the following:

-   **Load testing:** refers to the practice of simulating the expected usage of a system and measuring its response as the workload increases.
-   **Stress testing:** designed to measure how a system performs beyond the limits of normal working conditions. Its goal is to determine how much the system can handle before it fails and how it attempts to recover from a failure.
-   **Spike testing:** helps to test the behavior of an application when it receives a drastic increase or decrease in load.
-   **Scalability testing:** used to find the point at which the application stops scaling and identify the reasons behind it.
-   **Volume testing:** determines if a system can cope with large amounts of data.
-   **Endurance testing:** helps evaluate the behavior of a software application under sustained load for a long period, to catch problems such as memory leaks.
    

**6. Use HTTP/2:**

The HTTP/2 in a Node.js application make web browsing faster and easier while reducing bandwidth usage. HTTP/2 is aimed at increasing performance and addressing concerns with HTTP/1.x.

HTTP/2 has the following features:

-   **Header Compression** - This disables unnecessary headers and compels all HTTP headers to be sent compressed.
-   **Multiplexing** - This allows multiple requests to simultaneously retrieve resources and response messages over a single TCP connection.

**7. Stateless Authentication:**

Stateless authentication on the client-side with the help of JSON Web Token ( **JWT** ) provides great speed to the application. In this Stateless Authentication procedure, a web token is created whenever the user login into the website. It contains all the required user information, which is sent back to the respective user for authenticating all API requests.

**8. Module bundlers and task runners:**

Module bundlers are build tools for processing groups of modules and their dependencies into a file or group of files. This especially includes images, JavaScript, and CSS files. The process that makes this possible involves module bundlers (e.g., webpack, Parcel, Rollup) and task runners (e.g., Gulp, Grunt, etc.).

This allows for complex transforms, such as shortening multicharacter variable names or using a shorter syntax that's equivalent to the original code and combining several JavaScript files into one to reduce the number of network requests.

**9. Script Tracing and Logging:**

Logging helps track your application activities and traffic. When an app is running, it is possible to get fatal errors (even though your app was running properly after production testing).

Commonly used methods for logging in Node.js are

-   **Winston** - is a multi-transport async logger, which is simple, universal, and extremely versatile. It makes logging more flexible and extensible. It is the most popular logger based on NPM stats. Winston has different transports with different default levels that indicate message priority. These levels include ( error, warn, info, http, verbose, debug, silly )
-   **Morgan** - Morgan is an HTTP request logger middleware for Node.js applications. Morgan gives insight on how your app is being used and alerts you on potential errors and issues that could be threats to your application.
    

**Example:**

```js
const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
 
const app = express()
 
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})
```

**10. Gzip Compression:**

Gzip compresses HTTP requests and responses. Gzip compresses responses before sending them to the browser, thus, the browser takes a shorter time to fetch them. Gzip also compresses the request to the remote server, which significantly increases web performance.

**Example:**

```js
const compression = require("compression");
const express = require("express");
const app = express();

// compress all responses
app.use(compression());
// ...
```