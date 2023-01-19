# Open-Closed Principle
Program entities (classes, modules, functions) must be open for extension, but not for modification.

Let's continue with `TodoList` class, check code below and try to refactor it according open-closed principle:

```ts
enum EStatus {
	pending,
	progress,
	completed,
}

interface ITodo {
	status: EStatus;
	// ...other todo fields
}

class TodoList {
	items: ITodo[];

	processTodos(status: EStatus) {
		for (const todo of this.items) {
			if (todo.status === EStatus.pending) {
				// ...logic1
			}
			if (todo.status === EStatus.progress) {
				// ...logic2
			}
			if (todo.status === EStatus.completed) {
				// ...logic3
			}
		}
	}
}
```

<details>
<summary>Example Solution</summary>

```ts
class TodoList {
    processTodos(status, cb) {
		for (const todo of this.items) {
			if (todo.status === status) {
				cb();
			}
		}
    }
}
```
</details>
