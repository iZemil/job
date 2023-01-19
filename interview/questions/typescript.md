---
sidebar_position: 2
title: Typescript
---

# Typescript Questions

### What is TypeScript, and its benefits?

TypeScript is a programming language that is based on JavaScript, and it is designed to add optional static typing and other features to JavaScript. TypeScript is a typed superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code, and TypeScript adds additional features and syntax to the language.

Benefits of using TypeScript include:
- Static typing: TypeScript adds optional static typing to JavaScript, which allows you to specify the types of variables, function arguments, and return values. This can help to catch type-related errors at compile time, rather than at runtime, and it can make the code easier to understand and debug.
- Improved code completion: TypeScript provides improved code completion and IntelliSense in code editors and IDEs, which can help to make the code easier to write and navigate.
- Improved code documentation: TypeScript allows you to add type annotations and documentation comments to the code, which can help to make the code more self-explanatory and easier to understand.
- Improved code refactoring: TypeScript's static typing and improved code completion and IntelliSense can make it easier to refactor and modify the code, as it can help to catch errors and provide suggestions for alternatives.

:::info

TypeScript is particularly useful for projects with a large codebase or a team of developers. It can help to improve the quality and reliability of the code, and to make it easier to understand and maintain.

:::

### What is the typeof operator?

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

### What is `any` type?

...

### `void` vs `undefined`

In TypeScript, `void` is a type that represents the absence of a value. The `void` type is used to indicate that a function does not return a value, or that a variable or expression has no value.

On the other hand, `undefined` is a value that represents the absence of a value or a variable that has not been assigned a value. In JavaScript and TypeScript, `undefined` is a primitive value that represents the absence of a value or a variable that has not been assigned a value.

### What is `unknown` type?

The `unknown` type is used to represent values that are not known or that cannot be determined at compile time, such as values that are returned from external APIs or libraries, or values that are derived from user input or runtime calculations. The `unknown` type is more restrictive than the `any` type, as it requires explicit type assertions or type guards to narrow the type of the value before it can be used or accessed.

### Why and how to use `never`?

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

### Interfaces vs Types

-   different syntax

```ts
interface SetPoint {
	(x: number, y: number): void;
}

type SetPoint = (x: number, y: number) => void;

// extening
interface PartialPointX {
	x: number;
}
interface Point extends PartialPointX {
	y: number;
}

type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };
```

-   other type creation only with type:

```ts
// primitive
type Name = string;

// object
type PartialPointX = { x: number };
type PartialPointY = { y: number };

// map
type TMap = new Map<string, number>;

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];
```

-   Both can be implemented by classes
-   interface merging

```ts
interface Point {
	x: number;
}
interface Point {
	y: number;
}

const point: Point = { x: 1, y: 2 };
```

### What is abstract class and its purpose?

#TODO: diff with interface

It is a class that cannot be instantiated directly, and that is intended to be used as a base class for one or more derived classes. Abstract classes are used to define the common behavior and the shared structure of a group of related classes, and they provide a way to implement inheritance and polymorphism in TypeScript.

An abstract class is defined using the `abstract` keyword, and it can contain both abstract and concrete members. Abstract members are members that are declared but not implemented, and they must be implemented by the derived classes. Concrete members are members that are declared and implemented, and they can be used directly by the derived classes.

### What is enum and why to use?

`enum` is a way to define a set of related values that can be used to represent a specific set of choices or options. An `enum` is a named group of constants, and it allows you to create a set of named values that can be used to represent a specific set of choices or options.

The purpose of using an `enum` in TypeScript is to create a named group of constants that can be used to represent a specific set of choices or options. An `enum` can help to make the code more readable and maintainable by providing a clear and concise way to represent a set of related values, and it can help to enforce a consistent and standardized approach to using these values in the code.

An `enum` can also be used to create a set of related values that can be used as keys or indexes in an array or an object, or as arguments or parameters in a function or a method. An `enum` can be used to create a set of values that can be used in a more structured and organized way, and it can help to avoid errors and inconsistencies in the code.

