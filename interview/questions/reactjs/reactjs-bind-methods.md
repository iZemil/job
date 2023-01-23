# How to bind methods in JSX callbacks?

There are 3 possible ways (except libraries, like `@bind` decorator) to achieve this:

1.  **Binding in Constructor:** In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

```jsx
class Foo extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('Click happened');
	}

	render() {
		return <button onClick={this.handleClick}>Click Me</button>;
	}
}
```

2.  **Public class fields syntax:** If you don't like to use bind approach then *public class fields syntax* can be used to correctly bind callbacks.

```jsx
handleClick = () => {
	console.log('this is:', this);
};

<button onClick={this.handleClick}>{'Click me'}</button>;
```

3.  **Arrow functions in callbacks:** You can use *arrow functions* directly in the callbacks.

```jsx
handleClick() {
	console.log('Click happened');
}

render() {
	return <button onClick={() => this.handleClick()}>Click Me</button>;
}
```

:::tip

If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with `.bind()` or *public class fields syntax* approach, considering performance.

:::
