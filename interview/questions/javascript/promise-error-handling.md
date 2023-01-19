# How to handle promise errors?

Promises have a built-in mechanism for handling errors, known as the `rejection handler`. This allows developers to specify a separate callback function for handling rejected promises, rather than having to use the second argument of the `then()` method as a catch-all error handler.

```js
// promise way with .catch method
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

// try catch way:
async function handleDelayedFn(ms) {
	try {
		const result = await delayedFn(ms);
		
		console.log(`Promise with status: fulfilled; after: ${ms} ms!`);
	} catch(err) {
		console.error('Promise with status: rejected and error', err);
	} finally {
		console.log('Always works!');
	}
}
handleDelayedFn(900);
```
