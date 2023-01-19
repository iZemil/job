# When to use Microtasks?

It's important to note again that most developers won't use microtasks much, if at all. They're a highly specialized feature of modern browser-based JavaScript development, allowing you to schedule code to jump in front of other things in the long set of things waiting to happen on the user's computer. _Abusing this capability will lead to performance problems._

The main reason to use microtasks is that: to ensure consistent ordering of tasks, even when results or data is available synchronously, but while simultaneously reducing the risk of user-discernible delays in operations.

1. One situation in which microtasks can be used to ensure that the ordering of execution is always consistent is when promises are used in one clause of an `if...else` statement (or other conditional statement), but not in the other clause. Consider code such as this:

```js
customElement.prototype.getData = (url) => {
	if (this.cache[url]) {
		this.data = this.cache[url];
		this.dispatchEvent(new Event('load'));
	} else {
		fetch(url)
			.then((result) => result.arrayBuffer())
			.then((data) => {
				this.cache[url] = data;
				this.data = data;
				this.dispatchEvent(new Event('load'));
			});
	}
};
```

The problem introduced here is that by using a task in one branch of the `if...else` statement (in the case in which the image is available in the cache) but having promises involved in the `else` clause, we have a situation in which the order of operations can vary; for example, as seen below.

```js
element.addEventListener('load', () => console.log('Loaded data'));
console.log('Fetching data…');
element.getData();
console.log('Data fetched');
```

Executing this code twice in a row gives the following results.

When the data is not cached:

```
Fetching data
Data fetched
Loaded data
```

When the data is cached:

```
Fetching data
Loaded data
Data fetched
```

Even worse, sometimes the element's `data` property will be set and other times it won't be by the time this code finishes running.

We can ensure consistent ordering of these operations by using a microtask in the `if` clause to balance the two clauses:

```js
customElement.prototype.getData = (url) => {
	if (this.cache[url]) {
		queueMicrotask(() => {
			this.data = this.cache[url];
			this.dispatchEvent(new Event('load'));
		});
	} else {
		fetch(url)
			.then((result) => result.arrayBuffer())
			.then((data) => {
				this.cache[url] = data;
				this.data = data;
				this.dispatchEvent(new Event('load'));
			});
	}
};
```

This balances the clauses by having both situations handle the setting of `data` and firing of the `load` event within a microtask (using `queueMicrotask()` in the `if` clause and using the promises used by `fetch()` in the `else` clause).

2. You can also use microtasks to collect multiple requests from various sources into a single batch, avoiding the possible overhead involved with multiple calls to handle the same kind of work.

The snippet below creates a function that batches multiple messages into an array, using a microtask to send them as a single object when the context exits.

```js
const messageQueue = [];

let sendMessage = (message) => {
	messageQueue.push(message);

	if (messageQueue.length === 1) {
		queueMicrotask(() => {
			const json = JSON.stringify(messageQueue);
			messageQueue.length = 0;
			fetch('url-of-receiver', json);
		});
	}
};
```