### What is difference between enum vs const?

```ts
enum EColors {
	Red = 'red',
	Green = 'green',
	Blue = 'blue',
}

const COLORS = {
	Red: 'red',
	Green: 'green',
	Blue: 'blue',
} as const;
```

There are some differences between using an `enum` and a `const` object to define a set of related values in TypeScript:

-   **Naming:** An `enum` allows you to define a set of named values, while a `const` object allows you to define an object with a fixed set of properties and values. An `enum` can be easier to read and understand, as it provides a clear and concise way to represent a set of related values, while a `const` object can be more verbose and less intuitive, as it requires you to define the properties and values of the object explicitly.
-   **Values:** An `enum` assigns default values to its constants, which are typically numbers starting from `0`, but you can also specify custom values for the constants if needed. A `const` object does not assign any values to its properties, and you have to specify the values of the properties explicitly.
-   **Type compatibility:** An `enum` is a type in TypeScript, and it can be used as a type parameter, a type argument, a function return type, or a variable type. A `const` object is not a type in TypeScript, and it cannot be used in these contexts. Instead, you can use the type of the properties of a `const` object, or create an interface or a type alias to represent the structure of the object.

### What is 'as' syntax in TypeScript?

The `as` syntax in TypeScript is used to perform type assertions, which allow you to override the type of a value and tell the compiler that you know the type of the value more specifically. Type assertions are a way to provide additional type information to the compiler, and they can be useful when you want to narrow the type of a value or when you want to use a value in a context where the compiler cannot infer the correct type.

Type assertions can be used in two forms: the "angle-bracket" syntax, and the `as` syntax. The angle-bracket syntax uses the `<>` characters to enclose the type that you want to assert, and it is typically used for type assertions on primitive types. The `as` syntax uses the `as` keyword followed by the type that you want to assert, and it is typically used for type assertions on object types.

Here is an example of using the `as` syntax for type assertions in TypeScript:

```ts
let x: any = 'Hello';

let y = x as string;  // type of y is 'string'

let z: number = y as any;  // type of z is 'number'
```

Type assertions can be a useful technique in TypeScript, as they allow you to provide additional type information to the compiler and to override the type of a value when necessary. It is important to use type assertions appropriately, as they can affect the type safety and reliability of the code.

### Describe Unions and Intersection Types

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

### What is the 'implement' clause?

It is used to specify that a class or an object implements an interface or a class. An interface is a type that defines a set of properties, methods, and events that a class or an object must have or must implement. A class is a blueprint for creating objects, and it can define the structure and the behavior of the objects it creates.

### What is a decorator?

In TypeScript, decorators are a way to add additional behavior to classes, methods, properties, and other elements of the code. Decorators are functions that are invoked with a special syntax, and they can be used to modify or extend the behavior of the decorated element in various ways.

Decorators are typically used to add metadata or to implement cross-cutting concerns, such as logging, validation, or error handling. They can be applied to classes, methods, properties, accessors, parameters, or even local variables, and they can be defined and used in different ways.

Here is an example of using a decorator in TypeScript:
```ts
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`${propertyKey} method called with arguments: ${args}`);
    return originalMethod.apply(this, args);
  }

  return descriptor;
}

class MyClass {
  @log
  public method1(a: number, b: number): number {
    return a + b;
  }
}

const obj = new MyClass();
obj.method1(1, 2);  // logs: 'method1 method called with arguments: [1, 2]'
```

In this example, the `log` decorator is defined as a function that takes three parameters: the target object, the name of the decorated property, and the property descriptor. The decorator modifies the `value` property of the descriptor to wrap the original method in a logging function, and it returns the modified descriptor. The `@log` decorator is applied to the `method1` method of the `MyClass` class, and it logs the arguments of the method whenever it is called.

Decorators are a powerful and flexible feature of TypeScript that can be used to add additional behavior to the code, and they can be useful for implementing cross-cutting concerns and for creating reusable and modular code. It is important to use decorators appropriately to ensure that they do not interfere with the intended behavior of the code, and to make the code easy to understand and maintain.

