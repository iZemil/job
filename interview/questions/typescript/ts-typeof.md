# What is `typeof` operator?

The `typeof` returns a type of given value.
```ts
const h = "hello";

const w: typeof s = "world";

type TNumber = typeof 10;
```

This isn’t very useful for basic types, but combined with other type operators, you can use `typeof` to conveniently express many patterns.
```ts
const COLORS = {
	red: 'ff0000',
	green: '00ff00',
	blue: '0000ff',
} as const;

type TColors = keyof typeof COLORS;
```

For another example, let’s start by looking at the predefined type `ReturnType<T>`. It takes a _function type_ and produces its return type:
```ts
type Predicate = (x: unknown) => boolean;

type K = ReturnType<Predicate>; // K: boolean
```
