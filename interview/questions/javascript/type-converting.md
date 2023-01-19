# Explain type converting in JS

In JavaScript, type conversion refers to the process of converting a value from one data type to another. _There are explicit and implicit type conversions._

Examples of explicit type conversion, also known as type casting:
```js
console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(String(5)); // "5"
console.log(String(false)); // "false"

const num = 3.14159;
console.log(num.toString()); // "3.14159"
console.log(num.toFixed(2)); // "3.14"
console.log(num.toPrecision(4)); // "3.142"

const obj = {name: 'John', age: 30};
const jsonStr = JSON.stringify(obj); // "{name: 'John', age: 30}"
console.log(JSON.parse(jsonString)); // {name: 'John', age: 30}
```

Examples of implicit type conversion, also known as type coercion:
```js
// operator `+` to concat strings, numbers
console.log(5 + '5'); // "55"

// operator `==` to compare values of different types
console.log("5" == 5); // true
console.log("5" === 5); // false

// to boolean
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true

// to number
console.log(parseInt("123")); // 123
console.log(parseFloat("3.14")); 3.14
console.log('5' * 2); // 5
```

:::caution

It is important to note that type coercion can sometimes lead to unexpected behavior, so it's a good idea to be aware of it when working with JavaScript.

:::