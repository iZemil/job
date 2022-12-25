# Issues

### what is the result

```js
var funcs = [];
for (var i = 0; i < 3; i++) {
	funcs[i] = function () {
		console.log('My value: ' + i);
	};
}

for (const f of funcs) {
	f();
}
```

And classical solution with closure:

```js
var funcs = [];
function createfunc(i) {
	return function () {
		console.log('My value: ' + i);
	};
}

for (var i = 0; i < 3; i++) {
	funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
	// and now let's run each one to see
	funcs[j]();
}
```

### Inheritance instanceof

```js
class Person {}

class Chief extends Person {}

class Programmer extends Person {}

const programmer = new Programmer();

console.log(programmer instanceof Person);
console.log(programmer instanceof Programmer);
console.log(programmer instanceof Object);
console.log(programmer instanceof Chief);
```

### How to create a private variable?

```js
function func() {
	const priv = 'secret code';
	return function () {
		return priv;
	};
}
var getPriv = func();
```

### Counter function as below

```js
const counter = Counter();
counter.inc();
counter.dec();

function Counter() {
	let count = 0;

	return {
		inc() {
			return (count += 1);
		},
		dec() {
			return (count -= 1);
		},
	};
}
```
