# What does async and defer refer in a script tag?

Without `async` or `defer`, the browser will run your script immediately, before rendering the elements. 
```html
<script src="myscript.js"></script>
```

## `async` script:

Downloads the script file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading. With async (asynchronous), the browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.
```html
<!-- Google Analytics is usually added like this -->
<script async src="https://google-analytics.com/analytics.js"></script>
```

## `defer` script:

Defer downloads the script file during HTML parsing and will only execute it after the HTML parser has completed. With defer, the browser will run your script when the page finished parsing.
```html
<script defer src="myscript.js"></script>
```
