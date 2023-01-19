# What is NaN?

`NaN` is a special value that represents "Not a Number". It is used to indicate that a value is not a valid number, usually as the result of an invalid mathematical operation.

`NaN` is a type of value known as a "primitive value", along with other values such as `null`, `undefined`, and boolean values (`true` and `false`).

You can check if the value of a variable is `NaN` using the `isNaN()` function, which is a global function in JavaScript that returns `true` if the value is `NaN` and `false` if it is a valid number.

```js
const NAN = NaN;
const alsoNan = 'string' / 10;

NAN === alsoNan; // false
isNaN(NAN); // true
isNaN(alsoNan); // true
```
