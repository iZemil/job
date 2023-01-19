# What is the `declare` keyword in TypeScript?

The `declare` keyword in TypeScript is used to tell the compiler that a given symbol is already defined elsewhere, and that it should not try to generate any code for it. This is commonly used for ambient declarations, which are declarations that are not meant to be implemented, but rather to provide a type and/or shape for the code that is using them.

The `declare` keyword can be used to define variables, functions, classes, and other types of symbols, and it can be used in conjunction with other TypeScript features, such as interfaces and type aliases.

Here is an example of using the `declare` keyword in TypeScript:
```ts
declare const MY_CONSTANT: string;

console.log(MY_CONSTANT);  // 'Hello World'
```

In this example, the `MY_CONSTANT` variable is declared with the `declare` keyword, and it is assigned the type `string`. The compiler is told that the `MY_CONSTANT` variable is already defined elsewhere, and that it should not generate any code for it.

The `declare` keyword is commonly used in TypeScript for ambient declarations, and it can be useful for providing type information for code that is written in other languages, or for code that is defined in external libraries or modules. It can help to improve the type safety and reliability of the code, and to make it easier to understand and maintain.