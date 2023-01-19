# What do Javascript types exist?

In JavaScript, there are **six primitive types**:

1.  `Number` represents numeric values.
```js
// different representions of value 256:
const num1 = 256; // integer Number
const num2 = 256.00; // float Number
const num3 = 0x100; // hexadecimal Number
const num4 = 2.56e2; // exponential Number

// with methods:
const num5 = Number('256');
const num6 = parseInt('256.123');
const num7 = parseFloat('256.00');

// special values:
const NAN = NaN;
const INFINITY = Infinity; // 1 / 0

// it's also valid syntax:
const oneMillion = 1_000_000;

typeof num1; // 'number'
```
2.  `String` represents a sequence of characters, or text. Strings can be enclosed in single or double quotes.
```js
const str1 = 'string';
const str2 = `${str1}`;
const str3 = String(true);

typeof str1; // 'string'
```
3.  `Boolean` represents a logical value, either true or false.
```js
const bool = true;

// all values are false:
const bool1 = false;
const bool2 = !bool;
const bool3 = !!bool1;
const bool4 = Boolean(0);
const bool5 = Boolean('');
const bool6 = Boolean(undefined);
const bool7 = Boolean(null);

typeof bool; // 'boolean'
```
4.  `null` represents a null value, which indicates an absence of a value or a null reference.
```js
const NULL = null;

typeof NULL; // 'object'
```
5.  `undefined` represents an undefined value, which indicates that a variable has been declared but has not been assigned a value.
```js
const UNDEFINED = undefined;

typeof UNDEFINED; // 'undefined'
```
6.  `Symbol` represents a unique, immutable value. Symbols are used as a way to create unique, hidden keys for object properties.
```js
const sym1 = Symbol('key');
const sym2 = Symbol('key');

sym1 !== sym2; // true

typeof sym1; // 'symbol'
```

In addition to these primitive types, JavaScript also has a number of object types, including arrays, functions, and objects.
```js
const arr = [];
const fn = () => {};
const obj = {};

typeof arr; // 'object'
typeof fn; // 'function'
typeof obj; // 'object'
```
