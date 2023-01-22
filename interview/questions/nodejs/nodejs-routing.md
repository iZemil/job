# How does routing work in NodeJS?

Routing defines the way in which the client requests are handled by the application endpoints. We define routing using methods of the Express app object that correspond to HTTP methods; for example, `app.get()` to handle `GET` requests and `app.post` to handle `POST` requests, `app.all()` to handle all HTTP methods and `app.use()` to specify middleware as the callback function.

These routing methods “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

```
app.METHOD(PATH, HANDLER)
```

**Where:**
-   app is an instance of express.
-   METHOD is an `HTTP request method`.
-   PATH is a path on the server.
-   HANDLER is the function executed when the route is matched.

```js
// GET method route
app.get('/', function (req, res) {
  res.send('GET request');
});

// POST method route
app.post('/login', function (req, res) {
  res.send('POST request');
});

// ALL method route
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
```