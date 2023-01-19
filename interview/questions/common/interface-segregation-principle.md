# Interface Segregation Principle
Create highly specialized interfaces designed for a specific client. Customers should not be dependent on interfaces that they do not use.
```ts
interface ITodoList {
	items: ITodo[];
}

interface IWeatherList extends ITodoList {
	getWeather: () => void;
	getWeekForecast: () => void;
}

class TodoList implements IWeatherList {
	constructor(items: ITodo[]) {
		this.items = items;
	}
}
```

<details>
<summary>Example Solution</summary>

```ts
class TodoList implements ITodoList {}
```
</details>
