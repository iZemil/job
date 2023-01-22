# What is an abstract class?

It is a class that cannot be instantiated directly, and that is intended to be used as a base class for one or more derived classes. Abstract classes are used to define the common behavior and the shared structure of a group of related classes, and they provide a way to implement inheritance and polymorphism in TypeScript.

An abstract class is defined using the `abstract` keyword, and it can contain both abstract and concrete members. Abstract members are members that are declared but not implemented, and they must be implemented by the derived classes. Concrete members are members that are declared and implemented, and they can be used directly by the derived classes.

```ts
abstract class Entity {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	abstract getName(): string;

	getMeta() {
		return {
			id: this.id,
			name: this.title,
		}
	}
}

const entity1 = new Entity(1, 'entity'); // Cannot create an instance of an abstract class.

// instead of above
class Person extends Entity {
	constructor(id: number) {
		super(id, 'person')
	}

	getName() {
		return Person.name;
	}
}

const person1 = new Person(1);
```

## abstract classes vs interfaces

**Main differences:**
- abstract classes can contain real implementation with logic for methods
- and the implemented methods can refer to other methods that do not actually exist yet (you still have to provide names and types for the unimplemented methods)
- abstract classes are available at runtime, while interfaces are compiled time only. This means that you cannot, for example, use `instanceof` with interfaces.