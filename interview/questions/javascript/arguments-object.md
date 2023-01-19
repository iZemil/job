# Explain  arguments object

The arguments object is **a local variable available within all non-arrow functions**. You can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0.

```js
function sum() {
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

sum(1, 2, 3, 4, 5); // 15
```
