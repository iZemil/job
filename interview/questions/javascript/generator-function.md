# What is a Generator function?

A generator function is a special kind of function, that can be used to create an iterator, which is an object that produces a sequence of values one at a time, on demand. Generator functions are identified by the `*` symbol in their definition, and they use the `yield` keyword to produce values.

> Generator functions are useful for creating custom iterators, as well as for implementing the iterator and generator patterns. They can be used to create lazy sequences of values, where the values are only computed when they are needed, which can be more efficient and easier to work with than precomputing and storing all of the values in memory.

Here is an example of a generator function that produces a sequence of numbers:

```js
function* range(start, end) {
	for (let i = start; i <= end; i++) {
		yield i;
	}
}

for (let i of range(1, 5)) {
	console.log(i);
}
// logs: 1, 2, 3, 4, 5
```

Here is an example of a generator function that generates the Fibonacci sequence:

```js
function* fibonacci() {
  let a = 0, b = 1;
  
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let sequence = fibonacci();
sequence.next().value; // 0
sequence.next().value; // 1
sequence.next().value; // 1
sequence.next().value; // 2
```
