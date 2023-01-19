# Explain the diff Tasks vs Microtasks

A **task** is any JavaScript code which is scheduled to be run by the standard mechanisms such as initially starting to run a program, an event callback being run, or an interval or timeout being fired. These all get scheduled on the **task queue**.

Tasks get added to the task queue when:

-   A new JavaScript program or subprogram is executed (such as from a console, or by running the code in a `<script>` element) directly.
-   An event fires, adding the event's callback function to the task queue.
-   A timeout or interval created with `setTimeout()` or `setInterval()` is reached, causing the corresponding callback to be added to the task queue.

The event loop driving your code handles these tasks one after another, in the order in which they were enqueued. The oldest runnable task in the task queue will be executed during a single iteration of the event loop. After that, microtasks will be executed until the microtask queue is empty, and then the browser may choose to update rendering. Then the browser moves on to the next iteration of event loop.

**There are two key differences:**

1. Each time a task exits, the event loop checks to see if the task is returning control to other JavaScript code. If not, it runs all of the microtasks in the microtask queue. The microtask queue is, then, processed multiple times per iteration of the event loop, including after handling events and other callbacks.
2. If a microtask adds more microtasks to the queue by calling `queueMicrotask()`, those newly-added microtasks *execute before the next task is run*. That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added.