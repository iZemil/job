# Why is the result of comparing 2 similar objects `false`?

Objects in JavaScript are also known as "reference types", which means that when you assign an object to a variable, you are not creating a copy of the object, but a reference to the object. This means that multiple variables can refer to the same object in memory, and modifying the object through one variable will affect all variables that reference the same object.

```js
const a = {},
	  b = {};
a === b; // false
```

In JavaScript, the result of comparing two similar objects using the `==` or `===` operator is typically `false`, because these operators compare the references to the objects, rather than the contents of the objects themselves.
