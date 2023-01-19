# What are `WeakMap` and `WeakSet` objects?

`WeakMap` is `Map` like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

`WeakSet` is `Set` like collection that stores only objects and removes them once they become inaccessible by other means.

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

```js
let obj = { value: 0 };
const list = [obj];
obj = null;
list[0]; // => saved obj in memory and not garbage collected

// but
let obj1 = { value: 0 };
const weakSet = new WeakSet(obj1);
obj1 = null; // weakSet obj1 will be garbage collected
```
