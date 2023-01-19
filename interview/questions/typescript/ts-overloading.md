# Function overloading typescript

Function overloading in TypeScript allows you to define multiple versions of a function with different types and numbers of parameters. This can be useful when you want to provide different behavior or functionality depending on the input to the function.

To define function overloading in TypeScript, you can use the `function` keyword followed by the name of the function, and then define multiple function signatures that specify the types and numbers of the parameters. The implementation of the function can vary depending on the signature that is matched.

Here is an example of function overloading in TypeScript:
```typescript
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  } else {
    throw new Error('Invalid arguments');
  }
}

console.log(add(1, 2));  // 3
console.log(add('Hello', ' world'));  // 'Hello world'
```
