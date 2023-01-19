# Why and how to use `never`?

The `never` type is used to represent values that are never expected to occur or that are not intended to be used, such as the result of a function that always throws an exception or an infinite loop that never returns. The `never` type is a useful way to express the absence of a value or the impossibility of a scenario, and it can help to prevent errors and improve code quality by indicating that a value or a function is not intended to be used or accessed.

```ts
function fail(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // ...
  }
}

let x: never = fail('Something went wrong');  // ok
let y: never = infiniteLoop();  // ok

let z: number = x;  // error: Type 'never' is not assignable to type 'number'
let w: string = x;  // error: Type 'never' is not assignable to type 'string'
```
