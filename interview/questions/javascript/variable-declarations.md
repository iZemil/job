# Explain difference var vs let vs const

- `var` is used to declare a variable. Variables declared with `var` are function-scoped, which means that they are only accessible within the function in which they are declared or within the global scope if they are declared outside of any function. Variables declared with `var` can be **reassigned** and **redeclared** within their scope.
- `let` - like `var`, `let` declares a variable, but it is block-scoped, which means that it is only accessible within the block in which it is declared. Variables declared with `let` can be **reassigned**, but they **cannot be redeclared** within their scope.
- `const`is similar to `let`, but it declares a constant variable, which means that the value **cannot be reassigned**.

Examples of the different variable declarations:
```js
v0; // ReferenceError: v0 is not defined
v1; // undefined, because hoisting
var v1 = 'var 1';
v1 = 1; // 1

// Task 1:
var v2 = 'var 2';
function fn1() {
	v2 = 'var fn1';
}
fn1();
v2; // ?; try to guess


l1; // ReferenceError: Cannot access 'l0' before initialization
let l1 = 'let 1';
l1 = 1; // 1

// Task 2:
let l2 = 'let 2';
function fn2() {
	let l2 = 'let fn2';
}
fn2();
l2; // ?; try to guess

const c1 = 'const 1';
c1 = 1; // TypeError: Assignment to constant variable
```

:::tip

In general, it is recommended to use `const` whenever possible to declare variables that will not be reassigned, and to use `let` for variables that will be reassigned.

:::