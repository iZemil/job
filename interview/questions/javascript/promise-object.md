# What is a Promise?

Promises are a language feature that allows developers to write asynchronous code in a synchronous style. They provide a way to handle asynchronous operations in a way that is easier to read.

```js
function delayedFn(ms) {
	return new Promise((resolve, reject) => {
		console.log('Running a promise with status: pending')
	
		if (ms < 1000) {
			reject('Too little time - It must be more than 1000 ms!');
		} else {
			setTimeout(() => resolve(ms), ms);
		}
	});
}

delayedFn(900)
	.then((ms) => console.log(`Promise with status: fulfilled; after: ${ms} ms!`))
	.catch(err => console.error('Promise with status: rejected and error', err))
	.finally(() => console.log('Always works!'))
```
