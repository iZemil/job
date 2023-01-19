# How to clone an object?

In JavaScript, a "clone" is a copy of an object or an array. There are two main types of cloning: **shallow cloning** and **deep cloning**.

**Shallow cloning** creates a new object or array that contains the same values as the original object or array, but the new object or array does not contain copies of the nested objects or arrays. Instead, _it contains references to the original nested objects or arrays_. This means that if you modify a nested object or array in the cloned object or array, it will also be modified in the original object or array.

An example of shallow cloning:

```js
const original = {
	a: 1,
	b: { c: 3 }
};
const clone = Object.assign({}, original);
// const clone = { ...original }; // the same with spread;
clone.b.c = 4; // also modifies original.b.c

const arr = [{}, {}];
const arrClone = [...arr];
arr[0] === arrClone[0]; // the same reference to index 0
```

**Deep cloning** creates a completely new object or array that contains copies of all the nested objects and arrays, as well as the top-level object or array. This means that **if you modify a nested object or array in the cloned object or array, it will not be modified in the original object or array**.

An example of deep cloning:

```js
const original = {
	a: 1,
	b: { c: 3 }
};
const clone = JSON.parse(JSON.stringify(original));
clone.b.c = 4; // does not modify original.b.c

const arr = [{}, {}];
const arrClone = JSON.parse(JSON.stringify(arr));
arr[0] !== arrClone[0]; // different object references
```

:::caution

You should be careful using this way, because it can cause to lose data such as functions, Date, Infinity and other values. A better way to implement deep cloning is to use external libraries (for example, `lodash.cloneDeep`, or other recursive way of deep cloning libs).

:::