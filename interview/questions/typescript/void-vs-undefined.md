# Explain `void` vs `undefined`

In TypeScript, `void` is a type that represents the absence of a value (_the value is not important_).
```ts
function fnVoid(): void {
	let value;
	console.log('some logic with value');
}
```

The `void` type is used to indicate that a function does not return a value, or that a variable or expression has no value.
```ts
function fnUndefined(): undefined {
	let value;
	console.log('some logic with value');
	return value;
}
```