### Tell about public vs private vs protected

In TypeScript, there are three access modifiers that can be used to control the visibility and accessibility of class members (fields and methods):

1.  `public`: Members that are marked as `public` are visible and accessible from anywhere within the class, as well as from outside the class. `public` is the default access modifier for class members, and it is not necessary to explicitly specify it.
2.  `private`: Members that are marked as `private` are visible and accessible only within the class where they are defined. They are not visible or accessible from outside the class.
3.  `protected`: Members that are marked as `protected` are visible and accessible within the class where they are defined, and they are also visible and accessible to derived classes (classes that inherit from the class where the members are defined).

Access modifiers in TypeScript can help to control the visibility and accessibility of class members, and they can help to make the code more modular, maintainable, and secure. It is important to use access modifiers appropriately to ensure that the code is organized and easy to understand, and to prevent unintended access to sensitive or private data.

### Function overloading typescript

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

### What is the use of the tsconfig.json?

The tsconfig.json file is a JSON format file where you may specify several options to inform the compiler how to compile a project. The presence of this file in the directory implies that it is the TypeScript project root.

### What is the declare Keyword in TypeScript?

The `declare` keyword in TypeScript is used to tell the compiler that a given symbol is already defined elsewhere, and that it should not try to generate any code for it. This is commonly used for ambient declarations, which are declarations that are not meant to be implemented, but rather to provide a type and/or shape for the code that is using them.

The `declare` keyword can be used to define variables, functions, classes, and other types of symbols, and it can be used in conjunction with other TypeScript features, such as interfaces and type aliases.

Here is an example of using the `declare` keyword in TypeScript:
```ts
declare const MY_CONSTANT: string;

console.log(MY_CONSTANT);  // 'Hello World'
```

In this example, the `MY_CONSTANT` variable is declared with the `declare` keyword, and it is assigned the type `string`. The compiler is told that the `MY_CONSTANT` variable is already defined elsewhere, and that it should not generate any code for it.

The `declare` keyword is commonly used in TypeScript for ambient declarations, and it can be useful for providing type information for code that is written in other languages, or for code that is defined in external libraries or modules. It can help to improve the type safety and reliability of the code, and to make it easier to understand and maintain.

### What are Mixins?

Mixins are a way to reuse a set of functions or properties in multiple classes, without using inheritance or composition. Mixins allow you to define a common behavior or functionality that can be shared by multiple classes, and they can be used to avoid duplication and to create more modular and flexible code.

To define a mixin in TypeScript, you can create a function or a class that contains the common behavior or functionality, and then use the `mixin` helper function to apply the mixin to one or more target classes. The `mixin` helper function creates a new class that combines the target class with the mixin, and it returns the resulting class.

Here is an example of using mixins in TypeScript:
```ts
function Timestamps<T extends new(...args: any[]) => {}>(Base: T) {
  return class extends Base {
    createdAt = new Date();
    updatedAt = new Date();
  };
}

class User {
  name: string;
  age: number;
}

const TimestampedUser = Timestamps(User);

const user = new TimestampedUser();
user.name = 'John';
user.age = 42;
console.log(user.createdAt);  // current date and time
console.log(user.updatedAt);  // current date and time
```

In this example, the `Timestamps` mixin is defined as a function that takes a `Base` class as a parameter, and it returns a new class that extends the `Base` class and adds the `createdAt` and `updatedAt` properties. The `TimestampedUser` class is created by applying the `Timestamps` mixin to the `User` class, and it combines the properties and methods of the `User` class with the `createdAt` and `updatedAt` properties of the mixin.

Mixins are a useful technique in TypeScript for reusing common behavior or functionality in multiple classes, and they can help to create more modular and flexible code. It is important to use mixins appropriately, as they can affect the inheritance hierarchy and the type compatibility of the code, and to make sure that the mixins do not interfere with the intended behavior of the code.

### What is Namespace and how to declare it?

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

