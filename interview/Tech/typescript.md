---
sidebar_position: 2
---

# Typescript

---

#### What is TypeScript and why would I use it in place of JavaScript?

typings, error handling, type documentation, team coding

---

#### void vs any

---

#### Create fn with object argument and return string

---

#### Optional Properties

```ts
interface IPerson {
	name: string;
	midlename?: string;
}

type TPersonUdate = Partial<IPerson>;
```

---

#### Interfaces vs Types

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

---

#### Union types

---

#### Values of object type

---

#### Generics

---

### Function overloading typescript

TypeScript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type.

```typescript
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
	return a + b;
}
```
