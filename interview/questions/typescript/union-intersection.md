# Describe Unions and Intersection Types

In TypeScript, union types and intersection types are ways to specify multiple types for a single value.

A union type represents a value that can be of one of several types. Union types are denoted using the `|` character, and they allow you to specify that a value can be of multiple types. For example:

```ts
let x: string | number;

x = 'hello';  // valid
x = 42;       // valid
x = true;     // invalid
```

In this example, the `x` variable is declared as a union type of `string` and `number`, which means that it can hold a value of either type. The value of `x` can be set to a `string` or a `number`, but not to a `boolean` or any other type.

An intersection type represents a value that is of multiple types. Intersection types are denoted using the `&` character, and they allow you to specify that a value must be of multiple types. For example:

```ts
type User = {
  name: string;
  age: number;
};

type Admin = {
  role: string;
};

type SuperUser = User & Admin;

const user: SuperUser = {
  name: 'John',
  age: 42,
  role: 'admin'
};
```

In this example, the `User` and `Admin` types are defined, and they represent objects with different properties. The `SuperUser` type is defined as an intersection of `User` and `Admin`, which means that it represents an object that must have both the `name` and `age` properties of the `User` type, and the `role` property of the `Admin` type.