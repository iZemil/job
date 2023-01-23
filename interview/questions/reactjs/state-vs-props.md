# What is the diff between state vs props?

The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.

## What is the State?

- The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.
- The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.

Implementation of **_stateful_** functional and class components:

```js
function FunctionExample() {
  const [str, setStr] = React.useState('Hello');
  
  return <input value={str} onChange={e => setStr(e.target.value)} />
}

class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      str: 'Hello',
    }
  }
  
  handleChange = (e) => {
    this.setState({
      str: e.target.value,
    });
  }
  
  render() {
    return <input value={this.state.str} onChange={this.handleChange} />
  }
}
```

## What is the Props?

- Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.
- Props provide a way to pass data from parent component to child component. Props are passed to the component in the same way as arguments are passed to a function.

```jsx
function FunctionExample(props) {
	const { children } = props;

	return <div>{children}</div>;
}

class ClassExample extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
	  const { children } = this.props;

	  return <div>{children}</div>;
  }
}

const Parent = () => {
	const [a, b] = ['Hello', 'World'];

	return <>
		<FunctionExample>{a}</FunctionExample>
		<ClassExample>{b}</ClassExample>
	</>
}

render(<Parent />)
```

