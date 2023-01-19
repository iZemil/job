# Explain Mutable and Immutable values

Mutable can be changed or added to where immutable means something that cannot be changed or added.

Primitive values in JavaScript cannot have anything added upon to them, they can only be re-assigned, and hence all primitive values in JavaScript are immutable.

A few ways to create and use immutable objects in JavaScript:
1.  Use the `Object.freeze()` method: The `Object.freeze()` method can be used to create an immutable object by freezing the object's state. A frozen object cannot be modified, and any attempts to modify it will be ignored. However, it is important to note that the `Object.freeze()` method only freezes the top-level properties of the object, and it does not recursively freeze the object's nested properties.
2.  Use the `Object.seal()` method: The `Object.seal()` method can be used to create a sealed object, which is an object that cannot be modified or extended, but whose properties can be modified. A sealed object is similar to a frozen object, but it is not completely immutable.
3.  Use a library or framework: There are several libraries and frameworks that provide tools for creating and working with immutable objects in JavaScript. For example, the `Immutable.js` library provides a set of data structures that are designed to be immutable, and it provides a set of methods for working with these data structures.
4.  Use object copy pattern with spread operator, Object.assign, etc.

:::tip
In general, it is a good practice to use immutable values whenever possible, as they can help to make the code more predictable and easier to understand.
:::