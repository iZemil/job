# What are error boundaries in React?

_Error boundaries_ are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

A class component becomes an error boundary if it defines a new lifecycle method called `componentDidCatch(error, info)` or `static getDerivedStateFromError()` :

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{"Something went wrong."}</h1>;
    }
    return this.props.children;
  }
}
```

After that use it as a regular component:
```jsx
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

## In which scenarios error boundaries do not catch errors?
    
Below are the cases in which error boundaries doesn't work:
1.  Inside Event handlers
2.  Asynchronous code using `setTimeout` or `requestAnimationFrame` callbacks
3.  During Server side rendering
4.  When errors thrown in the error boundary code itself

## What is the difference between try catch block and error boundaries?
    
Try catch block works with imperative code, whereas error boundaries are meant for declarative code to render on the screen.
    
For example, the try catch block used for below imperative code:
    
```jsx
try {
  showButton();
} catch (error) {
  // ...
}
```
    
Whereas error boundaries wrap declarative code as below:
    
```
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```
    
So if an error occurs in a `componentDidUpdate` method caused by a `setState` somewhere deep in the tree, it will still correctly propagate to the closest error boundary.