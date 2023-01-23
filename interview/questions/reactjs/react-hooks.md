# Explain React Hooks

Hooks let you use more of React’s features without having to use classes. The first hook that you will most likely encounter is useState. useState is a Hook that lets you add React state to function components. It returns an array with a getter and a setter.

The syntax looks like

```jsx
const [count, setCount] = React.useState(0);

<button onClick={() => setCount(count + 1)}>Increase Count</button>;
```

The equivalent when using a class component would be.

```jsx
this.state = {
	count: 0,
};

<button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase Count</button>;
```

The next hook you will most likely encounter is useEffect. The Effect Hook lets you perform side effects in function components. By passing an empty array as the second argument to useEffect is equivalent to using componentDidMount. If you pass a value to the array it will only call the useEffect function when the value in the array updates.

```jsx
useEffect(() => {
	// do stuff when the component mounts
}, []);
```
