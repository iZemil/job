# What is daemon process?

A daemon is a program that runs in background and has no controlling terminal. They are often used to provide background services. For example, a web-server or a database server can run as a daemon.

When a daemon process is initialized:

-   It creates a child of itself and proceeds to shut down all standard descriptors (error, input, and output) from this particular copy.
-   It closes the parent process when the user closes the session/terminal window.
-   Leaves the child process running as a daemon.

**Daemonize Node.js process:**

-   [Forever](https://github.com/foreversd/forever)
-   [PM2](https://github.com/Unitech/pm2)
-   [Nodemon](https://github.com/remy/nodemon/)
-   [Supervisor](https://github.com/Supervisor/supervisor)
-   [Docker](https://github.com/docker)

**Example:** Using an instance of Forever from Node.js

```js
const forever = require("forever");

const child = new forever.Forever("your-filename.js", {
  max: 3,
  silent: true,
  args: [],
});

child.on("exit", this.callback);
child.start();
```