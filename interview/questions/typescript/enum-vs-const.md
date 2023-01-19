# What is difference between enum vs const?

```ts
enum EColors {
	Red = 'red',
	Green = 'green',
	Blue = 'blue',
}

const COLORS = {
	Red: 'red',
	Green: 'green',
	Blue: 'blue',
} as const;
```

There are some differences between using an `enum` and a `const` object to define a set of related values in TypeScript:

-   **Naming:** An `enum` allows you to define a set of named values, while a `const` object allows you to define an object with a fixed set of properties and values. An `enum` can be easier to read and understand, as it provides a clear and concise way to represent a set of related values, while a `const` object can be more verbose and less intuitive, as it requires you to define the properties and values of the object explicitly.
-   **Values:** An `enum` assigns default values to its constants, which are typically numbers starting from `0`, but you can also specify custom values for the constants if needed. A `const` object does not assign any values to its properties, and you have to specify the values of the properties explicitly.
-   **Type compatibility:** An `enum` is a type in TypeScript, and it can be used as a type parameter, a type argument, a function return type, or a variable type. A `const` object is not a type in TypeScript, and it cannot be used in these contexts. Instead, you can use the type of the properties of a `const` object, or create an interface or a type alias to represent the structure of the object.
