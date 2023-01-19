# What is Namespace and how to declare it?

In TypeScript, a namespace is a way to organize and group related code under a single name. Namespaces allow you to define and expose a set of variables, functions, classes, and other types of symbols, and to prevent naming conflicts and collisions with other code.

To declare a namespace in TypeScript, you can use the `namespace` keyword followed by the name of the namespace, and then enclose the code that you want to include in the namespace within curly braces. You can define variables, functions, classes, and other types of symbols inside the namespace, and you can use the `export` keyword to expose them to other parts of the code.

Here is an example of declaring a namespace in TypeScript:
```ts
namespace MyNamespace {
  export const MY_CONSTANT = 'Hello World';

  export function myFunction(x: number, y: number): number {
    return x + y;
  }

  export class MyClass {
    public method1(): void {
      console.log('Method 1 called');
    }
  }
}

console.log(MyNamespace.MY_CONSTANT);  // 'Hello World'
console.log(MyNamespace.myFunction(1, 2));  // 3

const obj = new MyNamespace.MyClass();
obj.method1();  // logs: 'Method 1 called'
```

In this example, the `MyNamespace` namespace is defined with the `namespace` keyword, and it contains a constant, a function, and a class. The `MY_CONSTANT` constant, the `myFunction` function, and the `MyClass` class are exported from the namespace using the `export` keyword, which makes them available to other parts of the code. The `MY_CONSTANT` constant, the `myFunction` function, and the `MyClass` class can be accessed using the `MyNamespace` namespace name as a prefix.

Namespaces are a useful feature of TypeScript that allow you to organize and group related code under a single name, and they can help to prevent naming conflicts and collisions with other code. It is important to use namespaces appropriately to ensure that the code is well-organized and easy to understand and maintain.
