# What is the typeof operator?

It returns type of given value.
```ts
let h = "hello";

let w: typeof s = "world";
```

This isn’t very useful for basic types, but combined with other type operators, you can use `typeof` to conveniently express many patterns. For an example, let’s start by looking at the predefined type `ReturnType<T>`. It takes a _function type_ and produces its return type:
```ts
type Predicate = (x: unknown) => boolean;

type K = ReturnType<Predicate>; // K: boolean
```
