# Explain a ReactJS lifecycle

<img src="/img/reactjs-lifecycle.png" alt="ReactJS Lifecycle" />

The component lifecycle has three distinct lifecycle phases:

1.  **Mounting:** The component is ready to mount in the browser DOM. This phase covers initialization from `constructor()`, `getDerivedStateFromProps()`, `render()`, and `componentDidMount()` lifecycle methods.
2.  **Updating:** In this phase, the component gets updated in two ways, sending the new props and updating the state either from `setState()` or `forceUpdate()`. This phase covers `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()` and `componentDidUpdate()` lifecycle methods.
3.  **Unmounting:** In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes `componentWillUnmount()` lifecycle method.

It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows:

1.  **Render** The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.
2.  **Pre-commit** Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the `getSnapshotBeforeUpdate()`.
3.  **Commit** React works with the DOM and executes the final lifecycles respectively `componentDidMount()` for mounting, `componentDidUpdate()` for updating, and `componentWillUnmount()` for unmounting.

## React 16.3+ Lifecycle methods:

-   `getDerivedStateFromProps`: it invokes right before calling `render()` and is invoked on _every_ render. This exists for rare use cases where you need a derived state. Worth reading [if you need derived state](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html).
-   `componentDidMount`: Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
-   `shouldComponentUpdate`: Determines if the component will be updated or not. By default, it returns `true`. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
-   `getSnapshotBeforeUpdate`: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into `componentDidUpdate()`. This is useful to capture information from the DOM i.e. scroll position.
-   `componentDidUpdate`: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if `shouldComponentUpdate()` returns `false`.
-   `componentWillUnmount`: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.