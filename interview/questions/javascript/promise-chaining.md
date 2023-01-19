# What is promise chaining

Promises can be chained together using the `then`, `catch`, `finally` methods, which allow developers to write sequential asynchronous code in a more readable and concise way.

```js
// pseudo code
fetch('https://google.com')
	.then(parseResult)
	.then(saveResult)
	.then(someOtherOperation)
	.catch(logError)
	.finally(logOperation);
```
