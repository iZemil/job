# What are `Map` and `Set` objects?

`Map` is a collection of keyed values.
`Set` is a collection of unique values.

Iteration over `Map` and `Set` is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.

```js
const map = new Map([['key', 1], ['key2', 'value']]);
const set = new Set([1, 2, 2, 3]);
```
