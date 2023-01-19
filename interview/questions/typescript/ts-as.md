# What is `as` syntax in TypeScript?

The `as` syntax in TypeScript is used to perform type assertions, which allow you to override the type of a value and tell the compiler that you know the type of the value more specifically. Type assertions are a way to provide additional type information to the compiler, and they can be useful when you want to narrow the type of a value or when you want to use a value in a context where the compiler cannot infer the correct type.

Type assertions can be used in two forms: the "angle-bracket" syntax, and the `as` syntax. The angle-bracket syntax uses the `<>` characters to enclose the type that you want to assert, and it is typically used for type assertions on primitive types. The `as` syntax uses the `as` keyword followed by the type that you want to assert, and it is typically used for type assertions on object types.

Here is an example of using the `as` syntax for type assertions in TypeScript:

```ts
let x: any = 'Hello';

let y = x as string;  // type of y is 'string'

let z: number = y as any;  // type of z is 'number'
```

Type assertions can be a useful technique in TypeScript, as they allow you to provide additional type information to the compiler and to override the type of a value when necessary. It is important to use type assertions appropriately, as they can affect the type safety and reliability of the code.