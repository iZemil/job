# Explain `async` and`await` keywords

The `async` and `await` keywords are a newer syntax introduced in ECMAScript 2017 that allow developers to write asynchronous code in a synchronous style. They are based on promises and make it easier to write asynchronous code that is easier to read and understand.

```js
const returnNum = (num) => num;

async function asyncSum(a, b) {
	const result1 = await returnNum(a);
	const result2 = await returnNum(b);

	return result1 + result2;
}

asyncSum(1, 2); // Promise with result 3
```
