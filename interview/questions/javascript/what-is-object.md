# What is an object?

In JavaScript, an object is a collection of key-value pairs that represent a single entity (where key is the name of a property or method). Objects are used to store and organize data, and to represent real-world entities in code.

```js
const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  // object method
  say(text) {
	  return `${this.name} said: ${text}`
  }
};

person.name; // John Doe, the same with person['name'];
person.say('hi'); // John Doe said: hi
```
