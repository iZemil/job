# Explain `any` vs `unknown`

In some situations, not all type information is available, or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the `any` type:
```ts
function fn(callback: any) {
	callback();
}
```

The `unknown` type is used to represent values that are not known or that cannot be determined at compile time, such as values that are returned from external APIs or libraries, or values that are derived from user input or runtime calculations. The `unknown` type is more restrictive than the `any` type, as it requires explicit type assertions or type guards to narrow the type of the value before it can be used or accessed.
```ts
function fn(callback: unknown) {
	if (typeof callback === 'function') {
		callback();
	}
}
```

Unlike `unknown`, variables of type `any` allow you to access arbitrary properties, even ones that don’t exist. These properties include functions and TypeScript will not check their existence or type:
```ts
const looselyTyped: any = 4;
looselyTyped.toFixed();

const strictlyTyped: unknown = 4;
strictlyTyped.toFixed(); // Error

let looselyTyped: any = {};
let d = looselyTyped.a.b.c.d;
```

:::tip

After all, remember that all the convenience of `any` comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript and you should try to avoid using `any` when not necessary.

:::