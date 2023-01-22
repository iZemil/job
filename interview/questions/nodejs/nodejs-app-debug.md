# How to debug a NodeJS app?

**1. node-inspector:**

```
npm install -g node-inspector
```

then

```
node-debug app.js
```

**2. Debugging:**

-   Debugger
-   Node Inspector
-   Visual Studio Code
-   Cloud9
-   Brackets

**3. Profiling:**

```
1. node --prof ./app.js
2. node --prof-process ./the-generated-log-file
```

**4. Heapdumps:**

-   node-heapdump with Chrome Developer Tools

**5. Tracing:**

-   Interactive Stack Traces with TraceGL

**6. Logging:**

Libraries that output debugging information

-   Caterpillar
-   Tracer
-   scribbles

Libraries that enhance stack trace information

-   Longjohn