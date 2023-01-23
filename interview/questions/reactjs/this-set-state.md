# Explain usage of `this.setState`

If you try to update the state directly, then it won't re-render the component.

```jsx
this.state.message = 'Hello world';
```

Instead, use `setState()` method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

```jsx
const message = "Hello World";

this.setState((prevMessage => ({ message })); // first way to update the state
this.setState({ message }); // second way to update the state
```

> You can directly assign to the state object either in *constructor* or using latest javascript's class field declaration syntax.

## What is the purpose of callback function as an argument of `setState()`?

The callback function is invoked when `setState` finished and the component gets rendered. Since `setState()` is **asynchronous,** the callback function is used for any post action.

:::tip

It is recommended to use the lifecycle method rather than this callback function.

:::

```jsx
this.setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'));
```
