---
sidebar_position: 4
---

# NodeJS

check: https://www.edureka.co/blog/interview-questions/top-node-js-interview-questions-2016/ and https://www.interviewbit.com/node-js-interview-questions/

### What is NodeJS?

### What is Event Loop?

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

### SPA vs MPA

### Object.assign vs Spread

### Public\private\protected

### What is an event-loop in Node JS?

The mechanism of how nodejs javascript handle operations. JS has one single thread so only one thing can happen at a time. Also js has the call stack where all operations go. Operations may be blocking and non-blocking or sync and async. All blocking operations are handled one by one, top to bottom. But non-blocking/async operations are handled by the message queue or job queue (for promises). The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.

### What is node.js streams?

### What is an Event Emitter in Node.js?

### Monolithic vs. Microservices Architecture

#### Benefits of Monolithic Architecture

-   Simple to develop.
-   Simple to test. For example you can implement end-to-end testing by simply launching the application and testing the UI with Selenium.
-   Simple to deploy. You just have to copy the packaged application to a server.
-   Simple to scale horizontally by running multiple copies behind a load balancer.

#### Drawbacks of Monolithic Architecture

-   This simple approach has a limitation in size and complexity.
-   Application is too large and complex to fully understand and made changes fast and correctly.
-   The size of the application can slow down the start-up time.
-   You must redeploy the entire application on each update.
-   Impact of a change is usually not very well understood which leads to do extensive manual testing.
-   Continuous deployment is difficult.
-   Monolithic applications can also be difficult to scale when different modules have conflicting resource requirements.
-   Another problem with monolithic applications is reliability. Bug in any module (e.g. memory leak) can potentially bring down the entire process. Moreover, since all instances of the application are identical, that bug will impact the availability of the entire application.
-   Monolithic applications has a barrier to adopting new technologies. Since changes in frameworks or languages will affect an entire application it is extremely expensive in both time and cost.

#### Microservice

The idea is to split your application into a set of smaller, interconnected services instead of building a single monolithic application. The Microservice architecture pattern significantly impacts the relationship between the application and the database. Instead of sharing a single database schema with other services, each service has its own database schema. Mobile, desktop, web apps don't have direct access to services but they have access to API Gateway. It is responsible for tasks such as load balancing, caching, access control, API metering, and monitoring.

#### Benefits of Microservices Architecture

-   It tackles the problem of complexity by decomposing application into a set of manageable services which are much faster to develop, and much easier to understand and maintain.
-   It enables each service to be developed independently by a team that is focused on that service.
-   It reduces barrier of adopting new technologies since the developers are free to choose whatever technologies make sense for their service and not bounded to the choices made at the start of the project.
-   Microservice architecture enables each microservice to be deployed independently. As a result, it makes continuous deployment possible for complex applications.
-   Microservice architecture enables each service to be scaled independently.

#### Drawbacks of Microservices Architecture

-   Microservices architecture adding a complexity to the project just by the fact that a microservices application is a distributed system. You need to choose and implement an inter-process communication mechanism based on either messaging or RPC and write code to handle partial failure and take into account other fallacies of distributed computing.
-   Microservices has the partitioned database architecture. Business transactions that update multiple business entities in a microservices-based application need to update multiple databases owned by different services. Using distributed transactions is usually not an option and you end up having to use an eventual consistency based approach, which is more challenging for developers.
-   Testing a microservices application is also much more complex then in case of monolithic web application. For a similar test for a service you would need to launch that service and any services that it depends upon (or at least configure stubs for those services).
-   It is more difficult to implement changes that span multiple services. In a monolithic application you could simply change the corresponding modules, integrate the changes, and deploy them in one go. In a Microservice architecture you need to carefully plan and coordinate the rollout of changes to each of the services.
-   Deploying a microservices-based application is also more complex. A monolithic application is simply deployed on a set of identical servers behind a load balancer. In contrast, a microservice application typically consists of a large number of services. Each service will have multiple runtime instances. And each instance need to be configured, deployed, scaled, and monitored. In addition, you will also need to implement a service discovery mechanism. Manual approaches to operations cannot scale to this level of complexity and successful deployment a microservices application requires a high level of automation.

### Child process in nodejs

### Clustering NodeJS
