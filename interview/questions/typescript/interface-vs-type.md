# Interfaces vs Types

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
