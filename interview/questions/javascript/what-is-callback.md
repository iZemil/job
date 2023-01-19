# What is a callback function?

Callback function is a function that can be used as arguments.

```js
function cb() {
	console.log('some cb');
}

[1, 2, 3].forEach(cb);
setInterval(cb, 1000);
```
