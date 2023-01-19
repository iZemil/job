## CSS

### What is the difference between "display: block" and "display: inline" in CSS?

### What is the difference between "display: inline-block" and "display: block" in CSS?

### What is the difference between "display: none" and "visibility: hidden" and "opacity: 0" in CSS?

display: none - hide element from view, but visibility/hidden make place empty.

The main difference between opacity and visibility is that "opacity" affects the transparency of the element and its children, while "visibility" only affects the visibility of the element.

### What CSS style type do you prefer and why?

className and css/scss/stylus/modules; inline styles; CSS-in-JS

## What is ReactJS, its pros and cons?

### Props vs State

- Props get passed to the component similar to function parameters
- State is managed within the component similar to variables declared within a function.

### What is Virtual DOM?

### What is JSX?

### Why is it used className, neither class in React?

### What is React Component?

### Controlled vs Uncontrolled components

A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

### Describe a React Lifecycle

### What is Redux and its principes?

### Differences between redux-saga and redux-thunk?

Both Redux Thunk and Redux Saga take care of dealing with side effects. In most of the scenarios, Thunk uses Promises to deal with them, whereas Saga uses Generators. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.

### Describe React Context API

### What is Ref and why to use it?

### What is SynteticEvent in React?

### Describe react routing

### Functional components vs Class components

### What is the problem with code below?

```js
this.setState({
	counter: this.state.counter + this.props.increment,
});
```

Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

```js
// Correct
this.setState((state, props) => ({
	counter: state.counter + props.increment
}));
```

### React useCallback vs useMemo?

- `useCallback` memoizes a function
- `useMemo` memoizes a computed value

```js
const fn = () => 42 // assuming expensive calculation here
const memoFn = useCallback(fn, [dep]) // (1)
const memoFnReturn = useMemo(fn, [dep]) // (2)
```

(1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time you invoke memoFn, that complex computation starts again.
(2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.

