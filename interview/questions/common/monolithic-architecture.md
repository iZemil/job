# What is monolithic architecture?

A monolithic architecture means that your app is written as one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources.

**Benefits of Monolithic Architecture:**
-  Simple to develop.
-  Simple to test. For example you can implement end-to-end testing by simply launching the application and testing the UI with Selenium.
-  Simple to deploy. You just have to copy the packaged application to a server.
-  Simple to scale horizontally by running multiple copies behind a load balancer.

**Drawbacks of Monolithic Architecture:**
-  This simple approach has a limitation in size and complexity.
-  Application is too large and complex to fully understand and made changes fast and correctly.
-  The size of the application can slow down the start-up time.
-  You must redeploy the entire application on each update.
-  Impact of a change is usually not very well understood which leads to do extensive manual testing.
-  Continuous deployment is difficult.
-  Monolithic applications can also be difficult to scale when different modules have conflicting resource requirements.
-  Another problem with monolithic applications is reliability. Bug in any module (e.g. memory leak) can potentially bring down the entire process. Moreover, since all instances of the application are identical, that bug will impact the availability of the entire application.
-  Monolithic applications has a barrier to adopting new technologies. Since changes in frameworks or languages will affect an entire application it is extremely expensive in both time and cost.

Monolithic Pros: The major advantage of the monolithic architecture is that most apps typically have a large number of cross-cutting concerns, such as logging, rate limiting, and security features such audit trails and DOS protection.

When everything is running through the same app, it’s easy to hook up components to those cross-cutting concerns.

There can also be performance advantages, since shared-memory access is faster than inter-process communication (IPC).

Monolithic cons: Monolithic app services tend to get tightly coupled and entangled as the application evolves, making it difficult to isolate services for purposes such as independent scaling or code maintainability.

Monolithic architectures are also much harder to understand, because there may be dependencies, side-effects, and magic which are not obvious when you’re looking at a particular service or controller.