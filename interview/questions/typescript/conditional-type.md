# What is conditional type and how to create?

Conditional types are a powerful and flexible way to create complex and dynamic types in TypeScript, and they can be used in a variety of scenarios to model the behavior and the structure of a type. They are particularly useful for creating generic types that can adapt to different types or conditions, and for creating types that can model the conditional behavior of a value or an expression.

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;  // type A is equal to true
type B = IsString<123>;  // type B is equal to false

type ToString<T> = T extends string ? T : string;

type C = ToString<'hello'>;  // type C is equal to 'hello'
type D = ToString<123>;  // type D is equal to string

type ToNumber<T> = T extends number ? T : number;

type E = ToNumber<'hello'>;  // type E is equal to number
type F = ToNumber<123>;  // type F is equal to 123
```
