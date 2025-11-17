# What is libuv?

**libuv** is a cross-platform C library that provides Node.js with its core event loop, asynchronous I/O operations, and thread pooling.

Here's a breakdown of its key responsibilities:

1.  The Event Loop: This is libuv's most famous feature. It's a single-threaded loop that constantly checks for completed tasks (like a file being read, a network request finishing, or a timer expiring) and executes the corresponding callbacks.

2.  Asynchronous I/O (Input/Output): For many operations, especially those involving the network (TCP/UDP, HTTP, DNS) or the filesystem, libuv provides non-blocking, asynchronous interfaces. When Node.js requests one of these operations, libuv hands it off to the operating system's most efficient async mechanism (like epoll on Linux, kqueue on macOS, or IOCP on Windows). This allows Node.js to continue executing other code without waiting.

3.  Thread Pool: While the Event Loop is single-threaded, not all tasks can be performed asynchronously at the OS level. For these "expensive" or blocking operations, libuv maintains a fixed-size thread pool (default of 4 threads).

    -   It offloads tasks like certain File System operations (fs.readFile), CPU-intensive crypto functions (crypto.pbkdf2), and DNS lookups (dns.lookup()) to this pool.
    -   This prevents the single-threaded Event Loop from being blocked by these heavy tasks.

4.  Abstracting OS Differences: Libuv provides a consistent API for Node.js across Windows, macOS, Linux, and other operating systems. Node.js developers don't need to worry about the underlying system's specific async I/O implementations; libuv handles it all.
