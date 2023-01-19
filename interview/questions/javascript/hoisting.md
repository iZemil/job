# What is hoisting in JavaScript?

Hoisting is the behavior of moving declarations to the top of a script or a function before code execution.

```js
fn1(); // 1
function fn1 () {
	return 1;
}

console.log(x); // undefined
var x = 1;

console.log(y); // ReferenceError: y is not defined
let y = 2;

new Person(); //  ReferenceError: Person is not defined
class Person {}
```
