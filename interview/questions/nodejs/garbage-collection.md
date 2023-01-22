# How Garbage collection works in NodeJS?

The V8 uses a scheme similar to the Java Virtual Machine and divides the memory into segments. The thing that wraps the scheme concept is known as Resident Set, which refers to the portion of memory occupied by a process that is held in the RAM.

-   **Stack**: Stores static data, method and function frames, primitive values, and pointers to stored objects. The stack is managed by the operating system.
-   **Heap**: Stores objects. Because everything in JavaScript is an object this means all dynamic data like arrays, closures, etc. The heap is the biggest block of memory and it's where Garbage Collection (GC) happens.
-   **Code Segment**: the actual code is being executed.

<img src="/img/garbage-collection.png" alt="Garbage Collection" />

Garbage collection frees up memory in the Heap used by objects that are no longer referenced from the Stack, either directly or indirectly. The goal is to create free space for creating new objects. Garbage collection is generational. Objects in the Heap are grouped by age and cleared at different stages.

**Mark-and-sweep algorithm:**

In JavaScript, the root is the global object. The garbage collector start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all reachable objects and collect all non-reachable objects.
