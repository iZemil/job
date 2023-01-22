# What is libuv?

**libuv** is a cross-platform C library and the foundation of the NodeJS runtime with following features:

- It allows the CPU and other resources to be used simultaneously while still performing I/O operations, thereby resulting in efficient use of resources and network.
- It facilitates an event-driven approach wherein I/O and other activities are performed using callback-based notifications.
- It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming
- It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.