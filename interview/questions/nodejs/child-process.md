# What is a child process in NodeJS?

In Node.js, the `child_process` module provides an API for creating and managing child processes. Child processes are separate instances of the Node.js runtime that can be spawned from a parent process. They can be used to run long-running tasks or processes in parallel with the parent process, or to execute command-line utilities or other external programs.

The `child_process` module provides four different methods for creating child processes:

1.  `spawn()`: Launches a new process and returns a ChildProcess object, which allows you to communicate with the child process using standard input, output, and error **streams**.
2.  `exec()`: Executes a command in a child process and buffers the output.
3.  `execFile()`: Executes a command in a child process, providing the option to specify the encoding for the output.
4.  `fork()`: Spawns a new Node.js process and returns a ChildProcess object, allowing the parent and child processes to communicate using inter-process communication (IPC).