### What are Generics?

In TypeScript, generics are a way to create flexible and reusable code that can work with multiple types. Generics allow you to define a function, class, interface, or type that can accept one or more type parameters, which represent the types of the arguments, properties, or other elements of the code.

Generics allow you to write code that is generic, or not tied to a specific type, and that can work with any type or a set of types that you specify. You can use generics to create functions, classes, interfaces, or types that are more flexible and adaptable, and that can be used in a variety of contexts and scenarios.

Here is an example of using generics in TypeScript:
```ts
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity('hello'));  // 'hello'
console.log(identity(42));       // 42

class MyClass<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const obj1 = new MyClass<string>('hello');
console.log(obj1.getValue());  // 'hello'

const obj2 = new MyClass<number>(42);
console.log(obj2.getValue());  // 42
```

Generics are a powerful and versatile feature of TypeScript that allow you to create flexible and reusable code that can work with multiple types, and they can be useful for creating generic functions, classes, interfaces, or types that can be used in a variety of contexts and scenarios. It is important to use generics appropriately to ensure that the code is well-typed and easy to understand and maintain.

### What are template literal types?

Template literal types are a useful way to enforce the type of a string literal or a string template expression, and they can help to prevent errors and improve code quality by ensuring that a string has the correct format or content. They are also a useful way to create more expressive and readable types, and to improve the readability and the maintainability of your code.

```ts
type Greeting = `Hello, ${'world'}!`;
type Name = `${'John'} ${'Doe'}`;

let greeting: Greeting = 'Hello, world!';  // ok
let name: Name = 'John Doe';  // ok

let x: Greeting = 'Hi, world!';  // error: Type '"Hi, world!"' is not assignable to type 'Greeting'
let y: Name = 'Jane Doe';  // error: Type '"Jane Doe"' is not assignable to type 'Name'
```

### What is conditional type and how to create?

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

### What utility types exist and their usage

TypeScript provides a set of utility types that can be used to create and manipulate types in a more expressive and flexible way. Some of the utility types provided by TypeScript are:

-   `Partial<T>`: This type creates a new type that represents the partial version of a type `T`. The partial version of a type has all the properties of the original type, but they are all optional. This type is useful for creating types that represent a subset of the properties of another type, or for creating types that can be used to partially update the properties of another type.
-   `Readonly<T>`: This type creates a new type that represents the read-only version of a type `T`. The read-only version of a type has all the properties of the original type, but they are all read-only. This type is useful for creating types that cannot be modified, and for creating types that can only be used for reading the properties of another type.
-   `Pick<T, K>`: This type creates a new type that represents a subset of the properties of a type `T`, selected by a set of keys `K`. This type is useful for creating types that represent a subset of the properties of another type, based on a specific set of keys.
-   `Omit<T, K>`: This type creates a new type that represents a subset of the properties of a type `T`, excluding a set of keys `K`. This type is useful for creating types that represent a subset of the properties of another type, excluding a specific set of keys.
-   `Record<K, T>`: This type creates a new type that represents an object with a set of keys `K` and values of type `T`. This type is useful for creating types that represent objects with a specific set of keys and values.
-   `Exclude<T, U>`: This type creates a new type that represents the set of values that are in a type `T` but not in a type `U`. This type is useful for creating types that represent the set of values that are in one type but not in another type.
-   `Extract<T, U>`: This type creates a new type that represents the set of values that are in a type `T` and also in a type `U`. This type is useful for creating types that represent the set of values that are in both types.
-   `ReturnType<T>`: This type creates a new type that represents the return type of a function or a method `T`. This type is useful for creating types that represent the return type of a function or a method.
-   `InstanceType<T>`: This type creates a new type that represents the instance type of a class or a constructor function `T`. This type is useful for creating types that represent the instance type of a class or a constructor function.  

These are some of the utility types provided by TypeScript, and they can be used to create and manipulate types in a more expressive and flexible way. It is important to understand the role and the use of these utility types in TypeScript, and to use them appropriately in your code.