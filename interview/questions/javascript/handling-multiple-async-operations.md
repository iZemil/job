# How to handle multiple asynchronous operations?

There are several ways to handle multiple asynchronous operations in JavaScript:

1. **Callback functions**: it can be a simple way to handle multiple operations, but it can become unwieldy if there are a large number of requests or if the operations are nested.
```js
function delayedFn(ms, callback) {
	console.log('Start');
	if (ms < 1000) {
		callback('Too little time - It must be more than 1000 ms!');
	} else {
		setTimeout(() => {
			console.log('Finish');
			callback(null, ms);
		}, ms);
	}
};

delayedFn(900, (err, ms) => {
	if (err) {
		console.error('Error', err);
	} else {
		delayedFn(ms, (err, ms) => {
			if (err) {
				console.error('Error', err);
			} else {
				// try to do third nested callback
			}
		});
	}
});
```
2. **Promises**: they allow developers to chain together asynchronous operations in a more readable and concise way, and they provide a built-in mechanism for handling errors.
```js
function delayedFn(ms) {
	return new Promise((resolve, reject) => {
		console.log('Start')
	
		if (ms < 1000) {
			reject('Too little time - It must be more than 1000 ms!');
		} else {
			setTimeout(() => {
				console.log('Finish');
				resolve(ms);
			}, ms);
		}
	});
}

delayedFn(900)
	.then(ms => delayedFn(ms))
	.catch(err => console.error(err))
```
3. **Async/await**: The `async` and `await` keywords, introduced in ECMAScript 2017, provide a way to write asynchronous code in a synchronous style. This can make it easier to handle multiple asynchronous requests in a more readable and intuitive way.
```js
(async function() {
	const ms = 900;
	
	try {
		const result1 = await delayedFn(ms);
		const result2 = await delayedFn(result1);
	} catch(err) {
		console.error(err);
	}
})()
```
4. **Parallel execution**: If multiple requests can be made in parallel and the order of their completion does not matter:
 - `Promise.all()` function can be used to execute a group of promises in parallel and wait for all of them to complete. If one of them fullfills with error it will be a error:
	```js
(async function() {
	try {
		const [result1, result2] = await Promise.all([
			delayedFn(900),
			delayedFn(1000),
		]);

		console.log(`result1: ${result1.status} and result2: ${result2.status}`);
	} catch(err) {
		console.error(err);
	}
})()
```
- `Promise.allSettled()` - similiar with `Promise.all()` but returns all results and all errors:
```js
(async function() {
	const [result1, result2] = await Promise.allSettled([
		delayedFn(900),
		delayedFn(1000),
	]);

	console.log(`result1: ${result1.status} and result2: ${result2.status}`);
})()
```
- `Promise.race()`: fulfills when any of the promises fulfills; **rejects when any of the promises rejects**. It returns one promise.
```js
(async function() {
	try {
		const quickest = await Promise.race([
			delayedFn(900),
			delayedFn(1000),
		]);

		console.log(`quickest value: ${quickest}`);
	} catch(err) {
		console.error(err);
	}
})()
```
- `Promise.any()`: fulfills when any of the promises fulfills; **rejects when all of the promises reject**. It returns one promise.
```js
(async function() {
	try {
		const quickest = await Promise.any([
			delayedFn(900),
			delayedFn(1000),
		]);

		console.log(`rquickest value: ${quickest}`);
	} catch(err) {
		console.error(err);
	}
})()
```
