# What is Polymorphism?

Polymorphism is a fundamental concept in object-oriented programming (OOP) that refers to the ability of different objects to respond to the same method or property in different ways. In JavaScript, polymorphism can be achieved through a variety of techniques, including inheritance, method overriding, and function overloading.

-   Inheritance and method overriding allow different objects to respond to the same method in different ways at runtime. This is known as runtime polymorphism or dynamic polymorphism.
-   Function overloading allows multiple functions with the same name to be defined with different sets of arguments. This is known as compile-time polymorphism or static polymorphism.

Here is an example of polymorphism:

```ts
abstract class Shape {
	abstract get area(): number;
}

class Rectangle extends Shape {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		super();

		this.width = width;
		this.height = height;
	}

	get area() {
		return this.width * this.height;
	}
}

class Circle extends Shape {
	radius: number;

	constructor(radius: number) {
		super();

		this.radius = radius;
	}

	get area() {
		return Math.PI * this.radius * this.radius;
	}
}

const shapes = [new Rectangle(2, 4), new Circle(2)];
const areas = shapes.map((shape) => shape.area);
```
