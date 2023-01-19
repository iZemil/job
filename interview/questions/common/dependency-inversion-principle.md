# Dependency Inversion Principle
- Top-level modules should not depend on lower-level modules. Both types of modules should depend on abstractions.
- Abstractions should not depend on parts. Parts should depend on abstractions.

```ts
interface ITodo {}

abstract class DB {
	data: ITodo[];
	save: (data: ITodo[]) => void;
}

class LocalDB {
	saveTodos(items: ITodo[]) {
	    // ...logic
	}
}

class ExternalDB {
	saveTodos(items: ITodo[]) {
	    // ...logic
	}
}

class TodoListDB extends DB {
	data: ITodo[];

	save(db) {
		db.saveTodos(this.items);
	}
}
```

<details>
<summary>Example Solution</summary>

```ts
abstract class DB {
	save: <T>(data: T[]) => void;
}

class LocalDB extends DB {
	save(data) {
	    // logic
	}
}

class ExternalDB extends DB {
	save(data) {
	    // logic
	}
}

class TodoList {
	saveTodos(db: DB) {
		db.save(this.items);
	}
}
```
</details>
