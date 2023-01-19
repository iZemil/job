# What is the difference between attributes and properties?

In JavaScript, attributes and properties are both used to store data in an object or an element, but they have some important differences.

An attribute is a default value that is defined in the HTML code of an element, and it can be accessed using the `getAttribute()` method of the element. An attribute reflects the default value of an element, and it can be modified using the `setAttribute()` method.

A property is a value that is associated with an object or an element, and it can be accessed and modified using the dot notation (e.g., `object.property`) or the square bracket notation (e.g., `object['property']`). A property reflects the current state of an object or an element, and it is typically used to store data that is related to the object or element.

Here is an example that illustrates the difference between attributes and properties:

```js
<input type="text" id="input" value="Hello">

const input = document.getElementById('input');

console.log(input.getAttribute('value'));  // logs "Hello"
console.log(input.value);  // logs "Hello"

input.setAttribute('value', 'World');
console.log(input.getAttribute('value'));  // logs "World"
console.log(input.value);  // logs "Hello"

input.value = 'Hello';
console.log(input.getAttribute('value'));  // logs "World"
console.log(input.value);  // logs "Hello"
```

In this example, the `input` element has a `value` attribute with the default value "Hello". The `input` element also has a `value` property that reflects the current value of the element.

When the `getAttribute()` and `setAttribute()` methods are used, the `value` attribute is accessed and modified, while the `value` property remains unchanged. On the other hand, when the `value` property is modified using the dot notation, the `value` attribute.
