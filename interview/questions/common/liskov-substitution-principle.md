# Liskov Substitution Principle
If you have a function, that works for a base type, it should work for a derived type.

```ts
class TodoList {
	items: ITodo[];

	getAllItems() {
		return this.items;
	}

}

class PendingTodoList extends TodoList {
	constructor() {
		super();
	}
}
```

<details>
<summary>Example Solution</summary>

```ts
class PendingTodoList extends TodoList {
	getAllItems() {
		return this.items.filter(it => it.status === EStatus.pending);
	}
}
```
</details>
