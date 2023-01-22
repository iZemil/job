# What is `NODE_ENV`?

`NODE_ENV` is an environment variable made popular by the express web server framework. When a node application is run, it can check the value of the environment variable and do different things based on the value.

For example, when we work on a project and there are production and development environments. We don't need to use caching in the development env. So we set

```bash
 NODE_ENV=development
```

and use the code below:

```js
let useCaching = true;

if (process.env.NODE_ENV === 'development') {
	useCaching = false;
} else {
	// if the project runs on production it will use caching.
}
```